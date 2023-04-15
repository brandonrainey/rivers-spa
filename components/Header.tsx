import React from 'react'
import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.main}>
        <h1>
            Rivers Spa
        </h1>
        <nav>
            <a>
                Contact
            </a>
        </nav>
    </header>
  )
}
