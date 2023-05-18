import { selectBook, updateBook } from '@/features/bookSlice';
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/store'
import Button from '@/components/Button';
import Link from 'next/link';
import BookDetails from '@/components/BookDetails';
import { Book } from '@/features/models';
import { useAppDispatch } from '@/hooks';

export default function BookDetailsPage() {
  const router = useRouter()
  const bookId: number = Number(router.query.id);

  const book = useSelector((state: RootState) => selectBook(state, bookId))

  const dispatch = useAppDispatch()

  const handleSubmit = (book: Book) => {
    dispatch(updateBook(book))
    router.push('/')
  }

  return (
    <div className='flex min-h-screen flex-col items-center p-24'>
      {book
        ? (<BookDetails book={book} isCreate={false} onSubmit={handleSubmit} />)
        : <>
          <h1 className='text-xl my-4'>Oops, Book Not found</h1>
          <Link href="/"><Button>Go to Home </Button></Link>
        </>}

    </div>
  )
}
