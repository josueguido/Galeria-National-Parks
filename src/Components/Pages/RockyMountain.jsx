import Info from '../InfoSection';
import Gallery from '../Galeria';
import Rocky1 from '../../assets/Img/Rocky Mountains/rocky-mountain-1.avif'
import Rocky2 from '../../assets/Img/Rocky Mountains/rocky-mountain-2.avif'
import Rocky3 from '../../assets/Img/Rocky Mountains/rocky-mountain-3.avif'
import Rocky4 from '../../assets/Img/Rocky Mountains/rocky-mountain-4.avif'
import Rocky5 from '../../assets/Img/Rocky Mountains/rocky-mountain-5.avif'
import Rocky6 from '../../assets/Img/Rocky Mountains/rocky-mountain-6.avif'
import Rocky7 from '../../assets/Img/Rocky Mountains/rocky-mountain-7.avif'
import Rocky8 from '../../assets/Img/Rocky Mountains/rocky-mountain-8.avif'
import Rocky9 from '../../assets/Img/Rocky Mountains/rocky-mountain-9.avif'
import Rocky10 from '../../assets/Img/Rocky Mountains/rocky-mountain-10.avif'
import Rocky11 from '../../assets/Img/Rocky Mountains/rocky-mountain-11.avif'
import Rocky12 from '../../assets/Img/Rocky Mountains/rocky-mountain-12.avif'
import Rocky13 from '../../assets/Img/Rocky Mountains/rocky-mountain-13.avif'
import Rocky14 from '../../assets/Img/Rocky Mountains/rocky-mountain-14.avif'
import RockyLogo from '../../assets/Img/Rocky Mountains/rocky-mountain-logo.avif'
import RockyEntrance from '../../assets/Img/Rocky Mountains/rocky-mountain-entrance.avif'
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';

const items = [
    {
        image: Rocky1
    },
    {
        image: Rocky2
    },
    {
        image: Rocky3
    },
    {
        image: Rocky4
    },
    {
        image: Rocky5
    },
    {
        image: Rocky6
    },
    {
        image: Rocky7
    },
    {
        image: Rocky8
    },
    {
        image: Rocky9
    },
    {
        image: Rocky10
    },
    {
        image: Rocky11
    },
    {
        image: Rocky12
    },
    {
        image: Rocky13
    },
    {
        image: Rocky14
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
                        Parque Nacional de las Montañas Rocosas
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                        Las Montañas Rocosas, también conocidas como las Rockies, son una icónica cordillera que se extiende por América del Norte, desde Canadá hasta Estados Unidos. Este sistema montañoso ofrece paisajes impresionantes, que incluyen picos nevados, valles profundos, lagos cristalinos y una diversidad única de flora y fauna. Las Rocky Mountains son un destino popular para actividades al aire libre, como senderismo, esquí, rafting y observación de vida silvestre, y son el hogar de numerosos parques nacionales y áreas protegidas, que incluyen el Parque Nacional Rocky Mountain en Colorado y el Parque Nacional de Yellowstone en Wyoming.
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
                    imageSrc={RockyLogo}
                    paragraph=" Las Montañas Rocosas, o Rocky Mountains en inglés, son una cadena montañosa emblemática que se extiende a lo largo de América del Norte, desde el norte de México hasta el noroeste de Canadá. Este majestuoso sistema montañoso es reconocido por sus imponentes picos, extensos bosques, ríos cristalinos y una biodiversidad única."
                    imageLeft={true}
                />

                <Info
                    imageSrc={RockyEntrance}
                    paragraph="Una característica distintiva de las Montañas Rocosas es su increíble diversidad geológica y ecológica. Desde desiertos de altitud hasta densos bosques de coníferas y praderas alpinas, este ecosistema diverso alberga una amplia gama de especies animales y vegetales, incluyendo osos, alces, ciervos, pumas, águilas y muchas más."
                    imageLeft={false}
                />

                <Info
                    imageSrc={Rocky7}
                    paragraph="En Estados Unidos, las Montañas Rocosas atraviesan varios estados, incluyendo Colorado, Wyoming, Montana, Idaho y Nuevo México, ofreciendo una amplia variedad de paisajes y actividades al aire libre para los visitantes. Desde la emblemática cordillera de Sawatch en Colorado, con sus cumbres que superan los 4,000 metros de altura, hasta el Parque Nacional de Yellowstone en Wyoming, hogar de géiseres, fuentes termales y una abundante vida silvestre, las Rocky Mountains son un paraíso para los amantes de la naturaleza y los entusiastas de las actividades al aire libre."
                    imageLeft={true}
                />

                <Info
                    imageSrc={Rocky11}
                    paragraph="Para los aventureros, las Montañas Rocosas ofrecen una amplia gama de actividades, como senderismo, escalada en roca, ciclismo de montaña, pesca, rafting y esquí, entre otras. Ya sea explorando pintorescos pueblos de montaña, recorriendo escénicas carreteras panorámicas o sumergiéndose en la serenidad de la naturaleza, las Rocky Mountains prometen una experiencia inolvidable para todos aquellos que buscan conectar con el esplendor natural del mundo."
                    imageLeft={false}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
