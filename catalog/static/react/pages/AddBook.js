import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import Layout from '../Shared/Layout'
import CSRFToken from './CSRFToken';
import { useForm } from '@inertiajs/inertia-react'
import '/catalog/static/css/index.css';


function AddBookForm(props) {
    const { data, setData, post } = useForm({
        title: '', 
        author: 'DEFAULT',
        summary: '',
        isbn: '',
        cover: '',
      })
      
      function submit(e) {
        e.preventDefault()
        post('/catalog/booksubmitted/')
      }
      
      return (
        <form onSubmit={submit}>
            <CSRFToken />
            <ul style={{listStyleType: "none"}}>
                <label>
                    Title:
                    <li>
                        <input type="text" name="title" value={data.name} onChange={e => setData('title', e.target.value)}/>
                    </li>
                    Author:
                    <li>
                        {/* <input type="select" name="author" value={data.author} /> */}
                        <select name="author" value={data.author} onChange={e => setData('author', e.target.value)}>
                            <option value="DEFAULT" disabled>Choose an author...</option>
                            {
                                props.children.author_list.slice(0).reverse().map((author) => 
                                    <option key={author.pk} value={author.pk}>{author.fields.first_name} {author.fields.last_name}</option>)
                            }
                        </select>
                    </li>
                    Summary:
                    <li>
                        <textarea type="text" name="summary" value={data.summary} onChange={e => setData('summary', e.target.value)}/>
                    </li>
                    ISBN:
                    <li>
                        <input type="text" name="isbn" value={data.isbn} onChange={e => setData('isbn', e.target.value)}/>
                    </li> 
                    Cover image:
                    <li>
                        <input type="file" onChange={e => setData('cover', e.target.files[0])} />   
                    </li>                       
                </label>
                <br /><li><input type="submit" value="Submit"/></li>
            </ul> 
        </form>
      )
}

export default function AddBookPage(props) {
    return (
        <Layout>
            <AddBookForm>{props}</AddBookForm>
        </Layout>
    )
}
