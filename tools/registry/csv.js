'use strict';
// Minimal RFC4180-ish CSV parser with configurable delimiter (CORDIS uses ';' and "" escaping).
function* rows(text, delim = ';') {
  let i = 0, n = text.length, row = [], f = '';
  if (text.charCodeAt(0) === 0xfeff) i = 1;
  while (i < n) {
    const c = text[i];
    if (c === '"' && f === '') {
      i++;
      while (i < n) {
        if (text[i] === '"') { if (text[i + 1] === '"') { f += '"'; i += 2; continue; } i++; break; }
        f += text[i++];
      }
    } else if (c === delim) { row.push(f); f = ''; i++; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      i++; row.push(f); f = '';
      if (row.length > 1 || row[0] !== '') yield row;
      row = [];
    } else { f += c; i++; }
  }
  if (f !== '' || row.length) { row.push(f); yield row; }
}
function table(text, delim = ';') {
  const it = rows(text, delim); const h = it.next().value; const out = [];
  for (const r of it) { const o = {}; for (let k = 0; k < h.length; k++) o[h[k]] = r[k] === undefined ? '' : r[k]; out.push(o); }
  return out;
}
module.exports = { rows, table };
