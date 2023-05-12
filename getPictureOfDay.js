const axios = require('axios');


async function f() {
    let a = await axios.get('https://fakestoreapi.com/users')
    return a.data[0]
}

f().then((result) => {
    console.table(result.address.street)
})

