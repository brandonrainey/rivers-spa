import React from 'react'
import Image from 'next/image'
import styles from '../styles/HeroBanner.module.scss'

export default function HeroBanner() {
  return (
    <div className={styles.main}>
      <Image
        src={'/hero-1.jpg'}
        fill
        alt="hero image"
        className={styles.image}
      />
    </div>
  )
}
