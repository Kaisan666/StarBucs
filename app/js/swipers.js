import Swiper from 'swiper/bundle';
import { Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/grid"

const delicious = document.querySelector('.new-products');
if (delicious) {
  const deliciousSwiper = new Swiper(delicious.querySelector('.swiper'), {
    slidesPerView: 'auto',
    spaceBetween: 54,
  });
}
const events = document.querySelector('.events');
if (events) {
  const eventsSwiper = new Swiper(events.querySelector('.swiper'), {
    slidesPerView: "auto",
    // slidesPerView: 2,
    // spaceBetween: 30,
    // slidesPerColumn : 2,
    freeMode: true,
    grid : {
      rows: 2,
    //   fill: 'row',
    },
  });
}
