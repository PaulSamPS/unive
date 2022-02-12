import React, {useEffect, useState} from 'react'
import {Chat} from "../components/Chat/Chat";
import axios from "axios";
import styles from "../styles/Home.module.scss";
import {Header} from "../Layout/Header/Header";
import {MobileMenu} from "../components/MobileMenu/MobileMenu";

const Messenger = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('https://6202b21c4d21c200170b99b8.mockapi.io/users').then(res => setUser(res.data))
    }, [])
    console.log(user)
    return (
        <div className={styles.container}>
            <Header />
            <Chat user={user}/>
            <MobileMenu/>
        </div>
    )
}

export default Messenger