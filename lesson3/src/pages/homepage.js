import Header from "../compodents/header"
import Footer from "../compodents/footer"
import Card from "../compodents/card"
import Advertisement from "../compodents/Advertisement"
// Pages
const HomePage = function () {
    return `
      ${Header()}
      <h1>Trang chủ</h1>
      <div style="display: flex; width: 100%">
        <div style="width: 40%">${Advertisement()}</div>
        <div style="width: 60%">
          ${Card()}
          ${Card()}
          ${Card()}
        </div>
      </div>
      ${Footer()}
    `
}

export default HomePage