import playwright from 'playwright';
const { chromium } = playwright;
import { mkdir } from 'fs/promises';

const pages = [
  { path: '/', name: 'home' },
  { path: '/about/', name: 'about' },
  { path: '/projects/wifi-hammer/', name: 'wifi-hammer' },
  { path: '/guides/wifi-connected-no-internet/', name: 'guide-wifi-connected' }
];

const screenshotsDir = '/opt/cursor/artifacts';

await mkdir(screenshotsDir, { recursive: true });

const browser = await chromium.launch();

for (const page of pages) {
  console.log(`Taking screenshots of ${page.path}...`);
  
  // Desktop
  const desktopContext = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto(`http://localhost:4321${page.path}`);
  await desktopPage.waitForLoadState('networkidle');
  await desktopPage.waitForTimeout(1000);
  await desktopPage.screenshot({
    path: `${screenshotsDir}/${page.name}-desktop.png`,
    fullPage: true
  });
  await desktopContext.close();
  
  // Mobile
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(`http://localhost:4321${page.path}`);
  await mobilePage.waitForLoadState('networkidle');
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({
    path: `${screenshotsDir}/${page.name}-mobile.png`,
    fullPage: true
  });
  await mobileContext.close();
  
  console.log(`  ✓ ${page.name}-desktop.png`);
  console.log(`  ✓ ${page.name}-mobile.png`);
}

await browser.close();
console.log('\nAll screenshots saved to /opt/cursor/artifacts/');
