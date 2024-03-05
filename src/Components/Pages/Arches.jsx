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
    return (
        <article>
            <section>
                <div>
                    <Gallery items={items} />
                </div>
            </section>

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