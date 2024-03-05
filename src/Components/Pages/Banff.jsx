import Info from '../InfoSection';
import Gallery from '../Galeria';
import banff from '../../assets/Img/Banff/banff.avif'
import banff1 from '../../assets/Img/Banff/banff1.avif'
import banff2 from '../../assets/Img/Banff/banff2.avif'
import banff3 from '../../assets/Img/Banff/banff3.avif'
import banff4 from '../../assets/Img/Banff/banff4.avif'
import banff5 from '../../assets/Img/Banff/banff5.avif'
import banff6 from '../../assets/Img/Banff/banff6.avif'
import banff7 from '../../assets/Img/Banff/banff7.avif'
import banff8 from '../../assets/Img/Banff/banff8.avif'
import banff9 from '../../assets/Img/Banff/banff9.avif'
import banff10 from '../../assets/Img/Banff/banff10.avif'
import banff11 from '../../assets/Img/Banff/banff11.avif'
import banff12 from '../../assets/Img/Banff/banff12.avif'
import banff13 from '../../assets/Img/Banff/banff13.avif'
import banff14 from '../../assets/Img/Banff/banff14.avif'
import banffentrance from '../../assets/Img/Banff/banff entrance.avif'
import Banfflogo from '../../assets/Img/Banff/Banff National Park.avif'

const items = [
    {
        image: banff1
    },
    {
        image: banff2
    },
    {
        image: banff3
    },
    {
        image: banff4
    },
    {
        image: banff5
    },
    {
        image: banff6
    },
    {
        image: banff7
    },
    {
        image: banff8
    },
    {
        image: banff9
    },
    {
        image: banff10
    },
    {
        image: banff11
    },
    {
        image: banff12
    },
    {
        image: banff13
    },
    {
        image: banff14
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
                    imageSrc={Banfflogo}
                    paragraph="
                    En el corazón de las majestuosas Montañas Rocosas de Canadá, se encuentra el icónico Parque Nacional Banff, un verdadero tesoro natural que cautiva a visitantes de todo el mundo con su asombrosa belleza. Este parque, el primero de su tipo en Canadá y el tercero en el mundo, es un santuario de vida silvestre, glaciares centenarios, cristalinos lagos de color turquesa y una variedad de picos montañosos que alcanzan el cielo."
                    imageLeft={true}
                />

                <Info
                    imageSrc={banff10}
                    paragraph="Los paisajes del Parque Nacional Banff son una sinfonía visual que despierta los sentidos y alimenta el alma. Las montañas imponentes se alzan majestuosamente, adornadas con mantos de nieve eterna, mientras que los valles verdes y exuberantes ofrecen un contraste impresionante. Glaciares como el Athabasca y el Columbia se deslizan lentamente por las laderas, tallando el paisaje con su poderoso avance."
                    imageLeft={false}
                />

                <Info
                    imageSrc={banff1}
                    paragraph="Los lagos de aguas cristalinas son verdaderos joyas en el paisaje de Banff. El Lago Louise, con su icónico color turquesa, refleja las montañas circundantes en una imagen de serenidad incomparable. El Lago Moraine, con su vibrante tono azul, es un espectáculo que parece sacado de un sueño. Estos cuerpos de agua no solo son hermosos a la vista, sino que también albergan una rica diversidad de vida silvestre, desde osos grizzly hasta águilas calvas."
                    imageLeft={true}
                />

                <Info
                    imageSrc={banff}
                    paragraph="Los visitantes del Parque Nacional Banff tienen la oportunidad de explorar este paraíso natural de diversas maneras. Senderismo, escalada, esquí, ciclismo de montaña y paseos en bote son solo algunas de las actividades disponibles para aquellos que deseen sumergirse en la belleza y la aventura que ofrece este lugar único. Además, los pueblos encantadores como Banff y Lake Louise brindan comodidades modernas y una cálida hospitalidad en medio de este entorno natural impresionante."
                    imageLeft={false}
                />

                <Info
                    imageSrc={banffentrance}
                    paragraph="Parque Nacional Banff es mucho más que un destino turístico; es un santuario de la naturaleza que inspira admiración y asombro en todos los que tienen el privilegio de visitarlo. Con su impresionante belleza y su abundante biodiversidad, Banff es verdaderamente un tesoro nacional y una maravilla del mundo natural que merece ser explorada y protegida para las generaciones venideras."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
