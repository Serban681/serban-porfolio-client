export default class Buttons {
    constructor()
    {
        this.init()
    }

    init = () => {
        this.btns = document.getElementsByClassName('btn')

        for(const element of this.btns)
        {
            element.addEventListener('mouseover', () => {
                element.style.transition = 'transform 0.2 ease-in-out'
                element.style.transform = 'scale(1.1)'
                element.style.transitionDelay = '0s'
            })

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'scale(1)'
            })
        }
    }
}