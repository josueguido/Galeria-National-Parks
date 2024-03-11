
import Yellowstone1 from '../../assets/Img/Yellowstone/yellowstone1.avif'
import Yellowstone2 from '../../assets/Img/Yellowstone/yellowstone2.avif'
import Yellowstone3 from '../../assets/Img/Yellowstone/yellowstone3.avif'
import Yellowstone4 from '../../assets/Img/Yellowstone/yellowstone4.avif'
import Yellowstone5 from '../../assets/Img/Yellowstone/yellowstone5.avif'
import Yellowstone7 from '../../assets/Img/Yellowstone/yellowstone7.avif'
import Yellowstone8 from '../../assets/Img/Yellowstone/yellowstone8.avif'
import Yellowstone9 from '../../assets/Img/Yellowstone/yellowstone9.avif'
import Yellowstone10 from '../../assets/Img/Yellowstone/yellowstone10.avif'
import Yellowstone11 from '../../assets/Img/Yellowstone/yellowstone11.avif'
import Yellowstone12 from '../../assets/Img/Yellowstone/yellowstone12.avif'
import Yellowstone13 from '../../assets/Img/Yellowstone/yellowstone13.avif'
import YellowstoneN from '../../assets/Img/Yellowstone/ynp.avif'
import Gallery from '../Galeria'
import Info from '../InfoSection'
"use client";
import {BackgroundBeams} from "../ui/background-beams";
import { useEffect } from 'react'




const items = [
    {
        image: Yellowstone1
    },
    {
        image: Yellowstone2
    },
    {
        image: Yellowstone3
    },
    {
        image: Yellowstone4
    },
    {
        image: Yellowstone5
    },
    {
        image: Yellowstone9
    },
    {
        image: Yellowstone7
    },

    {
        image: Yellowstone8
    },
    {
        image: Yellowstone10
    },
    {
        image: Yellowstone11
    },
    {
        image: Yellowstone12
    },
    {
        image: Yellowstone13
    },

];

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);


    return (
        
        <article>
            <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                    <h1 className="relative z-10 text-base md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                        Parque Nacional Yellowstone
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                        Yellowstone es el primer parque nacional del mundo y cubre un área de más de 2 millones de acres, principalmente en Wyoming, aunque también se extiende a Montana e Idaho. Es famoso por sus géiseres, aguas termales, cañones y diversa vida silvestre, incluidos bisontes, osos grizzly, lobos y alces.
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


            <Info
                imageSrc={YellowstoneN}
                paragraph=">El Parque Nacional Yellowstone, ubicado principalmente en el estado de Wyoming, es un tesoro natural de belleza incomparable. Fundado en 1872, es el primer parque nacional del mundo y abarca una vasta extensión de paisajes impresionantes, que incluyen géiseres, lagos cristalinos, cañones profundos y una variedad única de vida silvestre."
                imageLeft={true}
            />

            <Info
                imageSrc={Yellowstone4}
                paragraph="Yellowstone es conocido por su actividad geotérmica excepcional, que se manifiesta en más de 10,000 características geotérmicas, incluidos géiseres, fuentes termales, barros hirvientes y fumarolas. El más famoso de todos es Old Faithful, un géiser predecible que entra en erupción regularmente, lanzando columnas de agua caliente y vapor al aire."
                imageLeft={false}
            />


            <Info
                imageSrc={Yellowstone5}
                paragraph="Además de sus características geotérmicas, Yellowstone alberga una diversidad asombrosa de vida silvestre. Es el hogar de una de las poblaciones más grandes de mamíferos salvajes en los Estados Unidos, que incluyen bisontes, osos grizzly, lobos, alces y ciervos, entre otros. Los visitantes tienen la oportunidad única de observar a estos majestuosos animales en su hábitat natural."
                imageLeft={true}
            />

            <Info
                imageSrc={Yellowstone8}
                paragraph="Los paisajes de Yellowstone son igualmente impresionantes, con una variedad de ecosistemas que van desde praderas alpinas hasta bosques subalpinos. El Gran Cañón de Yellowstone, esculpido por el río Yellowstone, ofrece vistas espectaculares de acantilados multicolores y cascadas rugientes, mientras que el lago Yellowstone, el lago alpino más grande de América del Norte, brinda serenidad y belleza escénica."
                imageLeft={false}
            />
        </article>
    );
}

export default App;


