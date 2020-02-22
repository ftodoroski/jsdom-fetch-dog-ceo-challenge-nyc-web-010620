document.addEventListener('DOMContentLoaded', () => {
    const BASE_IMAGE_URL = 'https://dog.ceo/api/breeds/image/random/4'
    const BASE_BREED_URL = 'https://dog.ceo/api/breeds/list/all'

    const body = document.getElementsByTagName('body')[0]
    fetch(BASE_IMAGE_URL).then(response => response.json()).then(data => data.message.forEach(dogImageSrc => {
        const imageTag = document.createElement('img')
        imageTag.src = dogImageSrc
        imageTag.height = 200
        imageTag.width = 250
        
    
        body.append(imageTag)
    }))
    
    const ul = document.querySelector('#dog-breeds')
    fetch(BASE_BREED_URL).then(response => response.json()).then(data => {
        Object.keys(data.message).forEach(dogBreed => {
            const li = document.createElement('li')
            li.innerText = dogBreed

            ul.append(li)
        })
    })
    
    document.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
            event.target.style.backgroundColor = '#d3d3d3'
        } 
    })
})
