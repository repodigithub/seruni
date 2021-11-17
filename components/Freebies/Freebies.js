import React from 'react'
import { Link } from 'react-scroll'
import styles from './Freebies.module.scss'

const Freebies = ({ toggleFreebies, closeFreebies, isOpen }) => {
  return (
    <div
      className={
        isOpen ? `${styles.freebies} ${styles.open}` : `${styles.freebies}`
      }
    >
      <img
        className={styles.toggleIcon}
        src='img/freebie-icon.webp'
        width='100px'
        height='100px'
        alt='Freebies Button'
        onClick={toggleFreebies}
      />
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <img
            src='img/free-content-icon.webp'
            width='50px'
            height='50px'
            alt='Free Content Icon'
          />
          <p className={styles.title}>Get Free Content</p>
          <div className={styles.buttons}>
            <a
              href='https://bit.ly/SeruniFreeSample'
              aria-label='Seruni Free Sample'
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
            <Link
              to='contact-us'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              name='contact-us'
              onClick={closeFreebies}
            >
              Email
            </Link>
          </div>
        </div>
        <div className={styles.separator} />
        <div className={styles.contentWrapper}>
          <img
            src='img/rate-card-icon.webp'
            width='50px'
            height='50px'
            alt='Our Rate Card Icon'
          />
          <p className={styles.title}>Ask our rate card</p>
          <div className={styles.buttons}>
            <a
              href='https://bit.ly/SeruniRateCard'
              aria-label='Seruni Rate Card'
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
            <Link
              to='contact-us'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              name='contact-us'
              onClick={closeFreebies}
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Freebies
