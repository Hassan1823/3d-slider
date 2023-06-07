import type { NextPage } from 'next';
import Head from 'next/head';

import Image from 'next/image';

import card1 from '../public/Product Card 1.svg';
import card2 from '../public/Product Card 2.svg';
import card3 from '../public/Product Card 3.svg';
import Carousel from './Carousel/Carousel';

const imagesItems = [
  <Image className="h-full w-full" src={card1} alt="teste" />,
  <Image className="h-full w-full" src={card2} alt="teste" />,
  <Image className="h-full w-full" src={card3} alt="teste" />,
];

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-bg text-white">
      <Head>
        <title>3D Slider</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center h-screen">
        
        <Carousel items={imagesItems} />
      </main>
    </div>
  );
};

export default Home;
