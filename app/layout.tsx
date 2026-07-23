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
  const imageUrl = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "Flowmax — 你的 AI 投资团队",
    description:
      "用 Research Agent 研究市场，用 PM Agent 组合信号、执行风险纪律，并在模拟盘中验证策略。",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Flowmax — 你的 AI 投资团队",
      description: "把研究、决策与风控组装成你的 AI 投资团队。",
      type: "website",
      images: [{ url: imageUrl, width: 1536, height: 1024, alt: "Flowmax AI 投资团队" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Flowmax — 你的 AI 投资团队",
      description: "Research → Decision → Discipline",
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
