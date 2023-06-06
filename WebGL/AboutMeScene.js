import StaticVariables from "../GeneralScripts/StaticVariables"
import TransitionFunctions from "../GeneralScripts/TransitionFunctions"
import ModelTransitionPlayer from "./ModelTransitionPlayer"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import model from '../static/models/About_Me_Models_3.glb?url'
import texture from '../static/models/baked200.jpg?url'
import * as THREE from 'three'

export default class AboutMeScene {
    constructor()
    {
        this.init()
    }

    init = () => {
        this.id = 7
        this.localElapsedTime = 0
        this.initScene()
        this.initCamera()
        this.initModel()
        this.initRenderer()
        this.initControls()
    }

    render = () => {
        if(this.renderer)
        {
            this.renderer.render(this.scene, this.camera)
            this.controls.update()
        }
    }

    animate = (deltaTime) => {
        if(this.mixer)
        {
            this.mixer.update(deltaTime)
        }
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
        this.canvas = document.querySelector('.about-me-canvas')
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color('#D7395F')
    }

    initModel = () => {
        this.textureLoader = new THREE.TextureLoader()

        this.bakedTexture = this.textureLoader.load(texture)
        this.bakedTexture.flipY = false
        this.bakedTexture.encoding = THREE.sRGBEncoding

        this.bakedMaterial = new THREE.MeshBasicMaterial({map: this.bakedTexture})

        this.mixer = null

        StaticVariables.gltfLoader.load(
            model,
            (gltf) =>
            {
                this.mixer = new THREE.AnimationMixer(gltf.scene)
                this.speaker1 = this.mixer.clipAction(gltf.animations[2])
                this.speaker2 = this.mixer.clipAction(gltf.animations[4])

                this.speaker1.play()
                this.speaker2.play()

                gltf.scene.traverse((child) => child.material = this.bakedMaterial)
                gltf.scene.position.set(0, -0.5, 0)
                gltf.scene.rotation.set(0, Math.PI, 0)
                this.model = gltf.scene

                if(StaticVariables.isMobile)
                    this.model.scale.set(1, 1, 1)
                else
                    this.model.scale.set(0, 0, 0)

                this.scene.add(this.model)
            }
        )
    }

    initCamera = () => {
        this.container = document.querySelector('.about-me-canvas-container')
        this.sizes = {
            width: this.container.getBoundingClientRect().width,
            height: this.container.getBoundingClientRect().height
        }

        this.camera = new THREE.PerspectiveCamera(13, this.sizes.width / this.sizes.height, 1, 1000)
        this.camera.position.set(-25, 10, 15)
        //aboutMeCamera.rotation.set(-0.45 * Math.PI, 0, 0)
        this.scene.add(this.camera)
    }

    initRenderer = () => {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })

        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.outputEncoding = THREE.sRGBEncoding
    }

    initControls = () => {
        this.controls = new OrbitControls(this.camera, this.canvas)
        this.controls.target.set(0, 0, 0)

        this.controls.rotateSpeed = 0.15
        this.controls.enableDamping = true
        this.controls.enablePan = false

        if(StaticVariables.isMobile)
            this.controls.enableRotate = false
        //controls.enabled = true

        this.controls.minAzimuthAngle = -Math.PI / 1.8
        this.controls.maxAzimuthAngle = -Math.PI / 4

        this.controls.maxPolarAngle = Math.PI / 2.2

        this.controls.enableZoom = false  
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