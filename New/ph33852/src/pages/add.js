
import { useEffect, useState } from "../lib";


const addForm = function () {

    useEffect(function () {
        const updateBtn = document.querySelector(".add-btn");
        updateBtn.onclick = function (even) {
            even.preventDefault();
            if (validateForm()) {
                handleAddProduct();
            }
        };
    });

    //
    const validateForm = function () {
        const name = document.getElementById("name").value;
        const publisher = document.getElementById("publisher").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;
        const rating = document.getElementById("rating").value;
        const img = document.getElementById("img").value;

        if (name.trim() === "" || publisher.trim() === "" || description.trim() === "" || price.trim() === "" || rating.trim() === "" || img.trim() === "") {
            alert("Vui lòng điền đầy đủ thông tin.");
            return false;
        }

        return true;
    };
    //
    const handleAddProduct = function () {
        const formData = new FormData(document.querySelector("#add-form"));

        const addData = {
            name: formData.get("name"),
            publisher: formData.get("publisher"),
            description: formData.get("description"),
            price: formData.get("price"),
            rating: formData.get("rating"),
            img: formData.get("img"),


        };

        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addData),
        });
        window.location.href = "http://localhost:5173/";

    };


    return /*html*/`



    <div class="bg-gray-100">
    <div class="container mx-auto p-4 flex justify-center items-center h-screen">

        <form id="add-form" action="#" method="post" class="max-w-lg">
            <h2 class="text-2xl font-semibold mb-4">Thông tin sản phẩm</h2>
            <div class="flex flex-wrap mb-4">
                <div class="w-full md:w-1/2 md:pr-2">
                    <label for="product_name" class="block mb-1">Tên sản phẩm:</label>
                    <input type="text" id="name" name="name" required
                        class="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div class="w-full md:w-1/2 md:pl-2">
                    <label for="publisher" class="block mb-1">Nhà xuất bản:</label>
                    <input type="text" id="publisher" name="publisher" required
                        class="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                </div>
            </div>
            <div class="mb-4">
                <label for="description" class="block mb-1">Description:</label>
                <textarea id="description" name="description" rows="4" cols="50" required
                    class="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div class="flex flex-wrap mb-4">
                <div class="w-full md:w-1/2 md:pr-2">
                    <label for="price" class="block mb-1">Giá gốc:</label>
                    <input type="number" id="price" name="price" min="0" required
                        class="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div class="w-full md:w-1/2 md:pl-2">
                    <label for="rating" class="block mb-1">Đánh giá:</label>
                    <select id="rating" name="rating" required
                        class="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Chọn một đánh giá</option>
                        <option value="1">1 Sao</option>
                        <option value="2">2 Sao</option>
                        <option value="3">3 Sao</option>
                        <option value="4">4 Sao</option>
                        <option value="5">5 Sao</option>
                    </select>
                </div>
            </div>
            <div class="mb-4">
                <label for="img" class="block mb-1">Ảnh url:</label>
                <input type="text" id="img" name="img" required
                    class="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mt-4">
                <button
                    type="submit"
                    class="add-btn inline-block w-full rounded-lg bg-green-700 hover:bg-green-500 px-5 py-3 font-medium text-white sm:w-auto"
                >
                    Xác nhận
                </button>
            </div>
        </form>
    </div>
</div>


    `

}
export default addForm;