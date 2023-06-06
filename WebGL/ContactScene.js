import * as THREE from 'three'
import StaticVariables from '../GeneralScripts/StaticVariables'
import TransitionFunctions from '../GeneralScripts/TransitionFunctions'
import ModelTransitionPlayer from './ModelTransitionPlayer'
import model from '../static/models/envelope.glb?url'

export default class ContactScene {
    constructor() {
        this.init()
    }

    init = () => {
        this.localElapsedTime = 0
        this.id = 8
        this.initScene()
        this.initLights()
        this.initModel()
        this.initRenderer()
    }

    render = () => {
        this.renderer.render(this.scene, this.camera)
    }

    animate = (elapsedTime) => {
        if(this.model)
            this.model.position.y = Math.sin(elapsedTime * 2) * 0.2 - 0.7
            // this.model.rotation.y = elapsedTime * 0.2
    }

    contactResize = () => {
        this.sizes.width = this.container.getBoundingClientRect().width
        this.sizes.height = this.container.getBoundingClientRect().height
    
        this.camera.aspect = this.sizes.width / this.sizes.height
        this.camera.updateProjectionMatrix()
    
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    initScene = () => {
        this.canvas = document.querySelector('.contact-canvas')
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color('#142844')
    }

    initLights = () => {
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
        this.scene.add(this.ambientLight)

        this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.2)
        this.directionalLight.position.set(4, 4, 3)
        this.directionalLight.target.position.set(0, -0.5, -3)

        this.scene.add(this.directionalLight)

        // const directionalLightHelper = new THREE.DirectionalLightHelper(contactDirectionalLight, 0.6)
        // contactScene.add(directionalLightHelper)
    }

    initModel = () => {
        StaticVariables.gltfLoader.load(
            model,
            (gltf) => {
                this.model = gltf.scene.children[0]
                this.model.rotateX(-Math.PI * 0.12)
                this.model.position.set(0, -0.5, -3)

                if(StaticVariables.isMobile)
                    this.model.scale.set(1, 1, 1)
                else
                    this.model.scale.set(0, 0, 0)
                
                this.scene.add(this.model)
            }
        )
    }

    initRenderer = () => {
        this.container = document.querySelector('.contact-canvas-container')

        this.sizes = {
            width: this.container.getBoundingClientRect().width,
            height: this.container.getBoundingClientRect().height
        }

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })

        this.camera = new THREE.PerspectiveCamera(25, this.sizes.width / this.sizes.height, 0.1, 1000)

        this.camera.position.set(0, 3.6, 10)
        this.camera.rotation.set(-0.1 * Math.PI, 0, 0)

        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping

        this.scene.add(this.camera)

        this.renderer.render(this.scene, this.camera)
    }

    sceneTransition = (deltaTime) => {
        if(!StaticVariables.isMobile)
        {
            this.localElapsedTime += deltaTime

            const curScaleValue = TransitionFunctions.lerp(0, 1, TransitionFunctions.easeInOut(this.localElapsedTime * 10 / 3))
    
            if(this.localElapsedTime < 0.3)
            {      
                if(this.model)
                    this.model.scale.set(curScaleValue, curScaleValue, curScaleValue)
            }            
            else
            {
                ModelTransitionPlayer.remove(this.id)
            }
        }
    }
}