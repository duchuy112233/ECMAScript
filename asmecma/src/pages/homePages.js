import Header from "../components/header";
import Slider from "../components/banner";
import Category from "../components/category";
import Menu from "../components/menu";
import Products from "../components/products";
import Footer from "../components/footer";
import Banner from "../components/banner";
const HomePage = function (books) {
  console.log(books);
  return `
   ${Header()}
      <main class="mt-10 bg-white color-text">
        <div class="max-w-screen-xl mx-auto pt-[14px] flex pb-16">
          <!--Category -->
             ${Category()}
   
          <!-- Title -->
          <div class="content grow ml-24">
            <h2 class="pl-4 text-[23px] font-normal mb-3">
              <a href="">Nhà Sách Tiki</a>
            </h2>
            <!-- banner -->
            ${Banner()}
            <!-- Menu -->
            ${Menu()}
            
            <!-- product -->
            <div id="products">
            ${Products(books)}</div>
          </div>
        
        </div>
      </main>
    ${Footer()}      
    `;
};
export default HomePage;
