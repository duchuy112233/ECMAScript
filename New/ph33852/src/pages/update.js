
import { useEffect, useState } from "../lib";

const Update = (id) => {
    const [product, setProduct] = useState({})

    useEffect(function () {
        fetch("http://localhost:3000/products/" + id)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    useEffect(function () {
        const form = document.querySelector("#update-form")
        form.onsubmit = function (e) {
            e.preventDefault()
            handleUpdate(form)
        }
    })


    

    const handleUpdate = function (form) {

        const dataForm = new FormData(form)

        const name = dataForm.get("name")
        const price = dataForm.get("price")
        const description = dataForm.get("description")
        const rating = dataForm.get("rating")
        const img = dataForm.get("img")
        
        const newData = {
            name,
            price,
            description,
            rating,
            img
        }

        if (name && price && description && rating && img) {

            fetch("http://localhost:3000/products/" + id, {
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newData),
                method: "PATCH"
            }); window.location.href = "http://localhost:5173/";
        } else {
            alert("Vui lòng điển đủ thông tin")
        }
    }

    return /*html*/`
   <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full lg:w-1/2 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div class="mx-auto max-w-md text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Chi tiết sản phẩm</h1>
        </div>
        
        <form id="update-form" action="#" class="mx-auto mt-8 max-w-md space-y-4">
            <div>
                <label for="email" class="block mb-1">Tên</label>
                <input
                    value="${product.name}"
                    name="name"
                    type="text"
                    class="w-full rounded-lg border-gray-200 px-4 py-2 text-sm shadow-sm"
                    placeholder="Enter name"
                />
            </div>
            
            <div>
                <label for="password" class="block mb-1">Nhà xuất bản</label>
                <input
                    value="${product.publisher}"
                    name="publisher"
                    type="text"
                    class="w-full rounded-lg border-gray-200 px-4 py-2 text-sm shadow-sm"
                    placeholder="Enter password"
                />
            </div>

            <div>
                <label for="password" class="block mb-1">Giá</label>
                <input
                    value="${product.price}"
                    name="price"
                    type="number"
                    class="w-full rounded-lg border-gray-200 px-4 py-2 text-sm shadow-sm"
                    placeholder="Enter password"
                />
            </div>

            <div>
                <label for="description" class="block mb-1">Mô tả:</label>
                <textarea id="description" name="description" rows="4" cols="50" required
                    class="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="${product.description}">${product.description}</textarea>
            </div>

            <div class="flex items-center">
                <label for="rating" class="mr-2">Đánh giá</label>
                <select name="rating" class="appearance-none border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500">
                    <option ${product.rating == 1 ? "selected" : ""} value="1">1</option>
                    <option ${product.rating == 2 ? "selected" : ""} value="2">2</option>
                    <option ${product.rating == 3 ? "selected" : ""} value="3">3</option>
                    <option ${product.rating == 4 ? "selected" : ""} value="4">4</option>
                    <option ${product.rating == 5 ? "selected" : ""} value="5">5</option>
                </select>
            </div>

            <div>
                <label for="img" class="block mb-1">Ảnh URL:</label>
                <input id="img" name="img" type="text" value="${product.img}" required
                    class="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nhập đường dẫn ảnh"/>
            </div>

            <div class="flex items-center justify-center lg:justify-start">
                <button
                    type="submit"
                    class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                    Cập nhật
                </button>
            </div>
        </form>
    </div>

    <div class="relative hidden lg:block lg:w-1/2">
        <img
            alt=""
            src="${product.img}"
            class="mx-auto w-full h-auto"
        />
    </div>
</section>
    `
}

export default Update;