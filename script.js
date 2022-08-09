const navbar = document.querySelector(".navbar "),
  bar = document.querySelector(".bar i"),
  menu = document.querySelector(".menu-list"),
  featured_big_img = document.querySelector('.featured-big-img img'),
  featured_small_imges = document.querySelectorAll(".featured-small-imges img"),
  gallery_buttons = document.querySelectorAll(".gallery-buttons button"),
  gallery_boxes = document.querySelector('.gallery-boxes');



bar.addEventListener("click", () => {
  menu.classList.toggle("active");
  bar.classList.toggle("bx-x");
});


window.onscroll = (() => {
  menu.classList.remove("active");
  bar.classList.remove("bx-x");
  if (window.scrollY > 45) {
    navbar.classList.add("active");

  } else {
    navbar.classList.remove("active");
  }
})

function removeClass() {
  for (const imges of featured_small_imges) {
    imges.classList.remove("active");
  }
}

for (const imges of featured_small_imges) {
  imges.addEventListener('click', (e) => {
    removeClass();
    featured_big_img.src = e.target.src;
    e.target.classList.add("active");
  });
}


// ----- products js start here -----

const products = [
  { productName: "Smartphone", imgSrc: "img/g_img1.jpg" },
  { productName: "Smartphone", imgSrc: "img/g_img2.jpg" },
  { productName: "Laptop", imgSrc: "img/g_img3.jpg" },
  { productName: "Shoes", imgSrc: "img/g_img4.jpg" },
  { productName: "Laptop", imgSrc: "img/g_img5.jpg" },
  { productName: "Headphone", imgSrc: "img/g_img6.jpg" },
  { productName: "Shoes", imgSrc: "img/g_img7.jpg" },
  { productName: "Headphone", imgSrc: "img/g_img8.jpg" },
  { productName: "Headphone", imgSrc: "img/g_img9.jpg" },
];


function showAllProduct(){
  let ele = "";

  for (const item of products) {
     ele += `<div class="gallery-box flex">
                      <div class="g-l-box flex">
                          <div class="g-img"><img src="${item.imgSrc}" alt=""></div>
                      </div>
                      <div class="g-r-box flex">
                          <div class="g-product-name flex">${item.productName}</div>
                          <div class="g-footer flex justify-between">
                              <strong>₹1000</strong>
                              <div class="g-icons">
                                  <i class='bx bxs-star'></i>
                                  <i class='bx bxs-star'></i>
                                  <i class='bx bxs-star'></i>
                                  <i class='bx bxs-star'></i>
                                  <i class='bx bxs-star-half'></i>
                              </div>
                          </div>
                      </div>
                </div>`;          
  }

  if(ele!=""){
    gallery_boxes.innerHTML = ele;
  }

}

showAllProduct();

function fetchData(text) {
  let newProduct
  if (text != "All") {
    newProduct = products.filter(item => item.productName === text);
  } else {
    newProduct = [...products];
  }

  let ele = "";

  for (const item of newProduct) {
     ele += `<div class="gallery-box flex">
                      <div class="g-l-box flex">
                          <div class="g-img"><img src="${item.imgSrc}" alt=""></div>
                      </div>
                      <div class="g-r-box flex">
                          <div class="g-product-name flex">${item.productName}</div>
                          <div class="g-footer flex justify-between">
                              <strong>₹1000</strong>
                              <div class="g-icons">
                                  <i class='bx bxs-star'></i>
                                  <i class='bx bxs-star'></i>
                                  <i class='bx bxs-star'></i>
                                  <i class='bx bxs-star'></i>
                                  <i class='bx bxs-star-half'></i>
                              </div>
                          </div>
                      </div>
                </div>`;          
  }

  if(ele!=""){
    gallery_boxes.innerHTML = ele;
  }

}

for (const item of gallery_buttons) {
  item.addEventListener("click", (e) => {
    fetchData(e.target.textContent);
  })
}

// ----- products js end here -----

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});