"use client"
import { useContext } from 'react'
import styles from './page.module.css'
import {motion as m} from "framer-motion"
import Head from 'next/head'
import headImg from '../../public/heade.png'
import Image from 'next/image'
import Calculator from '@/components/Calculator/Calculator'
import { ResultContext } from '@/src/context/ResultContext'

export default function Home() {
  const {courses} = useContext(ResultContext);
  
  return (
    <main className={styles.container}>
      <div className={styles.bg}></div>
      <div className={styles.intro}>
        <div className={styles.item}>
          <h1 className={styles.intoHeading}>GPA Calculator</h1>
          <p className={styles.p}>Calculate your Semester GPA, Cummulative GPA and check how much you need to cross that lengedary GPA mark.</p>
        </div>
        <div className={styles.item}>
          <Image src={headImg} alt="hero" className={styles.img}/>
        </div>
      </div>
      
      <div className={styles.cal}>
        <div className={styles.semesters}>
          {
          courses.map(item => (
            <div key={item.id}><Calculator item={item.semester}/></div>
          ))
        }
        </div>
        <div className={styles.howTo}>
          <h2 className={styles.h2}>Using the GPA Calculator</h2>
          <br />
          <p>High school students, enter your class name, letter grade and credit hours(typically 1). If you are taking weighted classes(Honours) switch the weighted toggle on.</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur laudantium sed ullam. Ad numquam ea tempore iste! Quos, harum.</p>
        </div>
      </div>
    </main>
  )
}
