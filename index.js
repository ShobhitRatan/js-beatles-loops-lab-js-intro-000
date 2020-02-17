// add solution here
function theBeetlesPlay() {
  var array = [];
  let musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
  let instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
  for (let i = 0; i < 4; i+= 1) {
    array.push (i == 0 ? `${musicians[i]} plays ${instruments[i]}` : `${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (i < facts.length) {
    array.push (`${facts[i]}!!!`);
    i++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
    return array;
}
