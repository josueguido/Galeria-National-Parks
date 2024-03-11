import Info from '../InfoSection';
import Gallery from '../Galeria';
import smoky2 from '../../assets/Img/Smoky Mountains/smoky-mountains-2.avif'
import smoky3 from '../../assets/Img/Smoky Mountains/smoky-mountains-3.avif'
import smoky4 from '../../assets/Img/Smoky Mountains/smoky-mountains-4.avif'
import smoky5 from '../../assets/Img/Smoky Mountains/smoky-mountains-5.avif'
import smoky6 from '../../assets/Img/Smoky Mountains/smoky-mountains-6.avif'
import smoky7 from '../../assets/Img/Smoky Mountains/smoky-mountains-7.avif'
import smoky8 from '../../assets/Img/Smoky Mountains/smoky-mountains-8.avif'
import smoky9 from '../../assets/Img/Smoky Mountains/smoky-mountains-9.avif'
import smoky10 from '../../assets/Img/Smoky Mountains/smoky-mountains-10.avif'
import smoky11 from '../../assets/Img/Smoky Mountains/smoky-mountains-11.avif'
import smoky12 from '../../assets/Img/Smoky Mountains/smoky-mountains-12.avif'
import smoky13 from '../../assets/Img/Smoky Mountains/smoky-mountains-13.avif'
import smoky14 from '../../assets/Img/Smoky Mountains/smoky-mountains-14.avif'
import smokylogo from '../../assets/Img/Smoky Mountains/smoky mountains logo.webp'
import smokyentrance from '../../assets/Img/Smoky Mountains/Smoky-Mountains-Entrance.avif'
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';

const items = [
    {
        image: smoky2
    },
    {
        image: smoky3
    },
    {
        image: smoky4
    },
    {
        image: smoky5
    },
    {
        image: smoky6
    },
    {
        image: smoky7
    },
    {
        image: smoky8
    },
    {
        image: smoky9
    },
    {
        image: smoky10
    },
    {
        image: smoky11
    },
    {
        image: smoky12
    },
    {
        image: smoky13
    },
    {
        image: smoky14
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
                        Parque Nacional de las Montañas Humeantes
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                        El Parque Nacional de las Montañas Humeantes es un destino natural impresionante ubicado en la frontera entre Carolina del Norte y Tennessee, en Estados Unidos. Cubriendo más de 500,000 acres de terreno montañoso, el parque es conocido por su densa vegetación, bosques de árboles caducifolios, y su bruma característica que le da nombre. Además, alberga una rica diversidad de vida silvestre, incluyendo osos negros, ciervos, pavos salvajes y una gran variedad de aves.
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
                    imageSrc={smokyentrance}
                    paragraph="Ubicado en la frontera entre Tennessee y Carolina del Norte, el Parque Nacional Great Smoky Mountains es uno de los tesoros naturales más preciados de los Estados Unidos. Con su extensa red de senderos, picos escarpados y bosques exuberantes, el parque atrae a millones de visitantes cada año en busca de aventuras al aire libre y paisajes impresionantes."
                    imageLeft={true}
                />

                <Info
                    imageSrc={smoky12}
                    paragraph="El paisaje del Great Smoky Mountains National Park está dominado por una cadena de montañas que se elevan sobre los valles y los ríos sinuosos. Estas montañas, cubiertas de densos bosques de árboles caducifolios, adquieren un esplendor especial durante el otoño, cuando las hojas cambian de color y pintan el paisaje con tonos vibrantes de rojo, naranja y amarillo."
                    imageLeft={false}
                />

                <Info
                    imageSrc={smokylogo}
                    paragraph="Parque Nacional Great Smoky Mountains también tiene una rica historia cultural. Numerosas cabañas históricas, molinos y lugares de interés se encuentran dispersos por todo el parque, ofreciendo a los visitantes la oportunidad de sumergirse en la historia de la región y aprender sobre la vida de los primeros colonos de los Apalaches."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
