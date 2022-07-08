import React from 'react'
import Image from 'next/image'
interface Props{
    id: number
}
const Box = ({id}: Props) => {
    let column = id % 50;
    if(column === 0) column = 50;
  return (
    // <Image src={`/static/images/row-${id}-column-${id}.jpg`} width="10px" height="10px" />
    
        <Image src={`/static/images/row-${Math.floor(id / 50) + 1}-column-${id%50}.jpg`} width="10px" height="10px" />

  )
}

export default Box