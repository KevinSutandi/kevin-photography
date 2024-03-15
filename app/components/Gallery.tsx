'use client';
import React from 'react';
import PhotoAlbum from 'react-photo-album';
import NextJsImage from '@/utils/NextjsImage';
import { cloudFrontDomain } from '@/utils/constants';
import { GalleryProps } from '@/utils/types';

const WeddingGallery: React.FC<GalleryProps> = ({
  placeholder,
  photoArray,
  prefix,
}) => {
  const photos = photoArray.map((imageName) => {
    const isVertical = imageName.includes('Vertical');
    return {
      src: `${cloudFrontDomain}/${prefix}${imageName}`,
      width: isVertical ? 2 : 3,
      height: isVertical ? 3 : 2,
      alt: `${placeholder} photo`,
    };
  });

  return (
    <div className='bg-white min-h-screen h-full w-full pt-16 p-8 md:p-20'>
      <h1 className='text-4xl text-black text-center font-normal mb-10'>
        Most Recent Works - {placeholder}
      </h1>
      <PhotoAlbum
        layout='rows'
        photos={photos}
        renderPhoto={NextJsImage}
        defaultContainerWidth={2000}
        sizes={{
          size: 'calc(100vw - 40px)',
          sizes: [
            { viewport: '(max-width: 299px)', size: 'calc(100vw - 10px)' },
            { viewport: '(max-width: 599px)', size: 'calc(100vw - 20px)' },
            { viewport: '(max-width: 1199px)', size: 'calc(100vw - 30px)' },
          ],
        }}
      />
    </div>
  );
};

export default WeddingGallery;
