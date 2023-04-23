import { Navbar } from 'features/navbar'
import styles from './Sidebar.module.scss'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <img
          className={styles.logo}
          src="/mt-erp-light.png"
          alt="logo"
        />
      </div>
      <nav className={styles.sidebar_navbar}>
        <Navbar />
      </nav>
      <div className={styles.sidebar_footer}>Sidebar Footer</div>
    </aside>
  )
}
