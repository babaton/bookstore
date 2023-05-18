import { Book } from '@/features/models'
import React, { MouseEventHandler } from 'react'
import Button from './Button'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/hooks'
import { deleteBook } from '@/features/bookSlice'

export interface BookListItemProps {
  book: Book
}

export default function BookListItem(props: BookListItemProps) {
  const router = useRouter()
  const handleCardClick = () => {
    router.push(`/books/${props.book.id}`)
  }

  const dispatch = useAppDispatch()
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    dispatch(deleteBook(props.book.id))
  }

  return (
    <div className='border rounded-2xl my-6 p-4 hover:cursor-pointer hover:bg-slate-100 flex w-full justify-between items-center' onClick={handleCardClick}>
      <div className='w-1/3'>
        <h2 className='text-3xl'>{props.book.name}</h2>
        <div>Category: {props.book.category}</div>
        <div>Description: {props.book.description}</div>
      </div>
      <div className='mx-4'>${props.book.price}</div>
      <Button className='h-fit' onClick={handleButtonClick}>Delete</Button>
    </div>
  )
}
