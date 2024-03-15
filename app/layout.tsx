import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kevin Sutandi',
  description: 'Kevin Sutandi Photography Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://use.typekit.net/weg3ijn.css'
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
