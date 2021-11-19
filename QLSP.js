let listProduct = [ ]

function displayProduct() {
    let data = "<table>"
    data += "<tr><td colspan='2'>Product</td><td>" + listProduct.length +"products</td></tr>"
        for (let i = 0; i < product.length; i++){
            data += "<tr>"
            data += "<td>" + product[i] + "</td>"
            data += "<td><button onclick='edit('+ i + '>EDIT</button></td>"
            data += "<td><button onclick='del(' + i + '>DELETE</button></td>"
            data += "<td><button onclick='viewProduct(' + i + '>VIEW</button></td>"
            data += "</tr>"
        }
}
function add() {
    let product = document
}