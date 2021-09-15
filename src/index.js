console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', imageFetch);

document.addEventListener('DOMContentLoaded', breedFetch);

document.addEventListener('DOMContentLoaded', selectDropdown);

function selectDropdown() {
    document.querySelector('select').addEventListener('change', dropDown)
};

function imageFetch() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    // .then(data => console.log(JSON.stringify(data)))
    .then(data => {
        const images = data.message;
        images.forEach(image => {
            const p = document.createElement('span');
            document.querySelector('#dog-image-container').appendChild(p);
            p.innerHTML = `<img src='${image}' alt='dog' height='250'/>`;
        })
    })
}

function breedFetch() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        const breeds = data.message;
        for (let breed in breeds) {
            const li = document.createElement('li');
            document.querySelector('#dog-breeds').appendChild(li);
            li.innerText = breed;
            li.addEventListener('click', () => {
                li.style.color = 'red';
            })
        }
    })
}

function dropDown(e) {
    //const choice = document.querySelector('select#breed-dropdown').value
    const choice = e.target.value
    const liArray = document.querySelectorAll('li')
    liArray.forEach(li => li.hidden = false)
    liArray.forEach(li => {
        if (li.innerText.startsWith(choice) === false) {
            li.hidden = true;
        }
    })

    //below is the LONG way to do it (that works but is not efficient!)
    //liArray.forEach(li => li.hidden = false)
    // if (choice === 'a') {
    //     liArray.forEach(li => {
    //         //debugger;
    //         if (li.innerText.startsWith('a') === false) {
    //             li.hidden = true;
    //         }
    //     })
    // }
    // else if (choice === 'b') {
    //     liArray.forEach(li => {
    //         //debugger;
    //         if (li.innerText.startsWith('b') === false) {
    //             li.hidden = true;
    //         }
    //     })
    // }
    // else if (choice === 'c') {
    //     liArray.forEach(li => {
    //         //debugger;
    //         if (li.innerText.startsWith('c') === false) {
    //             li.hidden = true;
    //         }
    //     })
    // }
    // else if (choice === 'd') {
    //     liArray.forEach(li => {
    //         //debugger;
    //         if (li.innerText.startsWith('d') === false) {
    //             li.hidden = true;
    //         }
    //     })
    // }
}
