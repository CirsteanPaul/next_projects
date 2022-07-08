import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Header from '../components/header'
import { Post } from '../typings';
import {sanityClient, urlFor} from "../sanity";
import Posts from '../modules/posts'
import Link from 'next/link'
import PostElement from '../modules/posts/components'
import Ceva from '../components/box/ceva'

interface Props {
  posts: [Post];
}

const Home = ({posts}: Props) => {
  return (
    <div className='max-w-7xl mx-auto'>
    <Head>
      <title> Medium Blog</title>
    </Head>
    <Header/>
    <Banner />
    {/* <Ceva></Ceva> */}
    <Posts posts = {posts} />
    </div>
)
}

export default Home

export const getServerSideProps = async () =>{
  const query = `*[_type == "post"]{
    _id,
    title,
    author->{
      name,
      image,
    },
    description,
    mainImage,
    slug,
  }`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts:posts,
    },
  };
};