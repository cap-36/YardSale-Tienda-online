const navEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const burguerMenu = document.querySelector(`.menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const menuCarritoIcon = document.querySelector(`.navbar-shopping-cart`);
const aside = document.querySelector(`.product-detail`);
const cardsContainer = document.querySelector(`.cards-container`);

navEmail.addEventListener(`click`, toggleDesktopMenu);
burguerMenu.addEventListener(`click`, toggleMobileMenu);
menuCarritoIcon.addEventListener(`click`, toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains(`inactive`);

    if (!isAsideClosed) {
        aside.classList.add(`inactive`);
    }

    desktopMenu.classList.toggle(`inactive`);
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains(`inactive`);

    if (!isAsideClosed) {
        aside.classList.add(`inactive`);
    }

    mobileMenu.classList.toggle(`inactive`);
}

function toggleCarritoAside() {
    const isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);
    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add(`inactive`);
    }

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add(`inactive`);
    }

    aside.classList.toggle(`inactive`);
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    img: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productList.push({
    name: "book",
    price: 20,
    img: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productList.push({
    name: "Chair",
    price: 40,
    img: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productList.push({
    name: "Celphone",
    price: 90,
    img: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});

function renderproducts(arr) {
    for (product of productList) {
        const productCard = document.createElement(`div`);
        productCard.classList.add(`product-card`);
        
        // product = {name, price, image} -> product.name
        const productImg = document.createElement(`img`);
        productImg.setAttribute(`src`, product.img);
    
        const productInfo = document.createElement(`div`);
        productInfo.classList.add(`product-info`);
    
        const div = document.createElement(`div`);
    
        const productPrice = document.createElement(`p`);
        productPrice.innerText = `$` + product.price
        const productName = document.createElement(`p`);
        productName.innerText = product.name;
    
        div.appendChild(productPrice);
        div.appendChild(productName);
    
        const figure = document.createElement(`figure`);
        const productImgCart = document.createElement(`img`);
        productImgCart.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);
    
        figure.appendChild(productImgCart);
    
        productInfo.appendChild(div);
        productInfo.appendChild(figure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderproducts(productList);