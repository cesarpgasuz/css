const result = document.getElementById('result')
const filter = document.getElementById('filter')
let listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=10')

    const re = await res.json();
    const results = re.results;

    // const { results } = await res.json()

    listItems = [...results];
    // Clear result
    result.innerHTML = ''

    listItems.forEach(user => {
        const li = document.createElement('li')

        // console.log(user)

        // listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)

        console.log(listItems)

    })
}


function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}