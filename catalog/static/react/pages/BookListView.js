import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import Layout from '../Shared/Layout'
import '/catalog/static/css/index.css';


export default function BookListView(props) {
  return (
    <Layout>
      <h1>All books</h1>
      <p><InertiaLink href="/catalog/addbook">Add book</InertiaLink></p>
      <div>
            <h2> Title </h2>
            <ul>
              {
              props.book_list.map((book, index) => 
                  <li key={book + index}>
                    <InertiaLink href={props.urls[index]}>{book.fields.title}</InertiaLink>
                  </li>
                  )
              }
            </ul>
          </div>
    </Layout>
  )
}