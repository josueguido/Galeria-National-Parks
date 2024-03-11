import Info from '../InfoSection';
import Gallery from '../Galeria';
import MountRainier1 from '../../assets/Img/Mount Rainier/mount-rainier-1.avif'
import MountRainier2 from '../../assets/Img/Mount Rainier/mount-rainier-2.avif'
import MountRainier3 from '../../assets/Img/Mount Rainier/mount-rainier-3.avif'
import MountRainier4 from '../../assets/Img/Mount Rainier/mount-rainier-4.avif'
import MountRainier5 from '../../assets/Img/Mount Rainier/mount-rainier-5.avif'
import MountRainier6 from '../../assets/Img/Mount Rainier/mount-rainier-6.avif'
import MountRainier7 from '../../assets/Img/Mount Rainier/mount-rainier-7.avif'
import MountRainier8 from '../../assets/Img/Mount Rainier/mount-rainier-8.avif'
import MountRainier9 from '../../assets/Img/Mount Rainier/mount-rainier-9.avif'
import MountRainier10 from '../../assets/Img/Mount Rainier/mount-rainier-10.avif'
import MountRainier11 from '../../assets/Img/Mount Rainier/mount-rainier-11.avif'
import MountRainier12 from '../../assets/Img/Mount Rainier/mount-rainier-12.avif'
import MountRainier13 from '../../assets/Img/Mount Rainier/mount-rainier-13.avif'
import MountRainier14 from '../../assets/Img/Mount Rainier/mount-rainier-14.avif'
import MountRainierEntrance from '../../assets/Img/Mount Rainier/mount-rainier-entrance.avif'
import MountRainierLogo from '../../assets/Img/Mount Rainier/mount-rainier-logo.avif'
import { BackgroundBeams } from '../ui/background-beams'; 
import { useEffect } from 'react';

const items = [
    {
        image: MountRainier1
    },
    {
        image: MountRainier2
    },
    {
        image: MountRainier3
    },
    {
        image: MountRainier4
    },
    {
        image: MountRainier5
    },
    {
        image: MountRainier6
    },
    {
        image: MountRainier7
    },
    {
        image: MountRainier8
    },
    {
        image: MountRainier9
    },
    {
        image: MountRainier10
    },
    {
        image: MountRainier11
    },
    {
        image: MountRainier12
    },
    {
        image: MountRainier13
    },
    {
        image: MountRainier14
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
                        Parque Nacional Monte Rainier
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                    El Monte Rainier es un volcán activo y un icono natural en el estado de Washington, Estados Unidos. Con una altura de más de 4,300 metros, es la montaña más alta de la cordillera de las Cascadas. Este majestuoso volcán está coronado por glaciares y rodeado de exuberantes bosques, praderas alpinas y cascadas escénicas. El Parque Nacional Monte Rainier protege esta maravilla natural y ofrece una variedad de actividades al aire libre, como senderismo, escalada en roca, esquí y observación de la vida silvestre. Contemplar el Monte Rainier es una experiencia inolvidable que deja una impresión duradera en aquellos que lo visitan.
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
                    imageSrc={MountRainierLogo}
                    paragraph="El Parque Nacional Mount Rainier, situado en el estado de Washington, Estados Unidos, es un espectacular santuario natural que abarca el majestuoso Monte Rainier, un volcán activo cubierto de glaciares que se eleva a 4,392 metros sobre el nivel del mar. Designado como Patrimonio de la Humanidad por la UNESCO, este parque es un destino emblemático que cautiva a los visitantes con su belleza escénica, su diversidad biológica y su fascinante geología."
                    imageLeft={true}
                />

                <Info
                    imageSrc={MountRainierEntrance}
                    paragraph="El Monte Rainier domina el paisaje del parque, creando un telón de fondo impresionante para una variedad de ecosistemas que incluyen bosques antiguos, praderas alpinas y glaciares imponentes. Los visitantes pueden explorar más de 240 kilómetros de senderos que serpentean a través de estos diversos hábitats, ofreciendo vistas espectaculares del volcán y la oportunidad de avistar vida silvestre, como osos negros, alces, ciervos y una variedad de aves."
                    imageLeft={false}
                />

                <Info
                    imageSrc={MountRainier1}
                    paragraph="El parque es especialmente famoso por sus espectaculares flores silvestres, que florecen en primavera y verano, transformando las praderas alpinas en una paleta de colores vibrantes. Los senderos como el Wonderland Trail y el Skyline Trail ofrecen algunas de las mejores oportunidades para disfrutar de este espectáculo natural, así como para observar de cerca las impresionantes cascadas que salpican el paisaje del parque."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
