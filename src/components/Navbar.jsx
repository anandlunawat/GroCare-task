import { BsYoutube } from 'react-icons/bs'
import { CiSearch } from "react-icons/ci"
import {RxAvatar} from 'react-icons/rx'

export default function Navbar() {
    return (
        <div className='flex flex-row w-full gap-6 p-4'>
            <a href='/' className='flex gap-2 text-3xl basis-1/3'>
                <BsYoutube className='self-center text-4xl text-red-600' />
                <span className='-mt-[3px] font-semibold'>YouTube</span>
            </a>
            <div className="flex flex-row gap-2 px-3 items-center max-lg:hidden border w-11/12 border-solid border-[#D0D5DD] rounded-full shadow-b">
                <input type={"search"} className="focus:outline-none w-full bg-transparent border-r-[1px]" placeholder="Search" />
                <CiSearch className='text-xl'/>
            </div>
            <div className='w-full ml-auto basis-1/3'>
                <RxAvatar className='self-center w-full text-3xl'/>
            </div>            
        </div>
    )
}