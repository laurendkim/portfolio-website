import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('../../public', import.meta.url));

// Appends a short content hash to a /public asset path so that replacing a
// file's contents (e.g. re-exporting cover.jpg) always busts client and CDN
// caches, regardless of Cache-Control max-age.
export function v(publicPath) {
  try {
    const bytes = readFileSync(publicDir + publicPath);
    const hash = createHash('md5').update(bytes).digest('hex').slice(0, 8);
    return `${publicPath}?v=${hash}`;
  } catch {
    return publicPath;
  }
}
