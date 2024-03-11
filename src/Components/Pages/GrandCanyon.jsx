import Info from '../InfoSection';
import Gallery from '../Galeria';
import GranCanyon1 from '../../assets/Img/Grand Canyon/grand-canyon-1.avif'
import GranCanyon2 from '../../assets/Img/Grand Canyon/grand-canyon-2.avif'
import GranCanyon3 from '../../assets/Img/Grand Canyon/grand-canyon-3.avif'
import GranCanyon4 from '../../assets/Img/Grand Canyon/grand-canyon-4.avif'
import GranCanyon5 from '../../assets/Img/Grand Canyon/grand-canyon-5.avif'
import GranCanyon6 from '../../assets/Img/Grand Canyon/grand-canyon-6.avif'
import GranCanyon7 from '../../assets/Img/Grand Canyon/grand-canyon-7.avif'
import GranCanyon8 from '../../assets/Img/Grand Canyon/grand-canyon-8.avif'
import GranCanyon9 from '../../assets/Img/Grand Canyon/grand-canyon-9.avif'
import GranCanyon10 from '../../assets/Img/Grand Canyon/grand-canyon-10.avif'
import GranCanyon12 from '../../assets/Img/Grand Canyon/grand-canyon-12.avif'
import GranCanyonLogo from '../../assets/Img/Grand Canyon/grand-canyon-logo.avif'
import GranCanyonEntrance from '../../assets/Img/Grand Canyon/grand-canyon-national-park-entrance.avif'
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';

const items = [
    {
        image: GranCanyon1
    },
    {
        image: GranCanyon2
    },
    {
        image: GranCanyon3
    },
    {
        image: GranCanyon4
    },
    {
        image: GranCanyon5
    },
    {
        image: GranCanyon6
    },
    {
        image: GranCanyon7
    },
    {
        image: GranCanyon8
    },
    {
        image: GranCanyon9
    },
    {
        image: GranCanyon10
    },
    {
        image: GranCanyon12
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
                        Parque Nacional del Gran Cañón
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                    El Parque Nacional del Gran Cañón, ubicado en el norte de Arizona, es uno de los lugares más icónicos y visitados de Estados Unidos. Conocido por su espectacular paisaje de cañones profundos y multicolores, es una maravilla natural que deja a los visitantes sin aliento. El río Colorado serpentea a lo largo del fondo del cañón, creando una vista impresionante desde los numerosos miradores a lo largo de la cresta sur. 
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
                    imageSrc={GranCanyonLogo}
                    paragraph="El Parque Nacional del Gran Cañón es un monumento natural extraordinario que cautiva a millones de visitantes cada año con su imponente belleza y magnificencia. Situado en el norte de Arizona, este parque es el hogar de una de las maravillas naturales más impresionantes del mundo: el Gran Cañón. Con una longitud de aproximadamente 446 kilómetros y una profundidad que alcanza más de 1,800 metros, el cañón ofrece un espectáculo visual que desafía la imaginación."
                    imageLeft={true}
                />

                <Info
                    imageSrc={GranCanyonEntrance}
                    paragraph="Explorar el Gran Cañón es una experiencia inolvidable. Los visitantes pueden recorrer una variedad de senderos que serpentean a lo largo de los bordes del cañón o descender hasta el fondo para sumergirse en un mundo completamente diferente. Allí, el río Colorado serpentea entre las paredes del cañón, creando oasis de vegetación y proporcionando un contraste impresionante con los acantilados rocosos que se alzan a su alrededor."
                    imageLeft={false}
                />

                <Info
                    imageSrc={GranCanyon10}
                    paragraph="Los acantilados del Gran Cañón exhiben una asombrosa variedad de colores y texturas, que van desde tonos rojizos y amarillos hasta matices más suaves de rosa y púrpura, creando un paisaje de una belleza sobrecogedora. La erosión provocada por millones de años de actividad fluvial ha esculpido este paisaje único, dejando a la vista capas de roca que revelan la historia geológica de la Tierra."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
