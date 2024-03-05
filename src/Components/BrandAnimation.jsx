import Slider from "react-slick";


const Logos = [
    { img: "1", animationDealay: "" },
    { img: "2", animationDealay: "30" },
    { img: "3", animationDealay: "60" },
    { img: "4", animationDealay: "90" },
    { img: "5", animationDealay: "120" },
    { img: "6", animationDealay: "150" },
    { img: "7", animationDealay: "180" },
    { img: "8", animationDealay: "210" },
    { img: "9", animationDealay: "240" },
    { img: "10", animationDealay: "270" },
    { img: "11", animationDealay: "300" },
    { img: "12", animationDealay: "310" },
    { img: "13", animationDealay: "330" },
    { img: "14", animationDealay: "350" },
    { img: "15", animationDealay: "370" },
    { img: "16", animationDealay: "400" },

];

export default function BrandAnimation() {
    var settings = {
        dots: false,
        arrow: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <ul>
            <Slider {...settings}>
                {Logos.map((val, i) => (
                    <li className="item" key={i}>
                        <img
                            src={`img/nationalparks/${val.img}.avif`}
                            alt="National Parks Logos"
                            data-aos="fade"
                            data-aos-duration="1200"
                            data-aos-delay={val.animationDealay}
                        />
                    </li>
                ))}
            </Slider>
        </ul>
    );
}