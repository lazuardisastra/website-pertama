console.log("ok")

const endpoint = "https://reqres.in/api/users"

// fetch(endpoint)
// .then((result) => result.json())
// .then(({data}) => console.log(data))

// async function hitAPI() {
//     const api = await fetch(endpoint)
//     const {data} = await api.json()
//     console.log(data)
// }

// hitAPI()

fetch(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: "aaaa@gmail.com",
        firstname: "aaaa",
    }),
})
.then((result) => result.json())
.then((data) => console.log(data))