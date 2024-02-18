import Header from "../components/header"
import Footer from "../components/footer"
import DescriptionProduct from "../components/description"


import data from '../../db.json' assert { type: 'json' }

const BookDetail = function (id) {
  const book = data.books.find((item) => item.id == id)
  return /*html*/`
    ${Header()}
        <div class="product-detail flex mb-14 ml-20 mr-20">
            <div class="angular max-w-[444px] mt-5">
              <div class="image-primary max-h-[444px] relative">
                <img
                  src="${book.images[0].base_url}"
                  alt=""
                />
                <div class="absolute bottom-4 left-4 text-white bg-[#24242467] rounded-2xl px-2 py-1 cursor-pointer">
                  <i class="fa-brands fa-readme"></i>
                </div>
              </div>
              <ul class="flex mt-4 cursor-pointer">
              


              </ul>
            </div>
            <div class="productContent grow ml-10">
              <h2 class="color-text text-[23px] mb-1 mt-11">
            
              ${book.name}


              </h2>
              <div class="review flex items-center text-sm">
                <div class="start">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                  <a href="" class="text-[#787878] ml-2">(Xem 2942 đánh giá)</a>
                </div>
                <span class="w-[1px] h-3 bg-[#C7C7C7] mx-2"></span>
                <div class="sold text-[#787878]">
                  Đã bán <span class="text-[#787878]">1000+</span>
                </div>
              </div>
                <div>
                    Tác giả: ${book.authors?.[0].name || "Chưa cập nhật"}
                </div>
              <div class="price flex items-end pt-[12px] pb-[51px] pl-[16px] bg-[#FAFAFA] mt-4 grow">
                <h3 class="text-[32px] color-price">
                <span>
                    ${book.list_price}
                </span> ₫
                </h3>
                <p class="pl-2 text-[#808089] text-[13px]">
                  <span> ${book.original_price} </span> ₫
                </p>
                <span
                  class="sale ml-[8px] px-[3px] leading-4 border-[1px] border-[#FF424E] rounded-sm max-h-[16px] bg-[#FFF0F1] text-[#FF424E]"
                  >-23%</span
                >
              </div>
              <div
                class="h-[1px] bg-[#f2f2f2] w-full mt-[15px] mb-[33px]"
              ></div>
              <div class="quantity mb-4">
                <p class="text-[15px] mb-[10px]">Số lượng</p>
                <div
                  class="flex border-[1px] border-[#ECECEC] rounded-sm max-w-fit text-xl"
                >
                  <div class="sub border-r-[1px] border-[#ECECEC] px-2">
                    <i class="fa-solid fa-minus"></i>
                  </div>
                  <input type="number" class="max-w-10 outline-none pl-1" value="1" />
                  <div class="add border-l-[1px] border-[#ECECEC] px-2">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="btnBuys">
                <button class="py-3 px-[115px] bg-[#FF3945] rounded text-white">
                  Chọn Mua
                </button>
              </div>
            </div>

        </div>
        <div class = "ml-20 mr-20">
         ${DescriptionProduct()}
        </div>
       


       
        ${Footer()}
    `
}

export default BookDetail