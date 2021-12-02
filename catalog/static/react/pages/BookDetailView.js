import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import Layout from '../Shared/Layout'
import '/catalog/static/css/index.css';


export default function BookDetailView(props) {
    return (
        <Layout>
            <h1>{props.book[0].fields.title}</h1>
            <p><strong>Author:</strong> <a >{props.book[0].fields.author}</a></p>
            <p><strong>Summary:</strong> {props.book[0].fields.summary}</p>
            <p><strong>ISBN:</strong> {props.book[0].fields.isbn}</p>
            <p><strong>Cover image:</strong></p>
            <img src={"http://127.0.0.1:8000/catalog/media/" + props.book[0].fields.cover}/>
        </Layout>
    )
}