import { render, router } from "./lib";

import addForm from "./pages/add";
import Update from "./pages/update";
import listProduct from "./pages/list";
import './style.css'


// Router
router.on('/', function () {
  render("#app", listProduct)
})

router.on('/update/:id', function ({ data }) {
  render("#app", () => Update(data.id))
})

router.on('/add', function () {
  render("#app", addForm)
})



router.resolve();
