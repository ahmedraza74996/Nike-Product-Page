'use strict';
/* 
    * ADD EVENT ON ELEMENT
*/

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventOnElem(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

/*
    * NAVBAR TOGGLE
*/

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggker]");
const overlay = document.querySelector("[data-overlay]");
const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}
addEventOnElem(navToggler, "click", toggleNav);

/*
    * SLIDER-FUNCTIONALITY
*/

const slider = document.querySelector("[data-slider]");
const nextBtn = document.querySelector("[data-next]");
const prevBtn = document.querySelector("[data-prev]");

// SET THE SLIDER DEFAULT POSITION //

let slidePos = 0;

// SET THE NUMBER OF TOTAL SLIDER ITEMS //

const totalSliderItems = 4;

// MAKE NEXT SLIDE BTN WORKABLE //

const slideToNext = function () {
    slidePos--;
    slider.computedStyleMap.transform = `translateX(-${slidePos}00%)`;
    sliderEnd();
}
addEventOnElem(prevBtn, "click", slideToPrev);
// CHECK WHEN SLIDER IS END THEN WHAT SHOULD SLIDER BTN DO //

function sliderEnd() {
    if (slidePos >= totalSliderItems - 1) {
        nextBtn.classList.add("disabled");
    } else {
        nextBtn.classList.remove("disabled");
    }
    if (slidePos <= 0) {
        prevBtn.classList.add("disabled");
    } else {
        prevBtn.classList.remove("disabled");
    }
}
sliderEnd();
/* 
    * PRODUCT QUALITY FUNCTIONALITY
*/

const totalPriceElem = document.querySelector("[data-total-price]");
const qtyElem = document.querySelector("[data-qty]");
const qtyMinusBtn = document.querySelector("[data-qty-minus]");
const qtyPlusBtn = document.querySelector("[data-qty-plus]");
// SET THE PRODUCT DEFAULT QUALITY //

let qty = 1;
// SET THE PRODUCT DEFAULT PRICE //

let productPrice = 125;
// SET THE INITIAL TOTAL PRICE //

let totalPrice = 125;
const increaseProductQty = function () {
    qty++;
    totalPrice = qty * productPrice;
    qtyElem.textContent = qty;
    totalPriceElem.textContent = `${totalPrice}.00`;
}

addEventOnElem(qtyPlusBtn, "click", increaseProductQty);
const decreaseProductQty = function () {
    if (qty > 1) qty--;
    totalPrice = qty * productPrice;
    qtyElem.textContent = qty;
    totalPriceElem.textContent = `${totalPrice}.00`;
}
addEventOnElem(qtyMinusBtn, "click", decreaseProductQty);
const decreaseProductQty = function () {
    if (qty > 1) qty--;
    totalPrice = qty * productPrice;
    qtyElem.textContent = qty;
    totalPriceElem.textContent = `${totalPrice}.00`;
}
addEventOnElem(qtyMinusBtn, "click", decreaseProductQty);