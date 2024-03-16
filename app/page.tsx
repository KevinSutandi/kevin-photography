import NavBar from './components/NavBar';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Gallery from './components/Gallery';
import { graduationImages, weddingImages } from '@/utils/constants';

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <IntroSection />
      <hr className='h-[3px]' />
      <Gallery
        placeholder='Wedding'
        photoArray={weddingImages}
        prefix='WeddingHomePage/'
      />
      <Gallery
        placeholder='Graduation'
        photoArray={graduationImages}
        prefix='GraduationHomePage/'
      />
      <footer className='bg-gray-500 text-white text-center p-4 w-full h-16'>
        <p>&copy; 2024 - All rights reserved</p>
      </footer>
    </>
  );
}
