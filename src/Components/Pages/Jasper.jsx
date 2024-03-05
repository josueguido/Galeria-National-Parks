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
    return (
        <article >
            <div>
                <Gallery items={items} />
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
