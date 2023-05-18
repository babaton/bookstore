import React from 'react'

export default function BookDetails() {
  return (
    <form>
        <label htmlFor="name">Name</label>
        <input id="name" name="name"/>

        <label htmlFor="price">Price</label>
        <input id="price" name="price"/>

        <label htmlFor="category">Category</label>
        <input id="category" name="category"/>

        <label htmlFor="description">Description</label>
        <input id="description" name="description"/>
    </form>
  )
}
