import { useState } from 'react'
import styles from '../styles/components/RecordsSection.module.css'

const initialRecords = [
  {
    id: 1,
    type: '量值获取',
    amount: '+2.5',
    date: '2025年3月1日 14:30',
    status: 'completed',
    statusText: '已确认'
  },
  {
    id: 2,
    type: '量值获取',
    amount: '+5.0',
    date: '2025年2月28日 09:15',
    status: 'completed',
    statusText: '已确认'
  },
  {
    id: 3,
    type: '量值获取',
    amount: '+1.2',
    date: '2025年2月27日 16:45',
    status: 'completed',
    statusText: '已确认'
  },
  {
    id: 4,
    type: '量值获取',
    amount: '+0.8',
    date: '2025年2月26日 12:00',
    status: 'completed',
    statusText: '已确认'
  },
  {
    id: 5,
    type: '量值获取',
    amount: '+3.6',
    date: '2025年2月25日 08:30',
    status: 'processing',
    statusText: '处理中'
  }
]

export default function RecordsSection() {
  const [records] = useState(initialRecords)

  return (
    <div className={styles.recordsSection}>
      <div className={styles.recordsHeader}>
        <i className="fas fa-history"></i>
        量值记录（最近10条）
      </div>
      <div className={styles.recordsContainer}>
        {records.map(record => (
          <div key={record.id} className={styles.recordCard}>
            <div className={styles.recordHeader}>
              <div className={styles.recordType}>
                <i className="fas fa-plus-circle"></i>
                <span>{record.type}</span>
              </div>
              <div className={styles.recordAmount}>
                <div className={styles.amountValue}>{record.amount}</div>
                <div className={styles.amountUnit}>k</div>
              </div>
            </div>
            <div className={styles.recordDate}>
              <i className="fas fa-clock"></i> {record.date}
            </div>
            <div className={`${styles.recordStatus} ${styles[record.status]}`}>
              <i className={record.status === 'processing' ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle'}></i>
              {record.statusText}
            </div>
          </div>
        ))}
        
        <button className={styles.loadMoreBtn}>
          <i className="fas fa-chevron-down"></i>
          加载更多记录
        </button>
      </div>
    </div>
  )
}