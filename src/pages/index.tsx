import { useSelector } from 'react-redux'
import BookList from '@/components/BookList'

export default function Home() {
  useSelector(state => {
    console.log(state)
  })
  return (
    <main
      className="flex min-h-screen flex-col items-center p-24"
    >
      <h1>Book Store</h1>
      <BookList/>
    </main>
  )
}
