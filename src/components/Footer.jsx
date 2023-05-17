import { ArrowUpRight } from 'react-feather'
import { Briefcase } from 'react-feather'
import { Linkedin } from 'react-feather'
import { Dribbble } from 'react-feather'
import { Instagram } from 'react-feather'


function Footer() {
    return (
        <div className="h-auto text-white mt-20">
            <div className="flex flex-col gap-y-6 text-[25px] text-center" data-aos="fade-up" data-aos-duration="2000">
                <h1>I <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-[#131313]">CREATE</span> AND <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-[#131313]">INNOVATE</span>.</h1>
                <div>
                    <button className='btn'><a href="https://www.behance.net/yashpAthak12" target='black'><p className='flex justify-center items-center gap-x-1 cursor-pointer'>Hire Me <ArrowUpRight /></p></a></button>
                </div>
            </div>
            <div className='mt-24 text-[40px] md:text-[60px] text-center bg-clip-text' data-aos="fade-down" data-aos-duration="2000"><span className='blur-sm'>CONTACT ME</span></div>
            <hr />
            <div className='py-16 text-center flex flex-col md:flex-row md:px-4 md:mx-0 md:gap-x-6 justify-center items-center relative gap-y-20' data-aos="fade-up" data-aos-duration="2000">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[30px] max-w-max'>YASH.</h1>
                    <p className='w-3/4 md:w-5/6 text-center  opacity-70'>My moto is to fulfill customer demand by making them satisfied by fulfilling their demands.</p>
                </div>
                <p className='bungee absolute opacity-10 top-[15rem] text-[60px] md:text-[80px] md:top-[7rem]'>WEBSITE</p>
                <div className='flex flex-col gap-y-2 justify-center items-center w-full'>
                    <Briefcase />
                    <h1>yashpathak245@gmail.com</h1>
                </div>
                <div className='flex flex-col gap-y-6 items-center w-full'>
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-white to-[#131313] text-[30px]">CONNECT WITH ME</h1>
                    <div className='flex gap-x-4'>
                       <a className='hover:rotate-[360deg] ease-out duration-500 cursor-pointer' href="https://www.linkedin.com/in/yash-pathak-10a6031b6/" target='black'><Linkedin/></a>
                        <a className='hover:rotate-[360deg] ease-out duration-500 cursor-pointer' href='https://dribbble.com/YASHpAthak' target='black'><Dribbble /></a>
                        <a className='hover:rotate-[360deg] ease-out duration-500 cursor-pointer' href='https://www.instagram.com/__yash__pathak_/' target='black'><Instagram /></a>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-[14px] opacity-80 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#131313]'>Designed & Developed by YASH.</h1>
        </div>
    )
}

export default Footer