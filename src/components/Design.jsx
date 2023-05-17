import { Monitor } from 'react-feather'
import { PenTool } from 'react-feather'
import { Star } from 'react-feather'

function Design() {
    return (
        <div className="h-auto text-white mt-10" data-aos="fade-up" data-aos-duration="2000">
            <h1 className="text-[60px] md:text-[80px] text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-bg[#131313]">DESIGN</h1>
            <div className="flex flex-col md:flex-row gap-x-8 gap-y-10 justify-center items-center my-10">
                <div className="border border-white w-[15rem] h-[15rem] bg-[#323232] flex flex-col justify-center gap-y-3 px-3 hover:bg-[#565656] hover:scale-110 ease-in-out duration-700">
                    <Monitor />
                    <h2 className='text-[14px] font-bold'>Front-End Development</h2>
                    <p className='text-[12px] w-3/4'>Transforming ideas into exceptional website & webapp experiences.</p>
                </div>
                <div className="border border-white w-[15rem] h-[15rem] bg-[#323232] flex flex-col justify-center gap-y-3 px-3 hover:bg-[#565656] hover:scale-110 ease-in-out duration-700">
                    <PenTool />
                    <h2 className='text-[14px] font-bold'>UI/UX</h2>
                    <p className='text-[12px] w-3/4'>Designing interfaces that are intuitive, efficient and enjoyatable to use.</p>
                </div>
                <div className="border border-white w-[15rem] h-[15rem] bg-[#323232] flex flex-col justify-center gap-y-3 px-3 hover:bg-[#565656] hover:scale-110 ease-in-out duration-700">
                    <Monitor />
                    <h2 className='text-[14px] font-bold'>Design & Creativity</h2>
                    <p className='text-[12px] w-3/4'>Creating visually
                        stunning designs.</p>
                </div>
            </div>
            <div className='mt-16'>
                <div className='overflow-hidden flex border relative border-white border-r-0 border-l-0 h-[20vh]'>
                    <div className='flex gap-x-2 text-[20px] md:text-[25px] justify-around items-center absolute top-6 -left-2'>
                        <h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star />
                    </div>
                    <div className='flex gap-x-2 text-[20px] md:text-[25px] justify-around items-center absolute top-20 -left-28'>
                        <h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star /><h1>Web</h1><Star /><h1>Frontend</h1><Star /><h1>UI</h1><Star /><h1>UX</h1><Star />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design