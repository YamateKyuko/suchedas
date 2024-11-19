import NavLinks from '../ui/nav/nav-links';
import styles from './nav.module.css';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header className={styles.header}>
        {/* <p>戻る</p> */}
        <button className={styles.return}></button>
        <span>
          <h1>Pacific</h1>
          <p>
            Public buses<br />
            Arrival<br />
            Consolidated<br />
            Informations<br />
            Finder<br />
            In<br />
            Cloud
          </p>
        </span>
        
        <details className={styles.details}>
          <summary className={styles.summary}>
          </summary>
          <NavLinks />
        </details>
        {/* <p>ハンバーガ</p> */}
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>
          本ページの内容は各社の関与したものではありません。<br />
          内容に関しては、各社ではなく開発へお願いします。
        </p>
      </footer>
    </>
  );
}