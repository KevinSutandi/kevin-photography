import Image from 'next/image';
import ProfilePic from '@/public/ProfilePic.jpg';

export default function IntroSection() {
  return (
    <div className='bg-white min-h-screen h-full w-full p-5 pt-16 lg:p-20'>
      <div className=' w-full mx-auto text-center md:w-2/3'>
        <h1 className='text-black text-4xl leading-tight font-[700] lg:text-5xl'>
          LIGHTING UP YOUR LIFE - CAPTURING MEMORIES TO LAST
        </h1>
      </div>
      <div className='flex flex-col-reverse lg:flex-row text-black'>
        <div className='flex-1 p-10 pt-32 my-auto'>
          <Image
            src={ProfilePic}
            quality={75}
            alt='Picture of Kevin'
            className='w-[400px] mx-auto'
          />
        </div>
        <div className='flex-1 p-10 pt-32 text-center'>
          <h2 className='text-5xl font-semibold italic mb-6'>
            Hiya! I&apos;m Kevin
          </h2>
          <div className='italic tracking-wider font-light leading-8'>
            <p>
              Sydney-based photographer and videographer specialising in
              capturing weddings, graduations, events, and the breathtaking
              landscapes that I fell in love with growing up in Indonesia.
            </p>
            <br />
            <p>
              Using my creative eye, I strive to capture the beauty and emotion
              of each wedding day. I know how important it is to capture the
              precious moments of your special day and I take great pride in my
              work. I use the latest technology to provide you with beautiful,
              timeless images that you will cherish forever.
            </p>
            <br />
            <p>
              I&apos;m passionate about making sure that each couple gets the
              best service and the best images possible. I always take the time
              to listen to what you want and to get to know you both before your
              big day. My goal is to make sure that you have a stress-free
              wedding and that your photos reflect your unique story.
            </p>
            <br />
            <p>
              If you&apos;re looking for someone who&apos;s shooting style is
              candid, I&apos;d love to chat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
