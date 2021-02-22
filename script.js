const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
    console.log(request, request.readyState)
    if (request.readyState === 4 && request.status === 200) {
        console.log("request.responseText", JSON.parse(request.responseText))
    } else if (request.readyState === 4 && request.status === 404) {
        alert("Data couldn't been fetched")
    }

})

request.open('GET', 'https://jsonplaceholder.typicode.com/users/1/todos')
request.send()