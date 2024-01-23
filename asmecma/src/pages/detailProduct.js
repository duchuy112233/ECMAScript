import ProductDetail from "../components/product-detail";
import SimilarProduct from "../components/related-product";
import DescriptionProduct from "../components/description";
const DetailProductPage = (books, id) => {
  return `<div class="max-w-screen-xl mx-auto">
${ProductDetail(books, id)}
${SimilarProduct(books, id)}
${DescriptionProduct()}

    </div>`;
};
export default DetailProductPage;
