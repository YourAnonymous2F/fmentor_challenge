const opendiv = document.querySelectorAll('.questions');
const showdetails = document.querySelectorAll('.answers')
const changeicon = document.querySelectorAll('.icon-image')

// console.log(changeicon)

opendiv.forEach((element, index) => {
    element.addEventListener('click', () => {
        showdetails.forEach(item => {
            item.classList.remove('answer-visible')
        })
        showdetails[index].classList.add('answer-visible')
        changeicon[index].src = 'images/icon-minus.svg'
    })
})