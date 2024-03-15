import Image from 'next/image';
import CoverImage from '@/public/CoverImage.png';
import CoverImageVertical from '@/public/CoverImageVertical.jpg';

const Header = () => (
  <header className='bg-black'>
    <div className='isolate h-screen w-full overflow-clip px-6 pt-14 lg:px-8'>
      <div
        className='absolute inset-x-0 -z-10 top-0 transform-gpu overflow-clip'
        aria-hidden='true'
      >
        <div className='hidden md:block'>
          <Image
            src={CoverImage}
            quality={75}
            className='opacity-50 max-h-[100vh] h-screen w-full object-cover'
            alt='Cover Image'
            priority
          />
        </div>
        <div className='block md:hidden'>
          <Image
            src={CoverImageVertical}
            quality={75}
            className='opacity-50 max-h-[100vh] h-screen w-full object-cover'
            alt='Cover Image'
            priority
          />
        </div>
      </div>
      <div className='mx-auto h-full max-w-3xl py-72 sm:py-48 lg:py-56'>
        <div className='hidden sm:mb-16 sm:flex sm:justify-center'></div>
        <div className='text-center'>
          <h1 className='tracking-wide text-white font-regular text-4xl'>
            Wedding, Graduation and Event Photographer
          </h1>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
