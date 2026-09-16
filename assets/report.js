/* 品牌资产库 · 报告阅读页：关键词高亮定位、页内查找、回到顶部 */

(function () {
  'use strict';

  var article = document.getElementById('report-article');
  var findInput = document.getElementById('rpt-find');
  var findBtn = document.getElementById('rpt-find-go');
  var toTop = document.getElementById('to-top');
  if (!article) return;

  function clearMarks() {
    var marks = article.querySelectorAll('mark.hit');
    for (var i = 0; i < marks.length; i++) {
      var m = marks[i];
      var parent = m.parentNode;
      if (!parent) continue;
      parent.replaceChild(document.createTextNode(m.textContent), m);
      parent.normalize();
    }
  }

  function highlightTerms(terms) {
    var clean = terms.map(function (t) { return String(t || '').trim(); }).filter(function (t) { return t.length > 0; });
    if (!clean.length) return 0;

    var walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var parent = node.parentNode;
        if (!parent) return NodeFilter.FILTER_REJECT;
        var tag = parent.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'MARK') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    var total = 0;

    nodes.forEach(function (node) {
      var text = node.nodeValue;
      var lower = text.toLowerCase();
      var ranges = [];
      clean.forEach(function (term) {
        var t = term.toLowerCase();
        var from = 0;
        var idx;
        while ((idx = lower.indexOf(t, from)) > -1) {
          ranges.push([idx, idx + t.length]);
          from = idx + t.length;
        }
      });
      if (!ranges.length) return;
      ranges.sort(function (a, b) { return a[0] - b[0]; });
      var merged = [];
      ranges.forEach(function (r) {
        var last = merged[merged.length - 1];
        if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
        else merged.push([r[0], r[1]]);
      });
      var frag = document.createDocumentFragment();
      var pos = 0;
      merged.forEach(function (r) {
        if (r[0] > pos) frag.appendChild(document.createTextNode(text.slice(pos, r[0])));
        var mark = document.createElement('mark');
        mark.className = 'hit';
        mark.textContent = text.slice(r[0], r[1]);
        frag.appendChild(mark);
        pos = r[1];
        total += 1;
      });
      if (pos < text.length) frag.appendChild(document.createTextNode(text.slice(pos)));
      node.parentNode.replaceChild(frag, node);
    });
    return total;
  }

  function firstHitAfterAnchor(anchorId) {
    var hits = article.querySelectorAll('mark.hit');
    if (!hits.length) return null;
    var anchor = anchorId ? document.getElementById(anchorId) : null;
    if (!anchor) return hits[0];
    for (var i = 0; i < hits.length; i++) {
      var pos = anchor.compareDocumentPosition(hits[i]);
      if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return hits[i];
    }
    return hits[0];
  }

  function focusHit(hit) {
    if (!hit) return;
    hit.classList.add('hit-flash');
    var top = hit.getBoundingClientRect().top + window.pageYOffset - 150;
    window.scrollTo({ top: top, behavior: 'smooth' });
    window.setTimeout(function () { hit.classList.remove('hit-flash'); }, 2000);
  }

  function applySearch(terms, anchorId) {
    clearMarks();
    var count = highlightTerms(terms);
    if (!count) return 0;
    focusHit(firstHitAfterAnchor(anchorId));
    return count;
  }

  /* 入口 1：从全局搜索跳转过来（?h=关键词#锚点） */
  (function fromQuery() {
    var params = new URLSearchParams(window.location.search);
    var raw = params.get('h');
    if (!raw) return;
    var terms = raw.split(/[\s,，、]+/).filter(Boolean);
    if (!terms.length) return;
    window.addEventListener('load', function () {
      var anchor = decodeURIComponent(window.location.hash.replace(/^#/, ''));
      applySearch(terms, anchor);
      if (findInput) findInput.value = raw;
    });
  })();

  /* 入口 2：页内查找 */
  function runFind() {
    if (!findInput) return;
    var terms = findInput.value.split(/[\s,，、]+/).filter(Boolean);
    if (!terms.length) { clearMarks(); return; }
    var count = applySearch(terms, null);
    if (!count) {
      findInput.style.borderColor = '#e5a3a3';
      window.setTimeout(function () { findInput.style.borderColor = ''; }, 1200);
    }
  }

  if (findBtn) findBtn.addEventListener('click', runFind);
  if (findInput) {
    findInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); runFind(); }
      if (e.key === 'Escape') { findInput.value = ''; clearMarks(); }
    });
  }

  /* 回到顶部 */
  if (toTop) {
    window.addEventListener('scroll', function () {
      toTop.classList.toggle('show', window.pageYOffset > 500);
    }, { passive: true });
    toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* 目录默认在长文里折叠，短报告保持展开 */
  var toc = article.querySelector('details.toc');
  if (toc && article.textContent.length > 12000) toc.removeAttribute('open');
})();
