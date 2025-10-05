
let Colgates = document.getElementById("Colgate")
    let Mobiles = document.getElementById("Mobile")
    let Footwear = document.getElementById("Footwear")
    shoppingCart = document.querySelector('#shopping_cart')
    cartIcon = document.querySelector('#cartIcon')
    dropDownCart = document.querySelector('.drop-down-cart')
    
    let buttons = document.querySelectorAll('.btn')
    let product = document.querySelectorAll('.product')
    
    
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
    
    document.addEventListener('DOMContentLoaded', () => {

    colgateData.map(e => {
        Colgates.innerHTML +=
        `<div class="card p-2 bg-gray-100 flex flex-col justify-between items-center gap-2 shadow-md hover:scale-[0.99] transition-all rounded-lg ">
        <div class="w-full border border-gray-200">
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
                <div class="px-1 flex items-center justify-center text-[0.6rem] rounded-sm">0</div>
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
            `<div class="card p-2 bg-gray-100 flex flex-col justify-between items-center gap-2 shadow-md hover:scale-[0.99] transition-all rounded-lg ">
            <div class="w-full border border-gray-200">
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
                <div class="px-1 flex items-center justify-center text-[0.6rem] rounded-sm">0</div>
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
            `<div class="card p-2 bg-gray-100 flex flex-col justify-between items-center gap-2 shadow-md hover:scale-[0.99] transition-all rounded-lg ">
            <div class="w-full border border-gray-200">
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
                <div class="px-1 flex items-center justify-center text-[0.6rem] rounded-sm">0</div>
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
    cartPush(card,parseInt(counter.textContent));
}
function Dec(btn){
    const card = btn.closest('.card');
    const counter = card.querySelector('.qty-controls div:nth-child(2)');
    let current = parseInt(counter.textContent);
    if(current > 0){
        current--;
        counter.textContent = current;
    }
    if(counter.textContent == 0){
        card.querySelector('.add-btn').classList.remove('hidden');
        card.querySelector('.qty-controls').classList.add('hidden');
    }
    cartUpdate(-1);
    cartPush(card,current)
}
function Inc(btn){
    const card = btn.closest('.card');
    const counter = card.querySelector('.qty-controls div:nth-child(2)');
    let current = parseInt(counter.textContent);
    current++;
    counter.textContent = current;
    cartUpdate(1);
    cartPush(card,current);
}
function cartUpdate(e) {
    let cartValue = parseInt(shoppingCart.textContent);
    cartValue += e;
    shoppingCart.textContent = cartValue;
}

let cartItems = [];

function cartPush(item,i) {
    let img = item.querySelector('img').src,
    prName = item.querySelector('.prName').textContent,
    oldPrice = item.querySelector('.old-price').textContent,
    currPrice = item.querySelector('.curr-price').textContent,
    disc = item.querySelector('.disc').textContent,
    id = item.querySelector('.id').textContent
    
    // if(id == cartItems[id])
    cartItems.push({
        id:id,
        img,
        prName,
        oldPrice,
        currPrice,
        disc,
        quantity: 0 + i
    })
    console.log(cartItems); 
}

cartIcon.addEventListener('click',()=>{
    dropDownCart.classList.toggle('hidden')
})






let a =
    `<div class="border border-gray-100 px-2 flex flex-nowrap items-center gap-5">
    <div class="h-14">
    <img class="h-full" src="image/Col.jpeg" alt="">
    </div>
    <div class="flex flex-col leading-4">
    <h3 class="uppercase font-semibold">colgate charcoal</h3>
    <p class="font-mono">
    <span class="text-xs font-bold">15,999₹</span>
    <span class="text-xs text-gray-400 line-through">
    11,498₹</span>
    <span class="text-xs font-bold text-green-500">28%</span>
    </p>
                </div>
                <div class="qty-controls ml-auto flex justify-between items-stretch h-6 gap-1 rounded">
                <div
                    class="px-2 font-bold flex items-center justify-center text-[0.6rem] border bg-blue-600 text-white cursor-pointer rounded-sm">
                    -
                    </div>
                    <div class="px-1 flex items-center justify-center text-[0.6rem] rounded-sm">1</div>
                  <div
                    class="px-2 font-bold flex items-center justify-center text-[0.6rem] border bg-blue-600 text-white cursor-pointer rounded-sm">
                    +
                  </div>
                  </div>
              </div>`
                  