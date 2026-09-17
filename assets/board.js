/* 品牌资产库 · 看板：三种视图、四维筛选、全局搜索、本地编辑 */

(function () {
  'use strict';

  var DATA = window.BAL_DATA || { brands: [], categories: [], stats: {} };
  var params = new URLSearchParams(window.location.search);
  var isLocalHost = /^https?:$/.test(window.location.protocol) &&
    /^(127\.0\.0\.1|localhost)$/.test(window.location.hostname);

  var state = {
    view: params.get('view') || 'gallery',
    sortDesc: params.get('sort') !== 'asc',
    filters: { categories: [], names: [], letters: [], updated: 'all' },
    editing: false,
    apiOnline: false,
  };

  if (['gallery', 'list', 'board'].indexOf(state.view) === -1) state.view = 'gallery';

  /* ---------------------------------------------------------------- */
  /* 工具                                                              */
  /* ---------------------------------------------------------------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function escapeRegExp(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function markText(text, q) {
    if (!q) return esc(text);
    var pattern = new RegExp(escapeRegExp(q), 'gi');
    return esc(text).replace(pattern, function (m) { return '<mark>' + m + '</mark>'; });
  }

  function catById(id) {
    for (var i = 0; i < DATA.categories.length; i++) {
      if (DATA.categories[i].id === id) return DATA.categories[i];
    }
    return null;
  }

  function tagHtml(cat) {
    if (!cat) return '<span class="tag" style="--tag-bg:#EDEDEF;--tag-fg:#6B6B72">未分类</span>';
    return '<span class="tag" style="--tag-bg:' + esc(cat.bg) + ';--tag-fg:' + esc(cat.fg) + '">' + esc(cat.name) + '</span>';
  }

  function tagsHtml(brand) {
    var ids = brand.categories || [];
    if (!ids.length) return tagHtml(null);
    return ids.map(function (id) { return tagHtml(catById(id)); }).join('');
  }

  function domainOf(url) {
    try { return String(url).replace(/^https?:\/\//, '').replace(/\/$/, ''); }
    catch (e) { return url; }
  }

  function brandTitle(brand) {
    return brand.name + (brand.nameCn ? ' ' + brand.nameCn : '');
  }

  function brandUrl(brand) { return 'reports/' + brand.slug + '.html'; }

  /* ---------------------------------------------------------------- */
  /* 筛选                                                              */
  /* ---------------------------------------------------------------- */

  function catCount(id) {
    return DATA.brands.filter(function (b) {
      var ids = b.categories || [];
      return id === '__none__' ? ids.length === 0 : ids.indexOf(id) > -1;
    }).length;
  }

  var letters = (function () {
    var set = {};
    DATA.brands.forEach(function (b) { set[b.letter || '#'] = true; });
    return Object.keys(set).sort();
  })();

  var CHIPS = [
    {
      key: 'categories',
      label: '品牌分类',
      options: function () {
        var opts = DATA.categories.map(function (c) {
          return { value: c.id, label: c.name, bg: c.bg, fg: c.fg };
        });
        opts.push({ value: '__none__', label: '未分类', bg: '#EDEDEF', fg: '#6B6B72' });
        return opts;
      },
    },
    {
      key: 'names',
      label: '品牌名称',
      options: function () {
        return DATA.brands.map(function (b) {
          return { value: b.slug, label: brandTitle(b) };
        }).sort(function (a, b) { return a.label.localeCompare(b.label, 'zh'); });
      },
    },
    {
      key: 'letters',
      label: '首字母',
      options: function () {
        return letters.map(function (l) { return { value: l, label: l }; });
      },
    },
    {
      key: 'updated',
      label: '更新时间',
      single: true,
      options: function () {
        return [
          { value: 'all', label: '全部时间' },
          { value: '7', label: '近 7 天更新' },
          { value: '30', label: '近 30 天更新' },
          { value: '90', label: '近 90 天更新' },
          { value: 'older', label: '90 天以前' },
        ];
      },
    },
  ];

  function selectedList(key) {
    if (key === 'updated') return state.filters.updated === 'all' ? [] : [state.filters.updated];
    return state.filters[key] || [];
  }

  function toggleFilter(key, value, single) {
    if (key === 'updated') {
      state.filters.updated = value;
      return;
    }
    var list = state.filters[key];
    var i = list.indexOf(value);
    if (i > -1) list.splice(i, 1); else list.push(value);
  }

  function matchesUpdated(brand) {
    var f = state.filters.updated;
    if (f === 'all') return true;
    var stamp = new Date((brand.updatedAt || '2000-01-01') + 'T00:00:00').getTime();
    var days = (Date.now() - stamp) / 86400000;
    if (f === 'older') return days > 90;
    return days <= Number(f);
  }

  function visibleBrands() {
    return DATA.brands.filter(function (b) {
      if (state.filters.categories.length) {
        var ids = b.categories || [];
        var hit = state.filters.categories.some(function (id) {
          return id === '__none__' ? ids.length === 0 : ids.indexOf(id) > -1;
        });
        if (!hit) return false;
      }
      if (state.filters.names.length && state.filters.names.indexOf(b.slug) === -1) return false;
      if (state.filters.letters.length && state.filters.letters.indexOf(b.letter || '#') === -1) return false;
      return matchesUpdated(b);
    }).sort(function (a, b) {
      var r = String(a.updatedAt || '').localeCompare(String(b.updatedAt || '')) ||
        String(a.name).localeCompare(String(b.name), 'en');
      return state.sortDesc ? -r : r;
    });
  }

  function hasActiveFilters() {
    return state.filters.categories.length || state.filters.names.length ||
      state.filters.letters.length || state.filters.updated !== 'all';
  }

  /* ---------------------------------------------------------------- */
  /* 筛选栏渲染                                                        */
  /* ---------------------------------------------------------------- */

  var chipsRoot = document.getElementById('chips');
  var openKey = null;
  var keepQuery = {};

  function renderChips() {
    chipsRoot.innerHTML = CHIPS.map(function (def) {
      var chosen = selectedList(def.key);
      var active = chosen.length > 0;
      var label = active
        ? def.label + ' · ' + chosen.map(function (v) {
          var opt = def.options().filter(function (o) { return o.value === v; })[0];
          return opt ? opt.label : v;
        }).join('、')
        : def.label;
      return '<div class="chip-wrap" style="position:relative">' +
        '<button type="button" class="chip' + (active ? ' active' : '') + '" data-chip="' + def.key + '">' +
        '<span class="chip-label">' + esc(label) + '</span>' +
        (active ? '<span class="chip-count">' + chosen.length + '</span>' : '') +
        '<span class="chip-caret">▾</span></button>' +
        (openKey === def.key ? dropdownHtml(def) : '') +
        '</div>';
    }).join('');
  }

  function dropdownHtml(def) {
    var chosen = selectedList(def.key);
    return '<div class="dropdown" data-dropdown="' + def.key + '">' +
      '<div class="dd-title">' + esc(def.label) + '（可多选，输入以筛选本列表）</div>' +
      '<input type="search" class="dd-search" data-dd-search="' + def.key + '" placeholder="搜索本分类选项…" autocomplete="off">' +
      '<ul class="dd-list" data-dd-list="' + def.key + '">' + dropdownItems(def, chosen, '') + '</ul>' +
      '</div>';
  }

  function dropdownItems(def, chosen, query) {
    var q = String(query || '').trim().toLowerCase();
    var items = def.options().filter(function (o) {
      return !q || String(o.label).toLowerCase().indexOf(q) > -1;
    });
    if (!items.length) return '<li class="dd-empty">没有匹配的选项</li>';
    return items.map(function (o) {
      var checked = chosen.indexOf(o.value) > -1;
      return '<li class="dd-item" data-dd-option="' + esc(o.value) + '" data-dd-key="' + def.key + '">' +
        '<input type="checkbox"' + (checked ? ' checked' : '') + ' tabindex="-1">' +
        (o.bg ? '<span class="tag" style="--tag-bg:' + esc(o.bg) + ';--tag-fg:' + esc(o.fg) + '">' + esc(o.label) + '</span>'
          : '<span>' + esc(o.label) + '</span>') +
        '</li>';
    }).join('');
  }

  chipsRoot.addEventListener('click', function (e) {
    var chip = e.target.closest('[data-chip]');
    if (chip) {
      var key = chip.getAttribute('data-chip');
      openKey = openKey === key ? null : key;
      renderChips();
      var search = chipsRoot.querySelector('.dd-search');
      if (search) search.focus();
      return;
    }
    var option = e.target.closest('[data-dd-option]');
    if (option) {
      var k = option.getAttribute('data-dd-key');
      var def = CHIPS.filter(function (d) { return d.key === k; })[0];
      toggleFilter(k, option.getAttribute('data-dd-option'), def && def.single);
      renderChips();
      render();
      var again = chipsRoot.querySelector('.dd-search');
      if (again) { again.value = keepQuery[k] || ''; again.focus(); }
    }
  });

  chipsRoot.addEventListener('input', function (e) {
    var input = e.target.closest('.dd-search');
    if (!input) return;
    var key = input.getAttribute('data-dd-search');
    keepQuery[key] = input.value;
    var def = CHIPS.filter(function (d) { return d.key === key; })[0];
    var list = chipsRoot.querySelector('[data-dd-list="' + key + '"]');
    if (def && list) list.innerHTML = dropdownItems(def, selectedList(key), input.value);
  });

  document.addEventListener('click', function (e) {
    if (!openKey) return;
    var path = e.composedPath ? e.composedPath() : [];
    if (path.indexOf(chipsRoot) > -1 || (e.target.closest && e.target.closest('#chips'))) return;
    openKey = null;
    renderChips();
  });

  /* ---------------------------------------------------------------- */
  /* 视图渲染                                                          */
  /* ---------------------------------------------------------------- */

  var viewRoot = document.getElementById('view-root');

  /* 封面：品牌可选 cover（高清场景图，满幅裁切），否则用 logo（contain 居中） */
  function coverHtml(b) {
    var src = b.cover || b.logo;
    if (src) return '<img src="' + esc(src) + '" alt="' + esc(brandTitle(b)) + '" loading="lazy" decoding="async">';
    return '<span class="cover-text">' + esc(b.name) + '</span>';
  }

  function cardHtml(b) {
    return '<article class="card">' +
      '<a class="card-stretched-link" href="' + brandUrl(b) + '" aria-label="' + esc(brandTitle(b)) + ' 品牌解读报告"></a>' +
      (state.editing ? '<button type="button" class="card-edit" data-edit-brand="' + esc(b.slug) + '">编辑资料</button>' : '') +
      '<div class="card-cover' + (b.cover ? ' photo' : '') + '">' + coverHtml(b) + '</div>' +
      '<div class="card-body">' +
      '<div class="card-title">' + esc(b.name) +
      (b.nameCn ? '<span class="card-title-cn">' + esc(b.nameCn) + '</span>' : '') + '</div>' +
      '<div class="card-tags">' + tagsHtml(b) + '</div>' +
      '<div class="card-tagline">' + esc(b.tagline || '') + '</div>' +
      '<div class="card-foot"><span>更新于 ' + esc(b.updatedAt || '—') + '</span>' +
      (b.website ? '<a href="' + esc(b.website) + '" target="_blank" rel="noopener">' + esc(domainOf(b.website)) + '</a>' : '') +
      '</div></div></article>';
  }

  function listRowHtml(b) {
    return '<tr>' +
      '<td class="cell-name"><a href="' + brandUrl(b) + '">' + esc(b.name) + '</a>' +
      (b.nameCn ? '<span class="cn">' + esc(b.nameCn) + '</span>' : '') + '</td>' +
      '<td><div class="card-tags">' + tagsHtml(b) + '</div></td>' +
      '<td class="cell-site">' + (b.website ? '<a href="' + esc(b.website) + '" target="_blank" rel="noopener">' + esc(domainOf(b.website)) + '</a>' : '—') + '</td>' +
      '<td class="cell-tagline">' + esc(b.tagline || '') + '</td>' +
      '<td class="cell-updated">' + esc(b.updatedAt || '—') + '</td>' +
      (state.editing ? '<td class="cell-edit"><button type="button" class="btn small ghost" data-edit-brand="' + esc(b.slug) + '">编辑</button></td>' : '') +
      '</tr>';
  }

  function listHtml(brands) {
    var cols = '<colgroup><col class="c-name"><col class="c-cat"><col class="c-site"><col class="c-tagline"><col class="c-update">' +
      (state.editing ? '<col class="c-edit">' : '') + '</colgroup>';
    var head = '<tr><th>品牌名称</th><th>分类</th><th>官网</th><th>一句话简介</th><th>更新时间</th>' +
      (state.editing ? '<th>资料</th>' : '') + '</tr>';
    return '<div class="view-list-wrap"><table class="view-list">' + cols +
      '<thead>' + head + '</thead><tbody>' + brands.map(listRowHtml).join('') + '</tbody></table></div>';
  }

  function kanbanCardHtml(b) {
    var src = b.cover || b.logo;
    var logo = src
      ? '<img src="' + esc(src) + '" alt="" loading="lazy" decoding="async">'
      : '<span class="cover-text">' + esc((b.name || '?').slice(0, 2)) + '</span>';
    return '<a class="kanban-card" href="' + brandUrl(b) + '" style="text-decoration:none;color:inherit">' +
      '<span class="kanban-logo' + (b.cover ? ' photo' : '') + '">' + logo + '</span>' +
      '<span class="kanban-info"><span class="kanban-card-name">' + esc(b.name) + '</span>' +
      '<span class="kanban-card-line">' + esc(b.tagline || '') + '</span></span></a>';
  }

  function kanbanHtml(brands) {
    var cols = DATA.categories.map(function (c) {
      return { id: c.id, name: c.name, bg: c.bg, brands: brands.filter(function (b) {
        return (b.categories || []).indexOf(c.id) > -1;
      }) };
    }).filter(function (col) { return col.brands.length; });
    var none = brands.filter(function (b) { return !(b.categories || []).length; });
    if (none.length) cols.push({ id: '__none__', name: '未分类', bg: '#B9B9BF', brands: none });
    if (!cols.length) return '<div class="empty-state">还没有可显示的看板列。</div>';
    return '<div class="view-board">' + cols.map(function (col) {
      return '<section class="kanban-col">' +
        '<header class="kanban-head"><span class="kanban-dot" style="background:' + esc(col.bg) + '"></span>' +
        '<span class="kanban-name">' + esc(col.name) + '</span>' +
        '<span class="kanban-count">' + col.brands.length + '</span></header>' +
        '<div class="kanban-body">' + col.brands.map(kanbanCardHtml).join('') + '</div></section>';
    }).join('') + '</div>';
  }

  function render() {
    var brands = visibleBrands();
    document.getElementById('views').querySelectorAll('button').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-view') === state.view);
    });
    document.getElementById('result-count').textContent = brands.length + ' / ' + DATA.brands.length + ' 个品牌';
    document.getElementById('clear-filters').hidden = !hasActiveFilters();
    document.getElementById('sort-toggle').textContent = '更新时间 ' + (state.sortDesc ? '↓' : '↑');

    viewRoot.className = '';
    if (!brands.length) {
      viewRoot.innerHTML = '<div class="empty-state">没有匹配的品牌，试试清除筛选条件。</div>';
      return;
    }
    if (state.view === 'gallery') {
      viewRoot.className = 'view-gallery';
      viewRoot.innerHTML = brands.map(cardHtml).join('');
    } else if (state.view === 'list') {
      viewRoot.innerHTML = listHtml(brands);
    } else {
      viewRoot.innerHTML = kanbanHtml(brands);
    }
  }

  document.getElementById('views').addEventListener('click', function (e) {
    var btn = e.target.closest('[data-view]');
    if (!btn) return;
    state.view = btn.getAttribute('data-view');
    var url = new URL(window.location.href);
    url.searchParams.set('view', state.view);
    window.history.replaceState({}, '', url);
    render();
  });

  document.getElementById('sort-toggle').addEventListener('click', function () {
    state.sortDesc = !state.sortDesc;
    render();
  });

  document.getElementById('clear-filters').addEventListener('click', function () {
    state.filters = { categories: [], names: [], letters: [], updated: 'all' };
    renderChips();
    render();
  });

  /* ---------------------------------------------------------------- */
  /* 全局搜索                                                          */
  /* ---------------------------------------------------------------- */

  var overlay = document.getElementById('search-overlay');
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var indexLoading = null;

  function loadScript(src) {
    return new Promise(function (resolve) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () { resolve(true); };
      s.onerror = function () { resolve(false); };
      document.head.appendChild(s);
    });
  }

  function loadIndex() {
    if (indexLoading) return indexLoading;
    indexLoading = (function () {
      if (window.BAL_SEARCH_MANIFEST) return Promise.resolve(window.BAL_SEARCH || {});
      return loadScript('data/search/manifest.js').then(function () {
        var list = window.BAL_SEARCH_MANIFEST || [];
        return Promise.all(list.map(function (slug) {
          return loadScript('data/search/' + slug + '.js');
        }));
      }).then(function () { return window.BAL_SEARCH || {}; });
    })();
    return indexLoading;
  }

  function matchBrand(b, q) {
    var hay = [b.name, b.nameCn, b.tagline, b.website].concat(b.aliases || []).join(' ').toLowerCase();
    return hay.indexOf(q) > -1;
  }

  function snippetFor(text, q) {
    var lower = text.toLowerCase();
    var pos = lower.indexOf(q);
    if (pos === -1) return text.slice(0, 150) + '…';
    var start = Math.max(0, pos - 78);
    var end = Math.min(text.length, pos + 130);
    return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
  }

  function contentResults(q) {
    var store = window.BAL_SEARCH || {};
    var out = [];
    Object.keys(store).forEach(function (slug) {
      var pack = store[slug];
      if (!pack || !pack.sections) return;
      pack.sections.forEach(function (sec) {
        var lower = sec.text.toLowerCase();
        var idx = lower.indexOf(q);
        if (idx === -1 && String(sec.title).toLowerCase().indexOf(q) === -1) return;
        var score = 0;
        if (String(sec.title).toLowerCase().indexOf(q) > -1) score += 100;
        score += Math.min(lower.split(q).length - 1, 12);
        out.push({
          slug: slug, brand: pack.brand, anchor: sec.anchor, section: sec.section,
          title: sec.title, text: sec.text, score: score,
        });
      });
    });
    return out.sort(function (a, b) { return b.score - a.score; }).slice(0, 24);
  }

  function runSearch(raw) {
    var q = String(raw || '').trim();
    if (!q) {
      searchResults.innerHTML = '<div class="search-empty">输入品牌名或报告关键词，例如「照明」「不锈钢」「决策链」「安装」。</div>';
      return;
    }
    var lower = q.toLowerCase();
    var brands = DATA.brands.filter(function (b) { return matchBrand(b, lower); });
    var contents = contentResults(lower);

    var html = '';
    if (brands.length) {
      html += '<div class="result-group-title">品牌</div>' + brands.map(function (b) {
        return '<a class="result" href="' + brandUrl(b) + '">' +
          '<span class="result-top"><span class="result-title">' + markText(brandTitle(b), q) + '</span>' +
          '<span class="result-brand">' + esc((b.categories || []).map(function (id) {
            var c = catById(id); return c ? c.name : '';
          }).filter(Boolean).join(' / ') || '未分类') + '</span></span>' +
          '<span class="result-snippet">' + markText(b.tagline || '', q) + '</span></a>';
      }).join('');
    }
    if (contents.length) {
      html += '<div class="result-group-title">报告内容</div>' + contents.map(function (r) {
        var label = r.section ? r.section + ' › ' + r.title : r.title;
        return '<a class="result" href="reports/' + r.slug + '.html?h=' + encodeURIComponent(q) + '#' + encodeURIComponent(r.anchor) + '">' +
          '<span class="result-top"><span class="result-title">' + markText(label, q) + '</span>' +
          '<span class="result-brand">' + esc(r.brand) + '</span></span>' +
          '<span class="result-snippet">' + markText(snippetFor(r.text, lower), q) + '</span></a>';
      }).join('');
    }
    if (!html) html = '<div class="search-empty">没有找到匹配「' + esc(q) + '」的品牌或内容。</div>';
    searchResults.innerHTML = html;
  }

  function openSearch(seed) {
    overlay.classList.remove('hidden');
    searchInput.value = seed || '';
    searchInput.focus();
    loadIndex().then(function () { runSearch(searchInput.value); });
  }

  function closeSearch() { overlay.classList.add('hidden'); }

  document.getElementById('search-open').addEventListener('click', function () { openSearch(''); });
  document.getElementById('search-overlay').addEventListener('click', function (e) {
    if (e.target === overlay) closeSearch();
  });

  var searchTimer = null;
  searchInput.addEventListener('input', function () {
    window.clearTimeout(searchTimer);
    var value = searchInput.value;
    searchTimer = window.setTimeout(function () { loadIndex().then(function () { runSearch(value); }); }, 130);
  });

  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      var first = searchResults.querySelector('.result');
      if (first) window.location.href = first.getAttribute('href');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeSearch(); closeModal(); }
    if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); openSearch(''); }
    if (e.key === '/' && document.activeElement !== searchInput) {
      if (/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) return;
      e.preventDefault();
      openSearch('');
    }
  });

  /* ---------------------------------------------------------------- */
  /* 本地编辑：分类管理 + 品牌资料                                      */
  /* ---------------------------------------------------------------- */

  var modal = document.getElementById('modal');
  var modalCard = document.getElementById('modal-card');
  var catPanel = document.getElementById('cat-panel');
  var editToggle = document.getElementById('edit-toggle');

  function api(path, payload) {
    return fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload || {}),
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (json) {
        if (!res.ok) throw new Error(json.error || ('请求失败（' + res.status + '）'));
        return json;
      });
    });
  }

  function reload(message) {
    if (message) window.alert(message);
    window.location.reload();
  }

  function openModal(html) {
    modalCard.innerHTML = html;
    modal.classList.remove('hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
    modalCard.innerHTML = '';
  }

  modal.addEventListener('click', function (e) {
    if (e.target === modal || e.target.closest('[data-modal-close]')) closeModal();
  });

  function renderCatList() {
    var root = document.getElementById('cat-list');
    root.innerHTML = DATA.categories.map(function (c, i) {
      var count = catCount(c.id);
      return '<div class="cat-row" data-cat="' + esc(c.id) + '">' +
        '<span class="kanban-dot" style="background:' + esc(c.bg) + '"></span>' +
        '<input type="text" value="' + esc(c.name) + '" data-cat-name="' + esc(c.id) + '">' +
        '<span class="count">' + count + ' 品牌</span>' +
        '<button type="button" class="icon-btn" data-cat-up="' + esc(c.id) + '"' + (i === 0 ? ' disabled' : '') + '>↑</button>' +
        '<button type="button" class="icon-btn" data-cat-down="' + esc(c.id) + '"' + (i === DATA.categories.length - 1 ? ' disabled' : '') + '>↓</button>' +
        '<button type="button" class="icon-btn" data-cat-del="' + esc(c.id) + '">✕</button>' +
        '</div>';
    }).join('');
  }

  catPanel.addEventListener('click', function (e) {
    var up = e.target.closest('[data-cat-up]');
    var down = e.target.closest('[data-cat-down]');
    var del = e.target.closest('[data-cat-del]');
    if (up || down) {
      var id = (up || down).getAttribute(up ? 'data-cat-up' : 'data-cat-down');
      var index = DATA.categories.findIndex(function (c) { return c.id === id; });
      var target = up ? index - 1 : index + 1;
      if (target < 0 || target >= DATA.categories.length) return;
      var order = DATA.categories.map(function (c) { return c.id; });
      order.splice(target, 0, order.splice(index, 1)[0]);
      api('/api/category', { action: 'reorder', order: order })
        .then(function () { reload(); })
        .catch(function (err) { window.alert(err.message); });
      return;
    }
    if (del) {
      var delId = del.getAttribute('data-cat-del');
      var cat = catById(delId);
      var affected = catCount(delId);
      var others = DATA.categories.filter(function (c) { return c.id !== delId; });
      openModal('<h3>删除分类「' + esc(cat.name) + '」</h3>' +
        '<p style="font-size:13.5px;color:#55555e;line-height:1.8">该分类下有 <b>' + affected +
        '</b> 个品牌。删除后这些品牌会改派到你选择的分类；选择「未分类」则保留为未分类状态。</p>' +
        '<div class="field"><label>改派到</label><select id="reassign">' +
        '<option value="">未分类</option>' +
        others.map(function (c) { return '<option value="' + esc(c.id) + '">' + esc(c.name) + '</option>'; }).join('') +
        '</select></div>' +
        '<div class="modal-actions"><button type="button" class="btn ghost" data-modal-close>取消</button>' +
        '<button type="button" class="btn dark" id="confirm-del">删除分类</button></div>');
      document.getElementById('confirm-del').addEventListener('click', function () {
        var targetCat = document.getElementById('reassign').value;
        api('/api/category', { action: 'delete', id: delId, reassignTo: targetCat })
          .then(function () { reload(); })
          .catch(function (err) { window.alert(err.message); });
      });
    }
  });

  catPanel.addEventListener('change', function (e) {
    var input = e.target.closest('[data-cat-name]');
    if (!input) return;
    api('/api/category', { action: 'rename', id: input.getAttribute('data-cat-name'), name: input.value })
      .then(function () { reload(); })
      .catch(function (err) { window.alert(err.message); });
  });

  document.getElementById('cat-add').addEventListener('click', function () {
    var input = document.getElementById('cat-new-name');
    if (!input.value.trim()) { window.alert('请先填写分类名称。'); return; }
    api('/api/category', { action: 'create', name: input.value.trim() })
      .then(function () { reload(); })
      .catch(function (err) { window.alert(err.message); });
  });

  document.getElementById('cat-close').addEventListener('click', function () {
    catPanel.classList.add('hidden');
  });

  function openBrandEditor(slug) {
    var b = DATA.brands.filter(function (x) { return x.slug === slug; })[0];
    if (!b) return;
    var chosen = (b.categories || []).slice();
    openModal('<h3>编辑品牌资料 · ' + esc(b.name) + '</h3>' +
      '<div class="field"><label>显示名称</label><input type="text" id="f-name" value="' + esc(b.name) + '"></div>' +
      '<div class="field"><label>中文名 / 副名</label><input type="text" id="f-name-cn" value="' + esc(b.nameCn || '') + '"></div>' +
      '<div class="field"><label>官网</label><input type="url" id="f-website" value="' + esc(b.website || '') + '" placeholder="https://"></div>' +
      '<div class="field"><label>一句话简介（做什么的）</label><textarea id="f-tagline">' + esc(b.tagline || '') + '</textarea></div>' +
      '<div class="field"><label>品牌分类（可多选）</label><div class="check-list" id="f-cats">' +
      DATA.categories.map(function (c) {
        var on = chosen.indexOf(c.id) > -1;
        return '<label class="check-item' + (on ? ' checked' : '') + '" data-cat-check="' + esc(c.id) + '">' +
          '<input type="checkbox"' + (on ? ' checked' : '') + ' value="' + esc(c.id) + '">' + esc(c.name) + '</label>';
      }).join('') + '</div></div>' +
      '<div class="modal-actions"><span class="spacer" style="font-size:12px;color:#8b8b94">报告文件：' + esc(b.report || '—') + '</span>' +
      '<button type="button" class="btn ghost" data-modal-close>取消</button>' +
      '<button type="button" class="btn dark" id="f-save">保存</button></div>');

    modalCard.querySelectorAll('[data-cat-check]').forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        var id = item.getAttribute('data-cat-check');
        var box = item.querySelector('input');
        var i = chosen.indexOf(id);
        if (i > -1) chosen.splice(i, 1); else chosen.push(id);
        box.checked = i === -1;
        item.classList.toggle('checked', i === -1);
      });
    });

    document.getElementById('f-save').addEventListener('click', function () {
      api('/api/brand', {
        slug: b.slug,
        patch: {
          name: document.getElementById('f-name').value.trim(),
          nameCn: document.getElementById('f-name-cn').value.trim(),
          website: document.getElementById('f-website').value.trim(),
          tagline: document.getElementById('f-tagline').value.trim(),
          categories: chosen,
        },
      }).then(function () { reload(); })
        .catch(function (err) { window.alert(err.message); });
    });
  }

  viewRoot.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-edit-brand]');
    if (!btn) return;
    e.preventDefault();
    openBrandEditor(btn.getAttribute('data-edit-brand'));
  });

  editToggle.addEventListener('click', function () {
    if (catPanel.classList.contains('hidden')) {
      renderCatList();
      catPanel.classList.remove('hidden');
    } else {
      catPanel.classList.add('hidden');
    }
  });

  /* 检测本地编辑接口：仅 127.0.0.1 / localhost 下尝试 */
  function detectLocalApi() {
    if (!isLocalHost) return;
    fetch('/api/health').then(function (res) {
      if (!res.ok) return;
      state.apiOnline = true;
      state.editing = true;
      editToggle.hidden = false;
      render();
    }).catch(function () { /* 静态托管环境忽略 */ });
  }

  renderChips();
  render();
  detectLocalApi();
})();
