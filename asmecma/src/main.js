import { render, router } from "./ultilities";
import { books } from "../db.json" assert {type:'json'};
import HomePage from "./pages/homePages";
import DetailProductPage from "./pages/detailProduct";
import Products from "./components/products";

const routeHandlers = new Map([
  ["/", () => render("#app", HomePage(books))],
  ["/book/detail/:id", ({ data }) => render("main", DetailProductPage(books, data.id))],
]);
for (const [route, handler] of routeHandlers) router.on({ [route]: handler });

router.resolve();
