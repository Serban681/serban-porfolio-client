export default class TransitionFunctions {
    /**
     * Retunrn interpolated value between two numbers
     * 
     * @param {number} startValue 
     * @param {number} endValue 
     * @param {number} percentage [0,1]
     * @return {number} interpolated value between the start and the end
     */
    static lerp = (startValue, endValue, pct) => {
        return startValue + (endValue - startValue) * pct
    }

    static easeIn = (t) => {
        return t * t
    }

    static flip = (x) => {
        return 1 - x
    }

    static square = (x) => {
        return x * x
    }

    static easeOut = (t) => {
        return this.flip(this.square(this.flip(t)))
    }

    static easeInOut = (t) => {
        return this.lerp(this.easeIn(t), this.easeOut(t), t)
    }
}