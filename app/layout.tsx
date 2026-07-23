import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const imageUrl = new URL("/og-v2.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "Flowmax — AI Agent 自动交易平台",
    description:
      "创建、验证和 Fork AI 分析师与交易策略，让 AI 持续完成市场研究、风险管理与交易执行。",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Flowmax — AI Agent 自动交易平台",
      description: "创建、验证和 Fork AI 分析师与交易策略。",
      type: "website",
      images: [{ url: imageUrl, width: 1536, height: 1024, alt: "Flowmax AI Agent 自动交易平台" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Flowmax — AI Agent 自动交易平台",
      description: "Research → Strategy → Risk Control → Execution",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
