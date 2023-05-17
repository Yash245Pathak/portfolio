import { Briefcase } from 'react-feather'
import { Linkedin } from 'react-feather'
import { Dribbble } from 'react-feather'
import { Instagram } from 'react-feather'

function Header() {
    return (
        <>
            <div className='text-white hidden md:flex justify-between p-10' data-aos="fade-up">
                <div className='flex gap-x-2 justify-center items-center max-w-max'>
                    <Briefcase />
                    <h1>yashpathak245@gmail.com</h1>
                </div>
                <div className='flex gap-x-4'>
                    <a className='hover:rotate-[360deg] ease-out duration-500 cursor-pointer' href="https://www.linkedin.com/in/yash-pathak-10a6031b6/" target='black'><Linkedin /></a>
                    <a className='hover:rotate-[360deg] ease-out duration-500 cursor-pointer' href='https://dribbble.com/YASHpAthak' target='black'><Dribbble /></a>
                    <a className='hover:rotate-[360deg] ease-out duration-500 cursor-pointer' href='https://www.instagram.com/__yash__pathak_/' target='black'><Instagram /></a>
                </div>
            </div>
        </>
    )
}

export default Header