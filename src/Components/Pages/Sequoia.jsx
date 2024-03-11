import Info from '../InfoSection';
import Gallery from '../Galeria';
import Sequoia1 from '../../assets/Img/Sequoia/sequoia-1.avif'
import Sequoia2 from '../../assets/Img/Sequoia/sequoia-2.avif'
import Sequoia3 from '../../assets/Img/Sequoia/sequoia-3.avif'
import Sequoia4 from '../../assets/Img/Sequoia/sequoia-4.avif'
import Sequoia5 from '../../assets/Img/Sequoia/sequoia-5.avif'
import Sequoia6 from '../../assets/Img/Sequoia/sequoia-6.avif'
import Sequoia7 from '../../assets/Img/Sequoia/sequoia-7.avif'
import Sequoia8 from '../../assets/Img/Sequoia/sequoia-8.avif'
import Sequoia9 from '../../assets/Img/Sequoia/sequoia-9.avif'
import Sequoia10 from '../../assets/Img/Sequoia/sequoia-10.avif'
import Sequoia11 from '../../assets/Img/Sequoia/sequoia-11.avif'
import Sequoia12 from '../../assets/Img/Sequoia/sequoia-12.avif'
import Sequoia13 from '../../assets/Img/Sequoia/sequoia-13.avif'
import Sequoia14 from '../../assets/Img/Sequoia/sequoia-14.avif'
import SequoiaLogo from '../../assets/Img/Sequoia/sequoia-national-park-logo.avif'
import SequoiaEntrance from '../../assets/Img/Sequoia/sequoia-national-park-entrance.avif'
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';




const items = [
    {
        image: Sequoia1
    },
    {
        image: Sequoia2
    },
    {
        image: Sequoia3
    },
    {
        image: Sequoia4
    },
    {
        image: Sequoia5
    },
    {
        image: Sequoia6
    },
    {
        image: Sequoia7
    },
    {
        image: Sequoia8
    },
    {
        image: Sequoia9
    },
    {
        image: Sequoia10
    },
    {
        image: Sequoia11
    },
    {
        image: Sequoia12
    },
    {
        image: Sequoia13
    },
    {
        image: Sequoia14
    },
];

const ParkInfo = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <article >
            <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                    <h1 className="relative z-10 text-base md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                        Parque Nacional de las Secuoyas
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                        El Parque Nacional de las Secuoyas, ubicado en California, es hogar de algunas de las secuoyas más grandes del mundo. Con más de 400,000 acres de terreno montañoso, este parque es conocido por su emblemático bosque de secuoyas gigantes, incluido el famoso General Sherman, el árbol más grande del mundo por volumen. Además de estas majestuosas secuoyas, el parque ofrece una gran diversidad de paisajes, desde altas cumbres hasta cañones profundos, cascadas espectaculares y una abundante vida silvestre que incluye osos negros, ciervos y pumas.
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

            <section>
                <Info
                    imageSrc={SequoiaLogo}
                    paragraph="El Parque Nacional Sequoia, ubicado en la parte sur de la Sierra Nevada de California, es un tesoro natural que cautiva con su imponente belleza y su increíble diversidad biológica. En el corazón de este parque se encuentran los bosques de secuoyas gigantes, donde se alzan algunos de los árboles más grandes del mundo, incluido el famoso General Sherman, un coloso que se eleva hacia el cielo con una majestuosidad imponente. Estos árboles antiguos, algunos con más de 2,000 años de edad, crean un paisaje surrealista de troncos gigantescos y copas que se pierden en el dosel forestal."
                    imageLeft={true}
                />

                <Info
                    imageSrc={Sequoia11}
                    paragraph="El Parque Nacional Sequoia ofrece una variedad de paisajes impresionantes, desde altas crestas montañosas hasta cañones profundos y ríos rugientes. El imponente Monte Whitney, el pico más alto de los Estados Unidos contiguos, se eleva majestuosamente en el horizonte, ofreciendo desafíos épicos para los escaladores y vistas panorámicas para aquellos que se aventuran a sus faldas."
                    imageLeft={false}
                />

                <Info
                    imageSrc={SequoiaEntrance}
                    paragraph="La vida silvestre abunda en el Parque Nacional Sequoia, con una variedad de especies que encuentran refugio en sus vastos bosques y prados alpinos. Ciervos, osos negros, pumas y una multitud de aves y pequeños mamíferos llaman a este parque su hogar, contribuyendo a su rica biodiversidad. "
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
