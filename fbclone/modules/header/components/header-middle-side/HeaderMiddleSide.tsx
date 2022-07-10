import { FlagIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import React from 'react'
import HeaderIcon from '../../../../components/header-icon'

const HeaderMiddleSide = (): JSX.Element => {
  return (
    <div className='flex justify-center flex-grow'>
    <div className='flex  space-x-6 md:space-x-2'>
    <HeaderIcon active Icon={HomeIcon}/>
    <HeaderIcon Icon={FlagIcon}/>
    <HeaderIcon Icon={PlayIcon}/>
    <HeaderIcon Icon={ShoppingCartIcon}/>
    <HeaderIcon Icon={UserGroupIcon}/>
    </div>
</div>
  )
}

export default HeaderMiddleSide