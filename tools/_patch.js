'use strict';

/* 定点替换工具：node tools/_patch.js ops.json（apply_patch 无法修改既有文件时的替代方案） */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ops = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

for (const op of ops) {
  const target = path.resolve(ROOT, op.file);
  const current = fs.readFileSync(target, 'utf8');
  if (op.op === 'replace') {
    const count = current.split(op.find).length - 1;
    if (count !== 1) {
      console.error('replace 失败：' + op.file + ' 匹配 ' + count + ' 处（需恰好 1 处）');
      process.exit(2);
    }
    fs.writeFileSync(target, current.replace(op.find, op.replace), 'utf8');
    console.log('replace ' + op.file);
  } else {
    console.error('未知操作：' + op.op);
    process.exit(3);
  }
}
