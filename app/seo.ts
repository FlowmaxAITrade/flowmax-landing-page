import type { Metadata } from "next";

export const SITE_NAME = "FlowMax";
export const SITE_URL = "https://www.flowmax.com";
export const OG_IMAGE_PATH = "/og-1200.jpg";

const previewRules = {
  "max-image-preview": "large" as const,
  "max-snippet": -1,
  "max-video-preview": -1,
};

export const publicRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    ...previewRules,
  },
  ...previewRules,
};

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: publicRobots,
    openGraph: {
      type: "website",
      locale: "zh_CN",
      url: path,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: "FlowMax AI 交易策略团队",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}
