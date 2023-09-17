// https://jsonplaceholder.typicode.com/posts

async function readPost() {
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Carregando'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML = ''

        for(let i in json) {
            let divPost = document.createElement('div')
            let h2Post = document.createElement('h2')
            let paragrafoPost = document.createElement('p')

            paragrafoPost.innerHTML = json[i].body
            h2Post.innerHTML = `${json[i].title} ${i}`

            postArea.append(divPost)
            divPost.append(h2Post);
            divPost.append(paragrafoPost)

            divPost.setAttribute("class", 'divpost')
            h2Post.setAttribute('class', 'h2post')
            paragrafoPost.setAttribute('class', 'paragropost')
        }
    } else {
        postArea.innerHTML = 'Nenhum post para exibir, Desculpa'
        console.log('não ok')
    }
}

readPost();
let botao = document.querySelector('#insertButton');
botao.addEventListener('click', readPost)
