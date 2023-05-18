import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useSelector(state => {
    console.log(state)
  })
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Book Store</h1>
    </main>
  )
}
