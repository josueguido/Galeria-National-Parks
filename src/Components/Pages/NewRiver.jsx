import Info from '../InfoSection';
import Gallery from '../Galeria';
import NewRiver from '../../assets/Img/New River/new river.avif'
import NewRiver1 from '../../assets/Img/New River/new-river-1.avif'
import NewRiver2 from '../../assets/Img/New River/new-river-2.avif'
import NewRiver4 from '../../assets/Img/New River/new-river-4.avif'
import NewRiver5 from '../../assets/Img/New River/new-river-5.avif'
import NewRiver6 from '../../assets/Img/New River/new-river-6.avif'
import NewRiver7 from '../../assets/Img/New River/new-river-7.avif'
import NewRiver8 from '../../assets/Img/New River/new-river-8.avif'
import NewRiver9 from '../../assets/Img/New River/new-river-9.avif'
import NewRiver10 from '../../assets/Img/New River/new-river-10.avif'
import NewRiver11 from '../../assets/Img/New River/new-river-11.avif'
import NewRiver12 from '../../assets/Img/New River/new-river-12.avif'
import NewRiver13 from '../../assets/Img/New River/new-river-13.avif'
import NewRiver14 from '../../assets/Img/New River/new-river-14.avif'
import NewRiverLogo from '../../assets/Img/New River/new-river-logo.avif'
import NewRiverEntrance from '../../assets/Img/New River/new-river-national-park-entrance.avif'
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';



const items = [
    {
        image: NewRiver
    },
    {
        image: NewRiver1
    },
    {
        image: NewRiver2
    },

    {
        image: NewRiver4
    },
    {
        image: NewRiver5
    },
    {
        image: NewRiver6
    },
    {
        image: NewRiver7
    },
    {
        image: NewRiver8
    },
    {
        image: NewRiver9
    },
    {
        image: NewRiver10
    },
    {
        image: NewRiver11
    },
    {
        image: NewRiver12
    },
    {
        image: NewRiver13
    },
    {
        image: NewRiver14
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
                        Parque Nacional New River
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                        El Parque Nacional New River (New River National Park) es un área protegida ubicada en los Estados Unidos, específicamente en los estados de Carolina del Norte, Virginia y Virginia Occidental. Este parque protege una región de gran belleza natural y ofrece una variedad de actividades al aire libre para los visitantes.
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
                    imageSrc={NewRiverLogo}
                    paragraph="El New River Gorge National River, situado en el corazón de los Apalaches occidentales de Virginia Occidental, es un tesoro natural y cultural que ofrece una experiencia única en el este de Estados Unidos. Tallado por milenios de flujo constante, el río New serpentea a través de una garganta escarpada, creando un paisaje de belleza salvaje y majestuosa."
                    imageLeft={true}
                />

                <Info
                    imageSrc={NewRiverEntrance}
                    paragraph="New River Gorge National River es un destino verdaderamente único que combina la emoción de los deportes de aventura con la belleza natural y la rica historia cultural de los Apalaches. Con su paisaje impresionante y sus emocionantes actividades al aire libre, este parque es un destino imperdible para aquellos que buscan experimentar lo mejor de la naturaleza y la aventura en el este de Estados Unidos."
                    imageLeft={false}
                />



                <Info
                    imageSrc={NewRiver11}
                    paragraph=" Para los amantes de la adrenalina, las paredes de roca del New River Gorge son un paraíso para la escalada en roca, con rutas que desafían incluso a los escaladores más experimentados."
                    imageLeft={true}
                />

                <Info
                    imageSrc={NewRiver4}
                    paragraph="Los senderos serpentean a lo largo de la garganta, ofreciendo vistas panorámicas de los acantilados y del río serpenteante debajo. Para los amantes de la adrenalina, las paredes de roca del New River Gorge son un paraíso para la escalada en roca, con rutas que desafían incluso a los escaladores más experimentados."
                    imageLeft={false}
                />

            </section>
        </article>
    );
};

export default ParkInfo;
