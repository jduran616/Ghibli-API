const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

// create request variable
var req = new XMLHttpRequest()

// Open connection using GET on URL endpoint
req.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

req.onload = function() {
 //Begin accessing JSON data
    var data = JSON.parse(this.response)

    if (req.status >= 200 && req.status < 400) {

        data.forEach(movie => {
        // create card element
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        // create and h1 and set the text to film title
        const h1 = document.createElement('h1')
        h1.innerText = movie.title;

        // creat a p and set text to film descr
        const p = document.createElement('p')
        let des = movie.description.substring(0,300)
        p.textContent = des + "..."

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)

    })

    } else {
        console.log("error")
    }
}

req.send();
