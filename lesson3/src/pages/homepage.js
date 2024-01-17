import Header from "../components/header"
import Footer from "../components/footer"
import Card from "../components/card"
import Advertisement from "../components/advertisement"

// Data
import { books } from '../../db.json' assert {type: 'json'}
// Pages
const HomePage = function () {
  console.log(books);
  return `
      ${Header()}

      
      <h1>Trang chủ</h1>
      ${books.map(function (book) {
    return `
          <img width="150px" src="${book.images[0].base_url} "/>
        `
  })}


      ${Footer()}
    `
}

export default HomePage