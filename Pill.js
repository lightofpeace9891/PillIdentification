
let Pill = function(name, shape, color) {
  this.name = name;
  this.shape = shape;
  this.color = color;
}

var pillArr = [];
this.pillArr.push(new Pill("Tylenol", "Oblong", "White"));
this.pillArr.push(new Pill("Advil", "Round", "Brown"));
this.pillArr.push(new Pill("Aleve", "Oval", "Light Blue"));
this.pillArr.push(new Pill("Adderall", "Oval", "Blue"));
this.pillArr.push(new Pill("Advil PM", "Oval", "Blue"));

function getPillsByShape(shape) {
  
  var pillsByShape = [];
  for (i=0; i<this.pillArr.length; i++) {
    if (shape == this.pillArr[i].shape) {

      pillsByShape.push(this.pillArr[i]);
    }
  }
  return pillsByShape;
}

function getPillsByColor(color) {
  
  var pillsByColor = [];
  for (i=0; i<this.pillArr.length; i++) {
    if (color == this.pillArr[i].color) {
      console.log('index: ' + i + ' color: ' + color);
      pillsByColor.push(this.pillArr[i]);
    }
  }
  return pillsByColor;
}
