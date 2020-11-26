const principalText = document.querySelector('h1');
const secundaryText = document.querySelector('p');
const informationPrice = document.querySelector('.informationPrice');
const burger = document.querySelector('.burger');
const newInformation = document.querySelector('.new-information')
const items = document.querySelector('#item');

function changeText(name, promo) {
    principalText.innerHTML = name
    secundaryText.innerHTML = promo
}


burger.addEventListener('click', () => {

    let toggleBurger = burger.classList.toggle('change');
    newInformation.style.transform = 'translateX(12px)';
    let value = burger.children
    let valueIndex1 = value[1]
    valueIndex1.style.display = 'none';

    if (toggleBurger != true) {
        let value = burger.children

        let valueIndex1 = value[1]
        newInformation.style.transform = 'translateX(1000px)';
        valueIndex1.style.display = 'inline';
    }


})


items.addEventListener("wheel", e => {

    if (e.deltaY > 0) {
        e.target.scrollBy(0, 4000)
    }
    else {
        e.target.scrollBy(0, -4000)
    }




})

items.addEventListener('scroll', () => {
    informationPrice.classList.remove("animacao")
    let widthPage = items.scrollTop

    console.log(widthPage)
    if (widthPage >= 0 && widthPage < 940) {
        changeText('Model S', 'Lowest Cost in America - Money-back guarantee')
        informationPrice.classList.add("animacao")
    }
    else if (widthPage >= 937 && widthPage < 1896) {
        changeText('Model 3', 'Starting at $69,420')
        informationPrice.classList.add("animacao")


    } else if (widthPage >= 1896 && widthPage < 2844) {
        changeText('Model X', 'Order Online for Touchless Delivery"')
        informationPrice.classList.add("animacao")

    } else {
        changeText('Model Y', 'Order Online for Touchless Delivery"')
        informationPrice.classList.add("animacao");
    }
})
