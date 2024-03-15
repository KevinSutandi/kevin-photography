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
    </>
  );
}
