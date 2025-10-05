let Colgates = document.getElementById("Colgate")
let Mobiles = document.getElementById("Mobile")
let Footwear = document.getElementById("Footwear")
shoppingCart = document.querySelector('#shopping_cart')
cartIcon = document.querySelector('#cartIcon')
cartIconShow = document.querySelector('#cartIconShow')
dropDownCart = document.querySelector('.drop-down-cart')

let buttons = document.querySelectorAll('.btn')
let product = document.querySelectorAll('.product')


//UI handlers
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
window.addEventListener("scroll", () => {
    const sectionRect = stickySection.getBoundingClientRect();

    if (sectionRect.top <= 0) {
        cart.style.position = "fixed";
        cart.style.top = "0.5rem";
        cart.style.right = "2rem";
        cart.style.zIndex = "1000";
        cart.style.background = "white";
        cart.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        cart.style.borderRadius = "8px";
    } else {
        cart.style.position = "";
        cart.style.top = "";
        cart.style.right = "";
        cart.style.boxShadow = "";
        cart.style.background = "";
        cart.style.borderRadius = "";
    }
});
cartIcon.addEventListener('click', () => {
    dropDownCart.classList.toggle('hidden')
    if (cartItems.length === 0) {
        cartIconShow.innerHTML = "<p class='text-sm text-gray-400 p-3'>Cart is empty</p>";
        return;
    }

})



//cart manipulation

document.addEventListener('DOMContentLoaded', () => {

    colgateData.map(e => {
        Colgates.innerHTML +=
            `<div class="card p-2 bg-gray-50 flex flex-col justify-between items-center gap-2 shadow-md hover:scale-[0.99] transition-all rounded-lg ">
        <div class="w-full border border-gray-100">
        <img class="w-full" src=${e.img} alt="">
        </div>
        <div class="flex flex-col w-full">
        <p class="grow">
            <span class='id hidden'>${e.id}</span>
            <span class="prName font-semibold">
                ${e.name} 
            </span> <br>
            </p>
            <div class="flex justify-between flex-wrap items-center">
            <p class='flex gap-2'>
                <span class="old-price text-xs text-gray-400 line-through">
                ${e.oldPrice}₹</span>
            <span class="curr-price text-xs md:text-sm lg:text-base font-bold">${e.currPrice}₹</span>
            <span class="disc text-sm text-green-500">${e.disc}%</span>
            </p>
            
            <button
            class="add-btn bg-blue-500 text-[0.6rem] h-6 py-1 px-2 self-end rounded-sm whitespace-nowrap hover:bg-blue-700 cursor-pointer" onclick='addToCart(this)'>Add to Cart</button>

            <div class="qty-controls hidden justify-between items-stretch h-6 gap-1 rounded select-none">
                <div onclick="Dec(this)"
                  class="px-2 py-1 font-bold flex items-center justify-center text-[0.6rem] border bg-blue-600 text-white cursor-pointer rounded-sm">
                  -
                </div>
                <div class="w-5 flex items-center justify-center text-[0.6rem] rounded-sm select-all">0</div>
                <div onclick="Inc(this)"
                  class="px-2 font-bold flex items-center justify-center text-[0.6rem] border bg-blue-600 text-white cursor-pointer rounded-sm">
                  +
                </div>
              </div>


            </div>
            </div>
        </div>`
    })
    mobileData.map(e => {
        Mobiles.innerHTML +=
            `<div class="card p-2 bg-gray-50 flex flex-col justify-between items-center gap-2 shadow-md hover:scale-[0.99] transition-all rounded-lg ">
            <div class="w-full border border-gray-100">
                <img class="w-full" src=${e.img} alt="">
            </div>
            <div class="flex flex-col w-full">
            <p class="grow">
            <span class='id hidden'>${e.id}</span>
            <span class="prName font-semibold">
                ${e.name} 
            </span> <br>
            </p>
            <div class="flex justify-between flex-wrap items-center">
            <p class='flex gap-2'>
                <span class="old-price text-xs text-gray-400 line-through">
                ${e.oldPrice}₹</span>
            <span class="curr-price text-xs font-bold">${e.currPrice}₹</span>
            <span class="disc text-sm text-green-500">${e.disc}%</span>
            </p>
            
            <button
            class="add-btn bg-blue-500 text-[0.6rem] h-6 py-1 px-2 self-end rounded-sm whitespace-nowrap hover:bg-blue-700 cursor-pointer" onclick='addToCart(this)'>Add to Cart</button>

            <div class="qty-controls hidden justify-between items-stretch h-6 gap-1 rounded">
                <div onclick="Dec(this)"
                  class="px-2 py-1 font-bold flex items-center justify-center text-[0.6rem] border bg-blue-600 text-white cursor-pointer rounded-sm">
                  -
                </div>
                <div class="w-5 flex items-center justify-center text-[0.6rem] rounded-sm select-all">0</div>
                <div onclick="Inc(this)"
                  class="px-2 font-bold flex items-center justify-center text-[0.6rem] border bg-blue-600 text-white cursor-pointer rounded-sm">
                  +
                </div>
              </div>


            </div>
            </div>
        </div>`
    })

    footwearData.map(e => {
        Footwear.innerHTML +=
            `<div class="card p-2 bg-gray-50 flex flex-col justify-between items-center gap-2 shadow-md hover:scale-[0.99] transition-all rounded-lg ">
            <div class="w-full border border-gray-100">
                <img class="w-full" src=${e.img} alt="">
            </div>
            <div class="flex flex-col w-full">
            <p class="grow">
            <span class='id hidden'>${e.id}</span>
            <span class='block text-xs text-gray-400'>${e.brand}</span>
            <span class="prName font-semibold">
                ${e.name} 
            </span> <br>
            </p>
            <div class="flex justify-between flex-wrap items-center">
            <p class='flex gap-2'>
                <span class="old-price text-xs text-gray-400 line-through">
                ${e.oldPrice}₹</span>
            <span class="curr-price text-xs font-bold">${e.currPrice}₹</span>
            <span class="disc text-sm text-green-500">${e.disc}%</span>
            </p>
            
            <button
            class="add-btn bg-blue-500 text-[0.6rem] h-6 py-1 px-2 self-end rounded-sm whitespace-nowrap hover:bg-blue-700 cursor-pointer" onclick='addToCart(this)'>Add to Cart</button>

            <div class="qty-controls hidden justify-between items-stretch h-6 gap-1 rounded">
                <div onclick="Dec(this)"
                  class="px-2 py-1 font-bold flex items-center justify-center text-[0.6rem] border bg-blue-600 text-white cursor-pointer rounded-sm">
                  -
                </div>
                <div class="w-5 flex items-center justify-center text-[0.6rem] rounded-sm select-all">0</div>
                <div onclick="Inc(this)"
                  class="px-2 font-bold flex items-center justify-center text-[0.6rem] border bg-blue-600 text-white cursor-pointer rounded-sm">
                  +
                </div>
              </div>


            </div>
            </div>
        </div>`
    })
})
function addToCart(button) {
    const card = button.closest('.card');
    const qtyControls = card.querySelector('.qty-controls');
    let counter = qtyControls.querySelector('div:nth-child(2)');

    button.classList.add('hidden');
    qtyControls.classList.replace('hidden', 'flex');

    counter.textContent = 1;
    cartUpdate(1);
    cartPush(card, parseInt(counter.textContent));
}
function Dec(btn) {
    const card = btn.closest('.card');
    const counter = card.querySelector('.qty-controls div:nth-child(2)');
    let current = parseInt(counter.textContent);
    if (current > 0) {
        current--;
        counter.textContent = parseInt(current);
    }
    if (counter.textContent == 0) {
        card.querySelector('.add-btn').classList.remove('hidden');
        card.querySelector('.qty-controls').classList.add('hidden');
    }

    cartUpdate(-1);
    cartPush(card, current)
}
function Inc(btn) {
    const card = btn.closest('.card');
    const counter = card.querySelector('.qty-controls div:nth-child(2)');
    let current = parseInt(counter.textContent);
    current++;
    counter.textContent = current;
    cartUpdate(1);
    cartPush(card, current);
}
function cartUpdate(e) {
    let cartValue = parseInt(shoppingCart.textContent);
    cartValue += e;
    shoppingCart.textContent = cartValue;
}

let cartItems = [];

function cartPush(item, quantity) {
    let img = item.querySelector('img').src,
        prName = item.querySelector('.prName').textContent,
        oldPrice = item.querySelector('.old-price').textContent,
        currPrice = item.querySelector('.curr-price').textContent,
        disc = item.querySelector('.disc').textContent,
        id = item.querySelector('.id').textContent


    const existingProduct = cartItems.find(item => item.id === id)
    // console.log(!existingProduct);
    if (existingProduct) {
        existingProduct.quantity = quantity;
    } else {

        cartItems.push({
            id,
            img,
            prName,
            oldPrice,
            currPrice,
            disc,
            quantity
        });
    }
    // console.log(cartItems);


    cartItemAdd();
}

function cartItemAdd() {
    // Clear old cart content first
    cartIconShow.innerHTML = "";
    if (cartItems.length === 0) {
        cartIconShow.innerHTML = "<p class='text-sm text-gray-400 p-3'>Cart is empty</p>";
        return;
    }
    cartItems.forEach(item => {
        let div = document.createElement("div");
        div.className = "border border-gray-100 px-2 py-2 flex items-center gap-4";

        div.innerHTML = `
            <div class="h-14 w-14 flex-shrink-0">
                <img class="h-full w-full object-contain" src="${item.img}" alt="">
            </div>
            <div class="flex flex-col leading-4 flex-1">
                <h3 class="uppercase font-semibold text-sm">${item.prName}</h3>
                <p class="font-mono">
                    <span class="text-xs font-bold">${item.currPrice}</span>
                    <span class="text-xs text-gray-400 line-through">${item.oldPrice}</span>
                    <span class="text-xs font-bold text-green-500">${item.disc}</span>
                </p>
            </div>
            <div class="qty-controls ml-auto flex justify-between items-stretch h-6 gap-1 rounded">
                <div onclick="updateCartQty('${item.id}', -1)"
                    class="px-2 font-bold flex items-center justify-center text-[0.6rem] border bg-blue-600 text-white cursor-pointer rounded-sm">-</div>
                <div class="px-2 flex items-center justify-center text-[0.7rem]">${item.quantity}</div>
                <div onclick="updateCartQty('${item.id}', 1)"
                    class="px-2 font-bold flex items-center justify-center text-[0.6rem] border bg-blue-600 text-white cursor-pointer rounded-sm">+</div>
            </div>
        `;

        cartIconShow.appendChild(div);
    });
}

function updateCartQty(id, change){
    let item = cartItems.find(i=> i.id === id)
    if (!item) return;

    item.quantity += change;
    if(item.quantity <= 0){
        cartItems = cartItems.filter(i=> i.id !== id);
        console.log(cartItems);
        
    }
    let totalQty = cartItems.reduce((sum, i)=> sum + i.quantity, 0);
    shoppingCart.textContent = totalQty;

    cartItemAdd();
}

