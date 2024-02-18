import Header from "../components/header"
import Footer from "../components/footer"
import Book from "../components/book"
import Banner from "../components/banner"
import Category from "../components/category"
import Menu from "../components/menu"


// Data
import data from '../../db.json' assert {type: 'json'}
// Pages
const HomePage = function () {
  return `
      ${Header()}
      <main class="mt-8 bg-white color-text">
        <div class="max-w-screen-xl mx-auto pt-[14px] flex pb-16">
          ${Category()}

          <div class="content grow ml-24">
            ${Banner()}

            ${Menu()}

            <div class="grid grid-cols-4 gap-4 mt-10">
              ${data.books.map(function (book) {
                return Book(book)
                }).join("")}
            </div>
          </div>
        </div>
      </main>
      
      ${Footer()}
    `
}

export default HomePage