import { Book } from '@/features/models'
import React from 'react'
import Button from './Button'
import { useRouter } from 'next/router'

export interface BookListItemProps {
  book: Book
}

export default function BookListItem(props: BookListItemProps) {
  const router = useRouter()
  const handleCardClick = () => {
    router.push(`/books/${props.book.id}`)
  }

  return (
    <div className='border p-4 hover:cursor-pointer' onClick={handleCardClick}>
      <h2 className='text-xl'>{props.book.name}</h2>
      <div>Category: {props.book.category}</div>
      <div>Description: {props.book.description}</div>
      <div>Price: ${props.book.price}</div>
      <Button className='w-full'>Delete</Button>
    </div>
  )
}
