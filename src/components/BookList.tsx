import { selectBooks } from '@/features/bookSlice'
import { useAppSelector } from '@/hooks'
import React from 'react'
import { useSelector } from 'react-redux'
import BookListItem from './BookListItem'

export default function BookList() {
  const books = useSelector(selectBooks)
  return (
    <div>
      {books.map(book => {
        return <BookListItem book={book} key={book.id} />
      })}
    </div>
  )
}
