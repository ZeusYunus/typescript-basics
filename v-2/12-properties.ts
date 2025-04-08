// Class is like a human being
class Point {
    // below is like setting his arm, leg and height at birth
    constructor(private _x: number, private _y: number) {}

    // below is like taking his height to make him play backet ball
    draw() {
        console.log('X: ' + this._x + 'Y: ' + this._y)
    }

    // below is like asking him how tall is he
    get x() {
        return this._x;
    }

    // below is like going to surgery to become taller or shorter
    set x(value) {
        // below is making sure he does kill himself
        if (value < 0) {
            throw new Error('value cannot be less than 0.');
        }
        // below is setting it
        this._x = value;
    }
}

// below is like can the human being as a blue print and making John as a person
let point = new Point(1, 2);

// below is asking his height
let x = point.x;

// below is telling the doctors what height he wants to be
point.x = 10;

// below is him playing sport
point.draw();