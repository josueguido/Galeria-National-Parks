import Gallery from '../Galeria';
import Info from '../InfoSection';
import yosemite from '../../assets/Img/Yosemite/yosemite np.avif';
import yosemite1 from '../../assets/Img/Yosemite/yosemite.avif';
import yosemite2 from '../../assets/Img/Yosemite/yosemite2.avif';
import yosemite3 from '../../assets/Img/Yosemite/yosemite3.avif';
import yosemite4 from '../../assets/Img/Yosemite/yosemite4.avif';
import yosemite5 from '../../assets/Img/Yosemite/yosemite5.avif';
import yosemite6 from '../../assets/Img/Yosemite/yosemite6.avif';
import yosemite7 from '../../assets/Img/Yosemite/yosemite7.avif';
import yosemite9 from '../../assets/Img/Yosemite/yosemite9.avif';
import yosemite10 from '../../assets/Img/Yosemite/yosemite10.avif';
import yosemite11 from '../../assets/Img/Yosemite/yosemite11.avif';
import yosemite12 from '../../assets/Img/Yosemite/yosemite12.avif';
import yosemite13 from '../../assets/Img/Yosemite/yosemite13.avif';
import yosemite14 from '../../assets/Img/Yosemite/yosemite14.avif';
import yosemite15 from '../../assets/Img/Yosemite/yosemite15.avif';
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';



const items = [
    {
        image: yosemite1
    },
    {
        image: yosemite2
    },
    {
        image: yosemite3
    },
    {
        image: yosemite4
    },
    {
        image: yosemite5
    },
    {
        image: yosemite6
    },
    {
        image: yosemite7
    },

    {
        image: yosemite9
    },
    {
        image: yosemite10
    },
    {
        image: yosemite11
    },
    {
        image: yosemite12
    },
    {
        image: yosemite13
    },
    {
        image: yosemite14
    },

];

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);


    return (
        <article>
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                    <h1 className="relative z-10 text-base md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                        Parque Nacional Yosemite
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                    Yosemite es un icónico parque nacional ubicado en el este de California, abarcando aproximadamente 750,000 acres de majestuosos paisajes de montañas, cascadas, bosques de secuoyas y prados alpinos. Es famoso por el Valle de Yosemite, el domo de granito El Capitán, las cataratas de Yosemite y su biodiversidad única que incluye osos negros, pumas y ciervos de cola blanca.
                    </p>
                </div>
                <BackgroundBeams />
            </div>
          

            <div>
                <Gallery items={items} />
            </div>

            <div className="overflow: hidden;">
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: '#00e8d1', width: '100%', height: 45, transform: 'rotate(180deg) scaleX(-1)' }}
                >
                    <path
                        d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
                        opacity=".25"
                    />
                    <path
                        d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                        opacity=".5"
                    />
                    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
                </svg>
            </div>


            <Info
                imageSrc={yosemite}
                paragraph="En el corazón de la Sierra Nevada de California, se encuentra el icónico Parque Nacional Yosemite, un paraíso natural que deja a los visitantes sin aliento con su magnífica belleza. Con sus imponentes acantilados de granito, cascadas rugientes, frondosos bosques de secuoyas y prados exuberantes, Yosemite es un lugar de asombroso esplendor que ha inspirado a generaciones de aventureros, artistas y amantes de la naturaleza."
                imageLeft={true}
            />

            <Info
                imageSrc={yosemite2}
                paragraph="Los famosos acantilados de granito del valle de Yosemite, como El Capitán y Half Dome, dominan el paisaje con su presencia imponente y majestuosa, atrayendo a escaladores de todo el mundo en busca de desafíos épicos. Las cascadas, como la impresionante Yosemite Falls, que se precipitan desde alturas vertiginosas, llenan el aire con su estruendoso rugido y crean un espectáculo visual impresionante."
                imageLeft={false}
            />


            <Info
                imageSrc={yosemite15}
                paragraph="El Parque Nacional Yosemite es también un refugio para una diversidad asombrosa de vida silvestre, desde ciervos y osos negros hasta el amenazado búho manchado. Sus bosques de secuoyas gigantes, como el Bosque de Mariposas, albergan árboles milenarios que se alzan hacia el cielo con una majestuosidad casi celestial."
                imageLeft={true}
            />

            <Info
                imageSrc={yosemite6}
                paragraph="Los visitantes de Yosemite pueden explorar este paraíso natural de diversas maneras, ya sea recorriendo sus numerosos senderos de senderismo, acampando bajo un cielo estrellado, o simplemente admirando la belleza natural desde los miradores panorámicos. Además, el parque ofrece una rica historia cultural, con sitios como las aldeas de nativos americanos Ahwahneechee y las cabañas históricas de pioneros que añaden una capa adicional de profundidad a la experiencia."
                imageLeft={false}
            />
        </article>
    );
}

export default App;
