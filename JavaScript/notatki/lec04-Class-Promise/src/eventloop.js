const z = () => {
  console.log("ZZZZZ");
};

const g = () => {
  console.log("Before z");
  z();
  console.log("After z")
};

const g2 = () => {
  console.log("Before setTimeout");
  setTimeout( () => console.log("Executing callback"), 2000);
  console.log("After setTimeout");
};

const freezer = (seconds) => {
  console.log("Freezer started");
  const waitTo = new Date().getTime() + seconds * 1000;
  while (waitTo > new Date().getTime()) {}
  console.log("Freezer finished");
}

const g3 = () => {
  console.log("Before freezer");
  freezer(10);
  console.log("After freezer");
}
setTimeout( () => console.log("Executing callback 3 sek"), 3000);
setTimeout( () => console.log("Executing callback 2 sek"), 2000);
g2();
g3();
setTimeout( () => console.log("Executing callback 1 sek"), 1000);