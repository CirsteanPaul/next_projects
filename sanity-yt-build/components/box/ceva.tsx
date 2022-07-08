import React from 'react'
import Box from './Box';
const Ceva = () => {
    let x = [];
    for(let i =1 ;i <= 2500; i ++) x.push(i)
    return (
        <div style={{gridTemplateColumns:"repeat(50, 10px)"}} className='grid grid-cols-4 m-2 p-8 flex-wrap'>
        {x.map((e) =>{
            return <Box  key = {e} id={e}/>
        })
    }
        </div>
  )
}

export default Ceva