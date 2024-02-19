import { useState, useEffect } from "../ultilities"



const addForm = function () {


    const [ setBook] = useState({});

    useEffect(function () {
        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(data => setBook(data));
    }, []);

    useEffect(function () {
        const updateBtn = document.querySelector("#adđ-btn");
        updateBtn.onclick = function (even) {
            even.preventDefault();
            handleAddBook();
        };
    });

 


    const handleAddBook = function () {

        const formData = new FormData(document.querySelector("#add-form"));


        const addData = {
            name: formData.get("book_name"),
            price: formData.get("book_price"),
            list_price: formData.get("book_listprice"),
            original_price: formData.get("book_promoprice"),
            rating_average: formData.get("book_rating"),
            images:formData.get("book_image"),

        };

//
        fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addData),
        });
    };


    return /*html*/`
      <section class="bg-gray-100 mt-3">

            <h2 class="text-2xl font-bold text-center pt-6">Thêm mới loại sách</h2>


            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            
                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">

                    <form id="add-form" action=""  class="space-y-4" method="post">

                        <div>
                            <label class="sr-only" for="bookName">Tên sách:</label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Tên sách"
                                type="text"
                                name="book_name"
                                required
                            />
                        </div>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <div>
                                <label class="sr-only" for="bookPrice">Giá sách:</label>
                                <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Giá sách"
                                type="number"
                                name="book_price"
                                required
                                />
                            </div>

                            <div>
                                <label class="sr-only" for="bookDescription">Mô tả sách:</label>
                                <textarea
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Mô tả sách"
                                rows="3"
                                name="book_description"
                                required
                                ></textarea>
                            </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="sr-only" for="bookListPrice">Giá niêm yết:</label>
                                <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Giá niêm yết"
                                type="number"
                                name="book_listprice"
                                required
                                />
                            </div>

                            <div>
                                <label class="sr-only" for="bookPromoPrice">Giá khuyến mãi:</label>
                                <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Giá khuyến mãi"
                                type="number"
                                name="book_promoprice"
                                required
                                />
                            </div>

                        </div>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="sr-only" for="bookRating">Đánh giá:</label>
                                <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Đánh giá"
                                type="number"
                                name="book_rating"
                                min="0"
                                max="5"
                                step="0.1"
                                required
                                />
                            </div>

                         

                        </div>

                        <div>
                            <label class="sr-only" for="bookImage">Ảnh :</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Ảnh sách"
                                    type="text"
                                    name="book_image"
                                  
                                    required
                                />
                        </div>

                        <div class="mt-4">
                            <button
                                type="submit"
                                class="add-btn inline-block w-full rounded-lg bg-green-700 hover:bg-green-500 px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Thêm sách
                            </button>
                        </div>

                    </form>
            
                </div>
             
            </div>
      </section>

   
      `;
};
export default addForm;








