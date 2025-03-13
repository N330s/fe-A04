import Link from 'next/link';

const TopMenuItem = ({title, pageRef} : {title: string, pageRef: string}) => {
  return (
    <div className = 'h-full w-auto'>
        <Link href = {pageRef} className = 'w-[150px] flex items-center justify-center text-xl text-white h-full'>
            {title}
        </Link>
    </div>
  );
};

export default TopMenuItem;