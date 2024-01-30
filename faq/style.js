const opendiv = document.querySelectorAll('.questions');
const showdetails = document.querySelectorAll('.answers')
const changeicon = document.querySelectorAll('.icon-image')

opendiv.forEach((element, index) => {
    element.addEventListener('click', () => {
        toggleDetails(index)
    })
})

const openDetails = (index) => {
    showdetails.forEach(item => {
        item.classList.remove('answer-visible')
    })

    changeicon.forEach (icon => {
        icon.src = 'images/icon-plus.svg'
    })

    showdetails[index].classList.add('answer-visible')
}

const closeDetails = (index) => {
     showdetails[index].classList.remove('answer-visible')
}

const toggleDetails = (index) => {
        if(showdetails[index].classList.contains('answer-visible')) {
            closeDetails(index)
            changeicon[index].src = 'images/icon-plus.svg'
        }
        else{
            openDetails(index)
            changeicon[index].src = 'images/icon-minus.svg'
        }
}



