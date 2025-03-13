import styles from './card.module.css';
import Image from 'next/image';

const Card = ( {venueName, imgSrc} : {venueName : string, imgSrc : string}) => {
  return (
    <div className='w-1/4 h-[400px] rounded-lg shadow-lg border'>
      <div className='w-full h-[70%] relative rounded-t-lg'>
        <Image src={imgSrc} alt="The Bloom Pavilion" fill={true} className='object-cover rounded-t-lg' />
      </div>
      <div className = 'w-full h-[30%] p-[10px] text-2xl'>{venueName}</div>
    </div>
  );
};

export default Card;