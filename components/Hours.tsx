import React from 'react'
import styles from '../styles/Hours.module.scss'

export default function Hours() {
  return (
    <div className={styles.main}>
      <div className={styles.priceContainer}>
        <h2>Prices</h2>
        <p>30 Minutes: $55</p>
        <p>60 Minutes: $75</p>
      </div>

      <div className={styles.hoursContainer}>
        <h2>Hours</h2>
        <ul>
          <li>Friday, 9AM - 10PM</li>
          <li>Saturday, 9AM - 10PM</li>
          <li>Sunday, 9AM - 10PM</li>
          <li>Monday, 9AM - 10PM</li>
          <li>Tuesday, 9AM - 10PM</li>
          <li>Wednesday, 9AM - 10PM</li>
          <li>Thursday, 9AM - 10PM</li>
        </ul>
      </div>
    </div>
  )
}
