import Info from '../InfoSection';
import Gallery from '../Galeria';
import Fundy1  from '../../assets//Img/Fundy/fundy-1.avif'
import Fundy2  from '../../assets//Img/Fundy/fundy-2.avif'
import Fundy3  from '../../assets//Img/Fundy/fundy-3.avif'
import Fundy4  from '../../assets//Img/Fundy/fundy-4.avif'
import Fundy5  from '../../assets//Img/Fundy/fundy-5.avif'
import Fundy6  from '../../assets//Img/Fundy/fundy-6.avif'
import Fundy7  from '../../assets//Img/Fundy/fundy-7.avif'
import Fundy9  from '../../assets//Img/Fundy/fundy-9.avif'
import Fundy11  from '../../assets//Img/Fundy/fundy-11.avif'
import Fundy12  from '../../assets//Img/Fundy/fundy-12.avif'
import Fundy13  from '../../assets//Img/Fundy/fundy-13.avif'
import FundyEntrance  from '../../assets//Img/Fundy/fundy-entrance.avif'
import FundyLogo  from '../../assets//Img/Fundy/fundy-logo.avif'




const items = [
    {
        image: Fundy1
    },
    {
        image: Fundy2
    },
    {
        image: Fundy3
    },
    {
        image: Fundy4
    },
    {
        image: Fundy5
    },
    {
        image: Fundy6
    },
    {
        image: Fundy7
    },
    {
        image: Fundy9
    },
    {
        image: Fundy11
    },
    {
        image: Fundy12
    },
    {
        image: Fundy13
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
                    imageSrc={FundyLogo}
                    paragraph="Fundy National Park, ubicado en la provincia de Nuevo Brunswick, Canadá, es un destino emblemático que cautiva a los visitantes con su espectacular paisaje costero, su rica biodiversidad y sus fenómenos naturales únicos. Designado como Reserva de la Biosfera por la UNESCO, este parque es conocido por tener las mareas más altas del mundo, junto con una belleza natural impresionante."
                    imageLeft={true}
                />

                <Info
                    imageSrc={FundyEntrance}
                    paragraph="El Parque Nacional Fundy se extiende a lo largo de la costa de la Bahía de Fundy, donde las mareas fluctúan hasta 16 metros dos veces al día, creando un paisaje cambiante y dinámico. Durante la marea baja, los visitantes pueden explorar vastas extensiones de playa, descubriendo cuevas marinas, formaciones rocosas únicas y fósiles de hace millones de años. Mientras que durante la marea alta, el agua del océano regresa, transformando el paisaje en un espectáculo acuático asombroso."
                    imageLeft={false}
                />

                <Info
                    imageSrc={Fundy9}
                    paragraph="Fundy National Park ofrece una variedad de actividades al aire libre para los visitantes. Los senderos para caminatas serpentean a través de densos bosques, cascadas escénicas y valles pintorescos, brindando oportunidades para avistar vida silvestre, como alces, osos negros y una variedad de aves. También hay opciones para practicar kayak en los ríos y fiordos del parque, así como para acampar en áreas designadas para disfrutar de la naturaleza en su máxima expresión."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
