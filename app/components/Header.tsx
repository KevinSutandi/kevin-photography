import Image from 'next/image';
import CoverImage from '@/public/CoverImage.png';

const Header = () => (
  <header className='bg-black'>
    <div className='isolate h-screen w-full overflow-clip px-6 pt-14 lg:px-8'>
      <div
        className='absolute inset-x-0 -z-10 top-0 transform-gpu overflow-clip'
        aria-hidden='true'
      >
        <Image
          src={CoverImage}
          quality={75}
          className='opacity-50 max-h-[100vh] h-screen w-full object-cover'
          alt='Cover Image'
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
  </header>
);

export default Header;
