import yellowstoneimg from '../assets/Img/Yellowstone/yellowstone.avif'
import yosemite from '../assets/Img/Yosemite/yosemite.avif'
import smokymountains from '../assets/Img/Smoky Mountains/smoky-mountains.webp'
import glacier from '../assets/Img/Glacier/glacier.avif'
import sequoia from '../assets/Img/Sequoia/sequoia.avif'
import banff from '../assets/Img/Banff/banff.avif'
import arches from '../assets/Img/Arches/arches-hero-1920x1080.avif'
import newRiver from '../assets/Img/New River/new river.avif'
import granTeton from '../assets/Img/Gran teton/gran teton.avif'
import granCañón from '../assets/Img/Grand Canyon/gran canon.avif'
import rockymountains from '../assets/Img/Rocky Mountains/rocky mountains.avif'
import brycecanyon from '../assets/Img/Bryce Canyon/bryce-canyon.webp'
import jasper from '../assets/Img/Jasper/jasper.avif'
import grosmorne from '../assets/Img/Gros Morne/gros morne.avif'
import Fundy from '../assets/Img/Fundy/Fundy.avif'
import mtrainier from '../assets/Img/Mount Rainier/mt-rainier.avif'
import { Link } from 'react-router-dom';




export default function Principal() {
    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10 px-6 mx-6">
                <Link to="/Yellowstone" className='relative bg-gray-100'>
                    <img src={yellowstoneimg} className="w-full h-44 object-cover sm:h-64" alt="Yellowstone National Park" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                        <h1 className='text-white text-center text-base font-bold mb-2'>Parque Nacional Yellowstone</h1>
                    </div>
                </Link>

                <Link to="/Yosemite">
                    <div className='relative bg-gray-100'>
                        <img src={yosemite} className="w-full h-44 object-cover sm:h-64" alt="Yosemite National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base font-bold mb-2'>Parque Nacional Yosemite</h1>
                        </div>
                    </div>
                </Link>

                <Link to="/SmokyMountains">
                    <div className='relative bg-gray-100'>
                        <img src={smokymountains} className="w-full h-44 object-cover sm:h-64" alt="Smoky Mountains National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 ">
                            <h1 className='text-white text-center text-base font-bold mb-2'>Parque Nacional de las Montañas Humeantes</h1>
                        </div>
                    </div>
                </Link>

                <Link to="/Glacier">
                    <div className='relative bg-gray-100'>
                        <img src={glacier} className="w-full h-44 object-cover sm:h-64" alt="Glacier National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base font-bold mb-2'>Parque Nacional Glacier</h1>
                        </div>
                    </div>
                </Link>

                <Link  to="/Sequoia">
                    <div className='relative bg-gray-100'>
                        <img src={sequoia} className="w-full h-44 object-cover sm:h-64" alt="Sequoia National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base  font-bold mb-2'>Parque Nacional de las Secuoyas</h1>
                        </div>
                    </div>
                </Link>

                <Link  to="/Banff">
                    <div className='relative bg-gray-100'>
                        <img src={banff} className="w-full h-44 object-cover sm:h-64" alt="Banff National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base  font-bold mb-2'>Parque Nacional Banff</h1>
                        </div>
                    </div>
                </Link>

                <Link  to="/Arches">
                    <div className='relative bg-gray-100'>
                        <img src={arches} className="w-full h-44 object-cover sm:h-64" alt="Arches National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base  font-bold mb-2'>Parque Nacional de los Arcos</h1>
                        </div>
                    </div>
                </Link>

                <Link  to="/NewRiver">
                    <div className='relative bg-gray-100'>
                        <img src={newRiver} className="w-full h-44 object-cover sm:h-64" alt="New River National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base  font-bold mb-2'>Parque Nacional New River</h1>
                        </div>
                    </div>
                </Link>

                <Link  to="/GranTeton">
                    <div className='relative bg-gray-100'>
                        <img src={granTeton} className="w-full h-44 object-cover sm:h-64" alt="Gran Teton National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base  font-bold mb-2'>Parque Nacional Gran Teton</h1>
                        </div>
                    </div>
                </Link>

                <Link  to="/GrandCanyon">
                    <div className='relative bg-gray-100'>
                        <img src={granCañón} className="w-full h-44 object-cover sm:h-64" alt="Gran Cañón National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base  font-bold mb-2'>Parque Nacional Gran Cañón</h1>
                        </div>
                    </div>
                </Link>

                <Link  to="/Rocky Mountain">
                    <div className='relative bg-gray-100'>
                        <img src={rockymountains} className="w-full h-44 object-cover sm:h-64" alt="Rocky Mountains National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base  font-bold mb-2'>Parque Nacional de las Montañas Rocosas</h1>
                        </div>
                    </div>
                </Link>

                <Link  to="/BryceCanyon">
                    <div className='relative bg-gray-100'>
                        <img src={brycecanyon} className="w-full h-44 object-cover sm:h-64" alt="Bryce Canyon National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base  font-bold mb-2'>Parque Nacional Bryce Canyon</h1>
                        </div>
                    </div>
                </Link>

                <Link  to="/Jasper">
                    <div className='relative bg-gray-100'>
                        <img src={jasper} className="w-full h-44 object-cover sm:h-64" alt="Jasper National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base  font-bold mb-2'>Parque Nacional Jasper</h1>
                        </div>
                    </div>
                </Link>

                <Link  to="/GrosMorne">
                    <div className='relative bg-gray-100'>
                        <img src={grosmorne} className="w-full h-44 object-cover sm:h-64" alt="Gros Morne National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base  font-bold mb-2'>Parque Nacional Gros Morne</h1>
                        </div>
                    </div>
                </Link>

                <Link  to="/Fundy">
                    <div className='relative bg-gray-100'>
                        <img src={Fundy} className="w-full h-44 object-cover sm:h-64" alt="Fundy National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base  font-bold mb-2'>Parque Nacional Fundy</h1>
                        </div>
                    </div>
                </Link>

                <Link  to="/MountRainier">
                    <div className='relative bg-gray-100'>
                        <img src={mtrainier} className="w-full h-44 object-cover sm:h-64" alt="Mount Rainier National Park" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h1 className='text-white text-center text-base  font-bold mb-2'>Parque Nacional Mount Rainier</h1>
                        </div>
                    </div>
                </Link>
            </section>

           
        </>
    );
}
