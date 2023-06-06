import * as THREE from 'three'
import StaticVariables from '../GeneralScripts/StaticVariables'
import TransitionFunctions from '../GeneralScripts/TransitionFunctions'
import ModelTransitionPlayer from './ModelTransitionPlayer'

import nodeJsModel from '../static/models/nodeJS.glb?url'
import mongoDBModel from '../static/models/mongoDb.glb?url'
import tsModel from '../static/models/TS.glb?url'
import reactModel from '../static/models/React.glb?url'
import tailwindModel from '../static/models/Tailwind.glb?url'
import expressModel from '../static/models/Express.glb?url'

export default class TechSkill
{
    constructor(index, skillCanvases)
    {
        this.index = index
        this.modelPaths = [
            reactModel,
            tailwindModel,
            nodeJsModel,
            expressModel,
            mongoDBModel,
            tsModel
        ]

        this.id = index + 1

        this.init(skillCanvases)
    }

    init = (skillCanvases) => {
        this.localElapsedTime = 0
        this.skillContainer = document.querySelector('.skill-container')

        this.skillCanvasSize = {
            width: this.skillContainer.getBoundingClientRect().width,
            height: this.skillContainer.getBoundingClientRect().height
        }

        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color('#EDC988')

        this.renderer = new THREE.WebGLRenderer({
            canvas: skillCanvases[this.index],
            antialias: true
        })
        this.renderer.setSize(this.skillCanvasSize.width, this.skillCanvasSize.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping

        this.camera = new THREE.PerspectiveCamera(10, 1, 0.1, 1000)
        this.camera.position.set(0, 0, 4)

        this.scene.add(this.camera)

        StaticVariables.gltfLoader.load(
            this.modelPaths[this.index],
            (gltf) => {
                this.model = gltf.scene.children[0]
                this.model.position.set(0, 0, 0)
                this.model.rotation.set(0, -Math.PI / 2, 0)

                if(StaticVariables.isMobile)
                    this.model.scale.set(1, 1, 1)
                else
                    this.model.scale.set(0, 0, 0)

                this.scene.add(this.model)
            }
        )

        this.light = new THREE.AmbientLight(0xffffff, 0.6)
        this.scene.add(this.light)

        this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
        this.directionalLight.position.set(0, 3, 4)
        this.scene.add(this.directionalLight)

        this.renderer.render(this.scene, this.camera)
    }

    render = () => {
        this.renderer.render(this.scene, this.camera)
    }

    animate = (elapsedTime) => {
        if(this.model)
            this.model.rotation.y = elapsedTime * 0.5 + Math.PI
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