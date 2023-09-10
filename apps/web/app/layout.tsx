import "@/styles/globals.css";

import { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "./providers";

const title = "Editor – Notion-style WYSIWYG editor";
const description =
  "Editor is a Notion-style WYSIWYG editor. Built with Tiptap.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@sova_original",
  },
  metadataBase: new URL("https://editor.sova.dev"),
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
