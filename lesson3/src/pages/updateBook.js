import { useState, useEffect } from "../ultilities"
import { isEmpty } from "lodash"




const UpdateBook = function (id) {

    const [book, setBook] = useState({});

    useEffect(function () {
        fetch("http://localhost:3000/books/" + id)
            .then(res => res.json())
            .then(data => setBook(data));
    }, []);

    useEffect(function () {
        const updateBtn = document.querySelector("#update-btn");
        updateBtn.onclick = function (e) {
            e.preventDefault();
            handleUpdateBook();
        };
    });

    if (isEmpty(book)) {
        return /*html*/`
            <div class="flex items-center justify-center h-screen">
                <button type="button" class="text-center" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    Loading ...
                </button>
            </div>
        `;
    }



    const handleUpdateBook = function () {

        const formData = new FormData(document.querySelector("#update-form"));


        const updatedData = {
            name: formData.get("name"),
            price: formData.get("price"),
            list_price: formData.get("list_price"),
            original_price: formData.get("promo_price"),
            rating_average: formData.get("rating"),
   

        };

//
        fetch("http://localhost:3000/books/" + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        });
    };


    return /*html*/`
    
            <section class="relative flex flex-wrap lg:h-screen lg:items-center">
            <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div class="mx-auto max-w-lg text-center">
                <h1 class="text-2xl font-bold sm:text-3xl">Chi tiết sách ${book.name}</h1>


                <div class="mt-4 relative">
                    <label for="name" class="sr-only">Mô tả</label>
                    <textarea
                        class="text-center w-full h-32 px-4 py-2 bg-white text-gray-500  rounded-lg shadow-sm focus:outline-none focus:bg-white resize-none border-none overflow-hidden"
                        placeholder="Enter a short description..."
                        name="name"
                        x-data="{ height: '32px' }"
                        x-init="() => { $refs.textarea.style.height = height; }"
                        x-on:input="() => { height = ($event.target.scrollHeight) + 'px'; $refs.textarea.style.height = height; }"
                        x-bind:style="{ height }"
                        x-ref="textarea"
                    >${book.short_description}</textarea>
                </div>
                
            
            
            

                </div>

                <form id="update-form" action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
                
                <div>
                    <label for="name" class="">Name</label>
                    <div class="relative">
                        <input
                            type="text"
                            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter name"
                            value = "${book.name}"
                            name = "name"
                        />
                    </div>
                </div>
         
                <div>
                    <label for="price" class="">Price</label>
                    <div class="relative">
                        <input
                            type="text"
                            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter price"
                            value = "${book.price}"
                            name = "price"
                        />
                    </div>
                </div>

                <div>
                    <label for="list_price" class="">Giá niêm yết</label>
                    <div class="relative">
                        <input
                            type="text"
                            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter list price"
                            value="${book.list_price}"
                            name="list_price"
                        />
                    </div>
                </div>
                <div>
                    <label for="promo_price" class="">Giá khuyến mãi</label>
                    <div class="relative">
                        <input
                            type="text"
                            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter promo price"
                            value="${book.original_price}"
                            name="promo_price"
                        />
                    </div>
                </div>

                <div>
                    <label for="rating" class="">Rating</label>
                    <div class="relative">
                        <input
                            type="text"
                            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter rating"
                            value="${book.rating_average}"
                            name="rating"
                        />
                    </div>
                </div>
         

            
               

                <div class="flex items-center justify-between">
                  
                    <button
                    id = "update-btn"
                    type="submit"
                    class=" inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                    Cập nhật
                    </button>
                </div>
                </form>
            </div>

            <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                alt="Welcome"
                src="${book.images?.[0].base_url}"
                class="absolute inset-0 h-full w-full object-cover p-5"
                />
            </div>
            </section>
    `;
};
export default UpdateBook;