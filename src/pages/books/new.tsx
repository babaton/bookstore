import BookDetails from '@/components/BookDetails'
import Button from '@/components/Button'
import { createBook } from '@/features/bookSlice'
import { Book } from '@/features/models'
import { useAppDispatch } from '@/hooks'
import { useRouter } from 'next/router'
import React from 'react'

export default function NewBookPage() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const handleSubmit = (book: Book) => {
    dispatch(createBook(book))
    router.push('/')
  }

  return (
    <div className='flex min-h-screen flex-col items-center p-24'>
      <BookDetails isCreate={true} onSubmit={handleSubmit} />
    </div>
  )
}
