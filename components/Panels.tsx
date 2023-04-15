import React from 'react'
import styles from '../styles/Panels.module.scss'
import Image from 'next/image'

export default function Panels() {
  return (
    <div className={styles.main}>
      <div className={styles.panel}>
        <Image src={'/stock-1.jpg'} fill alt="panel image" />
      </div>
      <div className={styles.panel}>
        <Image src={'/stock-2.jpg'} fill alt="panel image" />
      </div>
      <div className={styles.panel}>
        <Image src={'/stock-3.jpg'} fill alt="panel image" />
      </div>
    </div>
  )
}
