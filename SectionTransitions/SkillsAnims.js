import StaticVariables from "../GeneralScripts/StaticVariables"
//import ModelTransitionPlayer from "../WebGL/ModelTransitionPlayer"

export default class SkillsAnims {
    play = () => {
        this.skillIcons = document.getElementsByClassName('skill-icon')

        if(!StaticVariables.isMobile)
        {
            this.skillsSectionTitle = document.getElementById('skills-title')

            this.skillsSectionTitle.style.transition = 'transform 0.3s ease-out'
            this.skillsSectionTitle.style.transform = 'translateX(0)'
            this.skillsSectionTitle.style.transitionDelay = '0.5s'
    
            this.skillSectionDecoration = document.getElementById('skill-section-decoration')
    
            this.skillSectionDecoration.style.transition = 'height 0.6s ease-in-out'
            this.skillSectionDecoration.style.height = '100%'
            this.skillSectionDecoration.style.transitionDelay = '0.8s'
    
            this.skillsText = document.getElementsByClassName('skills-text')
    
            for(let i=0; i<this.skillsText.length; i++)
            {
                this.skillsText[i].style.transition = 'transform 0.3s ease-out'
                this.skillsText[i].style.transform = 'scale(1)'
                this.skillsText[i].style.transitionDelay = `${i * 0.3 + 0.8}s`
            }
    
            this.skillNames = document.getElementsByClassName('skill-name')
    
            for(let i=0; i<this.skillNames.length; i++)
            {
                this.skillNames[i].style.transition = 'transform 0.3s ease-out'
                this.skillNames[i].style.transform = 'scale(1)'
                this.skillNames[i].style.transitionDelay = `${i * 0.3 + 1.4}s`
            }

            for(let i=0; i<this.skillIcons.length; i++)
            {
                this.skillIcons[i].style.transition = 'transform 0.3s ease-out'
                this.skillIcons[i].style.transform = 'scale(1)'
                this.skillIcons[i].style.transitionDelay = `${i * 0.3 + 1.4}s`
            }
            
            // console.log(this.skillNames[0].childNodes)
    
            // for(let i=0; i < 6; i++)
            // {
            //     setTimeout(() => {
            //         ModelTransitionPlayer.startPlaying(i + 1)
            //     }, (i * 0.3 + 1.4) * 1000)
            // }    
        } else {
            for(let i=0; i<this.skillIcons.length; i++)
            {
                this.skillIcons[i].style.transform = 'scale(1)'
            }
        }
    }
}
