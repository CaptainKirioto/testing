/* ------------- Axios import ------------- */

import axios from 'axios';
import './css/styles.css';

/* ----------- iziToast ----------- */

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* ------------- Swiper import ------------- */

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  speed: 400,
  spaceBetween: 20,
  centeredSlides: false,
  centeredSlidesBounds: true,
  autoHeight: true,
  slidesPerView: 'auto',

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* ------------- HTTP request ------------- */

const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';

const reviews = document.querySelector('.swiper-wrapper');

async function getReviews() {
  const response = await axios.get(BASE_URL, {});
  console.log(response.data);
  return response.data;
}

/* ------------- Markup ------------- */

function createMarkup(reviews1) {
  return reviews1
    .map(
      review =>
        `
      <li class="swiper-slide">
      <p class="reviews-text">${review.review}</p>
      <div class="review-author-data">
          <a class="reviews-img-link" href="${review.avatar_url}">
          <img class="reviews-img" alt="author's avatar" src="${review.avatar_url}"/>
          </a>
          <p class="reviews-name">${review.author}</p>
      </div>
      </li>`
    )
    .join('');
}

/* ------------- Getting reviews ------------- */

const errorContainer = document.querySelector('.error-container');
const swiperContainer = document.querySelector('.swiper');

getReviews()
  .then(data => {
    errorContainer.style.display = 'none';
    if (data.length > 0) {
      reviews.insertAdjacentHTML('beforeend', createMarkup(data));
    } else {
      reviews.insertAdjacentHTML('beforeend', 'Not found');
      iziToast.show({
        message: 'Sorry, no reviews found',
        maxWidth: '432px',
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#FFFFFF',
      });
    }
  })
  .catch(error => {
    swiperContainer.style.display = 'none';
    errorContainer.insertAdjacentHTML('beforeend', `<p>Not found</p>`);
    iziToast.show({
      message: 'Sorry, no reviews found',
      maxWidth: '432px',
      position: 'topRight',
      backgroundColor: '#EF4040',
      messageColor: '#FFFFFF',
    });
    console.log(error);
  });
