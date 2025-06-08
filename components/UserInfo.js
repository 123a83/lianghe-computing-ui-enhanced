import styles from '../styles/components/UserInfo.module.css'

export default function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <i className="fas fa-user-circle"></i> 已注册用户：量合用户001
    </div>
  )
}