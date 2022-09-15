import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <>
    <div className={Styles.divf}>
      <a className={Styles.a}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
      <a> - explore by Nico</a>
      <Link href="/about"> - About</Link>
      </div>
    </>
  )
}