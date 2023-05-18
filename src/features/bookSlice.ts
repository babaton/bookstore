import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Book } from './models'
import { RootState } from '@/store'

export interface BooksState {
    books: Book[]
}

const initialState: BooksState = {
    books: [{id: 1, name: 'first book', price: 10, category: 'test', description: 'test desc'}]
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        createBook: (state, action: PayloadAction<Book>) => {
            state.books.push(action.payload)
        }
    }
})

export const { createBook } = booksSlice.actions

export const selectBooks = (state: RootState) => state.books.books
export const selectBook = (state: RootState, bookId: number) => state.books.books.find(book => book.id === bookId)

export default booksSlice.reducer