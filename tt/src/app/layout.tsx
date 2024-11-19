import styles from './layout.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={styles.html}>
      <body className={styles.body}>
        {children}
      </body>
    </html>
  );
}
