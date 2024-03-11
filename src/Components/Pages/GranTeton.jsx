import Info from '../InfoSection';
import Gallery from '../Galeria';
import GranTeton from '../../assets/Img/Gran teton/gran teton.avif'
import GranTeton1 from '../../assets/Img/Gran teton/grand-teton-1.avif'
import GranTeton2 from '../../assets/Img/Gran teton/grand-teton-2.avif'
import GranTeton3 from '../../assets/Img/Gran teton/grand-teton-3.avif'
import GranTeton4 from '../../assets/Img/Gran teton/grand-teton-4.avif'
import GranTeton5 from '../../assets/Img/Gran teton/grand-teton-5.avif'
import GranTeton6 from '../../assets/Img/Gran teton/grand-teton-6.avif'
import GranTeton7 from '../../assets/Img/Gran teton/grand-teton-7.avif'
import GranTeton8 from '../../assets/Img/Gran teton/grand-teton-8.avif'
import GranTeton9 from '../../assets/Img/Gran teton/grand-teton-9.avif'
import GranTeton10 from '../../assets/Img/Gran teton/grand-teton-10.avif'
import GranTeton11 from '../../assets/Img/Gran teton/grand-teton-11.avif'
import GranTeton12 from '../../assets/Img/Gran teton/grand-teton-12.avif'
import GranTeton13 from '../../assets/Img/Gran teton/grand-teton-13.avif'
import GranTeton14 from '../../assets/Img/Gran teton/grand-teton-14.avif'
import GranTetonEntrance from '../../assets/Img/Gran teton/grand-teton-entrance.avif'
import GranTetonLogo from '../../assets/Img/Gran teton/grand-teton-logo.avif'
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';


const items = [
    {
        image: GranTeton
    },
    {
        image: GranTeton1
    },
    {
        image: GranTeton2
    },
    {
        image: GranTeton3
    },
    {
        image: GranTeton4
    },
    {
        image: GranTeton5
    },
    {
        image: GranTeton6
    },
    {
        image: GranTeton7
    },
    {
        image: GranTeton8
    },
    {
        image: GranTeton9
    },
    {
        image: GranTeton10
    },
    {
        image: GranTeton11
    },
    {
        image: GranTeton12
    },

    {
        image: GranTeton13
    },
    {
        image: GranTeton14
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
                        Parque Nacional Grand Teton
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                        El Parque Nacional Grand Teton, ubicado en el noroeste de Wyoming, es un tesoro natural conocido por sus impresionantes montañas, lagos cristalinos y una rica diversidad de vida silvestre. La majestuosa cordillera Teton se eleva abruptamente desde el valle, creando un paisaje espectacular que atrae a excursionistas, escaladores, fotógrafos y amantes de la naturaleza de todo el mundo.
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
                    imageSrc={GranTetonLogo}
                    paragraph="El Parque Nacional de Grand Teton, ubicado en el noroeste de Wyoming, es un santuario de belleza natural que evoca asombro y admiración en todos los que lo visitan. Este impresionante parque se extiende a lo largo del majestuoso rango de las Montañas Teton, cuyos picos escarpados se elevan verticalmente desde el valle del río Snake, creando un paisaje de una belleza sublime. Los picos nevados, los lagos cristalinos y los prados ondulantes se combinan para formar un paisaje que parece sacado de un cuento de hadas."
                    imageLeft={true}
                />

                <Info
                    imageSrc={GranTetonEntrance}
                    paragraph=" Los Grandes Tetons, que se elevan abruptamente más de 4,000 metros sobre el valle, son el punto focal del parque y ofrecen innumerables oportunidades para la aventura y la exploración. Los excursionistas pueden disfrutar de una variedad de senderos que serpentean a través de bosques de coníferas, atraviesan prados alpinos y ascienden a alturas vertiginosas, ofreciendo vistas panorámicas impresionantes en cada paso del camino. Los lagos alpinos, como Jenny Lake y String Lake, son reflejos serenos de las montañas circundantes, ofreciendo oportunidades para el kayak, la pesca y la contemplación tranquila."
                    imageLeft={false}
                />

                <Info
                    imageSrc={GranTeton5}
                    paragraph="El Parque Nacional de Grand Teton es también un paraíso para los amantes de la vida silvestre, con una abundancia de especies que llaman a este lugar su hogar. Bisontes, alces, osos negros y águilas calvas son solo algunas de las criaturas que se pueden avistar en el parque, mientras que los campos de flores silvestres y las praderas alpinas están llenos de vida durante los meses de verano. Los visitantes pueden tener la oportunidad de observar la migración de alces, el apareamiento de alces o la anidación de águilas, entre otras experiencias únicas de observación de la vida silvestre."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
