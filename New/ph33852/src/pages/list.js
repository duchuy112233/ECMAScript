import { useState, useEffect, render } from "../lib"


const listProduct = function () {

    const [products, setProducts] = useState([])

    useEffect(function () {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // Delete
    useEffect(function () {
        const deleteBtn = document.querySelectorAll(".delete-btn")
        deleteBtn.forEach(function (btn) {
            btn.onclick = function () {
                const x = confirm("Bán có chắc chắc muốn xoá sản phẩm này ?")
                if (x) {
                    const id = btn.dataset.id
                    handleDelete(id)
                }
            }
        })
    })
    //
    const handleDelete = function (id) {
        fetch("http://localhost:3000/products/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });  window.location.href = "http://localhost:5173/";
    }


    return /*html*/`

        <div class="overflow-x-auto">
            <div>
            
                <a
                href="/add"
                class="ml-20 mb-10 inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-500" href="">Thêm Mới</a>
            
                <hr>
            </div>
            <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead class="ltr:text-left rtl:text-right">
                <tr>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Id</th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Ảnh</th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tên</th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Giá</th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Mô tả</th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nhà xuất bản</th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Đánh giá</th>
                   
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Thao tác
                    </th>
                </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                    ${products.map(function (p,index) {
                    return `
                        <tr>
                            <td class="px-4 py-2 text-center font-medium text-gray-900">${index +1}</td>
                            
                            <td class="px-4 py-2 text-center">
                                <div class="flex justify-center items-center">
                                <img class="w-24" src="${p.img}" alt="">
                                </div>
                            </td>

                            <td class="px-4 text-center py-2 font-medium text-gray-900">${p.name}</td>
                            <td class="px-4 py-2 text-center text-gray-700">${p.price}</td>
                            <td class="px-4 text-center py-2 text-gray-700">${p.description}</td>
                            <td class="px-4 text-center py-2 text-gray-700">${p.publisher}</td>
                            <td class="px-4 text-center py-2 text-gray-700">${p.rating}</td>
                                               
                            <td class="px-4 text-center py-2 text-gray-700">
                                <a href="/update/${p.id}"
                                    class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    View
                                </a>
                                <button data-id="${p.id}" class="delete-btn rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-400">Xoá</button>
                            </td>

                        </tr>
                        `
    })}
                </tbody>
            </table>
        </div>
    `
}

export default listProduct