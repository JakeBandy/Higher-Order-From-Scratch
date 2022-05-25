console.clear();

const extNum = [100, 40, 200, 9, 34];

const ext = extNum.map((extNum) => {
  return `${extNum},000`;
});

console.log(ext);

const foodAmount = [17.65, 34.88, 130.99, 67.09];

const initialValue = 0;
const totalFood = foodAmount.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);

console.log(totalFood);

const names = ["john", "mark", "jimmy", "john", "jake", "porter"];

const johnny = names.filter((names) => {
  return names === "john";
});

console.log(johnny);
