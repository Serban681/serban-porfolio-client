import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class StaticVariables {
    static curSection = 0
    static sections = document.getElementsByClassName('section')
    static gltfLoader = new GLTFLoader()

    static isMobile = null
}