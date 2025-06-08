import styles from '../styles/components/StatsContainer.module.css'

export default function StatsContainer() {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>
            <i className="fas fa-coins"></i>
            个人有效量值
          </div>
          <div className={styles.statValue}>15.2</div>
          <div className={styles.statUnit}>k</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statLabel}>
            <i className="fas fa-chart-line"></i>
            个人总量值
          </div>
          <div className={styles.statValue}>23.8</div>
          <div className={styles.statUnit}>k</div>
        </div>
      </div>
    </div>
  )
}