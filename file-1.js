const sayHello = () => {
  console.log('hello');
};

const sayGoogbye = () => {
  console.log('goodbye');
};

const randFunc = () => {
  return Math.random();
};
const sayRand = () => {
  console.log(randFunc);
  console.log(sayHello);
};
