import Info from '../InfoSection';
import Gallery from '../Galeria';
import Glacier from '../../assets/Img/Glacier/glacier.avif'
import Glacier2 from '../../assets/Img/Glacier/glacier-2.avif'
import Glacier3 from '../../assets/Img/Glacier/glacier-3.avif'
import Glacier4 from '../../assets/Img/Glacier/glacier-4.avif'
import Glacier5 from '../../assets/Img/Glacier/glacier-5.avif'
import Glacier6 from '../../assets/Img/Glacier/glacier-6.avif'
import Glacier7 from '../../assets/Img/Glacier/glacier-7.avif'
import Glacier8 from '../../assets/Img/Glacier/glacier-8.avif'
import Glacier9 from '../../assets/Img/Glacier/glacier-9.avif'
import Glacier11 from '../../assets/Img/Glacier/glacier-11.avif'
import Glacier12 from '../../assets/Img/Glacier/glacier-12.avif'
import Glacier13 from '../../assets/Img/Glacier/glacier-13.avif'
import Glacierlogo from '../../assets/Img/Glacier/glacier-logo.avif'
import Glacierentrance from '../../assets/Img/Glacier/glacier-national-park-entrance.avif'

const items = [
    {
        image: Glacier
    },
    {
        image: Glacier2
    },
    {
        image: Glacier3
    },
    {
        image: Glacier4
    },
    {
        image: Glacier5
    },
    {
        image: Glacier6
    },
    {
        image: Glacier7
    },
    {
        image: Glacier8
    },
    {
        image: Glacier9
    },
    {
        image: Glacier11
    },
    {
        image: Glacier12
    },
    {
        image: Glacier13
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
                    imageSrc={Glacierentrance}
                    paragraph="
                    En la frontera entre Estados Unidos y Canadá, el Parque Nacional Glacier se alza como un santuario de belleza salvaje y majestuosidad natural. Sus vastas extensiones de montañas escarpadas, profundos valles glaciares y exuberantes bosques de coníferas crean un paisaje impresionante que deja a los visitantes maravillados. Los picos cubiertos de nieve se elevan hacia el cielo azul, reflejándose en los cristalinos lagos alpinos que puntean el paisaje."
                    imageLeft={true}
                />

                <Info
                    imageSrc={Glacier12}
                    paragraph="El parque es hogar de más de 130 glaciares, que esculpen el terreno con su lento avance y dan al parque su nombre característico. Entre ellos se encuentra el majestuoso Glaciar Jackson, una masa de hielo imponente que se derrama en un valle en forma de U, dejando a su paso un rastro de morrenas y lagos glaciares. Estos cuerpos de agua, como el pintoresco Lago McDonald y el sereno Lago Saint Mary, ofrecen oportunidades para la recreación y la contemplación en un entorno natural incomparable."
                    imageLeft={false}
                />

                <Info
                    imageSrc={Glacierlogo}
                    paragraph="El Parque Nacional Glacier es también un refugio para una sorprendente variedad de vida silvestre, incluidos osos grizzly, alces, ciervos y cabras de montaña. Los visitantes pueden encontrarse con estos magníficos animales mientras exploran los numerosos senderos de senderismo y disfrutan de la espectacular belleza del paisaje. Además, el parque ofrece una red de carreteras panorámicas que permiten acceder fácilmente a algunos de los puntos más destacados, como el famoso Camino al Sol y la espectacular Carretera de la Línea Divisoria."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
