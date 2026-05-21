//complete this code
class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}

	get width (){
		return this._width;
	}

	get height(){
		return this._height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}
	perimeter() {
		return 4 * this._width;
	}
}

const rect = new Rectangle(5, 10);
console.log(rectangle.width); 
console.log(rectangle.height); 
console.log(rectangle.getArea()); 

const sqau = new Square(7);
console.log(square.width); 
console.log(square.height); 
console.log(square.getArea()); 
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
