
import {withRouter} from 'next/router';
import Layout from '../components/Layout.js';

const Content=(props)=>{
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This the blog's content</p>
  </div>
}
const Page=withRouter((props)=>(
  <Layout>
    <Content/>
  </Layout>
))

export default Page;
