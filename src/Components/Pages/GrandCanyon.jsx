import Info from '../InfoSection';
import Gallery from '../Galeria';
import GranCanyon1 from '../../assets/Img/Grand Canyon/grand-canyon-1.avif'
import GranCanyon2 from '../../assets/Img/Grand Canyon/grand-canyon-2.avif'
import GranCanyon3 from '../../assets/Img/Grand Canyon/grand-canyon-3.avif'
import GranCanyon4 from '../../assets/Img/Grand Canyon/grand-canyon-4.avif'
import GranCanyon5 from '../../assets/Img/Grand Canyon/grand-canyon-5.avif'
import GranCanyon6 from '../../assets/Img/Grand Canyon/grand-canyon-6.avif'
import GranCanyon7 from '../../assets/Img/Grand Canyon/grand-canyon-7.avif'
import GranCanyon8 from '../../assets/Img/Grand Canyon/grand-canyon-8.avif'
import GranCanyon9 from '../../assets/Img/Grand Canyon/grand-canyon-9.avif'
import GranCanyon10 from '../../assets/Img/Grand Canyon/grand-canyon-10.avif'
import GranCanyon12 from '../../assets/Img/Grand Canyon/grand-canyon-12.avif'
import GranCanyonLogo from '../../assets/Img/Grand Canyon/grand-canyon-logo.avif'
import GranCanyonEntrance from '../../assets/Img/Grand Canyon/grand-canyon-national-park-entrance.avif'



const items = [
    {
        image: GranCanyon1
    },
    {
        image: GranCanyon2
    },
    {
        image: GranCanyon3
    },
    {
        image: GranCanyon4
    },
    {
        image: GranCanyon5
    },
    {
        image: GranCanyon6
    },
    {
        image: GranCanyon7
    },
    {
        image: GranCanyon8
    },
    {
        image: GranCanyon9
    },
    {
        image: GranCanyon10
    },
    {
        image: GranCanyon12
    },
   
];

const ParkInfo = () => {
    return (
        <article >
            <div>
                <Gallery items={items} />
            </div>

            <section>
                <Info
                    imageSrc={GranCanyonLogo}
                    paragraph="El Parque Nacional del Gran Cañón es un monumento natural extraordinario que cautiva a millones de visitantes cada año con su imponente belleza y magnificencia. Situado en el norte de Arizona, este parque es el hogar de una de las maravillas naturales más impresionantes del mundo: el Gran Cañón. Con una longitud de aproximadamente 446 kilómetros y una profundidad que alcanza más de 1,800 metros, el cañón ofrece un espectáculo visual que desafía la imaginación."
                    imageLeft={true}
                />

                <Info
                    imageSrc={GranCanyonEntrance}
                    paragraph="Explorar el Gran Cañón es una experiencia inolvidable. Los visitantes pueden recorrer una variedad de senderos que serpentean a lo largo de los bordes del cañón o descender hasta el fondo para sumergirse en un mundo completamente diferente. Allí, el río Colorado serpentea entre las paredes del cañón, creando oasis de vegetación y proporcionando un contraste impresionante con los acantilados rocosos que se alzan a su alrededor."
                    imageLeft={false}
                />

                <Info
                    imageSrc={GranCanyon10}
                    paragraph="Los acantilados del Gran Cañón exhiben una asombrosa variedad de colores y texturas, que van desde tonos rojizos y amarillos hasta matices más suaves de rosa y púrpura, creando un paisaje de una belleza sobrecogedora. La erosión provocada por millones de años de actividad fluvial ha esculpido este paisaje único, dejando a la vista capas de roca que revelan la historia geológica de la Tierra."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
