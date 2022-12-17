const container = document.querySelector('#container')
const getRes = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(status: ${res.status});
    }
    return await res.json()
}

getRes('user.json')
    .then(data => {
        console.log(data);
        for(let key in data) {
            const block = document.createElement('div')
            const text = data[key].text


            block.innerHTML = `<div class="block">
                <p>${text}</p>
            </div>`
            container.append(block)
        }
    })
