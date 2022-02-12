import {Chat} from '../components/Chat/Chat'
import {Header} from '../Layout/Header/Header'
import {MobileMenu} from '../components/MobileMenu/MobileMenu'

import styles from '../styles/Home.module.scss'

const Messenger = () => {

    return (
        <div className={styles.container}>
            <Header />
            <Chat />
            <MobileMenu/>
        </div>
    )
}

export default Messenger