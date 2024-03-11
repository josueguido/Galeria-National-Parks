import Info from '../InfoSection';
import Gallery from '../Galeria';
import Glacier from '../../assets/Img/Glacier/glacier.avif'
import Glacier2 from '../../assets/Img/Glacier/glacier-2.avif'
import Glacier3 from '../../assets/Img/Glacier/glacier-3.avif'
import Glacier4 from '../../assets/Img/Glacier/glacier-4.avif'
import Glacier5 from '../../assets/Img/Glacier/glacier-5.avif'
import Glacier6 from '../../assets/Img/Glacier/glacier-6.avif'
import Glacier7 from '../../assets/Img/Glacier/glacier-7.avif'
import Glacier8 from '../../assets/Img/Glacier/glacier-8.avif'
import Glacier9 from '../../assets/Img/Glacier/glacier-9.avif'
import Glacier11 from '../../assets/Img/Glacier/glacier-11.avif'
import Glacier12 from '../../assets/Img/Glacier/glacier-12.avif'
import Glacier13 from '../../assets/Img/Glacier/glacier-13.avif'
import Glacierlogo from '../../assets/Img/Glacier/glacier-logo.avif'
import Glacierentrance from '../../assets/Img/Glacier/glacier-national-park-entrance.avif'
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';

const items = [
    {
        image: Glacier
    },
    {
        image: Glacier2
    },
    {
        image: Glacier3
    },
    {
        image: Glacier4
    },
    {
        image: Glacier5
    },
    {
        image: Glacier6
    },
    {
        image: Glacier7
    },
    {
        image: Glacier8
    },
    {
        image: Glacier9
    },
    {
        image: Glacier11
    },
    {
        image: Glacier12
    },
    {
        image: Glacier13
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
                        Parque Nacional Glacier
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                        El Parque Nacional Glacier, ubicado en el estado de Montana, Estados Unidos, es un tesoro natural con paisajes de montañas majestuosas, glaciares imponentes y lagos cristalinos. Con más de un millón de acres de extensión, este parque es un paraíso para los amantes de la naturaleza y los entusiastas del aire libre. Glacier alberga más de 130 glaciares, incluyendo el espectacular Glaciar Jackson y el Glaciar Grinnell, así como una variedad de vida silvestre, como osos grizzly, alces, cabras montesas y águilas calvas.
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
                    imageSrc={Glacierentrance}
                    paragraph="
                    En la frontera entre Estados Unidos y Canadá, el Parque Nacional Glacier se alza como un santuario de belleza salvaje y majestuosidad natural. Sus vastas extensiones de montañas escarpadas, profundos valles glaciares y exuberantes bosques de coníferas crean un paisaje impresionante que deja a los visitantes maravillados. Los picos cubiertos de nieve se elevan hacia el cielo azul, reflejándose en los cristalinos lagos alpinos que puntean el paisaje."
                    imageLeft={true}
                />

                <Info
                    imageSrc={Glacier12}
                    paragraph="El parque es hogar de más de 130 glaciares, que esculpen el terreno con su lento avance y dan al parque su nombre característico. Entre ellos se encuentra el majestuoso Glaciar Jackson, una masa de hielo imponente que se derrama en un valle en forma de U, dejando a su paso un rastro de morrenas y lagos glaciares. Estos cuerpos de agua, como el pintoresco Lago McDonald y el sereno Lago Saint Mary, ofrecen oportunidades para la recreación y la contemplación en un entorno natural incomparable."
                    imageLeft={false}
                />

                <Info
                    imageSrc={Glacierlogo}
                    paragraph="El Parque Nacional Glacier es también un refugio para una sorprendente variedad de vida silvestre, incluidos osos grizzly, alces, ciervos y cabras de montaña. Los visitantes pueden encontrarse con estos magníficos animales mientras exploran los numerosos senderos de senderismo y disfrutan de la espectacular belleza del paisaje. Además, el parque ofrece una red de carreteras panorámicas que permiten acceder fácilmente a algunos de los puntos más destacados, como el famoso Camino al Sol y la espectacular Carretera de la Línea Divisoria."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
