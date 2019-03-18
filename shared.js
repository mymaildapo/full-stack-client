const API_URL = window.location.hostname == 'localhost' ? 'http://localhost:3000/api/v1/products' : 'https://your-new-created-app-url-from-herokuapp.com/api/v1/products';

function getIdFromQuery()
{
    const parts = window.location.search.match(/\?id=([0-9]+)/);
    return parts[1]; // 1 is the id
}

function getProduct(id)
{
    return fetch(`${API_URL}/${id}`) //it is `
        .then(res => res.json());
}
function addProductToPage(product,size, buttons, parent)
  {
       // console.log(products); 
       const productDiv = document.createElement('div');
        parent.appendChild(productDiv);
    //` `  -this are special quote for multiple lines
    //outerhtml become the parent div
       productDiv.outerHTML= `

             <div class="card col-sm-${size}">
             <img src="${product.image}" class="card-img-top" alt="${product.title}">
             <div class="card-body">
             <h5 class="card-title">${product.title}</h5>
             <p class="card-text">${product.description}</p>
             <p class="card-text">£${product.price}</p>
             <p class="card-text">£${product.quantity} left in stock.</p>
             ${buttons}
             </div>
             </div>
       `;

  }

  function validFormGetProduct(form,errorMessage)
  {
    const formData = new FormData(form);//parameter pass in form

    const title = formData.get('title'); //title-is from name(not id), element must contain name="title" in html 
    const price = Number(formData.get('price')); //first step validation for price
    //Number convert price from textbox string to number
    
    console.log('price', price);
    const quantity = Number(formData.get('quantity'));

    if(title.trim() == '') //validation title
    {
        errorMessage.textContent = 'Title is required';
        errorMessage.style.display= '';
        return; //cancel the rest /exit out of submit
    }   
    
    if(isNaN(price) || price <= 0) //validation price,second step ,isNan have problem
    {
        //id errorMessage is the alert in main in html,also check line 1 
        errorMessage.textContent = 'Price must be greater than zero';
        errorMessage.style.display= '';
        return; //cancel the rest /exit out of submit
    } 
   
    if(!Number.isInteger(quantity) || quantity < 0) //0 upward, validation quantity,second step
   {
       //id errorMessage is the alert in main in html,also check line 1 
       errorMessage.textContent = 'Quantity must be a positive whole number';
       errorMessage.style.display= '';
       return; //cancel the rest /exit out of submit
   } 

   //all validation working
    

   const product = {
    title,
    description: formData.get('description'), //put name =description in html
    price,
    quantity,
    image: formData.get('image')
   };

   return product;
  }
