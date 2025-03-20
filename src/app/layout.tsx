import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

// import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
// import { baseOptions } from '@/app/layout.config';
// import { source } from '@/lib/source';
// import type { ReactNode } from 'react';
 
// export default function Layout({ children }: { children: ReactNode }) {
//   return (
//     <DocsLayout {...baseOptions} tree={source.pageTree}>
//       {children}
//     </DocsLayout>
//   );
// }