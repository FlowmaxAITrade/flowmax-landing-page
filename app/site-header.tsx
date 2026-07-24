"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Moon, Sun } from "lucide-react";

const navigation = [
  ["产品能力", "/#product"],
  ["使用指南", "/guide"],
  ["常见问题", "/faq"],
  ["合作", "/partners"],
] as const;

function toggleTheme() {
  const root = document.documentElement;
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = nextTheme;
  root.style.colorScheme = nextTheme;
  window.localStorage.setItem("flowmax-theme", nextTheme);
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="siteHeader">
      <nav className="nav shell" aria-label="主导航">
        <Link className="brand" href="/" aria-label="Flowmax 首页" onClick={() => setMenuOpen(false)}>
          <span className="brandOrb" aria-hidden="true"><span /></span>
          <span className="brandName">Flowmax</span>
        </Link>
        <div className="navLinks">
          {navigation.map(([label, href]) => <a className={isActive(href) ? "active" : undefined} href={href} key={href}>{label}</a>)}
        </div>
        <div className="navActions">
          <button className="themeToggle" type="button" onClick={toggleTheme} aria-label="切换深浅色主题">
            <Sun className="themeIcon themeIconSun" size={15} strokeWidth={1.8} aria-hidden="true" />
            <Moon className="themeIcon themeIconMoon" size={15} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <a className="navCta" href="https://flowmax.com/" target="_blank" rel="noreferrer">打开 Flowmax <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" /></a>
          <button className="menuToggle" type="button" aria-label={menuOpen ? "关闭导航菜单" : "打开导航菜单"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
        </div>
      </nav>
      <div className={`mobileMenu ${menuOpen ? "isOpen" : ""}`} id="mobile-navigation">
        <div className="shell mobileMenuInner">
          {navigation.map(([label, href], index) => <a className={isActive(href) ? "active" : undefined} href={href} key={href} onClick={() => setMenuOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{label}<ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" /></a>)}
          <a className="mobileMenuCta" href="https://flowmax.com/" target="_blank" rel="noreferrer">开始使用 Flowmax <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" /></a>
        </div>
      </div>
    </header>
  );
}
