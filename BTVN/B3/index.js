const mooncakes = [
    {
        id: 1,
        type: 'bánh mặn',
        name: 'Thập Cẩm Gà Quay Vi Cá',
        mass: '185g',
    },
    {
        id: 2,
        type: 'bánh ngọt',
        name: 'Sầu Riêng Hạt Sen',
        mass: '150g',
    },
    {
        id: 3,
        type: 'bánh chay',
        name: 'Ngũ Nhân',
        mass: '135g',
    },
]
function getItem(inputvalue) {
    for (let i = 0; i < mooncakes.length; i++) {
        let cakeName = mooncakes[i].name.toLowerCase()
        let newInputValue = inputvalue.toLowerCase();

        if (cakeName.includes(newInputValue)) {
            console.log(mooncakes[i])
        }
    }
}
getItem('sầu riêng')