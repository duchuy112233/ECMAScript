import { render, router } from "./ultilities";
import { books } from "../db.json" assert {type:'json'};
import HomePage from "./pages/homePages";
import DetailProductPage from "./pages/detailProduct";
import Products from "./components/products";
router.on({
  "/": () => render("#app", HomePage(books)),
  "/book/detail/:id": (data) =>{render("main", DetailProductPage(books,data.data.id))
  window.scrollTo(0,0);
},
});
router.resolve();
// Search
const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);
let inputSearch = $('.search-wapper input');
let btnSearch = $('.search-wapper button');
btnSearch.addEventListener('click',() =>{
  let keyWord = inputSearch.value;
  console.log(keyWord)
   let booksSearch = books.filter((book)=>{
    return book.name.toLowerCase().includes(keyWord.toLowerCase());
  })
  render("#products",Products(booksSearch));
});

