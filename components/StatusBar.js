import styles from '../styles/components/StatusBar.module.css'

export default function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <span>12:00</span>
      <div className={styles.statusIcons}>
        <i className="fas fa-signal"></i>
        <i className="fas fa-wifi"></i>
        <i className="fas fa-battery-full"></i>
      </div>
    </div>
  )
}