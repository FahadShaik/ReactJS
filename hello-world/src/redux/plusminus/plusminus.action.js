let incr = "incr";
let decr = "decr";

let incrAction = () => {
  return { type: incr };
};

let decrAction = () => {
  return { type: decr };
};

export { incrAction, decrAction, incr, decr };
