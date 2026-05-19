// Generates assets/hero.png, a 1200x630 hero composite for the README and GitHub social preview.
// Composites a title card with 3 embedded component screenshots using HTML/CSS rendered via Playwright.
//
// Usage: npm run capture-hero
//
// Re-run any time the title, tagline, or featured component selection changes.

const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const ROOT_DIR = path.resolve(__dirname, "..");
const COMPONENTS_DIR = path.join(ROOT_DIR, "assets", "components");
const OUTPUT_PATH = path.join(ROOT_DIR, "assets", "hero.png");

const FEATURED = [
  { slug: "primary-button-cta", label: "Primary Button CTA" },
  { slug: "savings-calculator", label: "Savings Calculator" },
  { slug: "single-quote-testimonial", label: "Single Quote Testimonial" },
];

function htmlTemplate() {
  // Read each component PNG as a base64 data URI so the HTML can render them
  // even when loaded from a file:// URL (no path resolution issues).
  const images = FEATURED.map(({ slug, label }) => {
    const imgPath = path.join(COMPONENTS_DIR, `${slug}.png`);
    if (!fs.existsSync(imgPath)) {
      throw new Error(`Missing component screenshot: ${imgPath}`);
    }
    const base64 = fs.readFileSync(imgPath).toString("base64");
    return { label, dataUri: `data:image/png;base64,${base64}` };
  });

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1200px; height: 630px; overflow: hidden; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; }

  .hero {
    width: 1200px;
    height: 630px;
    background: #0f172a;
    background-image:
      linear-gradient(rgba(30, 41, 59, 0.6) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30, 41, 59, 0.6) 1px, transparent 1px);
    background-size: 40px 40px;
    display: flex;
    flex-direction: column;
    color: #f1f5f9;
    padding: 60px;
  }

  .title-card {
    flex: 0 0 auto;
    margin-bottom: 48px;
  }

  .title-card h1 {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
    color: #f1f5f9;
  }

  .title-card p.tagline {
    font-size: 22px;
    font-weight: 400;
    color: #94a3b8;
    margin-bottom: 8px;
  }

  .title-card p.subtitle {
    font-size: 14px;
    font-weight: 400;
    color: #64748b;
  }

  .widget-strip {
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    min-height: 0;
  }

  .widget-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  .widget-card img {
    flex: 1 1 auto;
    max-height: 220px;
    width: 100%;
    object-fit: contain;
    border-radius: 8px;
  }

  .widget-card .label {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 500;
    color: #475569;
    text-align: center;
  }
</style>
</head>
<body>
  <div class="hero">
    <div class="title-card">
      <h1>Claude Skills Widgets</h1>
      <p class="tagline">65 patterns + 32 components for Claude Code</p>
      <p class="subtitle">Live previews at rampstack.co/showcase/widgets</p>
    </div>
    <div class="widget-strip">
      ${images.map(img => `
        <div class="widget-card">
          <img src="${img.dataUri}" alt="${img.label}">
          <div class="label">${img.label}</div>
        </div>
      `).join("")}
    </div>
  </div>
</body>
</html>`;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({
      viewport: { width: 1200, height: 630 },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    const html = htmlTemplate();
    await page.setContent(html, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    await page.screenshot({
      path: OUTPUT_PATH,
      type: "png",
      omitBackground: false,
      clip: { x: 0, y: 0, width: 1200, height: 630 },
    });

    await context.close();
    console.log(`Captured hero -> ${path.relative(ROOT_DIR, OUTPUT_PATH)}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
