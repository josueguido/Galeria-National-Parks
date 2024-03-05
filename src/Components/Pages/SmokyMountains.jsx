import Info from '../InfoSection';
import Gallery from '../Galeria';
import smoky2 from '../../assets/Img/Smoky Mountains/smoky-mountains-2.avif'
import smoky3 from '../../assets/Img/Smoky Mountains/smoky-mountains-3.avif'
import smoky4 from '../../assets/Img/Smoky Mountains/smoky-mountains-4.avif'
import smoky5 from '../../assets/Img/Smoky Mountains/smoky-mountains-5.avif'
import smoky6 from '../../assets/Img/Smoky Mountains/smoky-mountains-6.avif'
import smoky7 from '../../assets/Img/Smoky Mountains/smoky-mountains-7.avif'
import smoky8 from '../../assets/Img/Smoky Mountains/smoky-mountains-8.avif'
import smoky9 from '../../assets/Img/Smoky Mountains/smoky-mountains-9.avif'
import smoky10 from '../../assets/Img/Smoky Mountains/smoky-mountains-10.avif'
import smoky11 from '../../assets/Img/Smoky Mountains/smoky-mountains-11.avif'
import smoky12 from '../../assets/Img/Smoky Mountains/smoky-mountains-12.avif'
import smoky13 from '../../assets/Img/Smoky Mountains/smoky-mountains-13.avif'
import smoky14 from '../../assets/Img/Smoky Mountains/smoky-mountains-14.avif'
import smokylogo from '../../assets/Img/Smoky Mountains/smoky mountains logo.webp'
import smokyentrance from '../../assets/Img/Smoky Mountains/Smoky-Mountains-Entrance.avif'

const items = [
    {
        image: smoky2
    },
    {
        image: smoky3
    },
    {
        image: smoky4
    },
    {
        image: smoky5
    },
    {
        image: smoky6
    },
    {
        image: smoky7
    },
    {
        image: smoky8
    },
    {
        image: smoky9
    },
    {
        image: smoky10
    },
    {
        image: smoky11
    },
    {
        image: smoky12
    },
    {
        image: smoky13
    },
    {
        image: smoky14
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
                    imageSrc={smokyentrance}
                    paragraph="Ubicado en la frontera entre Tennessee y Carolina del Norte, el Parque Nacional Great Smoky Mountains es uno de los tesoros naturales más preciados de los Estados Unidos. Con su extensa red de senderos, picos escarpados y bosques exuberantes, el parque atrae a millones de visitantes cada año en busca de aventuras al aire libre y paisajes impresionantes."
                    imageLeft={true}
                />

                <Info
                    imageSrc={smoky12}
                    paragraph="El paisaje del Great Smoky Mountains National Park está dominado por una cadena de montañas que se elevan sobre los valles y los ríos sinuosos. Estas montañas, cubiertas de densos bosques de árboles caducifolios, adquieren un esplendor especial durante el otoño, cuando las hojas cambian de color y pintan el paisaje con tonos vibrantes de rojo, naranja y amarillo."
                    imageLeft={false}
                />

                <Info
                    imageSrc={smokylogo}
                    paragraph="Parque Nacional Great Smoky Mountains también tiene una rica historia cultural. Numerosas cabañas históricas, molinos y lugares de interés se encuentran dispersos por todo el parque, ofreciendo a los visitantes la oportunidad de sumergirse en la historia de la región y aprender sobre la vida de los primeros colonos de los Apalaches."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
