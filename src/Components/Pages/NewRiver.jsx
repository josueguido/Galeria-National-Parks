import Info from '../InfoSection';
import Gallery from '../Galeria';
import NewRiver from '../../assets/Img/New River/new river.avif'
import NewRiver1 from '../../assets/Img/New River/new-river-1.avif'
import NewRiver2 from '../../assets/Img/New River/new-river-2.avif'
import NewRiver4 from '../../assets/Img/New River/new-river-4.avif'
import NewRiver5 from '../../assets/Img/New River/new-river-5.avif'
import NewRiver6 from '../../assets/Img/New River/new-river-6.avif'
import NewRiver7 from '../../assets/Img/New River/new-river-7.avif'
import NewRiver8 from '../../assets/Img/New River/new-river-8.avif'
import NewRiver9 from '../../assets/Img/New River/new-river-9.avif'
import NewRiver10 from '../../assets/Img/New River/new-river-10.avif'
import NewRiver11 from '../../assets/Img/New River/new-river-11.avif'
import NewRiver12 from '../../assets/Img/New River/new-river-12.avif'
import NewRiver13 from '../../assets/Img/New River/new-river-13.avif'
import NewRiver14 from '../../assets/Img/New River/new-river-14.avif'
import NewRiverLogo from '../../assets/Img/New River/new-river-logo.avif'
import NewRiverEntrance from '../../assets/Img/New River/new-river-national-park-entrance.avif'





const items = [
    {
        image: NewRiver
    },
    {
        image: NewRiver1
    },
    {
        image: NewRiver2
    },

    {
        image: NewRiver4
    },
    {
        image: NewRiver5
    },
    {
        image: NewRiver6
    },
    {
        image: NewRiver7
    },
    {
        image: NewRiver8
    },
    {
        image: NewRiver9
    },
    {
        image: NewRiver10
    },
    {
        image: NewRiver11
    },
    {
        image: NewRiver12
    },
    {
        image: NewRiver13
    },
    {
        image: NewRiver14
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
                    imageSrc={NewRiverLogo}
                    paragraph="El New River Gorge National River, situado en el corazón de los Apalaches occidentales de Virginia Occidental, es un tesoro natural y cultural que ofrece una experiencia única en el este de Estados Unidos. Tallado por milenios de flujo constante, el río New serpentea a través de una garganta escarpada, creando un paisaje de belleza salvaje y majestuosa."
                    imageLeft={true}
                />

                <Info
                    imageSrc={NewRiverEntrance}
                    paragraph="New River Gorge National River es un destino verdaderamente único que combina la emoción de los deportes de aventura con la belleza natural y la rica historia cultural de los Apalaches. Con su paisaje impresionante y sus emocionantes actividades al aire libre, este parque es un destino imperdible para aquellos que buscan experimentar lo mejor de la naturaleza y la aventura en el este de Estados Unidos."
                    imageLeft={false}
                />



                <Info
                    imageSrc={NewRiver11}
                    paragraph=" Para los amantes de la adrenalina, las paredes de roca del New River Gorge son un paraíso para la escalada en roca, con rutas que desafían incluso a los escaladores más experimentados."
                    imageLeft={true}
                />

                <Info
                    imageSrc={NewRiver4}
                    paragraph="Los senderos serpentean a lo largo de la garganta, ofreciendo vistas panorámicas de los acantilados y del río serpenteante debajo. Para los amantes de la adrenalina, las paredes de roca del New River Gorge son un paraíso para la escalada en roca, con rutas que desafían incluso a los escaladores más experimentados."
                    imageLeft={false}
                />

            </section>
        </article>
    );
};

export default ParkInfo;
