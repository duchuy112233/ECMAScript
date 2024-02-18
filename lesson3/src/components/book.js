const Book = function (book) {
  return /*html*/`
    <div class="item-product px-5 pt-[13px] pb-[26px] h-[317px] flex flex-col justify-between">
              <a href="/book/${book.id}">
                  <img src="${book.images[0].base_url}" alt="" class="max-w-[200px] max-h-[200px]" />
              </a>

              <div class="info-product">
                  <a href="/book/${book.id}">
                      <h3 class="color-text text-[13px]">
                          ${book.name}
                      </h3>
                  </a>
                    <div class="reviews flex items-center my-[6px]">
                        <div class="starts text-xs">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <span class="w-[1px] h-[10px] bg-slate-300 m-[6px]"></span>
                        <div class="sold text-xs text-[#787878]">Đã bán 1000+</div>
                    </div>
                    <div class="price color-price flex items-center text-red-500 text-[20px]">
                        <span>${book.list_price}</span> ₫
                        <div
                            class="ml-2 text-xs border border-red-500  bg-[#FFF0F1]">
                            -23%
                        </div>
                    </div>
                  <div class="text-red-500 slogan color-price flex relative mt-1">
                    <i class="fa-solid fa-shield" style="font-size: 18px"></i>
                    <span class="text-white absolute -top-1 left-1">$</span>
                    <p class="uppercase text-xs pl-1">RẺ HƠN HOÀN TIỀN</p>
                  </div>
            </div>
      </div>


    `
}

export default Book;