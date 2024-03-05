import Info from '../InfoSection';
import Gallery from '../Galeria';
import GrosMorne1 from '../../assets/Img/Gros Morne/gros-morne-1.avif'
import GrosMorne2 from '../../assets/Img/Gros Morne/gros-morne-2.avif'
import GrosMorne3 from '../../assets/Img/Gros Morne/gros-morne-3.avif'
import GrosMorne4 from '../../assets/Img/Gros Morne/gros-morne-4.avif'
import GrosMorne5 from '../../assets/Img/Gros Morne/gros-morne-5.avif'
import GrosMorne6 from '../../assets/Img/Gros Morne/gros-morne-6.avif'
import GrosMorne7 from '../../assets/Img/Gros Morne/gros-morne-7.avif'
import GrosMorne8 from '../../assets/Img/Gros Morne/gros-morne-8.avif'
import GrosMorne9 from '../../assets/Img/Gros Morne/gros-morne-9.avif'
import GrosMorne10 from '../../assets/Img/Gros Morne/gros-morne-10.avif'
import GrosMorne11 from '../../assets/Img/Gros Morne/gros-morne-11.avif'
import GrosMorne12 from '../../assets/Img/Gros Morne/gros-morne-12.avif'
import GrosMorne13 from '../../assets/Img/Gros Morne/gros-morne-13.avif'
import GrosMorneLogo from '../../assets/Img/Gros Morne/gros-morne-logo.avif'
import GrosMorneEntrance from '../../assets/Img/Gros Morne/gros-morne-national-park.avif'



const items = [
    {
        image: GrosMorne1
    },
    {
        image: GrosMorne2
    },
    {
        image: GrosMorne3
    },
    {
        image: GrosMorne4
    },
    {
        image: GrosMorne5
    },
    {
        image: GrosMorne6
    },
    {
        image: GrosMorne7
    },
    {
        image: GrosMorne8
    },
    {
        image: GrosMorne9
    },
    {
        image: GrosMorne10
    },
    {
        image: GrosMorne11
    },
    {
        image: GrosMorne12
    },
    {
        image: GrosMorne13
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
                    imageSrc={GrosMorneLogo}
                    paragraph="Gros Morne National Park, ubicado en la costa oeste de la isla de Terranova, Canadá, es un destino de belleza incomparable que combina paisajes dramáticos, una rica historia geológica y una biodiversidad única. Designado como Patrimonio de la Humanidad por la UNESCO, este parque ofrece a los visitantes una experiencia verdaderamente sobrecogedora en el corazón de la región atlántica de Canadá."
                    imageLeft={true}
                />

                <Info
                    imageSrc={GrosMorneEntrance}
                    paragraph="Gros Morne alberga una biodiversidad excepcional, que incluye una variedad de hábitats terrestres y marinos. Desde densos bosques de abetos y abedules hasta praderas alpinas y humedales costeros, este parque ofrece refugio a una variedad de especies animales, incluyendo alces, caribúes, osos negros y una variedad de aves marinas."
                    imageLeft={false}
                />

                <Info
                    imageSrc={GrosMorne6}
                    paragraph="El paisaje de Gros Morne es dominado por los icónicos fiordos y acantilados que se elevan majestuosamente desde el océano Atlántico. Estas formaciones rocosas impresionantes son el resultado de millones de años de actividad geológica, incluyendo la tectónica de placas y la erosión glacial, que han creado un paisaje de una belleza única en el mundo. El punto culminante del parque es el Gros Morne, un pico imponente que se eleva a más de 800 metros sobre el nivel del mar, ofreciendo vistas panorámicas impresionantes de los alrededores."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
