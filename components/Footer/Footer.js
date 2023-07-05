"use client"

import React from 'react'
import styles from './footer.module.css'
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterWithLogo() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>GPA Calculator</div>
      <div className={styles.icons}>
        <Footer.Icon
          href="#"
          icon={BsFacebook}
        />
        <Footer.Icon
          href="#"
          icon={BsInstagram}
        />
        <Footer.Icon
          href="#"
          icon={BsTwitter}
        />
        <Footer.Icon
          href="#"
          icon={BsGithub}
        />
      </div>
    </div>
  )
}



