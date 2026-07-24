import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div><Link className="brand" href="/"><span className="brandOrb" aria-hidden="true"><span /></span><span className="brandName">Flowmax</span></Link><p>Build your AI analyst and strategy team.</p></div>
        <div><strong>资源</strong><a href="/guide">使用指南</a><a href="/faq">常见问题</a><a className="inlineIconLink" href="https://flowmax.com/" target="_blank" rel="noreferrer">打开产品 <ExternalLink size={12} strokeWidth={1.8} aria-hidden="true" /></a></div>
        <div><strong>合作</strong><a href="/partners">合作方式</a><a href="/partners#contact">发起咨询</a></div>
        <div><strong>法律与政策</strong><a href="/legal/cookies">Cookie 政策</a><a href="/legal/disclaimer">免责声明</a><a href="/legal/terms">使用条款</a></div>
      </div>
      <div className="shell footerBottom"><span>© 2026 Flowmax</span><span>AI Agent Automated Trading Platform</span><span>历史表现不代表未来结果。</span></div>
    </footer>
  );
}
