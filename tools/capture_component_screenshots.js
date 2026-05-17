// Captures component screenshots from their html/index.html files.
// Usage: npm run capture-screenshots
//
// Output: assets/components/{slug}.png for each featured component.

const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

// Featured components to capture. Edit this list to change what gets screenshotted.
const FEATURED_COMPONENTS = [
  "primary-button-cta",
  "trust-logo-strip",
  "single-quote-testimonial",
  "countdown-timer",
  "savings-calculator",
  "hero-stack-cta",
];

const ROOT_DIR = path.resolve(__dirname, "..");
const COMPONENTS_DIR = path.join(ROOT_DIR, "components");
const OUTPUT_DIR = path.join(ROOT_DIR, "assets", "components");

async function captureComponent(browser, slug) {
  const htmlPath = path.join(COMPONENTS_DIR, slug, "html", "index.html");
  if (!fs.existsSync(htmlPath)) {
    console.warn(`Skipping ${slug}: ${htmlPath} not found`);
    return false;
  }
  const outputPath = path.join(OUTPUT_DIR, `${slug}.png`);
  const context = await browser.newContext({
    viewport: { width: 800, height: 400 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });
  // Brief settle for animations or font loading
  await page.waitForTimeout(300);
  // Find the component root and screenshot it; fall back to body
  const componentRoot = await page.$("section, main, .pbc, .tls, .sqt, .cdt, .sc, .hsc");
  if (componentRoot) {
    await componentRoot.screenshot({ path: outputPath, omitBackground: false });
  } else {
    await page.screenshot({ path: outputPath, omitBackground: false, fullPage: false });
  }
  await context.close();
  console.log(`Captured ${slug} -> ${path.relative(ROOT_DIR, outputPath)}`);
  return true;
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  const browser = await chromium.launch({ headless: true });
  let successCount = 0;
  try {
    for (const slug of FEATURED_COMPONENTS) {
      const ok = await captureComponent(browser, slug);
      if (ok) successCount++;
    }
  } finally {
    await browser.close();
  }
  console.log(`\nCaptured ${successCount} of ${FEATURED_COMPONENTS.length} components`);
  process.exit(successCount === FEATURED_COMPONENTS.length ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
