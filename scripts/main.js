import gr491 from "./gr491-loader.js"

let table = await gr491();

console.log("Loaded " + table.length + " rows.");
