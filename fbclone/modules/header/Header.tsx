import React from 'react';
import Image from 'next/image';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";
import HeaderSearchSection from './components';
import HeaderMiddleSide from './components/header-middle-side';
const Header = () => {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
        <HeaderSearchSection />
        <HeaderMiddleSide />
        <div className='flex items-center sm:space-x-2 justify-center'>
            {/* Profile pic */}
            <p className='font-semibold pr-3 whitespace-nowrap'>My name</p>
            <ViewGridIcon className='icon'/>
            <ChatIcon className='icon'/>
            <BellIcon className='icon'/>
            <ChevronDownIcon className='icon' />
        </div>
    </div>
  )
}

export default Header