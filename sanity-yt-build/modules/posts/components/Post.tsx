import React from 'react';
import { urlFor } from '../../../sanity';
import { Post } from '../../../typings';
interface Props{
    post: Post;
}
const PostElement = (props: Props) => {
    const { post } = props;
  return (
    <div className='group cursor-pointer border rounded-lg overflow-hidden'>
        <img src={
          urlFor(post.mainImage).url()!
        }
        className="h-60 w-full object-cover group-hover:scale-105
        transition-transform duration-200 ease-in-out"
        alt=""
        />
        <div className='flex justify-between p-5 bg-white'>
            <p className='text-lg font-bold'>{post.title}</p>
            <p className='text-xs'>
                {post.description} by {post.author?.name}
            </p>
        </div>
        <img
        className='h-12 w-12 rounded-full'
        src={urlFor(post.author?.image).url()!}
        alt="" 
        />
    </div>
  )
}

export default PostElement;