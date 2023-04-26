import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>AAAAAAAAAAAAAAAAA</h1>
      <Link href="/about">Go to About page</Link>
      <Link href="/users">Users</Link>
    </main>
  )
}
