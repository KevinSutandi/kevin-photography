import Image from 'next/image';
import CoverImage from '@/public/CoverImage.png';
import HeaderBar from './components/HeaderBar';

export default function Home() {
  return (
    <div className='bg-black'>
      <HeaderBar />
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-36 -z-10 transform-gpu overflow-hidden'
          aria-hidden='true'
        >
          <Image
            src={CoverImage}
            className='relative w-full h-full opacity-50 overflow-hidden'
            alt=''
          />
        </div>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
          <div className='text-center'>
            <h1 className='text-lg tracking-tight text-white sm:text-3xl'>
              Wedding, Graduation and Event Photographer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
