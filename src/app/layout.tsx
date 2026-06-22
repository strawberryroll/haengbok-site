import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JoinCta from '@/components/ui/JoinCta';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  title: '행복한 교회',
  description:
    '행복한 교회에 오신 것을 환영합니다. 저희는 사랑과 희망을 나누는 공동체입니다.',
  openGraph: {
    title: '행복한 교회',
    description:
      '행복한 교회에 오신 것을 환영합니다. 저희는 사랑과 희망을 나누는 공동체입니다.',
    url: `${baseUrl}`,
    siteName: '행복한 교회',
    images: [
      {
        url: `${baseUrl}/images/church.jpeg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <JoinCta />
        <Footer />
      </body>
    </html>
  );
}
