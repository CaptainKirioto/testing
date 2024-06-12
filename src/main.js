import axios from 'axios';
import './css/styles.css';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  speed: 400,
  spaceBetween: 20,
  centeredSlides: true,
  centeredSlidesBounds: true,

  // kaybord doesn't work for now
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';

const reviews = document.querySelector('.reviews-container');

async function getReviews() {
  const response = await axios.get(BASE_URL, {});
  console.log(response.data);
  return response.data;
}

function createMarkup(reviews) {
  return reviews
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

getReviews()
  .then(data => {
    if (data.length > 0) {
      reviews.insertAdjacentHTML('beforeend', createMarkup(data));
    } else {
      alert('Sorry, no reviews found');
    }
  })
  .catch(error => {
    console.log(error);
  });
