import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import Buttons from "./GeneralScripts/Buttons"
import Icons, { removeBottomSocialMediaBtnsSmallScreens } from "./GeneralScripts/Icons"

import ScrollMechanic from "./GeneralScripts/ScrollMechanic"
import ToggleMenu from "./GeneralScripts/ToggleMenu"

import AboutMeAnims from "./SectionTransitions/AboutMeAnims"
import ContactAnims from "./SectionTransitions/ContactAnims"
import HeaderAnims from "./SectionTransitions/HeaderAnims"
import ProjectsAnims from "./SectionTransitions/ProjectsAnims"
import SkillsAnims from "./SectionTransitions/SkillsAnims"

import HeaderScene from "./WebGL/HeaderScene"
// import TechSkill from './WebGL/TechSkill'
import AboutMeScene from './WebGL/AboutMeScene'

import ModelTransitionPlayer from './WebGL/ModelTransitionPlayer'
import ContactScene from './WebGL/ContactScene'
import StaticVariables from './GeneralScripts/StaticVariables'

import ContactForm from './GeneralScripts/ContactForm'

const calculateRemUnits = () => {
    return window.innerWidth / parseFloat(
        getComputedStyle(
            document.querySelector('body')
        )['font-size']
    )
}

function main() {
    window.mobileAndTabletCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };
    
    StaticVariables.isMobile = mobileAndTabletCheck()

    /**
     * Header
     */
    const headerScene = new HeaderScene()
    
    ModelTransitionPlayer.add(headerScene.sceneTransition, headerScene.id)
    
    /**
     * Skills
     */
    
    // const skillCanvases = document.getElementsByClassName('skill-canvas')
    
    // const techSkills = []
    
    // for(let index=0; index<6; index++)
    // {
    //     techSkills[index] = new TechSkill(index, skillCanvases)
    //     ModelTransitionPlayer.add(techSkills[index].sceneTransition, index + 1)
    // }
    
    /**
     * About Me
     */
    
    const aboutMeScene = new AboutMeScene()
    
    ModelTransitionPlayer.add(aboutMeScene.sceneTransition, aboutMeScene.id)
    
    /**
     * Contact
     */
    
    let contactScene

    let remUnits = calculateRemUnits()
    
    if(remUnits >= 60) {
        contactScene = new ContactScene()
        ModelTransitionPlayer.add(contactScene.sceneTransition, contactScene.id)
    }

    /**
     * Resize
     */
    
    function mainResize()
    {
        headerScene.resize()
        aboutMeScene.resize()
    }
    
    window.addEventListener('resize', () => mainResize())
    
    /**
     * Main Loop
     */
    
    const clock = new THREE.Clock()
    let previousTime = 0

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            clock.stop();
        } else {
            clock.start();
        }
    });
    
    const tick = () =>
    {
        const elapsedTime = clock.getElapsedTime()
        const deltaTime = elapsedTime - previousTime
        previousTime = elapsedTime
    
    
        headerScene.animate(elapsedTime)
        headerScene.render()
    
    
        // for(const el of techSkills)
        // {
        //     el.render()
        //     el.animate(elapsedTime)
        // }
    
        aboutMeScene.render()
        aboutMeScene.animate(deltaTime)
    
        if(calculateRemUnits() >= 60)
        {
            contactScene.animate(elapsedTime)
            contactScene.render()
        }
    
        for(let i=0; i<ModelTransitionPlayer.length; i++)
        {
            ModelTransitionPlayer.playAnim(i, deltaTime)
        }
    
        window.requestAnimationFrame(tick)
    }
    
    tick()
    
    /**
     * Section Intros
     */
    
    const headerAnims = new HeaderAnims(headerScene)
    
    const projectsAnims = new ProjectsAnims()
    
    const skillsAnims = new SkillsAnims()
    
    const aboutMeAnims = new AboutMeAnims(aboutMeScene)
    
    const contactAnims = new ContactAnims(contactScene)
    
    new Buttons()
    
    new Icons()
    
    const introAnims = [
        {
            play: () => {
                headerAnims.play()
            } 
        },
        {
            play: () => {
                projectsAnims.play()
            } 
        },
        {
            play: () => {
                skillsAnims.play()
            } 
        },
        {
            play: () => {
                aboutMeAnims.play()
            } 
        },
        {
            play: () => {
                contactAnims.play()
            } 
        }
    ]
    
    introAnims[0].play()
    
    /**
     * Scroll and Menu Mechanics
     */
    
    const scrollMechanic = new ScrollMechanic()
    
    window.addEventListener('wheel', (e) => {
        scrollMechanic.scrollMechanicWheel(e, introAnims, toggleMenu.showToggleMenu)
    })
    
    // window.addEventListener('keydown', (e) => {
    //     scrollMechanic.scrollMechanicKeyboard(e, introAnims, toggleMenu.showToggleMenu)
    // })
    
    const toggleMenu = new ToggleMenu(introAnims, scrollMechanic)
    
    toggleMenu.showToggleMenu(true)
    
    //Header Contact Btn
    
    const contactBtn = document.querySelector('#contact-btn')
    
    if(!StaticVariables.isMobile){
        contactBtn.onclick = ''
        contactBtn.addEventListener('click', () => {
            scrollMechanic.scrollTo(4, introAnims, true)
        })

        removeBottomSocialMediaBtnsSmallScreens()
    }
    
    // Contact Form logic
    
    new ContactForm()
}

window.onload = main()