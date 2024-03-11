import Info from '../InfoSection';
import Gallery from '../Galeria';
import banff from '../../assets/Img/Banff/banff.avif'
import banff1 from '../../assets/Img/Banff/banff1.avif'
import banff2 from '../../assets/Img/Banff/banff2.avif'
import banff3 from '../../assets/Img/Banff/banff3.avif'
import banff4 from '../../assets/Img/Banff/banff4.avif'
import banff5 from '../../assets/Img/Banff/banff5.avif'
import banff6 from '../../assets/Img/Banff/banff6.avif'
import banff7 from '../../assets/Img/Banff/banff7.avif'
import banff8 from '../../assets/Img/Banff/banff8.avif'
import banff9 from '../../assets/Img/Banff/banff9.avif'
import banff10 from '../../assets/Img/Banff/banff10.avif'
import banff11 from '../../assets/Img/Banff/banff11.avif'
import banff12 from '../../assets/Img/Banff/banff12.avif'
import banff13 from '../../assets/Img/Banff/banff13.avif'
import banff14 from '../../assets/Img/Banff/banff14.avif'
import banffentrance from '../../assets/Img/Banff/banff entrance.avif'
import Banfflogo from '../../assets/Img/Banff/Banff National Park.avif'
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';


const items = [
    {
        image: banff1
    },
    {
        image: banff2
    },
    {
        image: banff3
    },
    {
        image: banff4
    },
    {
        image: banff5
    },
    {
        image: banff6
    },
    {
        image: banff7
    },
    {
        image: banff8
    },
    {
        image: banff9
    },
    {
        image: banff10
    },
    {
        image: banff11
    },
    {
        image: banff12
    },
    {
        image: banff13
    },
    {
        image: banff14
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
                        Parque Nacional Banff
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                        El Parque Nacional Banff, situado en las majestuosas Montañas Rocosas de Alberta, Canadá, es uno de los destinos naturales más impresionantes del mundo. Con sus espectaculares paisajes de montañas, lagos cristalinos, glaciares imponentes y una abundante vida silvestre, Banff ofrece una experiencia inolvidable para los amantes de la naturaleza y los entusiastas del aire libre.
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
                    imageSrc={Banfflogo}
                    paragraph="
                    En el corazón de las majestuosas Montañas Rocosas de Canadá, se encuentra el icónico Parque Nacional Banff, un verdadero tesoro natural que cautiva a visitantes de todo el mundo con su asombrosa belleza. Este parque, el primero de su tipo en Canadá y el tercero en el mundo, es un santuario de vida silvestre, glaciares centenarios, cristalinos lagos de color turquesa y una variedad de picos montañosos que alcanzan el cielo."
                    imageLeft={true}
                />

                <Info
                    imageSrc={banff10}
                    paragraph="Los paisajes del Parque Nacional Banff son una sinfonía visual que despierta los sentidos y alimenta el alma. Las montañas imponentes se alzan majestuosamente, adornadas con mantos de nieve eterna, mientras que los valles verdes y exuberantes ofrecen un contraste impresionante. Glaciares como el Athabasca y el Columbia se deslizan lentamente por las laderas, tallando el paisaje con su poderoso avance."
                    imageLeft={false}
                />

                <Info
                    imageSrc={banff1}
                    paragraph="Los lagos de aguas cristalinas son verdaderos joyas en el paisaje de Banff. El Lago Louise, con su icónico color turquesa, refleja las montañas circundantes en una imagen de serenidad incomparable. El Lago Moraine, con su vibrante tono azul, es un espectáculo que parece sacado de un sueño. Estos cuerpos de agua no solo son hermosos a la vista, sino que también albergan una rica diversidad de vida silvestre, desde osos grizzly hasta águilas calvas."
                    imageLeft={true}
                />

                <Info
                    imageSrc={banff}
                    paragraph="Los visitantes del Parque Nacional Banff tienen la oportunidad de explorar este paraíso natural de diversas maneras. Senderismo, escalada, esquí, ciclismo de montaña y paseos en bote son solo algunas de las actividades disponibles para aquellos que deseen sumergirse en la belleza y la aventura que ofrece este lugar único. Además, los pueblos encantadores como Banff y Lake Louise brindan comodidades modernas y una cálida hospitalidad en medio de este entorno natural impresionante."
                    imageLeft={false}
                />

                <Info
                    imageSrc={banffentrance}
                    paragraph="Parque Nacional Banff es mucho más que un destino turístico; es un santuario de la naturaleza que inspira admiración y asombro en todos los que tienen el privilegio de visitarlo. Con su impresionante belleza y su abundante biodiversidad, Banff es verdaderamente un tesoro nacional y una maravilla del mundo natural que merece ser explorada y protegida para las generaciones venideras."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
