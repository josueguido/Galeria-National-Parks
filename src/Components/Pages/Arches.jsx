import Gallery from "../Galeria";
import Info from "../InfoSection";
import Arches1 from "../../assets/Img/Arches/arches1.avif"
import Arches2 from "../../assets/Img/Arches/arches2.avif"
import Arches3 from "../../assets/Img/Arches/arches3.avif"
import Arches4 from "../../assets/Img/Arches/arches4.avif"
import Arches5 from "../../assets/Img/Arches/arches5.avif"
import Arches6 from "../../assets/Img/Arches/arches6.avif"
import Arches7 from "../../assets/Img/Arches/arches7.avif"
import Arches8 from "../../assets/Img/Arches/arches8.avif"
import Arches9 from "../../assets/Img/Arches/arches9.avif"
import Arches10 from "../../assets/Img/Arches/arches10.avif"
import Arches11 from "../../assets/Img/Arches/arches11.avif"
import Arches12 from "../../assets/Img/Arches/arches12.avif"
import ArchesEntrance from "../../assets/Img/Arches/Arches National Park Entrance.avif"
import ArchesLogo from "../../assets/Img/Arches/arches national park.avif"
import { BackgroundBeams } from "../ui/background-beams";
import { useEffect } from "react";


const items = [

    {
        image: Arches1
    },
    {
        image: Arches2
    },
    {
        image: Arches3
    },
    {
        image: Arches4
    },
    {
        image: Arches5
    },
    {
        image: Arches6
    },
    {
        image: Arches7
    },
    {
        image: Arches8
    },
    {
        image: Arches9
    },
    {
        image: Arches10
    },
    {
        image: Arches11
    },
    {
        image: Arches12
    },
];


function App() {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);


    return (
        <article>
            <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                    <h1 className="relative z-10 text-base md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                        Parque Nacional Arches
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center text-balance relative z-10">
                        El Parque Nacional Arches, ubicado en el sureste de Utah, Estados Unidos, es famoso por sus impresionantes formaciones rocosas naturales, incluyendo más de 2,000 arcos de piedra arenisca roja. Con un paisaje único y espectacular, Arches ofrece una experiencia inolvidable para los visitantes. Además de los arcos naturales, el parque alberga cañones profundos, cimas escarpadas y una variedad de flora y fauna desértica.
                    </p>
                </div>
                <BackgroundBeams />
            </div>


            <section>
                <div>
                    <Gallery items={items} />
                </div>
            </section>


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
                    imageSrc={ArchesEntrance}
                    paragraph="El Parque Nacional Arches, situado en el desierto rocoso de Utah, es un paisaje de ensueño esculpido por el viento y la erosión durante millones de años. Es hogar de una de las colecciones más impresionantes de arcos naturales del mundo, cada uno una obra maestra de la naturaleza tallada en la roca de arenisca roja por el implacable paso del tiempo. Al caminar por los senderos serpenteantes del parque, los visitantes se encuentran rodeados de formaciones rocosas imponentes y únicas, que evocan una sensación de asombro y admiración."
                    imageLeft={true}
                />

                <Info
                    imageSrc={ArchesLogo}
                    paragraph="Los arcos de Arches son verdaderamente icónicos, desde el majestuoso Delicate Arch, que se alza en solitario sobre el paisaje, hasta el espectacular Landscape Arch, que se extiende como un puente natural a través del cielo. Cada arco tiene su propia personalidad y encanto, y muchos de ellos ofrecen vistas impresionantes de los paisajes circundantes, desde cañones profundos hasta mesetas rocosas y picos nevados en la distancia."
                    imageLeft={false}
                />


                <Info
                    imageSrc={Arches4}
                    paragraph="El Parque Nacional Arches es un paisaje que desafía la realidad, con formaciones rocosas que parecen esculpidas por un escultor celestial. Sus imponentes torres de piedra y sus paredes rojas danzan con la luz del sol, creando un espectáculo de sombras y colores en constante cambio. Los visitantes pueden maravillarse ante la increíble variedad de formas naturales, desde columnas verticales hasta cúpulas redondeadas, cada una con su propia historia grabada en la roca."
                    imageLeft={true}
                />

                <Info
                    imageSrc={Arches2}
                    paragraph="La magia de Arches se intensifica al caer el sol, cuando el cielo se enciende con tonos cálidos y dorados que contrastan con el rojo intenso de las formaciones rocosas. Es en este momento mágico cuando los arcos parecen cobrar vida, como puertas hacia otros mundos esperando ser descubiertos. Los senderos se iluminan con la luz dorada mientras los visitantes exploran este paisaje de ensueño bajo el manto de la noche estrellada."
                    imageLeft={false}
                />
            </section>



        </article>
    );
}

export default App;