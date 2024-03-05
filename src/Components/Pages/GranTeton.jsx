import Info from '../InfoSection';
import Gallery from '../Galeria';
import GranTeton from '../../assets/Img/Gran teton/gran teton.avif'
import GranTeton1 from '../../assets/Img/Gran teton/grand-teton-1.avif'
import GranTeton2 from '../../assets/Img/Gran teton/grand-teton-2.avif'
import GranTeton3 from '../../assets/Img/Gran teton/grand-teton-3.avif'
import GranTeton4 from '../../assets/Img/Gran teton/grand-teton-4.avif'
import GranTeton5 from '../../assets/Img/Gran teton/grand-teton-5.avif'
import GranTeton6 from '../../assets/Img/Gran teton/grand-teton-6.avif'
import GranTeton7 from '../../assets/Img/Gran teton/grand-teton-7.avif'
import GranTeton8 from '../../assets/Img/Gran teton/grand-teton-8.avif'
import GranTeton9 from '../../assets/Img/Gran teton/grand-teton-9.avif'
import GranTeton10 from '../../assets/Img/Gran teton/grand-teton-10.avif'
import GranTeton11 from '../../assets/Img/Gran teton/grand-teton-11.avif'
import GranTeton12 from '../../assets/Img/Gran teton/grand-teton-12.avif'
import GranTeton13 from '../../assets/Img/Gran teton/grand-teton-13.avif'
import GranTeton14 from '../../assets/Img/Gran teton/grand-teton-14.avif'
import GranTetonEntrance from '../../assets/Img/Gran teton/grand-teton-entrance.avif'
import GranTetonLogo from '../../assets/Img/Gran teton/grand-teton-logo.avif'






const items = [
    {
        image: GranTeton
    },
    {
        image: GranTeton1
    },
    {
        image: GranTeton2
    },
    {
        image: GranTeton3
    },
    {
        image: GranTeton4
    },
    {
        image: GranTeton5
    },
    {
        image: GranTeton6
    },
    {
        image: GranTeton7
    },
    {
        image: GranTeton8
    },
    {
        image: GranTeton9
    },
    {
        image: GranTeton10
    },
    {
        image: GranTeton11
    },
    {
        image: GranTeton12
    },
    
    {
        image: GranTeton13
    },
    {
        image: GranTeton14
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
                    imageSrc={GranTetonLogo}
                    paragraph="El Parque Nacional de Grand Teton, ubicado en el noroeste de Wyoming, es un santuario de belleza natural que evoca asombro y admiración en todos los que lo visitan. Este impresionante parque se extiende a lo largo del majestuoso rango de las Montañas Teton, cuyos picos escarpados se elevan verticalmente desde el valle del río Snake, creando un paisaje de una belleza sublime. Los picos nevados, los lagos cristalinos y los prados ondulantes se combinan para formar un paisaje que parece sacado de un cuento de hadas."
                    imageLeft={true}
                />

                <Info
                    imageSrc={GranTetonEntrance}
                    paragraph=" Los Grandes Tetons, que se elevan abruptamente más de 4,000 metros sobre el valle, son el punto focal del parque y ofrecen innumerables oportunidades para la aventura y la exploración. Los excursionistas pueden disfrutar de una variedad de senderos que serpentean a través de bosques de coníferas, atraviesan prados alpinos y ascienden a alturas vertiginosas, ofreciendo vistas panorámicas impresionantes en cada paso del camino. Los lagos alpinos, como Jenny Lake y String Lake, son reflejos serenos de las montañas circundantes, ofreciendo oportunidades para el kayak, la pesca y la contemplación tranquila."
                    imageLeft={false}
                />

                <Info
                    imageSrc={GranTeton5}
                    paragraph="El Parque Nacional de Grand Teton es también un paraíso para los amantes de la vida silvestre, con una abundancia de especies que llaman a este lugar su hogar. Bisontes, alces, osos negros y águilas calvas son solo algunas de las criaturas que se pueden avistar en el parque, mientras que los campos de flores silvestres y las praderas alpinas están llenos de vida durante los meses de verano. Los visitantes pueden tener la oportunidad de observar la migración de alces, el apareamiento de alces o la anidación de águilas, entre otras experiencias únicas de observación de la vida silvestre."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
