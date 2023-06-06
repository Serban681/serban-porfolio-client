import * as THREE from 'three'
import StaticVariables from '../GeneralScripts/StaticVariables'
import TransitionFunctions from '../GeneralScripts/TransitionFunctions'
import ModelTransitionPlayer from './ModelTransitionPlayer'
import model from '../static/models/frontEndSymbol.glb?url'

export default class HeaderScene {
    constructor() {
        this.init()
    }

    init = () => {
        this.localElapsedTime = 0
        this.id = 0
        this.initScene()
        this.initLights()
        this.initModel()
        this.initRenderer()
    }

    render = () => {
        this.renderer.render(this.scene, this.camera)
    }

    animate = (elapsedTime) => {
        if(this.frontEndSymbol)
            this.frontEndSymbol.rotation.y = elapsedTime * 0.5
    } 

    resize = () => {
        this.sizes.width = this.container.getBoundingClientRect().width
        this.sizes.height = this.container.getBoundingClientRect().height

        this.camera.aspect = this.sizes.width / this.sizes.height
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    initScene = () => {
        this.headerCanvas = document.querySelector('.header-canvas')
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color('#EDC988')
    }

    initModel = () => {
        this.frontEndSymbol = null

        StaticVariables.gltfLoader.load(
            model,
            (gltf) =>
            {
                this.frontEndSymbol = gltf.scene.children[0]
                this.scene.add(this.frontEndSymbol)
                this.frontEndSymbol.position.set(0, 0, 3)
                this.frontEndSymbol.rotateY(-0.5 * Math.PI)

                if(StaticVariables.isMobile)
                    this.frontEndSymbol.scale.set(1, 1, 1)
                else
                    this.frontEndSymbol.scale.set(0, 0, 0)
            }
        )
    }

    initLights = () => {
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
        this.scene.add(this.ambientLight)

        this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
        this.directionalLight.position.set(1, 1, 1)
        this.scene.add(this.directionalLight)
    }

    initRenderer = () => {
        this.container = document.querySelector('#header-canvas-container')

        this.sizes = {
            width: this.container.getBoundingClientRect().width,
            height: this.container.getBoundingClientRect().height
        }

        this.aspectRatio = this.sizes.width / this.sizes.height

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.headerCanvas,
            antialias: true
        })

        this.camera = new THREE.PerspectiveCamera(15, this.aspectRatio, 1, 1000)
        this.camera.position.set(0, 3.6, 10)
        this.camera.rotation.set(-0.15 * Math.PI, 0, 0)
        this.scene.add(this.camera) 

        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.renderer.render(this.scene, this.camera)
    }

    sceneTransition = (deltaTime) => {
        if(!StaticVariables.isMobile)
        {
            this.localElapsedTime += deltaTime

            const curScaleValue = TransitionFunctions.lerp(0, 1, TransitionFunctions.easeInOut(this.localElapsedTime * 10 / 3))

            if(this.localElapsedTime < 0.3)
            {      
                if(this.frontEndSymbol)
                    this.frontEndSymbol.scale.set(curScaleValue, curScaleValue, curScaleValue)
            }            
            else
            {
                ModelTransitionPlayer.remove(this.id)
            }
        }
        
    }
}