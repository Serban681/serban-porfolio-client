import StaticVariables from "./StaticVariables"

export default class ScrollMechanic {
    constructor() {
        this.init()
    }

    init = () => {
        this.canScroll = true
        this.scrolledDown = true
    }

    scrollMechanicWheel = (e, introAnims, showToggleMenu) => {
        if(this.canScroll)
        {
            if(e.deltaY > 0 && StaticVariables.curSection < StaticVariables.sections.length - 1)
            {
                this.scrollDown(introAnims, showToggleMenu)
            }
            else if(e.deltaY < 0 && StaticVariables.curSection > 0)
            {
                this.scrollUp(introAnims, showToggleMenu)
            }
        }
    }

    // scrollMechanicKeyboard = (e, introAnims, showToggleMenu) => {
    //     if(this.canScroll)
    //     {
    //         if((e.key === 'ArrowDown' || e.key === 's' || e.key === 'S' || e.code === 'Space') && StaticVariables.curSection < StaticVariables.sections.length - 1)
    //         {
    //             this.scrollDown(introAnims, showToggleMenu)
    //         }
    //         else if((e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') && StaticVariables.curSection > 0)
    //         {
    //             this.scrollUp(introAnims, showToggleMenu)
    //         }
    //     }
    // }

    scrollUp = (introAnims, showToggleMenu) => {
        StaticVariables.curSection--
        this.canScroll = false
        this.scrolledDown = false
        introAnims[StaticVariables.curSection].play()
        this.regenerateScroll()
        this.updateElement()
    
        showToggleMenu(true)
    }
    
    scrollDown = (introAnims, showToggleMenu) => {
        StaticVariables.curSection++
        this.canScroll = false
        this.scrolledDown = true
        introAnims[StaticVariables.curSection].play()
        this.regenerateScroll()
        this.updateElement()
    
        showToggleMenu(true)
    }

    scrollTo = (sectionIndex, introAnims, showToggleMenu) => {
        StaticVariables.curSection = sectionIndex
        this.canScroll = false
        this.scrolledDown = true
        introAnims[StaticVariables.curSection].play()
        this.regenerateScroll()
        this.updateElement()
    
        showToggleMenu(false)
    }
    
    regenerateScroll = () => {
        setTimeout(() => {
            this.canScroll = true
        }, 500)
    }
    
    updateElement = () => {
        let index = 0;
    
        [...StaticVariables.sections].forEach(element => {
            element.style.top = `${(index - StaticVariables.curSection) * 100}vh`
            index++
        })  
    }
}