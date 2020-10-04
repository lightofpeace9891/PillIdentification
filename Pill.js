const pillShapes = ['Oblong', 'Round', 'Square', 'Oval', 'Rectangle', 'Diamond'];
const pillColors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Brown','Purple'];
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
  console.log()
  console.log('shape func ran')
  var pillsByShape = [];
  for (i=0; i<this.pillArr.length; i++) {
    if (shape == this.pillArr[i].shape) {
      pillsByShape.push(this.pillArr[i]);
    }
  }
  return pillsByShape;
}

function getPillsByColor(color) {
  console.log()
  console.log('color func ran')
  var pillsByColor = [];
  for (i=0; i<this.pillArr.length; i++) {
    if ((color == this.pillArr[i].color) && (this.indexesAdded.has(i) == false)) {
      pillsByColor.push(this.pillArr[i]);
    }
  }
  return pillsByColor;
}

results = [];
pillsShape = this.getPillsByShape('Oval'); 
this.results.push(pillsShape); 
pillsColor = this.getPillsByColor('Light Blue');
this.results.push(pillsColor);
console.log(results);
