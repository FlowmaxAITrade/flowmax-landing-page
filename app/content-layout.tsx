import type { ReactNode } from "react";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

export default function ContentLayout({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <main><SiteHeader /><section className="contentHero"><div className="contentGlow" aria-hidden="true" /><div className="shell"><span className="sectionKicker">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div></section><section className="contentBody shell">{children}</section><SiteFooter /></main>;
}
