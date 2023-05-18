import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Book } from './models'
import { RootState } from '@/store'

export interface BooksState {
    books: Book[]
}

const initialState: BooksState = {
    books: []
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        createBook: (state, action: PayloadAction<Book>) => {
            state.books.push({ ...action.payload, id: new Date().valueOf() })
        },
        updateBook: (state, action: PayloadAction<Book>) => {
            let idx = state.books.findIndex(book => book.id === action.payload.id)
            state.books[idx] = action.payload
        },
        deleteBook: (state, action: PayloadAction<number>) => {
            let idx = state.books.findIndex(book => book.id === action.payload)
            state.books.splice(idx, 1)
        }
    }
})

export const { createBook, updateBook, deleteBook } = booksSlice.actions

export const selectBooks = (state: RootState) => state.books.books
export const selectBook = (state: RootState, bookId: number) => state.books.books.find(book => book.id === bookId)

export default booksSlice.reducer