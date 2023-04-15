import React from 'react'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.contactContainer}>
        <p className={styles.contactItem}>(843)-870-1425</p>
        <p className={styles.contactItem}>8510 Rivers Ave, North Charleston, SC 29406</p>
      </div>

      <div className={styles.mapContainer}>
        <h2>Find Us</h2>
        <a
          className={styles.imageContainer}
          href="https://www.google.com/maps/place/Rivers+Spa/@32.9611599,-80.0456793,17z/data=!3m1!4b1!4m6!3m5!1s0x88fe617aa882fd6f:0x1a6ae874c19564fc!8m2!3d32.9611599!4d-80.0431044!16s%2Fg%2F1hf1d1y6f"
        >
          <Image src={'/map.png'} fill alt="map image" className={styles.image}/>
        </a>
      </div>
    </div>
  )
}
