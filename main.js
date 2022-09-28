//ELEMENTOS OCULTOS CON LA CLASE "".inactive"
const menuD = document.querySelector('.desktop-menu'); /* elemento que debemos mostrar*/
const menuM = document.querySelector('.mobile-menu'); /* elemento que debemos mostrar */
const carritoD = document.querySelector('.product-detail'); /* elemento que debemos mostrar */

const productDetailSelected  = document.querySelector('.product-detail-selected');

const productDetailSelectedClose = document.querySelector(
  ".product-detail-selected-close");
productDetailSelectedClose.addEventListener('click',closeProductDetail)


const selectorMenuEmail = document.querySelector('.navbar-email');
selectorMenuEmail.addEventListener('click', mostrarMenuDesktop);

const selectorMenuMobile = document.querySelector('.menu');
selectorMenuMobile.addEventListener('click',mostrarMenuMobile);

const selectorCarrito = document.querySelector('#carrito');
selectorCarrito.addEventListener('click', toggleCarrito);

const cardsContainer = document.querySelector(".cards-container");


//FUNCIONES PARA MOSTRAR U OCULTAR ELEMENTOS
function mostrarMenuDesktop() 
{
  const isAsideCarritoClosed = carritoD.classList.contains("inactive");
  if (!isAsideCarritoClosed) {
    carritoD.classList.add("inactive");
  }
  menuD.classList.toggle('inactive');
} 

function mostrarMenuMobile()
{
 const isAsideCarritoClosed = carritoD.classList.contains('inactive');
 if(!isAsideCarritoClosed){
  carritoD.classList.add("inactive");
 }
 closeProductDetail();
  menuM.classList.toggle('inactive');
}

function toggleCarrito()
{
  const isMenuMobileClosed = menuM.classList.contains('inactive') ;
  
  if(!isMenuMobileClosed){
    menuM.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailSelected.classList.contains("inactive");
  
  if (!isProductDetailClosed) {
    productDetailSelected.classList.add("inactive");
  }

  carritoD.classList.toggle("inactive");
}

function openProductDetail()
{
  carritoD.classList.add("inactive");
  productDetailSelected.classList.remove('inactive');
}

function closeProductDetail() {
  productDetailSelected.classList.add("inactive");
}


//CREAMOS UN ARRAY PARA PODER LLENAR LO INFO MANUALMENTE
const productList = [];
productList.push({
  name: 'Bicicleta',
  price: 320,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: "Motocicleta",
  price: 520,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Automovil",
  price: 1200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Camioneta",
  price: 2400,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Scooter",
  price: 1520,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Skate",
  price: 1010,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

//CREAMOS LA PLANTILLA PARA CREAR LOS CARDS DESDE EL ARRAY
for(product of productList){
  const productCard = document.createElement('div');
    productCard.classList.add('product-card');

  const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener("click", openProductDetail); //evento para abrir el cuadro de detalle del producto

  const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const productInfoPrice = document.createElement("p");
    productInfoPrice.innerText = '$' + product.price;

  const productInfoName = document.createElement("p");
    productInfoName.innerText = product.name;

  const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
      productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

// ANIDAMOS LOS ELEMENTOS A SUS CONTENEDORES PADRE
  productInfoFigure.appendChild(productImgCart);

  productInfoDiv.appendChild(productInfoPrice);
  productInfoDiv.appendChild(productInfoName);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

}

