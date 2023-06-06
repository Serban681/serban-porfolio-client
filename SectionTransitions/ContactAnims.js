import StaticVariables from "../GeneralScripts/StaticVariables"
import ModelTransitionPlayer from "../WebGL/ModelTransitionPlayer"

export default class ContactAnims {
    constructor(contactScene)
    {
        this.contactScene = contactScene
    }

    play = () => {
        if(!StaticVariables.isMobile)
        {
            this.contactTitle = document.getElementById('contact-title')

            this.contactTitle.style.transition = 'transform 0.3s ease-out'
            this.contactTitle.style.transform = 'translateX(0)'
            this.contactTitle.style.transitionDelay = '0.5s'
    
            this.contactDecoration = document.getElementById('contact-decoration')
    
            this.contactDecoration.style.transition = 'height 0.6s ease-in-out'
            this.contactDecoration.style.height = '3.5rem'
            this.contactDecoration.style.transitionDelay = '0.8s'
    
            this.contactParagraphs = document.getElementsByClassName('contact-paragraph')
    
            for(let i=0; i<this.contactParagraphs.length; i++)
            {
                this.contactParagraphs[i].style.transition = 'transform 0.3s ease-out'
                this.contactParagraphs[i].style.transform = 'scale(1)'
                this.contactParagraphs[i].style.transitionDelay = `${i * 0.3 + 0.8}s`
            }
    
            this.formLabels = document.getElementsByClassName('form-label')
    
            for(let i=0; i<this.formLabels.length; i++)
            {
                this.formLabels[i].style.transition = 'transform 0.3s ease-out'
                this.formLabels[i].style.transform = 'scale(1)'
                this.formLabels[i].style.transitionDelay = `${i * 0.6 + 1.4}s`
            }
    
            this.formInputs = document.getElementsByClassName('form-input')
    
            for(let i=0; i<this.formInputs.length; i++)
            {
                this.formInputs[i].style.transition = 'width 0.3s ease-in-out, padding 0.3s ease-in-out'
                this.formInputs[i].style.padding = '0.7rem 0.5rem'
                this.formInputs[i].style.width = '100%'
                this.formInputs[i].style.transitionDelay = `${i * 0.6 + 1.7}s`
            }
    
            this.bottomContactBtn = document.getElementById('bottom-contact-btn')
    
            this.bottomContactBtn.style.transition = 'transform 0.3s ease-out'
            this.bottomContactBtn.style.transform = 'scale(1)'
            this.bottomContactBtn.style.transitionDelay = '3.2s'
    
            this.footerIcons = document.getElementsByClassName('footer-icon')
    
            for(let i=0; i<this.footerIcons.length; i++)
            {
                this.footerIcons[i].style.transition = 'transform 0.3s ease-out'
                this.footerIcons[i].style.transform = 'scale(1) rotateZ(0deg)'
                this.footerIcons[i].style.transitionDelay = `${0.3 * i + 3.5}s`
            }
    
            setTimeout(() => {
                ModelTransitionPlayer.startPlaying(this.contactScene.id)
            }, 4100)
        }
    }
}