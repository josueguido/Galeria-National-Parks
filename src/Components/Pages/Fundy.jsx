import Info from '../InfoSection';
import Gallery from '../Galeria';
import Fundy1 from '../../assets//Img/Fundy/fundy-1.avif'
import Fundy2 from '../../assets//Img/Fundy/fundy-2.avif'
import Fundy3 from '../../assets//Img/Fundy/fundy-3.avif'
import Fundy4 from '../../assets//Img/Fundy/fundy-4.avif'
import Fundy5 from '../../assets//Img/Fundy/fundy-5.avif'
import Fundy6 from '../../assets//Img/Fundy/fundy-6.avif'
import Fundy7 from '../../assets//Img/Fundy/fundy-7.avif'
import Fundy9 from '../../assets//Img/Fundy/fundy-9.avif'
import Fundy11 from '../../assets//Img/Fundy/fundy-11.avif'
import Fundy12 from '../../assets//Img/Fundy/fundy-12.avif'
import Fundy13 from '../../assets//Img/Fundy/fundy-13.avif'
import FundyEntrance from '../../assets//Img/Fundy/fundy-entrance.avif'
import FundyLogo from '../../assets//Img/Fundy/fundy-logo.avif'
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';


const items = [
    {
        image: Fundy1
    },
    {
        image: Fundy2
    },
    {
        image: Fundy3
    },
    {
        image: Fundy4
    },
    {
        image: Fundy5
    },
    {
        image: Fundy6
    },
    {
        image: Fundy7
    },
    {
        image: Fundy9
    },
    {
        image: Fundy11
    },
    {
        image: Fundy12
    },
    {
        image: Fundy13
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
                        Parque Nacional Fundy
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                        El Parque Nacional Fundy, situado en la provincia de Nuevo Brunswick, Canadá, es conocido por tener las mareas más altas del mundo. Las impresionantes mareas de la Bahía de Fundy crean un paisaje cambiante, donde las costas rocosas se sumergen y emergen dos veces al día. Además de las mareas, el parque ofrece espectaculares acantilados, bosques exuberantes, y una variedad única de flora y fauna. Los visitantes pueden disfrutar de una amplia gama de actividades, como senderismo por los senderos costeros, avistamiento de ballenas en la bahía, y exploración de las formaciones rocosas en la playa. El Parque Nacional Fundy es un destino imprescindible para aquellos que buscan experimentar la maravilla de la naturaleza en constante cambio.
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
                    imageSrc={FundyLogo}
                    paragraph="Fundy National Park, ubicado en la provincia de Nuevo Brunswick, Canadá, es un destino emblemático que cautiva a los visitantes con su espectacular paisaje costero, su rica biodiversidad y sus fenómenos naturales únicos. Designado como Reserva de la Biosfera por la UNESCO, este parque es conocido por tener las mareas más altas del mundo, junto con una belleza natural impresionante."
                    imageLeft={true}
                />

                <Info
                    imageSrc={FundyEntrance}
                    paragraph="El Parque Nacional Fundy se extiende a lo largo de la costa de la Bahía de Fundy, donde las mareas fluctúan hasta 16 metros dos veces al día, creando un paisaje cambiante y dinámico. Durante la marea baja, los visitantes pueden explorar vastas extensiones de playa, descubriendo cuevas marinas, formaciones rocosas únicas y fósiles de hace millones de años. Mientras que durante la marea alta, el agua del océano regresa, transformando el paisaje en un espectáculo acuático asombroso."
                    imageLeft={false}
                />

                <Info
                    imageSrc={Fundy9}
                    paragraph="Fundy National Park ofrece una variedad de actividades al aire libre para los visitantes. Los senderos para caminatas serpentean a través de densos bosques, cascadas escénicas y valles pintorescos, brindando oportunidades para avistar vida silvestre, como alces, osos negros y una variedad de aves. También hay opciones para practicar kayak en los ríos y fiordos del parque, así como para acampar en áreas designadas para disfrutar de la naturaleza en su máxima expresión."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
