api('https://fakestoreapi.com/products','Get');

function api(url, method = 'GET') { //method='GET' ===> set default Value to Method
   var xmlHttp = new XMLHttpRequest;
   //initalize//
   xmlHttp.open(method, url);

   //Connecting//
   xmlHttp.send();

   //Listen for readyState change//
   xmlHttp.addEventListener('readystatechange', function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
         var jsonData = JSON.parse(xmlHttp.responseText);
         var htmlPostsView = document.getElementById('postData');
         var htmlCollection = ``;
         for (var post of jsonData) {
            htmlCollection +=
               `
            <div class="col-md-3 bg-light-subtle  card  g-5 cardAnimation border-0">
               <div class="">
                  <img src=${post.image} alt="" srcset="" class="w-100" style="height:350px;">
               </div>
               <h2>ID : ${post.id}</h2>
               <h5>${post.title}</h5>
               <h4>${post.price}$</h4>
               <p>${post.description}</p>
               <h5>Category : ${post.category}</h5>
               <div class="rateValue  text-light fs-5 rounded rounded-5 bg-danger text-center position-absolute" style="width: 35px; height: 33px;"><span>${post.rating.rate}</span></div>
            </div>
            `
         }
         htmlPostsView.innerHTML = htmlCollection;
      }
   })
}

/*
`<div class="col-md-3">
                                 <div>
                                    <h3>${post.title}</h3>
                                    <p>${post.body}</p>
                                 </div>
                              </div>`

*/