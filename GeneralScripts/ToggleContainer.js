export default class ToggleContainer {
    constructor(index, htmlElement, scrollMechanic, introAnims, showToggleMenu) {
        this.index = index
        this.htmlElement = htmlElement
        this.htmlElement.addEventListener('click', () => {
            scrollMechanic.scrollTo(this.index, introAnims, showToggleMenu)
        })
    }
}