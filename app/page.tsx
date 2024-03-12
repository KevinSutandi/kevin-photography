import Image from 'next/image';
import CoverImage from '@/public/CoverImage.png';
import HeaderBar from './components/HeaderBar';

export default function Home() {
  return (
    <>
      <div className='bg-black'>
        <HeaderBar />
        <div className='isolate h-screen w-full overflow-clip px-6 pt-14 lg:px-8'>
          <div
            className='absolute inset-x-0 -z-10 top-0 transform-gpu overflow-clip'
            aria-hidden='true'
          >
            <Image
              src={CoverImage}
              className='opacity-50 max-h-[100vh] h-screen w-full object-cover'
              alt=''
            />
          </div>
          <div className='mx-auto h-full max-w-3xl py-32 sm:py-48 lg:py-56'>
            <div className='hidden sm:mb-16 sm:flex sm:justify-center'></div>
            <div className='text-center'>
              <h1 className='tracking-wide text-white font-regular text-4xl'>
                Wedding, Graduation and Event Photographer
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white min-h-screen h-full w-full p-20'>
        <div className=' w-2/3 mx-auto text-center'>
          <h1 className='text-black text-4xl font-[700]'>
            LIGHTING UP YOUR LIFE - CAPTURING MEMORIES TO LAST
          </h1>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='text-black'>Hello</div>
          <div className='text-black'>Hello</div>
        </div>
      </div>
    </>
  );
}
