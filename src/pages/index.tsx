import { useSelector } from 'react-redux'
import BookList from '@/components/BookList'
import Button from '@/components/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center p-24"
    >
      <div className='flex items-center justify-between py-8 w-full'>
        <h1 className='text-3xl'>Book Store</h1>
        <Link href="/books/new"><Button>Create</Button></Link>
      </div>
      <BookList />
    </main>
  )
}
