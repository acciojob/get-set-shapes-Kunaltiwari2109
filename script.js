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
 getArea (){
	 return this._width * this._height;
 }
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}
	getPerimeter() {
		return 4 * this._width;
	}
}

const rect = new Rectangle(5, 10);
console.log(rect.width); 
console.log(rect.height); 
console.log(rect.getArea()); 

const squa = new Square(7);
console.log(squa.width); 
console.log(squa.height); 
console.log(squa.getArea()); 
console.log(squa.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
