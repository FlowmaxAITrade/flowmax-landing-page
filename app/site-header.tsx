"use client";

import { useState } from "react";

const navigation = [
  ["产品能力", "#product"],
  ["工作原理", "#workflow"],
  ["安全风控", "#safety"],
  ["About Us", "#about"],
  ["使用帮助", "#faq"],
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

  return (
    <header className="siteHeader">
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="Flowmax 首页" onClick={() => setMenuOpen(false)}>
          <span className="brandOrb" aria-hidden="true">
            <span />
          </span>
          <span className="brandName">Flowmax</span>
        </a>

        <div className="navLinks">
          {navigation.map(([label, href], index) => (
            <a className={index === 0 ? "active" : undefined} href={href} key={href}>
              {label}
            </a>
          ))}
        </div>

        <div className="navActions">
          <button className="themeToggle" type="button" onClick={toggleTheme} aria-label="切换深浅色主题">
            <span className="themeIcon themeIconSun" aria-hidden="true">☀</span>
            <span className="themeIcon themeIconMoon" aria-hidden="true">◐</span>
          </button>
          <a className="navCta" href="https://flowmax.com/" target="_blank" rel="noreferrer">
            打开 Flowmax <span>↗</span>
          </a>
          <button
            className="menuToggle"
            type="button"
            aria-label={menuOpen ? "关闭导航菜单" : "打开导航菜单"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobileMenu ${menuOpen ? "isOpen" : ""}`} id="mobile-navigation">
        <div className="shell mobileMenuInner">
          {navigation.map(([label, href], index) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {label}
              <i>↘</i>
            </a>
          ))}
          <a className="mobileMenuCta" href="https://flowmax.com/" target="_blank" rel="noreferrer">
            开始使用 Flowmax <span>↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
