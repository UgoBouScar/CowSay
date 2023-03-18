const userInfo = require("./information");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Yo, je suis ${userInfo.name} et je suis dans le campus ${userInfo.campus} `,
    e: "oO",
    T: "U ",
  })
);
