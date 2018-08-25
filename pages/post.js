
import {withRouter} from 'next/router';
import Layout from '../components/Layout.js';

const Content= withRouter((props)=>(
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This the blog's content</p>
  </div>
))
// withRouter is a method that takes the content component as an argument

const Page=(props)=>(
  <Layout>
    <Content/>
  </Layout>
)
//Watch the kind of brackets used to call

export default Page;
