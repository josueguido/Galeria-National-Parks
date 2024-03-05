import Info from '../InfoSection';
import Gallery from '../Galeria';
import Rocky1 from '../../assets/Img/Rocky Mountains/rocky-mountain-1.avif'
import Rocky2 from '../../assets/Img/Rocky Mountains/rocky-mountain-2.avif'
import Rocky3 from '../../assets/Img/Rocky Mountains/rocky-mountain-3.avif'
import Rocky4 from '../../assets/Img/Rocky Mountains/rocky-mountain-4.avif'
import Rocky5 from '../../assets/Img/Rocky Mountains/rocky-mountain-5.avif'
import Rocky6 from '../../assets/Img/Rocky Mountains/rocky-mountain-6.avif'
import Rocky7 from '../../assets/Img/Rocky Mountains/rocky-mountain-7.avif'
import Rocky8 from '../../assets/Img/Rocky Mountains/rocky-mountain-8.avif'
import Rocky9 from '../../assets/Img/Rocky Mountains/rocky-mountain-9.avif'
import Rocky10 from '../../assets/Img/Rocky Mountains/rocky-mountain-10.avif'
import Rocky11 from '../../assets/Img/Rocky Mountains/rocky-mountain-11.avif'
import Rocky12 from '../../assets/Img/Rocky Mountains/rocky-mountain-12.avif'
import Rocky13 from '../../assets/Img/Rocky Mountains/rocky-mountain-13.avif'
import Rocky14 from '../../assets/Img/Rocky Mountains/rocky-mountain-14.avif'
import RockyLogo from '../../assets/Img/Rocky Mountains/rocky-mountain-logo.avif'
import RockyEntrance from '../../assets/Img/Rocky Mountains/rocky-mountain-entrance.avif'



const items = [
    {
        image: Rocky1
    },
    {
        image: Rocky2
    },
    {
        image: Rocky3
    },
    {
        image: Rocky4
    },
    {
        image: Rocky5
    },
    {
        image: Rocky6
    },
    {
        image: Rocky7
    },
    {
        image: Rocky8
    },
    {
        image: Rocky9
    },
    {
        image: Rocky10
    },
    {
        image: Rocky11
    },
    {
        image: Rocky12
    },
    {
        image: Rocky13
    },
    {
        image: Rocky14
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
                    imageSrc={RockyLogo}
                    paragraph=" Las Montañas Rocosas, o Rocky Mountains en inglés, son una cadena montañosa emblemática que se extiende a lo largo de América del Norte, desde el norte de México hasta el noroeste de Canadá. Este majestuoso sistema montañoso es reconocido por sus imponentes picos, extensos bosques, ríos cristalinos y una biodiversidad única."
                    imageLeft={true}
                />

                <Info
                    imageSrc={RockyEntrance}
                    paragraph="Una característica distintiva de las Montañas Rocosas es su increíble diversidad geológica y ecológica. Desde desiertos de altitud hasta densos bosques de coníferas y praderas alpinas, este ecosistema diverso alberga una amplia gama de especies animales y vegetales, incluyendo osos, alces, ciervos, pumas, águilas y muchas más."
                    imageLeft={false}
                />

                <Info
                    imageSrc={Rocky7}
                    paragraph="En Estados Unidos, las Montañas Rocosas atraviesan varios estados, incluyendo Colorado, Wyoming, Montana, Idaho y Nuevo México, ofreciendo una amplia variedad de paisajes y actividades al aire libre para los visitantes. Desde la emblemática cordillera de Sawatch en Colorado, con sus cumbres que superan los 4,000 metros de altura, hasta el Parque Nacional de Yellowstone en Wyoming, hogar de géiseres, fuentes termales y una abundante vida silvestre, las Rocky Mountains son un paraíso para los amantes de la naturaleza y los entusiastas de las actividades al aire libre."
                    imageLeft={true}
                />

<Info
                    imageSrc={Rocky11}
                    paragraph="Para los aventureros, las Montañas Rocosas ofrecen una amplia gama de actividades, como senderismo, escalada en roca, ciclismo de montaña, pesca, rafting y esquí, entre otras. Ya sea explorando pintorescos pueblos de montaña, recorriendo escénicas carreteras panorámicas o sumergiéndose en la serenidad de la naturaleza, las Rocky Mountains prometen una experiencia inolvidable para todos aquellos que buscan conectar con el esplendor natural del mundo."
                    imageLeft={false}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
