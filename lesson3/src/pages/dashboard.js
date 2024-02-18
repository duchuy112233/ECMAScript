import { useState, useEffect } from "../ultilities"

const Dashboard = function () {
    const [books, setBooks] = useState([])
    useEffect(function () {
        fetch("http://localhost:3000/books")
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                setBooks(data)
            })
    }, [])
    // Delete
    useEffect(function () {
        const deleteBtns = document.querySelectorAll(".delete-btn")
        deleteBtns.forEach(function (btn) {
            btn.onclick = function () {
                const cf = confirm("Bán có chắc chắc muốn xoá sản phẩm này ?")
                if (cf) {
                    const id = btn.dataset.id
                    console.log(id);
                    handleDeleteBook(id)
                }
            }
        })
    })
    //
    const handleDeleteBook = function (id) {
        fetch("http://localhost:3000/books/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }



 


    /////////   /////////   /////////   /////////   /////////   /////////   /////////
    return /*html*/`
    <h1 class="text-2xl text-center m-8">ADMIN</h1>
    <div>
  
    <a
    href="/addform"
    class="ml-20 mb-10 inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-500" href="">Thêm Mới</a>
  
    <hr>
    </div>
    <div class="">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead class="ltr:text-left rtl:text-right">
            <tr>
            <th class="w-[30%] px-4 py-2 font-medium text-gray-900">Tên sản phẩm</th>
            <th class="w-[10%] px-4 py-2 font-medium text-gray-900">Giá</th>
            <th class="w-[30%] px-4 py-2 font-medium text-gray-900">Mô tả</th>
            <th class="w-[20%] px-4 py-2 font-medium text-gray-900">Ảnh</th>
            <th class="w-[10%] px-4 py-2"></th>
            </tr>
        </thead>
    
        <tbody id="table" class="divide-y divide-gray-200">
            ${books.map(function (book) {
        return /*html*/`
                <tr>
                    <td class="px-4 py-2 font-medium text-gray-900 text-center">${book.name}</td>
                    <td class="px-4 py-2 text-gray-700 text-center">${book.list_price}</td>
                    <td class="px-4 py-2 text-gray-700">${book.short_description}</td>
                    <td class="px-4 py-2 text-gray-700">
                        <img src="${book.images?.[0].base_url}"/>
                    </td>
                    <td class="whitespace-nowrap px-4 py-2">
                        <a
                       
                        href="/admin/book/${book.id}"
                        class="update-btn inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                        View
                        </a>
                        <button data-id="${book.id}" class="delete-btn rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-400">Xoá</button>
                    </td>
                </tr>
                `
    }).join("")}
        </tbody>
        </table>
    </div>
    `
}

export default Dashboard