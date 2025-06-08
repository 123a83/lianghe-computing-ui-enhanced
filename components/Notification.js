import styles from '../styles/components/Notification.module.css'

export default function Notification() {
  return (
    <div className={styles.notification}>
      <i className="fas fa-info-circle"></i>
      目前量值仅开放50000k，详情请关注量合官方客服
    </div>
  )
}