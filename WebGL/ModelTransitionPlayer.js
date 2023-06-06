export default class ModelTransitionPlayer {
    static animations = []
    static length = 0

    static add = (anim, id) => {
        this.animations[this.length] = {id: id, canPlay: false, play: (deltaTime) => anim(deltaTime)}
        this.length++
        return this.length - 1
    }

    static remove = (id) => {
       for(let i=0; i<this.animations.length; i++)
       {
            if(this.animations[i].id === id)
            {
                this.length--
                this.animations.splice(i, 1)
            }
       }
    }

    static startPlaying = (id) => {
        for(const el of this.animations)
        {
            if(el.id === id)
            {
                el.canPlay = true
            }    
        }
    }

    static playAnim = (index, deltaTime) => {
        if(this.animations[index].canPlay)
        {
            this.animations[index].play(deltaTime)
        }
    }
}