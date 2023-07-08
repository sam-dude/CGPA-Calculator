"use client"

import React from 'react'
import styles from './footer.module.css'
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';

export default function FooterWithLogo() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>GPA Calculator</div>
        <p className={styles.text}>© 2023 <a href="#">Ibiyemi Samuel</a></p>
        
      </div>
      <hr />
      <div className={styles.item}>
        <p className={styles.text}>Made with 💚 for you.</p>
        <div className={styles.icons}>
          <Footer.Icon
            href="#"
            icon={BsFacebook}
          />
          <Footer.Icon
            href="#"
            icon={BsLinkedin}
          />
          <Footer.Icon
            href="#"
            icon={BsTwitter}
          />
          <Footer.Icon
            href="https://github.com/sam-dude"
            icon={BsGithub}
          />
        </div>
      </div>
    </div>
  )
}



