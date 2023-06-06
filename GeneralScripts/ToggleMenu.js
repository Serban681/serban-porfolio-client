import ToggleContainer from "./ToggleContainer"
import StaticVariables from "./StaticVariables"
import ScrollMechanic from "./ScrollMechanic"

export default class ToggleMenu {
    constructor(introAnims, scrollMechanic) {
        this.init(introAnims, scrollMechanic)
    }

    init = (introAnims, scrollMechanic) => {
        this.sectionToggles = document.getElementsByClassName('section-toggle')
        this.toggleMarks = document.getElementsByClassName('toggle-mark')
        this.hiddenSectionToggles = document.getElementsByClassName('section-toggle-hidden')

        this.sectionMenu = document.getElementById('section-menu')
        this.toggleContainers = document.getElementsByClassName('toggle-container')
        this.toggleContainerObjects = []

        this.sectionMenu.addEventListener('mouseenter', () => {
            this.showToggleMenu(false)
        })

        this.sectionMenu.addEventListener('mouseleave', () => {
            this.hideToggleMenu()
        })

        for(let i = 0; i < StaticVariables.sections.length; i++)
        {
            this.toggleContainerObjects[i] = new ToggleContainer(i, this.toggleContainers[i], scrollMechanic, introAnims, this.showToggleMenu)
        }
    }

    showToggleMenu = (hide) => 
    {
        let index = 0

        for(const element of this.sectionToggles)
        {
            element.style.transform = 'scale(1)';

            if(index !== StaticVariables.curSection)
            {
                this.toggleMarks[index].style.display = 'none'
            }
            else
            {
                this.toggleMarks[index].style.display = 'inline'
            }
            
            for(const element of this.hiddenSectionToggles)
            {
                element.style.transform = 'scale(0)';
            }

            index++
        }

        clearTimeout(this.hiddenMenuTimeout)

        if(hide)
            this.hideToggleMenu()
    }

    hideToggleMenu = () =>
    {
        this.hiddenMenuTimeout = setTimeout(() => {
            for(const element of this.sectionToggles)
            {
                element.style.transform = 'scale(0)';
            }
        
            for(const element of this.hiddenSectionToggles)
            {
                element.style.transform = 'scale(1)';
            }
        }, 1200)
    }
}