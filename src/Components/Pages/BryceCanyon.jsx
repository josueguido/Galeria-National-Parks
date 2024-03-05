import Info from '../InfoSection';
import Gallery from '../Galeria';
import BryceCanyon1 from '../../assets/Img/Bryce Canyon/bryce-canyon-1.avif'
import BryceCanyon2 from '../../assets/Img/Bryce Canyon/bryce-canyon-2.avif'
import BryceCanyon3 from '../../assets/Img/Bryce Canyon/bryce-canyon-3.avif'
import BryceCanyon4 from '../../assets/Img/Bryce Canyon/bryce-canyon-4.avif'
import BryceCanyon5 from '../../assets/Img/Bryce Canyon/bryce-canyon-5.avif'
import BryceCanyon6 from '../../assets/Img/Bryce Canyon/bryce-canyon-6.avif'
import BryceCanyon7 from '../../assets/Img/Bryce Canyon/bryce-canyon-7.avif'
import BryceCanyon8 from '../../assets/Img/Bryce Canyon/bryce-canyon-8.avif'
import BryceCanyon9 from '../../assets/Img/Bryce Canyon/bryce-canyon-9.avif'
import BryceCanyon10 from '../../assets/Img/Bryce Canyon/bryce-canyon-10.avif'
import BryceCanyon11 from '../../assets/Img/Bryce Canyon/bryce-canyon-11.avif'
import BryceCanyonLogo from '../../assets/Img/Bryce Canyon/bryce-canyon-logo.avif'
import BryceCanyonEntrance from '../../assets/Img/Bryce Canyon/bryce-canyon-national-park.avif'




const items = [
    {
        image: BryceCanyon1
    },
    {
        image: BryceCanyon2
    },
    {
        image: BryceCanyon3
    },
    {
        image: BryceCanyon4
    },
    {
        image: BryceCanyon5
    },
    {
        image: BryceCanyon6
    },
    {
        image: BryceCanyon7
    },
    {
        image: BryceCanyon8
    },
    {
        image: BryceCanyon9
    },
    {
        image: BryceCanyon10
    },
    {
        image: BryceCanyon11
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
                    imageSrc={BryceCanyonLogo}
                    paragraph="El Parque Nacional Bryce Canyon, situado en el sur de Utah, es un verdadero espectáculo de la naturaleza que parece sacado de un mundo de fantasía. Conocido por su impresionante colección de formaciones rocosas únicas, llamadas hoodoos, este parque ofrece a los visitantes una experiencia verdaderamente surrealista."
                    imageLeft={true}
                />

                <Info
                    imageSrc={BryceCanyonEntrance}
                    paragraph="Los hoodoos son pilares rocosos erosionados que se elevan desde el suelo del cañón en una variedad de formas y tamaños, creando un paisaje que parece sacado de otro planeta. Estas estructuras de roca, talladas por millones de años de viento, agua y actividad geológica, exhiben una rica paleta de colores que van desde el rojo intenso hasta el naranja brillante y el blanco perlado, especialmente impresionantes durante el amanecer y el atardecer cuando la luz juega con las formas y sombras."
                    imageLeft={false}
                />

                <Info
                    imageSrc={BryceCanyon7}
                    paragraph="Explorar Bryce Canyon es como entrar en un laberinto de maravillas naturales. Los visitantes pueden recorrer una variedad de senderos que serpentean entre los hoodoos, ofreciendo vistas panorámicas de los acantilados, cañones y valles que componen este paisaje extraordinario. Desde puntos de observación como Sunrise Point, Sunset Point y Inspiration Point, se puede contemplar la vastedad del cañón y la intrincada belleza de sus formaciones rocosas."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
