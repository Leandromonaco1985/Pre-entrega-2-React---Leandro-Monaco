const products = [
    { id: "1", category: "doublebass" , name: "French Bass", price: 3500, brand: "O'Hara Fine Instruments", description: "Antique Author's fully carved bass", img: "../public/img/Mirecourt_Fr_front.jpg", stock: 1},
    {id: "2", category: "doublebass", name: "violin bass", price: 1200, brand: "cremona sb-4" ,  description: "Chinese profesional bass", img: "../public/img/319cJmj4k9L._AC_US600_.webp", stock: 15},
    {id: "3", category: "doublebass", name: "Perita bass", price: 5000 , brand: "Set Kimmel luthier",  description: "Fully carved luthier's bass", img: "../public/img/perita.jpg", stock: 1},
    {id: "4", category: "doublebass", name: "Rockabilly bass", price: 2000 , brand: "Alamy",  description: "Fancy bass", img: "../public/img/rocabilly.jpg", stock: 3},
    {id: "5" , category: "cars",  name: "504", price: 5600, brand: "Peugeot", description: "", img:"../public/img/p 504.jfif", stock: 3},
    {id: "6", category: "cars" , name: "Taunus", price: 4600, brand: "Ford", description:"", img: "../public/img/taunus.jfif", stock: 1},
    {id: "7", category: "cars" , name: "Valiant", price: 6700, brand: "Chrysler", description:"", img: "../public/img/valiant.jpg", stock: 5},
    {id: "8", category: "cars",  name: "Beetle", price: 8000, brand: "Volsk Wagen", description:"", img: "../public/img/beetle.jpg", stock:2},
    {id: "9", category: "shirts" , name: "Aldosivi", price: 85000, brand: "Kappa", description:"", img: "../public/img/aldosivi.jpg", stock: 6},
    {id: "10", category: "shirts" , name: "Argentina", price: 200, brand: "Adidas", description:"", img: "../public/img/argentina.jfif", stock: 13},
    {id: "11", category: "shirts" , name: "Werder Bremen", price: 100, brand: "Umbro", description:"", img: "../public/img/werder.jfif", stock:8},
    {id: "12", category: "shirts" , name: "Sampdoria", price: 150, brand: "Joma", description: "", img: "../public/img/sampdoria.webp", stock: 2},
    
];

export const getProducts = () => {
    
    return new Promise ( (resolve , reject ) => {
        if ( products.length > 0) {
            //función para simular demora en el servidor
            setTimeout(() => {
                resolve(products)
                console.log(products)
            }, 1500);
        }
        else { reject ( "No Products available")
        }
    
})
};
export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
      const product = products.find((item) => item.id === productId);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    });
  };


  //lógica para simular demora en el servidor
  const [loading, setloading] = useState(true);

{
    loading ?    <i className="bi bi-clock"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
  </svg> Loading...</i>:
}
