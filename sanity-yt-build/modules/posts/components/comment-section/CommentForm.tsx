import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Post } from '../../../../typings';
import Swal from 'sweetalert2';
import axios from 'axios';
interface IFormInput {
    _id: string,
    name: string;
    email: string;
    comment: string;

}
interface Props{
    post: Post
}
const CommentForm = ({post}: Props) => {
    const { register, handleSubmit, formState: {errors}, } = useForm<IFormInput>();
    const [succesfulAdded, setSuccesfulAdded] = useState(false);
    const onSubmit: SubmitHandler<IFormInput> = async(data) =>{
        try{
        const response = await axios.post('/api/createComment', {data});
        
        Swal.fire(
            'The comment has been sent',
            'Thank you for leaving a comment!',
            "success"
        )
        }
        catch(e) {
            console.log(e);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Try again later'
              })
            // swallow exception
        }
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-5 max-w-2xl mx-auto mb-10'>
    <h3 className='text-sm text-yellow-500'>Enjoyed this article?</h3>
    <h4 className='text-3xl font-bold'>Leave a comment below!</h4>
    <hr className='py-3 mt-2'/>
    <input 
        {...register("_id")}
        type="hidden"
        name="_id"
        value={post._id}
    />
    <label>
        <span className='text-gray-700'>Name</span>
        <input
        {...register("name", { required: true})}
        className='shadow border rounded py-2 px-3 form-input my-1 block
        w-full ring-yellow-500 focus:ring outline-none'
         placeholder='Your name' type="text"/>
    </label>

    <label>
        <span className='text-gray-700'>Email</span>
        <input
        {...register("email", { required: true})}
         className='shadow border rounded py-2 px-3 form-input my-1 block
         w-full ring-yellow-500 focus:ring outline-none' 
         placeholder='Your email' type="email"/>
    </label>

    <label>
        <span className='text-gray-700'>Comment</span>
        <textarea
        {...register("comment", { required: true})}
         className='shadow border rounded py-2 px-3 form-textarea my-2
         block w-full ring-yellow-500 focus:ring outline-none'
         placeholder='comment here' rows={8}/>
    </label>
    <div className='flex flex-col p-5'>
        {errors.name && (
            <span className='text-red-500'> - The Name Field is required</span>
        )}
        {errors.comment && (
            <span className='text-red-500'> - The Comment Field is required</span>
        )}
        {errors.email && (
            <span className='text-red-500'> - The Email Field is required</span>
        )}
    </div>
    <input type="submit" className='shadow bg-yellow-500
    hover:bg-yellow-400 focus:shadow-outline
    focus:outline-none text-white font-bold py-2
    px-4 rounded cursor-pointer' />
   </form> 
  )
}
export default CommentForm;