// components/SideNav.js
import Link from 'next/link';

const SideNav = () => {
    return (
        <nav className='bg-black w-[12rem] h-[100vh]'>
            <ul className='p-4'>
                <li className='py-2 pl-2 rounded-full  hover:bg-gray-800'>
                    <Link href="/contact"><p >Contact</p></Link>
                </li>
                <li className='py-2 pl-2 rounded-full  hover:bg-gray-800'>
                    <Link href="/map"><p>Map</p></Link>
                </li>
            </ul>
        </nav>
    );
};


export default SideNav;
