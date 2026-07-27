import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { createPageMetadata, SITE_URL } from "./seo";
import "./globals.css";

const themeScript = `
  try {
    const storedTheme = localStorage.getItem("flowmax-theme");
    const systemTheme = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...createPageMetadata({
    title: "FlowMax｜创建和运行你的 AI 交易策略团队",
    description:
      "FlowMax 帮助你创建 AI 分析师与交易策略团队，结合市场研究、风险管理和执行流程，先在模拟环境中验证，再持续优化。",
    path: "/",
  }),
  applicationName: "FlowMax",
  icons: {
    icon: "/flowmax-logo-mark-dark.png",
    shortcut: "/flowmax-logo-mark-dark.png",
    apple: "/flowmax-logo-mark-light.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
