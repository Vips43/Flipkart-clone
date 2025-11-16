import { colgateData, mobileData, footwearData } from "./data.js";

let Colgate = document.getElementById("Colgate")
let Mobile = document.getElementById("Mobile")
let Footwear = document.getElementById("Footwear")
let searchDiv = document.getElementById("searchDiv"),
  shoppingCart = document.getElementById('shopping_cart'),
  userAc = document.getElementById('userAc'),
  inputDropDown = document.querySelector('#inputDropDown'),
  cartIcon = document.querySelector('#cartIcon'),
  cartIconShow = document.querySelector('#cartIconShow'),
  dropDownCart = document.querySelector('.drop-down-cart'),
  clearBtn = document.querySelector('.clearBtn'),
  inputTag = document.querySelector('.inputTag'),
  pricingSection = document.querySelector('.pricingSection')
let buttons = document.querySelectorAll('.btn')
let product = document.querySelectorAll('.product')


//UI handlers
let swiper = new Swiper(".mySwiper", {
  effect: "slides",
  grabCursor: true,
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  flipEffect: {
    slideShadows: false,
  },

  loop: true,
});

function sectionNavigate() {
  buttons.forEach(btn => {
    const tabID = btn.dataset.set;
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')

      product.forEach(pr => {
        const prID = pr.dataset.set;
        pr.classList.remove('active')
        if (prID === tabID) {
          pr.classList.add('active')
        }
      })
    })
  })
}
sectionNavigate()
const cart = document.getElementById("cartWrapper");
const stickySection = document.getElementById("stickySection");

// cart position
window.addEventListener("scroll", () => {
  const sectionRect = stickySection.getBoundingClientRect();

  if (sectionRect.top <= 0) {
    cart.classList.add("is-fixed");
  } else {
    cart.classList.remove("is-fixed");
  }
});

//login user 

function getLoggedInUser() {
  const userJSON = localStorage.getItem("user");
  if (!userJSON) return null;
  return JSON.parse(userJSON);
}

const loggedUser = getLoggedInUser();
if (loggedUser) {
  const currUser = userAc.querySelector('a span:nth-child(2)')
  currUser.textContent = loggedUser.name;
  const userIcon = userAc.querySelector('a span:nth-child(1)')
  const ddUser = userAc.querySelector('div div p span');
  ddUser.textContent = loggedUser.name;


  //icon remove when logged in  
  userIcon.className = 'text-xs ';
  userIcon.textContent = 'Hello, ';
  currUser.classList.add('font-semibold');

  //ancher tag link remove
  userAc.querySelector('a').href = '#';

  // dropdown for loggedin user toggle hidden
  const dropdown = userAc.querySelector('div.absolute')
  userAc.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    const isClosed = dropdown.classList.contains("max-h-0");
    if (isClosed) {
      // OPEN DROPDOWN
      dropdown.classList.remove("max-h-0", "opacity-0");
      dropdown.classList.add("max-height");
    } else {
      // CLOSE DROPDOWN
      dropdown.classList.add("max-h-0", "opacity-0");
      dropdown.classList.remove("max-height");
    }
  })
  document.addEventListener("click", (e) => {
    dropdown.classList.remove("max-height");
    dropdown.classList.add("max-h-0", "opacity-0");

  })
  const btn = userAc.querySelector('div div div button')
  btn.addEventListener('click', () => {
    localStorage.removeItem("user");
    window.location.reload();
  })
}


const section = [
  { element: Colgate, data: colgateData },
  { element: Mobile, data: mobileData },
  { element: Footwear, data: footwearData },
]
document.addEventListener("DOMContentLoaded", () => {
  section.forEach(({ element, data }) => renderProducts(element, data));

})
function renderProducts(element, data) {

  const cardHTML = data.map((e) =>

    `<div class="card p-2 bg-gray-50 flex flex-col justify-between items-center gap-2 shadow-md transition-all rounded-lg">
      <div class="relative w-full border border-gray-100 overflow-hidden">
        <img class="w-full hover:scale-[1.1] transition-all" src="${e.img}" alt="${e.name}">
        ${loggedUser ? `
        <div class="icon absolute top-3 right-3 cursor-pointer">
          <i class="fa-solid fa-heart text-white text-shadow-[-0.5px_-0.5px_2px_grey,0.5px_0.5px_2px_grey]"></i>
        </div>` : ``}
      </div>
      <div class="flex flex-col w-full">
        <p class="grow">
          <span class="id hidden">${e.id}</span>
          ${e.brand ? `<span class="block text-xs text-gray-400">${e.brand}</span>` : ""}
          <span class="prName font-semibold">${e.name}</span>
        </p>
        <div class="flex justify-between flex-wrap items-center mt-1">
          <p class="flex gap-2">
            <span class="old-price text-xs text-gray-400 line-through">${e.oldPrice}₹</span>
            <p class="flex items-center gap-1 text-xs md:text-sm lg:text-base font-bold">
            <span class="curr-price ">${e.currPrice}<span>₹</span></span>
            </p>
            <span class="disc text-sm text-green-500">${e.disc}%</span>
          </p>
          <button
            class="add-btn bg-blue-500 text-[0.6rem] h-6 py-1 px-2 self-end rounded-sm hover:bg-blue-700 cursor-pointer"
            onclick="addToCart(this)">
            Add to Cart
          </button>
        </div>
      </div>
    </div>`
  ).join('');
  element.innerHTML = cardHTML;
}
let cartItems = [];


function addToCart(btn) {
  const card = btn.closest('.card')

  const item = {
    id: card.querySelector(".id").textContent,
    img: card.querySelector("img").src,
    prName: card.querySelector(".prName").textContent,
    oldPrice: card.querySelector(".old-price").textContent,
    currPrice: card.querySelector(".curr-price").textContent,
    disc: card.querySelector(".disc").textContent,
    quantity: 1
  };

  const existing = cartItems.find(i => i.id === item.id);

  if (existing) existing.quantity++;
  else cartItems.push(item);

  updateCartUI?.();
}

window.addToCart = addToCart;

function updateCartUI() {
  cartIconShow.innerHTML = "";

  if (cartItems.length === 0) {
    cartIconShow.innerHTML = `<p class='text-sm text-gray-400 p-3'>Cart is empty</p>`;
    clearBtn.classList.add('hidden')
    shoppingCart.textContent = 0;
    return;
  }
  if (cartItems.length > 0) {
    clearBtn.classList.remove('hidden')
  }

  // Update indicator
  shoppingCart.textContent = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  cartItems.forEach(item => {
    let div = document.createElement("div");
    div.className = "border border-gray-100 px-2 py-2 bg-white flex items-center gap-4";

    div.innerHTML = `
  <div class="h-14 w-14">
    <img class="h-full w-full object-contain" src="${item.img}">
  </div>

  <div class="flex flex-col flex-1">
    <h3 class="uppercase font-semibold text-sm">${item.prName}</h3>
    <p class="font-mono">
      <span class="text-xs font-bold">${item.currPrice}</span>
      <span class="text-xs text-gray-400 line-through">${item.oldPrice}</span>
      <span class="text-xs font-bold text-green-500">${item.disc}</span>
    </p>
  </div>

  <div class="qty-controls ml-auto flex items-center gap-1 transition-all">
    <button class="qty-btn dec" onClick="changeQty('${item.id}', -1)">-</button>
    <div class="px-2 w-8 bg-gray-100 text-center">${item.quantity}</div>
    <button class="qty-btn inc" onClick="changeQty('${item.id}', 1)">+</button>
  </div>

  <button class="remove-btn text-red-500 text-lg ml-2" data-id="${item.id}">
    🗑️
  </button>
`;

    cartIconShow.appendChild(div);
  });
  cartPricing();
}

function changeQty(id, val) {
  const item = cartItems.find(i => i.id === id);
  if (!item) return;

  item.quantity += val;

  if (item.quantity < 0) {
    cartItems = cartItems.filter(i => i.id !== id);
  }
  updateCartUI();
}
document.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".remove-btn");
  if (!removeBtn) return;

  const id = removeBtn.dataset.id;
  cartItems = cartItems.filter(item => item.id !== id);
  updateCartUI?.();
});

cartIcon.addEventListener("click", () => {
  dropDownCart.classList.toggle("hidden")
  updateCartUI?.();
})

function cartCleaner() {
  cartItems = []
  updateCartUI?.()
}

window.cartCleaner = cartCleaner
window.changeQty = changeQty
window.updateCartUI = updateCartUI;

function cartPricing() {
  let Amt = document.getElementById('Amt');
  let gst = document.getElementById('gst');
  let total = document.getElementById('total');

  const gstRate = 0.18;

  let totalAmt = cartItems.reduce((sum, item) => {
    return sum + (Number(item.currPrice.replace("₹", '').trim()) * item.quantity);
  }, 0);

  const calcGST = totalAmt * gstRate;
  const finalTotal = totalAmt + calcGST;

  Amt.textContent = totalAmt.toFixed(2);
  gst.textContent = calcGST.toFixed(2);
  total.textContent = finalTotal.toFixed(2);

  console.log({
    totalAmt,
    gst: calcGST.toFixed(2),
    finalTotal
  });
}

document.addEventListener("click", (e) => {
  const heart = e.target.closest(".icon");
  if (!heart) return;
  heart.classList.toggle("active-heart")
})

let wishList = [];

console.log(wishList);
function wishListProducts(){
  
}
