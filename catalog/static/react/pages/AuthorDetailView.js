import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import Layout from '../Shared/Layout'
import '/catalog/static/css/index.css';


export default function AuthorDetailView(props) {
    return (
        <Layout>
            <h1>Author details</h1>
            <p><strong>Date of birth: </strong>{props.author[0].fields.date_of_birth}</p>
            <p><strong>Date of death: </strong>{props.author[0].fields.date_of_death}</p>
            <p><strong>First name: </strong>{props.author[0].fields.first_name}</p>
            <p><strong>Last name: </strong>{props.author[0].fields.last_name}</p>

        </Layout>
    )
}