import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const delicious = document.querySelector(".new-products")
if (delicious){
    const deliciousSwiper = new Swiper(delicious.querySelector(".swiper"), {
        slidesPerView : "auto",
        spaceBetween : 54,
    })
}