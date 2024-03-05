import Info from '../InfoSection';
import Gallery from '../Galeria';
import Sequoia1 from '../../assets/Img/Sequoia/sequoia-1.avif'
import Sequoia2 from '../../assets/Img/Sequoia/sequoia-2.avif'
import Sequoia3 from '../../assets/Img/Sequoia/sequoia-3.avif'
import Sequoia4 from '../../assets/Img/Sequoia/sequoia-4.avif'
import Sequoia5 from '../../assets/Img/Sequoia/sequoia-5.avif'
import Sequoia6 from '../../assets/Img/Sequoia/sequoia-6.avif'
import Sequoia7 from '../../assets/Img/Sequoia/sequoia-7.avif'
import Sequoia8 from '../../assets/Img/Sequoia/sequoia-8.avif'
import Sequoia9 from '../../assets/Img/Sequoia/sequoia-9.avif'
import Sequoia10 from '../../assets/Img/Sequoia/sequoia-10.avif'
import Sequoia11 from '../../assets/Img/Sequoia/sequoia-11.avif'
import Sequoia12 from '../../assets/Img/Sequoia/sequoia-12.avif'
import Sequoia13 from '../../assets/Img/Sequoia/sequoia-13.avif'
import Sequoia14 from '../../assets/Img/Sequoia/sequoia-14.avif'
import SequoiaLogo from '../../assets/Img/Sequoia/sequoia-national-park-logo.avif'
import SequoiaEntrance from '../../assets/Img/Sequoia/sequoia-national-park-entrance.avif'






const items = [
    {
        image: Sequoia1
    },
    {
        image: Sequoia2
    },
    {
        image: Sequoia3
    },
    {
        image: Sequoia4
    },
    {
        image: Sequoia5
    },
    {
        image: Sequoia6
    },
    {
        image: Sequoia7
    },
    {
        image: Sequoia8
    },
    {
        image: Sequoia9
    },
    {
        image: Sequoia10
    },
    {
        image: Sequoia11
    },
    {
        image: Sequoia12
    },
    {
        image: Sequoia13
    },
    {
        image: Sequoia14
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
                    imageSrc={SequoiaLogo}
                    paragraph="El Parque Nacional Sequoia, ubicado en la parte sur de la Sierra Nevada de California, es un tesoro natural que cautiva con su imponente belleza y su increíble diversidad biológica. En el corazón de este parque se encuentran los bosques de secuoyas gigantes, donde se alzan algunos de los árboles más grandes del mundo, incluido el famoso General Sherman, un coloso que se eleva hacia el cielo con una majestuosidad imponente. Estos árboles antiguos, algunos con más de 2,000 años de edad, crean un paisaje surrealista de troncos gigantescos y copas que se pierden en el dosel forestal."
                    imageLeft={true}
                />

                <Info
                    imageSrc={Sequoia11}
                    paragraph="El Parque Nacional Sequoia ofrece una variedad de paisajes impresionantes, desde altas crestas montañosas hasta cañones profundos y ríos rugientes. El imponente Monte Whitney, el pico más alto de los Estados Unidos contiguos, se eleva majestuosamente en el horizonte, ofreciendo desafíos épicos para los escaladores y vistas panorámicas para aquellos que se aventuran a sus faldas."
                    imageLeft={false}
                />

                <Info
                    imageSrc={SequoiaEntrance}
                    paragraph="La vida silvestre abunda en el Parque Nacional Sequoia, con una variedad de especies que encuentran refugio en sus vastos bosques y prados alpinos. Ciervos, osos negros, pumas y una multitud de aves y pequeños mamíferos llaman a este parque su hogar, contribuyendo a su rica biodiversidad. "
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
