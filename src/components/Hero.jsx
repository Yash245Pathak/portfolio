import Profile from '../assets/Profile.jpg'
import Creative from '../assets/CREATIVE.png'
import Hello from '../assets/Hello.png'
import { ArrowUpRight } from 'react-feather'

function Hero() {
    return (
        <div className="h-[100vh] text-white/90 hero-bg relative flex flex-col justify-center items-center">
            <div className='flex justify-center items-center gap-x-2 mx-auto'>
                <div className='rounded-full border border-white'>
                    <img className='w-[10rem] md:w-[12rem] rounded-full' src={Profile} alt="" />
                </div>
                <img className='w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mt-20' src={Creative} alt="" />
            </div>
            <p className='bungee text-[30px] md:text-[60px] absolute opacity-10 top-8 -left-3'>Front-End</p>
            <p className='bungee text-[30px] md:text-[60px] absolute opacity-10 bottom-8 right-0'>Developer</p>
            <div className='flex flex-col my-6 text-center justify-center items-center'>
                <div className='flex gap-x-3'>
                    <h2 className='text-transparent bg-clip-text bg-gradient-to-b from-white to-[#131313] text-[20px] md:text-[30px]'>Hi I&apos;m Yash</h2>
                    <img className='w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' src={Hello} alt="" />
                </div>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-white to-[#131313] text-[18px] md:text-[22px] md:w-[28rem] w-[18rem]'>A passionate Front-End Developer and Ui/Ux Designer. Developing and Designing Websites, web designs.</p>
            </div>
            <div>
                <button className='btn'><a href="https://github.com/Yash245Pathak" target='black'><p className='flex justify-center items-center gap-x-2'>My Work <ArrowUpRight /></p></a></button>
            </div>
        </div>
    )
}

export default Hero