
import y1 from '../../assets/Img/Yellowstone/yellowstone1.avif'
import y2 from '../../assets/Img/Yellowstone/yellowstone2.avif'
import y3 from '../../assets/Img/Yellowstone/yellowstone3.avif'
import y4 from '../../assets/Img/Yellowstone/yellowstone4.avif'
import y5 from '../../assets/Img/Yellowstone/yellowstone5.avif'
import y7 from '../../assets/Img/Yellowstone/yellowstone7.avif'
import y8 from '../../assets/Img/Yellowstone/yellowstone8.avif'
import y9 from '../../assets/Img/Yellowstone/yellowstone9.avif'
import y10 from '../../assets/Img/Yellowstone/yellowstone10.avif'
import y11 from '../../assets/Img/Yellowstone/yellowstone11.avif'
import y12 from '../../assets/Img/Yellowstone/yellowstone12.avif'
import y13 from '../../assets/Img/Yellowstone/yellowstone13.avif'
import ynp from '../../assets/Img/Yellowstone/ynp.avif'






export default function Principal() {

    return (
        <>
            <header className=" inline-flex px-10 pt-20" >
                <div className=" text-center text-black py-5">
                    <h1 className="text-3xl font-bold font-serif mb-4">Parque Nacional Yellowstone</h1>
                    <p className="text-sm text-balance">Yellowstone es el primer parque nacional del mundo y cubre un área de más de 2 millones de acres, principalmente en Wyoming, aunque también se extiende a Montana e Idaho. Es famoso por sus géiseres, aguas termales, cañones y diversa vida silvestre, incluidos bisontes, osos grizzly, lobos y alces.</p>
                </div>
            </header>


            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10 my-10 px-6 mx-6">

                <div className='relative bg-gray-100'>
                    <img src={y1} className="w-full h-44 object-cover sm:h-64 rounded-md" alt="Yellowstone National Park" />
                </div>

                <div className='relative bg-gray-100'>
                    <img src={y2} className="w-full h-44 object-cover sm:h-64 rounded-md" alt="Yellowstone National Park" />

                </div>

                <div className='relative bg-gray-100'>
                    <img src={y3} className="w-full h-44 object-cover sm:h-64 rounded-md" alt="Yellowstone National Park Sunset" />

                </div>

                <div className='relative bg-gray-100'>
                    <img src={y4} className="w-full h-44 object-cover sm:h-64 rounded-md" alt="Yellowstone National Park" />

                </div>

                <div className='relative bg-gray-100'>
                    <img src={y5} className="w-full h-44 object-cover sm:h-64 rounded-md" alt="Yellowstone National Park" />

                </div>



                <div className='relative bg-gray-100'>
                    <img src={y7} className="w-full h-44 object-cover sm:h-64 rounded-md" alt="Yellowstone National Park" />

                </div>

                <div className='relative bg-gray-100'>
                    <img src={y8} className="w-full h-44 object-cover sm:h-64 rounded-md" alt="Yellowstone National Park" />

                </div>

                <div className='relative bg-gray-100'>
                    <img src={y9} className="w-full h-44 object-cover sm:h-64 rounded-md" alt="Yellowstone National Park" />

                </div>

                <div className='relative bg-gray-100'>
                    <img src={y10} className="w-full h-44 object-cover sm:h-64 rounded-md" alt="Yellowstone National Park River" />

                </div>

                <div className='relative bg-gray-100'>
                    <img src={y11} className="w-full h-44 object-cover sm:h-64 rounded-md" alt="Yellowstone National Park" />
                </div>

                <div className='relative bg-gray-100'>
                    <img src={y12} className="w-full h-44 object-cover sm:h-64 rounded-md" alt="Yellowstone National Park" />
                </div>

                <div className='relative bg-gray-100'>
                    <img src={y13} className="w-full h-44 object-cover sm:h-64 rounded-md" alt="Yellowstone National Park Entrances" />
                </div>

            </section>


            <section className='flex flex-col py-10 px-8 gap-10'>
                <div className='inline-flex px-10 gap-10'>
                    <img src={ynp} className=" w-62 h-44 drop-shadow-sm  rounded-md" alt="Yellowstone National Park Logo" />
                    <p className=' font-normal font-serif text-balance py-10'>El Parque Nacional Yellowstone, ubicado principalmente en el estado de Wyoming, es un tesoro natural de belleza incomparable. Fundado en 1872, es el primer parque nacional del mundo y abarca una vasta extensión de paisajes impresionantes, que incluyen géiseres, lagos cristalinos, cañones profundos y una variedad única de vida silvestre.</p>
                </div >


                <div className='inline-flex  px-10 gap-10'>
                    <p className=' font-normal font-serif text-balance py-10'>Yellowstone es conocido por su actividad geotérmica excepcional, que se manifiesta en más de 10,000 características geotérmicas, incluidos géiseres, fuentes termales, barros hirvientes y fumarolas. El más famoso de todos es Old Faithful, un géiser predecible que entra en erupción regularmente, lanzando columnas de agua caliente y vapor al aire.</p>
                    <img src={y4} className=" w-62 h-44 drop-shadow-sm  rounded-md" alt="Yellowstone National Park Logo" />
                </div >

                <div className='inline-flex px-10 gap-10'>
                    <img src={y5} className=" w-62 h-44 drop-shadow-sm  rounded-md" alt="Yellowstone National Park Logo" />
                    <p className=' font-normal font-serif text-balance py-10'>Además de sus características geotérmicas, Yellowstone alberga una diversidad asombrosa de vida silvestre. Es el hogar de una de las poblaciones más grandes de mamíferos salvajes en los Estados Unidos, que incluyen bisontes, osos grizzly, lobos, alces y ciervos, entre otros. Los visitantes tienen la oportunidad única de observar a estos majestuosos animales en su hábitat natural.</p>
                </div >

                <div className='inline-flex  px-10 gap-10'>
                    <p className=' font-normal font-serif text-balance py-10'>Los paisajes de Yellowstone son igualmente impresionantes, con una variedad de ecosistemas que van desde praderas alpinas hasta bosques subalpinos. El Gran Cañón de Yellowstone, esculpido por el río Yellowstone, ofrece vistas espectaculares de acantilados multicolores y cascadas rugientes, mientras que el lago Yellowstone, el lago alpino más grande de América del Norte, brinda serenidad y belleza escénica.</p>
                    <img src={y8} className=" w-62 h-44 drop-shadow-sm  rounded-md" alt="Yellowstone National Park Logo" />
                </div >
            </section>

        </>
    );
}
