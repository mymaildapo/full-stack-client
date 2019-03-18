const productsSection = document.querySelector('main section')

/* ChangesS
fetch(API_URL)
.then(res => res.json())
.then(result => { //result is parameter name of the method, this is self provoked method doesnt have name 
       console.log(result);
  });
*/

getProducts() //when page load, invoke getproducts which make Ajax request
  .then(showProducts) // showProducts (is a function), and then when it done with with getproducts
  //it will invoke showproducts with array of products

  function getProducts()
  {
    return fetch(API_URL) // fetch request to get the data
          .then(res => res.json()); 
 
  }

  function showProducts(products) //products is a parameter, parameter can be any name it will stil work
  {
      // console.log(products); 
      products.forEach(product => {  //is another parameter
        const buttons =`<a href="/product.html?id=${product.id}" class="btn btn-primary">View Product</a>`
            
        addProductToPage(product, 4 , buttons,productsSection);// line 1
     });
  }
   
  