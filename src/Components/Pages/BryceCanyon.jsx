import Info from '../InfoSection';
import Gallery from '../Galeria';
import BryceCanyon1 from '../../assets/Img/Bryce Canyon/bryce-canyon-1.avif'
import BryceCanyon2 from '../../assets/Img/Bryce Canyon/bryce-canyon-2.avif'
import BryceCanyon3 from '../../assets/Img/Bryce Canyon/bryce-canyon-3.avif'
import BryceCanyon4 from '../../assets/Img/Bryce Canyon/bryce-canyon-4.avif'
import BryceCanyon5 from '../../assets/Img/Bryce Canyon/bryce-canyon-5.avif'
import BryceCanyon6 from '../../assets/Img/Bryce Canyon/bryce-canyon-6.avif'
import BryceCanyon7 from '../../assets/Img/Bryce Canyon/bryce-canyon-7.avif'
import BryceCanyon8 from '../../assets/Img/Bryce Canyon/bryce-canyon-8.avif'
import BryceCanyon9 from '../../assets/Img/Bryce Canyon/bryce-canyon-9.avif'
import BryceCanyon10 from '../../assets/Img/Bryce Canyon/bryce-canyon-10.avif'
import BryceCanyon11 from '../../assets/Img/Bryce Canyon/bryce-canyon-11.avif'
import BryceCanyonLogo from '../../assets/Img/Bryce Canyon/bryce-canyon-logo.avif'
import BryceCanyonEntrance from '../../assets/Img/Bryce Canyon/bryce-canyon-national-park.avif'
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';


const items = [
    {
        image: BryceCanyon1
    },
    {
        image: BryceCanyon2
    },
    {
        image: BryceCanyon3
    },
    {
        image: BryceCanyon4
    },
    {
        image: BryceCanyon5
    },
    {
        image: BryceCanyon6
    },
    {
        image: BryceCanyon7
    },
    {
        image: BryceCanyon8
    },
    {
        image: BryceCanyon9
    },
    {
        image: BryceCanyon10
    },
    {
        image: BryceCanyon11
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
                        Parque Nacional Bryce Canyon
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                    El Parque Nacional Bryce Canyon, ubicado en el suroeste de Utah, Estados Unidos, es famoso por sus espectaculares formaciones rocosas conocidas como hoodoos. Estas estructuras de roca únicas, esculpidas por la erosión durante millones de años, crean un paisaje surrealista y de otro mundo. El parque ofrece una variedad de miradores y senderos que permiten a los visitantes explorar y admirar la belleza natural del cañón, con vistas impresionantes en cualquier momento del día pero especialmente al amanecer y al atardecer cuando la luz transforma las formaciones en tonos cálidos y vibrantes.
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
                    imageSrc={BryceCanyonLogo}
                    paragraph="El Parque Nacional Bryce Canyon, situado en el sur de Utah, es un verdadero espectáculo de la naturaleza que parece sacado de un mundo de fantasía. Conocido por su impresionante colección de formaciones rocosas únicas, llamadas hoodoos, este parque ofrece a los visitantes una experiencia verdaderamente surrealista."
                    imageLeft={true}
                />

                <Info
                    imageSrc={BryceCanyonEntrance}
                    paragraph="Los hoodoos son pilares rocosos erosionados que se elevan desde el suelo del cañón en una variedad de formas y tamaños, creando un paisaje que parece sacado de otro planeta. Estas estructuras de roca, talladas por millones de años de viento, agua y actividad geológica, exhiben una rica paleta de colores que van desde el rojo intenso hasta el naranja brillante y el blanco perlado, especialmente impresionantes durante el amanecer y el atardecer cuando la luz juega con las formas y sombras."
                    imageLeft={false}
                />

                <Info
                    imageSrc={BryceCanyon7}
                    paragraph="Explorar Bryce Canyon es como entrar en un laberinto de maravillas naturales. Los visitantes pueden recorrer una variedad de senderos que serpentean entre los hoodoos, ofreciendo vistas panorámicas de los acantilados, cañones y valles que componen este paisaje extraordinario. Desde puntos de observación como Sunrise Point, Sunset Point y Inspiration Point, se puede contemplar la vastedad del cañón y la intrincada belleza de sus formaciones rocosas."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
