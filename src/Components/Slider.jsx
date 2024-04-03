import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../src/index.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Arches from '../assets/Img/Logos/Arches.avif'
import Banff from '../assets/Img/Logos/Banff.avif'
import Bryce from '../assets/Img/Logos/Bryce-Canyon.avif'
import Fundy from '../assets/Img/Logos/Fundy.avif'
import Glacier from '../assets/Img/Logos/Glacier.avif'
import GranCanyon from '../assets/Img/Logos/Gran-Canyon.avif'
import GranTeton from '../assets/Img/Logos/Gran-Teton.avif'
import GrosMorne from '../assets/Img/Logos/Gros-Morne.avif'
import Jasper from '../assets/Img/Logos/Jasper.avif'
import MountRainier from '../assets/Img/Logos/Mount-Rainier.avif'
import NewRiver from '../assets/Img/Logos/New-River.avif'
import RockyMountains from '../assets/Img/Logos/Rocky-Mountain.avif'
import Sequoia from '../assets/Img/Logos/Sequoia.avif'
import SmokyMountains from '../assets/Img/Logos/Smoky-Mountains.avif'
import Yellowstone from '../assets/Img/Logos/Yellowstone.avif'
import Yosemite from '../assets/Img/Logos/Yosemite.avif'




function Slider() {
    return (
        <Swiper
        slidesPerView={8}
        spaceBetween={2}
        loop={true}
        effect={'coverflow'}
        pagination={{
            clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            zoom: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        }}
        className="mySwiper drop-shadow-xl py-20 px-5 " 
        >
            <SwiperSlide>
                <img src={Arches} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Banff} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Bryce} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Fundy} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Glacier} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={GranCanyon} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={GranTeton} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={GrosMorne} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Jasper} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={MountRainier} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={NewRiver} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={RockyMountains} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Sequoia} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={SmokyMountains} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Yellowstone} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Yosemite} />
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;
