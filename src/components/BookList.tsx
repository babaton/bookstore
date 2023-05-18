import { selectBooks } from '@/features/bookSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import BookListItem from './BookListItem'

export default function BookList() {
  const books = useSelector(selectBooks)
  if(books.length === 0) {
    return <div>No books. Click Create to create a new book</div>
  }
  return (
    <ul className='w-full'>
      {books.map(book => {
        return <BookListItem book={book} key={book.id} />
      })}
    </ul>
  )
}
