import { Book } from '@/features/models'
import React from 'react'
import Button from './Button'

export interface BookListItemProps {
    book: Book
}

export default function BookListItem(props: BookListItemProps) {

  return (
    <div className='border p-4'>
        <h2 className='text-xl'>{props.book.name}</h2>
        <div>Category: {props.book.category}</div>
        <div>Description: {props.book.description}</div>
        <div>Price: ${props.book.price}</div>
        <Button>Delete</Button>
    </div>
  )
}
