import StaticVariables from "../GeneralScripts/StaticVariables"
import ModelTransitionPlayer from "../WebGL/ModelTransitionPlayer"

export default class HeaderAnims {
    constructor(headerScene) {
        this.headerScene = headerScene
    }

    play = () => {
        if(!StaticVariables.isMobile)
        {
            this.logo = document.getElementById('logo')

            this.logo.style.transition = 'transform 0.3s ease-out'
            this.logo.style.transform = 'scale(1)'
            this.logo.style.transitionDelay = '0s'
    
            this.headerTexts = document.getElementsByClassName('header-title')
    
            for(let i=0; i<this.headerTexts.length; i++)
            {
                this.headerTexts[i].style.transition = 'transform 0.3s ease-out'   
                this.headerTexts[i].style.transform = 'translateX(0vh)'
                this.headerTexts[i].style.transitionDelay = `${i * 0.3 + 0.3}s`
            }
    
            this.headerIcons = document.getElementsByClassName('header-icon')
    
            for(let i=0; i<this.headerIcons.length; i++)
            {
                this.headerIcons[i].style.transition = 'transform 0.3s ease-out'
                this.headerIcons[i].style.transform = 'scale(1) rotateZ(0deg)'
                this.headerIcons[i].style.transitionDelay = `${0.3 * i + 1.2}s`
            }
    
            this.contactBtn = document.getElementById('contact-btn')
    
            this.contactBtn.style.transition = 'transform 0.3s ease-out'
            this.contactBtn.style.transform = 'scale(1)'
            this.contactBtn.style.transitionDelay = '1.8s'
    
            this.scrollDownCta = document.getElementById('scroll-down-cta')
    
            this.scrollDownCta.style.transition = 'transform 0.3s ease-out'
            this.scrollDownCta.style.transform = 'translateX(-50%) translateY(-0.5rem) scale(1)'
            this.scrollDownCta.style.transitionDelay = '2.4s'
    
            setTimeout(() => {
                this.scrollDownCta.style.animation = 'up-down 2s ease-in-out infinite'
            }, 2700)
    
            setTimeout(() => {
                ModelTransitionPlayer.startPlaying(this.headerScene.id)
            }, 2100)
        }
    }
}