import Link from 'next/link';
import React from 'react'
import { Post } from '../../typings';
import PostElement from './components';
interface Props{
    posts: Post[];
}
const Posts = (props: Props): JSX.Element => {
    const {posts} = props;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) =>{
            return(
        <Link key={post._id} href={`/post/${post.slug.current}`}>
        <PostElement post={post}/>
        </Link>
        )})}
    </div>
  )
}

export default Posts;