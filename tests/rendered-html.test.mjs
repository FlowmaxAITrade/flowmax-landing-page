import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished Flowmax landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>FlowMax｜创建和运行你的 AI 交易策略团队<\/title>/);
  assert.match(html, /创建和运行你的/);
  assert.match(html, /RESEARCH AGENT/);
  assert.match(html, /PM AGENT/);
  assert.match(html, /FORK &amp; VALIDATE/);
  assert.match(html, /SAFETY BY DESIGN/);
  assert.match(html, /切换深浅色主题/);
  assert.match(html, /ABOUT FLOWMAX/);
  assert.match(html, /Flowmax 核心团队拥有华尔街量化交易/);
  assert.match(html, /og-1200\.jpg/);
  assert.match(html, /name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":"SoftwareApplication"/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("redirects the retired classic route to the unified landing page", async () => {
  const response = await render("/legacy");
  assert.equal(response.status, 307);
  assert.equal(response.headers.get("location"), "http://localhost/");
});

test("serves the resource, partnership, and policy pages", async () => {
  for (const [pathname, expectedText] of [
    ["/guide", "从想法到可验证的 AI 交易工作流"],
    ["/faq", "常见问题"],
    ["/partners", "与 Flowmax 一起构建 AI 交易基础设施"],
    ["/legal/disclaimer", "免责声明"],
  ]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), new RegExp(expectedText));
  }
});

test("keeps the production design responsive and accessible", async () => {
  const [page, layout, css, header, legacyPage] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/legacy/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(header, /aria-label="主导航"/);
  assert.match(page, /aria-label="Flowmax AI 策略广场界面示意"/);
  assert.match(page, /<details/);
  assert.match(layout, /lang="zh-CN"/);
  assert.match(layout, /flowmax-theme/);
  assert.match(layout, /创建和运行你的 AI 交易策略团队/);
  assert.match(css, /@media \(max-width: 800px\)/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /--primary:\s*#66e351/);
  assert.match(css, /--background:\s*#0a0f0e/);
  assert.match(css, /\[data-theme="light"\]/);
  assert.match(css, /\.mobileMenu/);
  assert.match(header, /aria-controls="mobile-navigation"/);
  assert.match(header, /window\.localStorage\.setItem/);
  assert.match(legacyPage, /redirect\("\/"\)/);
});
