const FUNCTIONS = {
    shift: 'shift',
    unshift: 'unshift',
    pop: 'pop',
    push: 'push',
    sort: 'sort'
}
Object.freeze(FUNCTIONS);

class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

class Card {
    constructor(value, rectangle, textX, textY) {
        this.value = value;
        this.rectangle = rectangle;
        this.textX = textX;
        this.textY = textY;
        this.selected = false;
    }

}