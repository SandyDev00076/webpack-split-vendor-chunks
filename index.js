const { nanoid } = require("nanoid");

console.log("script loaded")

// one new id will be generated every second
let i = 1;
setInterval(() => {
    console.log(`${i} id = ${nanoid(3)}`)
    i = i + 1;
}, 1000);
