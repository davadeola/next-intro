import Layout from '../components/Layout.js';
import Link from 'next/link';

const Index = () => {

  const PostLink = (props) => (<li>
    <Link
      as={`/post/${props.id}`}
      href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>)

  return (<Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" id="hello"/>
      <PostLink title="Learn Next.js is awesome" id="learn"/>
      <PostLink title="Deploy apps with Zeit" id="deploy"/>
    </ul>
  </Layout>)
}

export default Index;
