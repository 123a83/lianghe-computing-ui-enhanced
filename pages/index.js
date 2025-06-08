import Head from 'next/head'
import StatusBar from '../components/StatusBar'
import UserInfo from '../components/UserInfo'
import Header from '../components/Header'
import Notification from '../components/Notification'
import StatsContainer from '../components/StatsContainer'
import RecordsSection from '../components/RecordsSection'
import BottomButtons from '../components/BottomButtons'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>量合-算力即未来</title>
        <meta name="description" content="量合-算力即未来 UI界面" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <StatusBar />
        <UserInfo />
        <Header />
        <Notification />
        
        <div className={styles.mainContent}>
          <div className={styles.content}>
            <div className={styles.sectionTitle}>
              <i className="fas fa-chart-line"></i>
              量合区数据中心
            </div>
            
            <StatsContainer />
            <RecordsSection />
          </div>
        </div>
        
        <BottomButtons />
      </div>
    </>
  )
}