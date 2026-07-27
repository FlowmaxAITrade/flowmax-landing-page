import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "页面未找到｜FlowMax",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="siteShell contentPage notFoundPage">
      <section className="contentHero">
        <p className="eyebrow">404</p>
        <h1>这个页面暂时不存在</h1>
        <p>你访问的地址可能已变更、下线，或输入有误。可以返回首页继续浏览 FlowMax。</p>
        <Link className="button buttonPrimary" href="/">
          返回首页
        </Link>
      </section>
    </main>
  );
}
