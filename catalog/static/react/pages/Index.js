import React from 'react'
import Layout from '../Shared/Layout'
import '/catalog/static/css/index.css';


export default function Welcome(props) {
  return (
    <Layout>
      <h1>Local Library Home</h1>
      <p>Welcome to LocalLibrary, a website developed with Django, React and InertiaJS</p>
      <h2>Dynamic content</h2>
      <p>The library has the following record counts:</p>
      <ul>
        <li><strong>Books:</strong> {props.num_books}</li>
        <li><strong>Copies:</strong> { props.num_instances}</li>
        <li><strong>Copies available:</strong> { props.num_instances_available }</li>
        <li><strong>Authors:</strong> { props.num_authors }</li>
      </ul>
    </Layout>
  )
}