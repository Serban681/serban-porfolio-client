export default class Icons {
    constructor() {
        this.init()
    }

    init = () => {
        this.icons = document.getElementsByClassName('icon')

        for(const element of this.icons)
        {
            element.addEventListener('mouseover', () => {
                element.style.transition = 'transform 0.2 ease-in-out'
                element.style.transform = 'scale(1.15)'
                element.style.transitionDelay = '0s'
            })
        
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'scale(1)'
            })
        } 
    }
}