import Info from '../InfoSection';
import Gallery from '../Galeria';
import Jasper1 from '../../assets/Img/Jasper/jasper-1.avif'
import Jasper2 from '../../assets/Img/Jasper/jasper-2.avif'
import Jasper3 from '../../assets/Img/Jasper/jasper-3.avif'
import Jasper4 from '../../assets/Img/Jasper/jasper-4.avif'
import Jasper5 from '../../assets/Img/Jasper/jasper-5.avif'
import Jasper6 from '../../assets/Img/Jasper/jasper-6.avif'
import Jasper7 from '../../assets/Img/Jasper/jasper-7.avif'
import Jasper8 from '../../assets/Img/Jasper/jasper-8.avif'
import Jasper9 from '../../assets/Img/Jasper/jasper-9.avif'
import Jasper10 from '../../assets/Img/Jasper/jasper-10.avif'
import Jasper12 from '../../assets/Img/Jasper/jasper-12.avif'
import Jasper13 from '../../assets/Img/Jasper/jasper-13.avif'
import JasperLogo from '../../assets/Img/Jasper/jasper-national-park-logo.avif'
import JasperEntrance from '../../assets/Img/Jasper/jasper-entrance.avif'
import { BackgroundBeams } from '../ui/background-beams';
import { useEffect } from 'react';


const items = [
    {
        image: Jasper1
    },
    {
        image: Jasper2
    },
    {
        image: Jasper3
    },
    {
        image: Jasper4
    },
    {
        image: Jasper5
    },
    {
        image: Jasper6
    },
    {
        image: Jasper7
    },
    {
        image: Jasper8
    },
    {
        image: Jasper9
    },
    {
        image: Jasper10
    },
    {
        image: Jasper12
    },
    {
        image: Jasper13
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
                        Parque Nacional Jasper
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                        El Parque Nacional Jasper, ubicado en Alberta, Canadá, es uno de los destinos naturales más impresionantes del mundo.Es un refugio para una gran variedad de vida silvestre, incluyendo alces, osos grizzly y caribúes. Los visitantes pueden disfrutar de una amplia gama de actividades, como senderismo, camping, observación de la aurora boreal y recorridos en barco por los lagos glaciares. La belleza natural del Parque Nacional Jasper deja a los visitantes maravillados y les ofrece una experiencia inolvidable en contacto con la naturaleza.
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
                    imageSrc={JasperEntrance}
                    paragraph="El Parque Nacional Jasper, ubicado en las impresionantes Montañas Rocosas de Alberta, Canadá, es un santuario natural que cautiva con su inigualable belleza y biodiversidad. Este vasto parque, declarado Patrimonio de la Humanidad por la UNESCO, abarca una extensión de 11,000 kilómetros cuadrados de paisajes montañosos, glaciares relucientes, lagos de aguas cristalinas y densos bosques boreales."
                    imageLeft={true}
                />


                <Info
                    imageSrc={JasperLogo}
                    paragraph="Para los amantes de la aventura, Jasper National Park ofrece una amplia gama de actividades al aire libre durante todo el año. Desde el senderismo y el camping en verano hasta el esquí y el snowboard en invierno, este parque tiene algo para todos los gustos y niveles de habilidad. Los visitantes también pueden relajarse y rejuvenecer en las aguas termales naturales de Miette Hot Springs, un oasis de tranquilidad en medio de la naturaleza salvaje."
                />

                <Info
                    imageSrc={Jasper3}
                    paragraph="Los paisajes de Jasper son igualmente impresionantes. El parque alberga una serie de imponentes glaciares, incluido el Columbia Icefield, uno de los campos de hielo más grandes de las Montañas Rocosas, así como picos escarpados, como el Monte Edith Cavell y el Monte Robson, la montaña más alta de las Rocosas Canadienses. Además, los lagos de aguas cristalinas, como el Maligne Lake y el Medicine Lake, ofrecen oportunidades para disfrutar de actividades como el kayak, el canotaje y el avistamiento de fauna."
                    imageLeft={false}
                />

                <Info
                    imageSrc={Jasper5}
                    paragraph="Una de las características más sobresalientes del Parque Nacional Jasper es su abundante vida silvestre. Desde majestuosos alces y ciervos hasta osos grizzly y lobos, este entorno natural ofrece un hábitat prístino para una variedad de especies emblemáticas de la fauna canadiense. Los visitantes pueden tener la oportunidad de avistar estos magníficos animales en su entorno natural, mientras exploran los numerosos senderos para caminatas y áreas de observación designadas a lo largo del parque."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
