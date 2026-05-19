// Generates assets/social-card.png, a 1280x640 PNG for the GitHub repo's social preview image.
// After generating, upload via repo Settings -> Social preview.
//
// Usage: npm run capture-social-card

const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const ROOT_DIR = path.resolve(__dirname, "..");
const OUTPUT_PATH = path.join(ROOT_DIR, "assets", "social-card.png");

function htmlTemplate() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1280px; height: 640px; overflow: hidden; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; }

  .card {
    width: 1280px;
    height: 640px;
    background: #0f172a;
    background-image:
      linear-gradient(rgba(30, 41, 59, 0.6) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30, 41, 59, 0.6) 1px, transparent 1px);
    background-size: 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f1f5f9;
    padding: 80px;
    text-align: center;
  }

  .card h1 {
    font-size: 72px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }

  .card .tagline {
    font-size: 28px;
    font-weight: 400;
    color: #94a3b8;
    margin-bottom: 60px;
  }

  .badges {
    display: flex;
    gap: 14px;
    flex-wrap: nowrap;
    justify-content: center;
    margin-bottom: 40px;
  }

  .badge {
    padding: 12px 22px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 500;
  }

  .badge.cta { background: rgba(30, 64, 175, 0.25); color: #93c5fd; }
  .badge.forms { background: rgba(124, 58, 237, 0.25); color: #c4b5fd; }
  .badge.proof { background: rgba(5, 150, 105, 0.25); color: #6ee7b7; }
  .badge.urgency { background: rgba(220, 38, 38, 0.25); color: #fca5a5; }
  .badge.tools { background: rgba(234, 88, 12, 0.25); color: #fdba74; }
  .badge.utility { background: rgba(71, 85, 105, 0.25); color: #cbd5e1; }

  .subtitle {
    font-size: 16px;
    color: #64748b;
    font-weight: 400;
  }
</style>
</head>
<body>
  <div class="card">
    <h1>Claude Skills Widgets</h1>
    <p class="tagline">65 patterns + 32 components for Claude Code</p>
    <div class="badges">
      <span class="badge cta">CTA &middot; 6</span>
      <span class="badge forms">Forms &middot; 4</span>
      <span class="badge proof">Proof &middot; 6</span>
      <span class="badge urgency">Urgency &middot; 3</span>
      <span class="badge tools">Tools &middot; 9</span>
      <span class="badge utility">Utility &middot; 4</span>
    </div>
    <p class="subtitle">Live previews at rampstack.co/showcase/widgets</p>
  </div>
</body>
</html>`;
}

async function main() {
  const outDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 640 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    await page.setContent(htmlTemplate(), { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    await page.screenshot({
      path: OUTPUT_PATH,
      type: "png",
      clip: { x: 0, y: 0, width: 1280, height: 640 },
    });
    await context.close();
    console.log(`Captured social card -> ${path.relative(ROOT_DIR, OUTPUT_PATH)}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
