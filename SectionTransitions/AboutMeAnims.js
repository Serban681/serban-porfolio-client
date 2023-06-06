import StaticVariables from "../GeneralScripts/StaticVariables"
import ModelTransitionPlayer from "../WebGL/ModelTransitionPlayer"

export default class AboutMeAnims {
    constructor(aboutMeScene) {
        this.aboutMeScene = aboutMeScene
    }

    play = () => {
        if(!StaticVariables.isMobile)
        {
            this.aboutMeTitle = document.getElementById('about-me-title')

            this.aboutMeTitle.style.transition = 'transform 0.3s ease-out'
            this.aboutMeTitle.style.transform = 'translateX(0)'
            this.aboutMeTitle.style.transitionDelay = '0.5s'

            this.aboutMeParagraphs = document.getElementsByClassName('about-me-paragraph')

            for(let i=0; i<this.aboutMeParagraphs.length; i++)
            {
                this.aboutMeParagraphs[i].style.transition = 'transform 0.3s ease-out'
                this.aboutMeParagraphs[i].style.transform = 'scale(1)'
                this.aboutMeParagraphs[i].style.transitionDelay = `${i * 0.3 + 0.8}s`
            }

            this.aboutMeDecoration = document.getElementById('about-me-decoration')

            this.aboutMeDecoration.style.transition = 'height 0.9s ease-out'
            this.aboutMeDecoration.style.height = '12rem'
            this.aboutMeDecoration.style.transitionDelay = '0.8s'

            setTimeout(() => {
                ModelTransitionPlayer.startPlaying(this.aboutMeScene.id)
            }, 1700)
        }
    }
}