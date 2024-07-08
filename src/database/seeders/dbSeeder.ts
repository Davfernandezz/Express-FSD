import { authorSeeder } from "./authorSeeder";

(async () => {
   console.log("Starting seeders...");
   await authorSeeder();
})();


// const startSeeder = async() => {
//   console.log("Starting seeders...");
//   await authorSeeder();
// }

// startSeeder()