import{S as a,N as c,a as l}from"./assets/vendor-de7fa0f2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();new a(".swiper",{modules:[c],speed:400,spaceBetween:20,centeredSlides:!0,centeredSlidesBounds:!0,keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const u="https://portfolio-js.b.goit.study/api/reviews",d=document.querySelector(".reviews-container");async function p(){const r=await l.get(u,{});return console.log(r.data),r.data}function f(r){return r.map(s=>`
      <li class="swiper-slide">
      <p class="reviews-text">${s.review}</p>
      <div class="review-author-data">
          <a class="reviews-img-link" href="${s.avatar_url}">
          <img class="reviews-img" alt="author's avatar" src="${s.avatar_url}"/>
          </a>
          <p class="reviews-name">${s.author}</p>
      </div>
      </li>`).join("")}p().then(r=>{r.length>0?d.insertAdjacentHTML("beforeend",f(r)):alert("Sorry, no reviews found")}).catch(r=>{console.log(r)});
//# sourceMappingURL=commonHelpers.js.map
