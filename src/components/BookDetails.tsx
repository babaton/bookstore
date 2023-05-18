import { Book } from '@/features/models';
import React from 'react'
import { useForm } from "react-hook-form";
import TextField from './TextField';
import Button from './Button';
import Link from 'next/link';

export interface BookDetailsProps {
  book?: Book;
  isCreate: Boolean;
  onSubmit: (book: Book) => void;
}

export default function BookDetails(props: BookDetailsProps) {
  const { register, handleSubmit } = useForm<Book>({
    defaultValues: {
      ...props.book
    }
  })

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <label htmlFor="name">Name</label>
      <TextField id="name" {...register('name')} required />

      <label htmlFor="price">Price</label>
      <TextField id="price" {...register('price')} required type="number" />

      <label htmlFor="category">Category</label>
      <TextField id="category" {...register('category')} required />

      <label htmlFor="description">Description</label>
      <TextField id="description" {...register('description')} required />
      <Button className='w-full my-4' type="submit">
        {props.isCreate ? "Create" : "Update"}
      </Button>
      <Link href="/" ><Button className='w-full'>Back</Button></Link>
    </form>
  )
}
