import { selectBook } from '@/features/bookSlice';
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/store'
import Button from '@/components/Button';
import Link from 'next/link';

export default function BookDetailsPage() {
  const router = useRouter()
  const bookId: number = Number(router.query.id);

  const book = useSelector((state: RootState) => selectBook(state, bookId))

  if(!book) {
    return <div>
      <h1>Oops, Book Not found</h1>
      <Link href="/"><Button>Go to Home </Button></Link>
      </div>
  }

  return (
    <div>BookDetailsPage {router.query.id}</div>
  )
}
