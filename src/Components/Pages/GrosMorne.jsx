import Info from '../InfoSection';
import Gallery from '../Galeria';
import GrosMorne1 from '../../assets/Img/Gros Morne/gros-morne-1.avif'
import GrosMorne2 from '../../assets/Img/Gros Morne/gros-morne-2.avif'
import GrosMorne3 from '../../assets/Img/Gros Morne/gros-morne-3.avif'
import GrosMorne4 from '../../assets/Img/Gros Morne/gros-morne-4.avif'
import GrosMorne5 from '../../assets/Img/Gros Morne/gros-morne-5.avif'
import GrosMorne6 from '../../assets/Img/Gros Morne/gros-morne-6.avif'
import GrosMorne7 from '../../assets/Img/Gros Morne/gros-morne-7.avif'
import GrosMorne8 from '../../assets/Img/Gros Morne/gros-morne-8.avif'
import GrosMorne9 from '../../assets/Img/Gros Morne/gros-morne-9.avif'
import GrosMorne10 from '../../assets/Img/Gros Morne/gros-morne-10.avif'
import GrosMorne11 from '../../assets/Img/Gros Morne/gros-morne-11.avif'
import GrosMorne12 from '../../assets/Img/Gros Morne/gros-morne-12.avif'
import GrosMorne13 from '../../assets/Img/Gros Morne/gros-morne-13.avif'
import GrosMorneLogo from '../../assets/Img/Gros Morne/gros-morne-logo.avif'
import GrosMorneEntrance from '../../assets/Img/Gros Morne/gros-morne-national-park.avif'
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';

const items = [
    {
        image: GrosMorne1
    },
    {
        image: GrosMorne2
    },
    {
        image: GrosMorne3
    },
    {
        image: GrosMorne4
    },
    {
        image: GrosMorne5
    },
    {
        image: GrosMorne6
    },
    {
        image: GrosMorne7
    },
    {
        image: GrosMorne8
    },
    {
        image: GrosMorne9
    },
    {
        image: GrosMorne10
    },
    {
        image: GrosMorne11
    },
    {
        image: GrosMorne12
    },
    {
        image: GrosMorne13
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
                        Parque Nacional Gros Morne
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                        El Parque Nacional Gros Morne, situado en la costa oeste de la isla de Terranova, en Canadá, Con montañas escarpadas, fiordos glaciares, lagos cristalinos, bosques boreales y una costa rocosa. Gros Morne es un paraíso para los amantes de la naturaleza y los entusiastas del aire libre. Este parque también es el hogar de una diversa vida silvestre, incluyendo alces, osos negros y águilas calvas. Los visitantes pueden disfrutar de una amplia gama de actividades, como senderismo, kayak, observación de ballenas, avistamiento de icebergs y excursiones guiadas para aprender sobre la geología única de la región.
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
                    imageSrc={GrosMorneLogo}
                    paragraph="Gros Morne National Park, ubicado en la costa oeste de la isla de Terranova, Canadá, es un destino de belleza incomparable que combina paisajes dramáticos, una rica historia geológica y una biodiversidad única. Designado como Patrimonio de la Humanidad por la UNESCO, este parque ofrece a los visitantes una experiencia verdaderamente sobrecogedora en el corazón de la región atlántica de Canadá."
                    imageLeft={true}
                />

                <Info
                    imageSrc={GrosMorneEntrance}
                    paragraph="Gros Morne alberga una biodiversidad excepcional, que incluye una variedad de hábitats terrestres y marinos. Desde densos bosques de abetos y abedules hasta praderas alpinas y humedales costeros, este parque ofrece refugio a una variedad de especies animales, incluyendo alces, caribúes, osos negros y una variedad de aves marinas."
                    imageLeft={false}
                />

                <Info
                    imageSrc={GrosMorne6}
                    paragraph="El paisaje de Gros Morne es dominado por los icónicos fiordos y acantilados que se elevan majestuosamente desde el océano Atlántico. Estas formaciones rocosas impresionantes son el resultado de millones de años de actividad geológica, incluyendo la tectónica de placas y la erosión glacial, que han creado un paisaje de una belleza única en el mundo. El punto culminante del parque es el Gros Morne, un pico imponente que se eleva a más de 800 metros sobre el nivel del mar, ofreciendo vistas panorámicas impresionantes de los alrededores."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
