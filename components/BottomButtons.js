import { useState } from 'react'
import styles from '../styles/components/BottomButtons.module.css'

export default function BottomButtons() {
  const [showValueModal, setShowValueModal] = useState(false)

  const handleGetValue = () => {
    setShowValueModal(true)
  }

  const handleCloseModal = () => {
    setShowValueModal(false)
  }

  const handlePurchaseValue = (amount, value) => {
    // 这里实现获取量值逻辑
    alert(`获取 ${value} 量值，支付 ${amount} 元，跳转到支付页面...`)
    setShowValueModal(false)
  }

  return (
    <>
      <div className={styles.bottomButtons}>
        <div className={styles.chargeContainer}>
          <div className={styles.chargeLabel}>
            <i className="fas fa-wallet"></i>
            充值中心
          </div>
          <button className={styles.primaryBtn} onClick={handleGetValue}>
            <div className={styles.btnContent}>
              <div className={styles.btnIcon}>
                <i className="fas fa-bolt"></i>
              </div>
              <div className={styles.btnText}>
                <span className={styles.mainText}>立即充值</span>
                <span className={styles.subText}>获取量值 享受算力变现</span>
              </div>
              <div className={styles.btnArrow}>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
            <div className={styles.glowEffect}></div>
          </button>
        </div>
      </div>

      {/* 获取量值模态框 */}
      {showValueModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>
                <i className="fas fa-coins"></i>
                充值获取量值
              </h3>
              <button className={styles.closeBtn} onClick={handleCloseModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.valueNotice}>
                <i className="fas fa-rocket"></i>
                选择充值套餐，支付成功后量值立即到账，开启算力之旅
              </div>
              
              <div className={styles.packageGrid}>
                <div 
                  className={styles.packageCard} 
                  onClick={() => handlePurchaseValue(10, '10,000')}
                >
                  <div className={styles.packageHeader}>
                    <div className={styles.packageName}>入门套餐</div>
                  </div>
                  <div className={styles.packageValue}>10,000</div>
                  <div className={styles.packageUnit}>量值</div>
                  <div className={styles.packagePrice}>¥10</div>
                  <div className={styles.packageDesc}>适合新手体验</div>
                </div>
                
                <div 
                  className={`${styles.packageCard} ${styles.recommended}`} 
                  onClick={() => handlePurchaseValue(50, '50,000')}
                >
                  <div className={styles.packageHeader}>
                    <div className={styles.packageName}>推荐套餐</div>
                    <div className={styles.hotTag}>🔥 热门</div>
                  </div>
                  <div className={styles.packageValue}>50,000</div>
                  <div className={styles.packageUnit}>量值</div>
                  <div className={styles.packagePrice}>¥50</div>
                  <div className={styles.packageDesc}>性价比最高</div>
                </div>
                
                <div 
                  className={styles.packageCard} 
                  onClick={() => handlePurchaseValue(100, '100,000')}
                >
                  <div className={styles.packageHeader}>
                    <div className={styles.packageName}>进阶套餐</div>
                  </div>
                  <div className={styles.packageValue}>100,000</div>
                  <div className={styles.packageUnit}>量值</div>
                  <div className={styles.packagePrice}>¥100</div>
                  <div className={styles.packageDesc}>重度用户首选</div>
                </div>
                
                <div 
                  className={`${styles.packageCard} ${styles.premium}`} 
                  onClick={() => handlePurchaseValue(500, '500,000')}
                >
                  <div className={styles.packageHeader}>
                    <div className={styles.packageName}>企业套餐</div>
                    <div className={styles.vipTag}>💎 VIP</div>
                  </div>
                  <div className={styles.packageValue}>500,000</div>
                  <div className={styles.packageUnit}>量值</div>
                  <div className={styles.packagePrice}>¥500</div>
                  <div className={styles.packageDesc}>团队专享优惠</div>
                </div>
              </div>
              
              <div className={styles.paymentSection}>
                <div className={styles.sectionTitle}>
                  <i className="fas fa-shield-alt"></i>
                  安全支付
                </div>
                <div className={styles.paymentMethods}>
                  <div className={styles.paymentMethod}>
                    <i className="fab fa-weixin" style={{color: '#1aad19'}}></i>
                    <span>微信支付</span>
                  </div>
                  <div className={styles.paymentMethod}>
                    <i className="fab fa-alipay" style={{color: '#1677ff'}}></i>
                    <span>支付宝</span>
                  </div>
                  <div className={styles.paymentMethod}>
                    <i className="fas fa-university" style={{color: '#f5a623'}}></i>
                    <span>银行卡</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.tips}>
                <div className={styles.tip}>
                  <i className="fas fa-check-circle"></i>
                  支付成功后量值立即到账
                </div>
                <div className={styles.tip}>
                  <i className="fas fa-clock"></i>
                  24小时客服在线支持
                </div>
                <div className={styles.tip}>
                  <i className="fas fa-lock"></i>
                  银行级安全加密保护
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}