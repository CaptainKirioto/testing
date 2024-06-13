import{S as a,N as c,i as l,a as u}from"./assets/vendor-592829a3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();new a(".swiper",{modules:[c],speed:400,spaceBetween:20,centeredSlides:!1,centeredSlidesBounds:!0,autoHeight:!0,slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const d="https://portfolio-js.b.goit.study/api/reviews",p=document.querySelector(".swiper-wrapper");async function f(){const r=await u.get(d,{});return console.log(r.data),r.data}function g(r){return r.map(s=>`
      <li class="swiper-slide">
      <p class="reviews-text">${s.review}</p>
      <div class="review-author-data">
          <a class="reviews-img-link" href="${s.avatar_url}">
          <img class="reviews-img" alt="author's avatar" src="${s.avatar_url}"/>
          </a>
          <p class="reviews-name">${s.author}</p>
      </div>
      </li>`).join("")}f().then(r=>{r.length>0?p.insertAdjacentHTML("beforeend",g(r)):l.show({message:"Sorry, no reviews found",maxWidth:"432px",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF"})}).catch(r=>{console.log(r)});
//# sourceMappingURL=commonHelpers.js.map
