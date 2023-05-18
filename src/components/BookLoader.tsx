import { loadBooks } from '@/features/bookSlice'
import { Book } from '@/features/models'
import { useAppDispatch } from '@/hooks'
import { RootState } from '@/store'
import React, { ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'

const SOTRAGE_KEY = 'books-state'

interface BookLoaderProps {
    children: ReactNode
}

export default function BookLoader(props: BookLoaderProps) {
    const dispatch = useAppDispatch()
    const store = useStore<RootState>();
    useEffect(() => {
        try {
            console.log('here')
            const booksStr = localStorage.getItem(SOTRAGE_KEY)
            console.log(booksStr)
            if(booksStr) {
                const books: Book[] = JSON.parse(booksStr)
                dispatch(loadBooks(books))
            }
            const unsub = store.subscribe(() => {
                const state = store.getState()
                localStorage.setItem(SOTRAGE_KEY, JSON.stringify(state.books.books))
            })
            return () => {
                unsub()
            }
        } catch(e) {
            console.error(e)
        }

    }, [])
  return (
    <>{props.children}</>
  )
}
