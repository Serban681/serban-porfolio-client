import StaticVariables from "../GeneralScripts/StaticVariables"

export default class projectsAnims {
    play = () => {
        if(!StaticVariables.isMobile)
        {
            this.projectsTitle = document.getElementById('projects-section-title')

            this.projectsTitle.style.transition = 'transform 0.3s ease-out'
            this.projectsTitle.style.transform = 'translateX(0)'
            this.projectsTitle.style.transitionDelay = '0.5s'
    
            this.firstProjectTitle = document.getElementById('first-project-title')
    
            this.firstProjectTitle.style.transition = 'transform 0.3s ease-out'
            this.firstProjectTitle.style.transform = 'scale(1)'
            this.firstProjectTitle.style.transitionDelay = '0.8s'
    
            this.firstProjectDecoration = document.getElementById('first-project-decoration')
    
            this.firstProjectDecoration.style.transition = 'height 0.6s ease-in-out'
            this.firstProjectDecoration.style.height = '6.3rem'
            this.firstProjectDecoration.style.transitionDelay = '0.8s'

            this.firstProjectDescription = document.getElementById('first-project-description')
    
            this.firstProjectDescription.style.transition = 'transform 0.3s ease-out'
            this.firstProjectDescription.style.transform = 'scale(1)'
            this.firstProjectDescription.style.transitionDelay = '1.1s'
            
            
            // description and title simoultanous with decoration => delay 1.4s

            this.firstProjectTechnologies = document.getElementsByClassName('first-project-technology')
    
            for(let i=0; i<this.firstProjectTechnologies.length; i++)
            {
                this.firstProjectTechnologies[i].style.transition = 'transform 0.3s ease-out'
                this.firstProjectTechnologies[i].style.transform = 'scale(1)'
                this.firstProjectTechnologies[i].style.transitionDelay = `${i * 0.3 + 1.4}s`
            }

            // 5 technologies -> delay 1.4s + 1.5s = 2.9s
    
            this.firstProjectBtns = document.getElementsByClassName('first-project-btn')
    
            for(let i=0; i<this.firstProjectBtns.length; i++)
            {
                this.firstProjectBtns[i].style.transition = 'transform 0.3s ease-out'
                this.firstProjectBtns[i].style.transform = 'scale(1)'
                this.firstProjectBtns[i].style.transitionDelay = `${i * 0.3 + 2.9}s`
            }

            // 2 btns -> delay 2.9s + 0.6s = 3.5s
    
            this.secondProjectTitle = document.getElementById('second-project-title')
    
            this.secondProjectTitle.style.transition = 'transform 0.3s ease-out'
            this.secondProjectTitle.style.transform = 'scale(1)'
            this.secondProjectTitle.style.transitionDelay = '3.5s'

            this.secondProjectDecoration = document.getElementById('second-project-decoration')
    
            this.secondProjectDecoration.style.transition = 'height 0.6s ease-in-out'
            this.secondProjectDecoration.style.height = '6.3rem'
            this.secondProjectDecoration.style.transitionDelay = '3.5s'
    
            this.secondProjectDescription = document.getElementById('second-project-description')
    
            this.secondProjectDescription.style.transition = 'transform 0.3s ease-out'
            this.secondProjectDescription.style.transform = 'scale(1)'
            this.secondProjectDescription.style.transitionDelay = '3.8s'   
    
            // description and title simoultanous with decoration => delay 4.1s

            this.secondProjectTechnologies = document.getElementsByClassName('second-project-technology')
    
            for(let i=0; i<this.secondProjectTechnologies.length; i++)
            {
                this.secondProjectTechnologies[i].style.transition = 'transform 0.3s ease-out'
                this.secondProjectTechnologies[i].style.transform = 'scale(1)'
                this.secondProjectTechnologies[i].style.transitionDelay = `${i * 0.3 + 4.1}s`
            }
    
            // 2 technologies -> delay 4.1s + 0.6s = 4.7s

            this.secondProjectBtns = document.getElementsByClassName('second-project-btn')
    
            for(let i=0; i<this.secondProjectBtns.length; i++)
            {
                this.secondProjectBtns[i].style.transition = 'transform 0.3s ease-out'
                this.secondProjectBtns[i].style.transform = 'scale(1)'
                this.secondProjectBtns[i].style.transitionDelay = `${i * 0.3 + 4.7}s`
            }    
        }
    }
}