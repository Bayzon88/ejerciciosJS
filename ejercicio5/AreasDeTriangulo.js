let sides = [5, 6, 7];
let s = (sides[1] + sides[0] + sides[2]) / 2;
let area = Math.sqrt(s * (s - sides[0]) * (s - sides[1]) * (s - sides[2]));
console.log(area);
