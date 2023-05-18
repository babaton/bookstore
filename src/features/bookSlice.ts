import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Book } from './models'

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
            state.books.push(action.payload)
        }
    }
})

export const { createBook } = booksSlice.actions

export default booksSlice.reducer