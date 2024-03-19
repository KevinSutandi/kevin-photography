import Image from 'next/image';
import type { RenderPhotoProps } from 'react-photo-album';

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image
        fill
        src={photo}
        quality={30}
        placeholder='blur'
        priority
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}
