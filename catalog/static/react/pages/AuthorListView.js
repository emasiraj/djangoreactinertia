import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import Layout from '../Shared/Layout'
import '/catalog/static/css/index.css';


export default function AuthorListView(props) {  
  return (
    <Layout>
      <h1>All authors</h1>
      <div>
            <h2> Name </h2>
            <ul>
              {
              props.author_list.map((author, index) => 
                  <li key={author + index}>
                    <InertiaLink href={props.urls[index]}>{author.fields.first_name} {author.fields.last_name}</InertiaLink>
                  </li>
                )
              }
            </ul>
          </div>
    </Layout>
  )
}