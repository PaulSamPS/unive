import type { NextPage } from 'next'
import {Layout} from '../Layout/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout />
    </div>
  )
}

export default Home
