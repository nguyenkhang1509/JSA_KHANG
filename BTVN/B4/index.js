localStorage.setItem('login', true)
let btn = document.querySelectorAll('.btn')
let quantity = document.querySelector('.quantity')
let currentQuantity = +quantity.innerText;

for (let i = 0; i < btn.length; i++) {
    let btnItem = btn[i];
    if (localStorage.getItem('login')) {
        btnItem.addEventListener('click', function () {
            currentQuantity += 1;
            quantity.innerText = currentQuantity
        })
    } else {
        btnItem.addEventListener('click', function () {
            alert('login required')
            location.href = 'dangnhap.html'
        })

    }
}
