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
  assert.match(html, /<title>Flowmax — AI Agent 自动交易平台<\/title>/i);
  assert.match(html, /让 AI 接管市场研究、/);
  assert.match(html, /RESEARCH AGENT/);
  assert.match(html, /PM AGENT/);
  assert.match(html, /FORK &amp; VALIDATE/);
  assert.match(html, /SAFETY BY DESIGN/);
  assert.match(html, /切换深浅色主题/);
  assert.match(html, /ABOUT FLOWMAX/);
  assert.match(html, /Flowmax 核心团队拥有华尔街量化交易/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("redirects the retired classic route to the unified landing page", async () => {
  const response = await render("/legacy");
  assert.equal(response.status, 307);
  assert.equal(response.headers.get("location"), "http://localhost/");
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
  assert.match(layout, /AI Agent 自动交易平台/);
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
