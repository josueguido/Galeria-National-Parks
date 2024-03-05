import Info from '../InfoSection';
import Gallery from '../Galeria';
import MountRainier1 from '../../assets/Img/Mount Rainier/mount-rainier-1.avif'
import MountRainier2 from '../../assets/Img/Mount Rainier/mount-rainier-2.avif'
import MountRainier3 from '../../assets/Img/Mount Rainier/mount-rainier-3.avif'
import MountRainier4 from '../../assets/Img/Mount Rainier/mount-rainier-4.avif'
import MountRainier5 from '../../assets/Img/Mount Rainier/mount-rainier-5.avif'
import MountRainier6 from '../../assets/Img/Mount Rainier/mount-rainier-6.avif'
import MountRainier7 from '../../assets/Img/Mount Rainier/mount-rainier-7.avif'
import MountRainier8 from '../../assets/Img/Mount Rainier/mount-rainier-8.avif'
import MountRainier9 from '../../assets/Img/Mount Rainier/mount-rainier-9.avif'
import MountRainier10 from '../../assets/Img/Mount Rainier/mount-rainier-10.avif'
import MountRainier11 from '../../assets/Img/Mount Rainier/mount-rainier-11.avif'
import MountRainier12 from '../../assets/Img/Mount Rainier/mount-rainier-12.avif'
import MountRainier13 from '../../assets/Img/Mount Rainier/mount-rainier-13.avif'
import MountRainier14 from '../../assets/Img/Mount Rainier/mount-rainier-14.avif'
import MountRainierEntrance from '../../assets/Img/Mount Rainier/mount-rainier-entrance.avif'
import MountRainierLogo from '../../assets/Img/Mount Rainier/mount-rainier-logo.avif'



const items = [
    {
        image: MountRainier1
    },
    {
        image: MountRainier2
    },
    {
        image: MountRainier3
    },
    {
        image: MountRainier4
    },
    {
        image: MountRainier5
    },
    {
        image: MountRainier6
    },
    {
        image: MountRainier7
    },
    {
        image: MountRainier8
    },
    {
        image: MountRainier9
    },
    {
        image: MountRainier10
    },
    {
        image: MountRainier11
    },
    {
        image: MountRainier12
    },
    {
        image: MountRainier13
    },
    {
        image: MountRainier14
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
                    imageSrc={MountRainierLogo}
                    paragraph="El Parque Nacional Mount Rainier, situado en el estado de Washington, Estados Unidos, es un espectacular santuario natural que abarca el majestuoso Monte Rainier, un volcán activo cubierto de glaciares que se eleva a 4,392 metros sobre el nivel del mar. Designado como Patrimonio de la Humanidad por la UNESCO, este parque es un destino emblemático que cautiva a los visitantes con su belleza escénica, su diversidad biológica y su fascinante geología."
                    imageLeft={true}
                />

                <Info
                    imageSrc={MountRainierEntrance}
                    paragraph="El Monte Rainier domina el paisaje del parque, creando un telón de fondo impresionante para una variedad de ecosistemas que incluyen bosques antiguos, praderas alpinas y glaciares imponentes. Los visitantes pueden explorar más de 240 kilómetros de senderos que serpentean a través de estos diversos hábitats, ofreciendo vistas espectaculares del volcán y la oportunidad de avistar vida silvestre, como osos negros, alces, ciervos y una variedad de aves."
                    imageLeft={false}
                />

                <Info
                    imageSrc={MountRainier1}
                    paragraph="El parque es especialmente famoso por sus espectaculares flores silvestres, que florecen en primavera y verano, transformando las praderas alpinas en una paleta de colores vibrantes. Los senderos como el Wonderland Trail y el Skyline Trail ofrecen algunas de las mejores oportunidades para disfrutar de este espectáculo natural, así como para observar de cerca las impresionantes cascadas que salpican el paisaje del parque."
                    imageLeft={true}
                />
            </section>
        </article>
    );
};

export default ParkInfo;
