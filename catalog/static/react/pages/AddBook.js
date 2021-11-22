import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import Layout from '../Shared/Layout'
import CSRFToken from './CSRFToken';
import '/catalog/static/css/index.css';


class AddBookForm extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = {
            title: '', 
            author: '',
            summary: '',
            isbn: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) { 
        const target = event.target;
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) { 
        event.preventDefault()
        debugger;
        Inertia.post('/catalog/books/', this.state)
    }

    render() {
        return (
            <div>
                <h1>Add a book:</h1>
                <form onSubmit={this.handleSubmit}>
                    <CSRFToken />
                <ul style={{listStyleType: "none"}}>
                    <label>
                        Title:
                        <li><input type="text" name="title" value={this.state.name} onChange={this.handleInputChange}/></li>
                        Author:
                        <li><input type="text" name="author" value={this.state.author} onChange={this.handleInputChange}/></li>
                        Summary:
                        <li><textarea type="text" name="summary" value={this.state.summary} onChange={this.handleInputChange}/></li>
                        ISBN:
                        <li><input type="text" name="isbn" value={this.state.isbn} onChange={this.handleInputChange}/></li>                        
                    </label>
                    <br /><li><input type="submit" value="Submit"/></li>
                </ul>
                </form>
            </div>
        );
    }
}


export default function AddBook(props) {
    return (
        <Layout>
            <AddBookForm></AddBookForm>
        </Layout>
    )
}