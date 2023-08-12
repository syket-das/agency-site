import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
  img: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link, img }) => (
  <div>
    <Image
      src={img}
      alt={name}
      width={1366}
      height={1366}
      className="rounded-full mx-auto shadow-xl filter grayscale  hover:grayscale-0 transition duration-500 ease-in-out"
    />
    <div className="text-2xl xl:text-3xl">{name}</div>
    <div className="text-xl">
      <Link href={link}>
        <a target="_blank">{socialId}</a>
      </Link>
    </div>
  </div>
);

export default Member;
