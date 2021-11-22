import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import '/catalog/static/css/index.css';


export default function Layout({ children }) {
  return (
    <main>
      <header>
        <InertiaLink href="/">Home | </InertiaLink>
        <InertiaLink href="/catalog/books">All books | </InertiaLink>
        <InertiaLink href="/catalog/addbook">Add book | </InertiaLink>
        <InertiaLink href="/catalog/authors">All authors | </InertiaLink>
        <InertiaLink href="/catalog/game">Game | </InertiaLink>
      </header>

      <article>{children}</article>
    </main>
  )
}