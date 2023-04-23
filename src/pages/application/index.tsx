import { Outlet } from 'react-router-dom'
import { Sidebar } from 'widgets/sidebar'
import styles from './ApplicationLayout.module.scss'

export default function ApplicationLayout(): JSX.Element {
  return (
    <div className={styles.application}>
      <div className={styles.side}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
