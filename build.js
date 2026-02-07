const fs = require('fs');
const path = require('path');
const { transform } = require('lightningcss');

const srcFile = path.join(__dirname, 'src', 'css-filter-bright.css');
const distDir = path.join(__dirname, 'dist');

// Read source
const source = fs.readFileSync(srcFile, 'utf8');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Unminified — just normalize formatting
const { code: unminified } = transform({
  filename: 'css-filter-bright.css',
  code: Buffer.from(source),
  minify: false,
});

fs.writeFileSync(path.join(distDir, 'css-filter-bright.css'), unminified);

// Minified
const { code: minified } = transform({
  filename: 'css-filter-bright.css',
  code: Buffer.from(source),
  minify: true,
});

fs.writeFileSync(path.join(distDir, 'css-filter-bright.min.css'), minified);

console.log('Build complete:');
console.log(`  dist/css-filter-bright.css     ${unminified.length} bytes`);
console.log(`  dist/css-filter-bright.min.css ${minified.length} bytes`);
