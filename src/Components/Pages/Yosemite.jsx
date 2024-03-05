import Gallery from '../Galeria';
import Info from '../InfoSection';
import yosemite from '../../assets/Img/Yosemite/yosemite np.avif';
import yosemite1 from '../../assets/Img/Yosemite/yosemite.avif';
import yosemite2 from '../../assets/Img/Yosemite/yosemite2.avif';
import yosemite3 from '../../assets/Img/Yosemite/yosemite3.avif';
import yosemite4 from '../../assets/Img/Yosemite/yosemite4.avif';
import yosemite5 from '../../assets/Img/Yosemite/yosemite5.avif';
import yosemite6 from '../../assets/Img/Yosemite/yosemite6.avif';
import yosemite7 from '../../assets/Img/Yosemite/yosemite7.avif';
import yosemite9 from '../../assets/Img/Yosemite/yosemite9.avif';
import yosemite10 from '../../assets/Img/Yosemite/yosemite10.avif';
import yosemite11 from '../../assets/Img/Yosemite/yosemite11.avif';
import yosemite12 from '../../assets/Img/Yosemite/yosemite12.avif';
import yosemite13 from '../../assets/Img/Yosemite/yosemite13.avif';
import yosemite14 from '../../assets/Img/Yosemite/yosemite14.avif';
import yosemite15 from '../../assets/Img/Yosemite/yosemite15.avif';





const items = [
    {
        image: yosemite1
    },
    {
        image: yosemite2
    },
    {
        image: yosemite3
    },
    {
        image: yosemite4
    },
    {
        image: yosemite5
    },
    {
        image: yosemite6
    },
    {
        image: yosemite7
    },

    {
        image: yosemite9
    },
    {
        image: yosemite10
    },
    {
        image: yosemite11
    },
    {
        image: yosemite12
    },
    {
        image: yosemite13
    },
    {
        image: yosemite14
    },

];

const App = () => {
    return (
        <article>
            <div>
                <Gallery items={items} />
            </div>


            <Info
                imageSrc={yosemite}
                paragraph="En el corazón de la Sierra Nevada de California, se encuentra el icónico Parque Nacional Yosemite, un paraíso natural que deja a los visitantes sin aliento con su magnífica belleza. Con sus imponentes acantilados de granito, cascadas rugientes, frondosos bosques de secuoyas y prados exuberantes, Yosemite es un lugar de asombroso esplendor que ha inspirado a generaciones de aventureros, artistas y amantes de la naturaleza."
                imageLeft={true}
            />

            <Info
                imageSrc={yosemite2}
                paragraph="Los famosos acantilados de granito del valle de Yosemite, como El Capitán y Half Dome, dominan el paisaje con su presencia imponente y majestuosa, atrayendo a escaladores de todo el mundo en busca de desafíos épicos. Las cascadas, como la impresionante Yosemite Falls, que se precipitan desde alturas vertiginosas, llenan el aire con su estruendoso rugido y crean un espectáculo visual impresionante."
                imageLeft={false}
            />

            
<Info
                imageSrc={yosemite15}
                paragraph="El Parque Nacional Yosemite es también un refugio para una diversidad asombrosa de vida silvestre, desde ciervos y osos negros hasta el amenazado búho manchado. Sus bosques de secuoyas gigantes, como el Bosque de Mariposas, albergan árboles milenarios que se alzan hacia el cielo con una majestuosidad casi celestial."
                imageLeft={true}
            />

            <Info
                imageSrc={yosemite6}
                paragraph="Los visitantes de Yosemite pueden explorar este paraíso natural de diversas maneras, ya sea recorriendo sus numerosos senderos de senderismo, acampando bajo un cielo estrellado, o simplemente admirando la belleza natural desde los miradores panorámicos. Además, el parque ofrece una rica historia cultural, con sitios como las aldeas de nativos americanos Ahwahneechee y las cabañas históricas de pioneros que añaden una capa adicional de profundidad a la experiencia."
                imageLeft={false}
            /> 
        </article>
    );
}

export default App;
