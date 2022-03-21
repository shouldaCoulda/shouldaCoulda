// // 'use strict'

// // const {db } = require('../server/db')
// // const { firebase } = require("../client/firebase");
// const { createUserWithEmailAndPassword } = require("firebase/auth");
// const { userData, subscriptionData } = require("./seedData.js");

// const seeding = function () {
//   let index = 0;
//   const interval = setInterval(async () => {
//     const user = userDate[index];
//     const { email, password, isAdmin } = user;
//     console.log("Current user in setInterval: ", user.email);
//     await firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(async (response) => {
//         console.log("Created user in Authentication");
//         const uid = response.user.uid;
//         const data = {
//           id: uid,
//           email,
//           firstName,
//           isAdmin,
//         };
//         const usersRef = firebase.firestore().collection("users").doc(uid);
//         await usersRef.set(data);
//         console.log("Adding user to the users collection: ", data.email);
//       })
//       .catch((error) => console.log(error));
//     await firebase
//       .auth()
//       .signOut()
//       .then(() => console.log("Sign out successful!"))
//       .catch((error) => console.log(error));
//     index += 1;
//     if (index === newSeedData.length) clearInterval(interval);
//   }, 2000);
// };

// seeding();

// // ORIGINAL CODE BELOW-----------------------------------------------------------
// // /**
// //  * seed - this function clears the database, updates tables to
// //  *      match the models, and populates the database.
// //  */
// // async function seed() {
// //   await db.sync({ force: true }) // clears db and matches models to tables
// //   console.log('db synced!')
// //   console.log(`seeded successfully`)

// // }

// // /*
// //  We've separated the `seed` function from the `runSeed` function.
// //  This way we can isolate the error handling and exit trapping.
// //  The `seed` function is concerned only with modifying the database.
// // */
// // async function runSeed() {
// //   console.log('seeding...')
// //   try {
// //     await seed()
// //   } catch (err) {
// //     console.error(err)
// //     process.exitCode = 1
// //   } finally {
// //     console.log('closing db connection')
// //     await db.close()
// //     console.log('db connection closed')
// //   }
// // }

// // /*
// //   Execute the `seed` function, IF we ran this module directly (`node seed`).
// //   `Async` functions always return a promise, so we can use `catch` to handle
// //   any errors that might occur inside of `seed`.
// // */
// // if (module === require.main) {
// //   runSeed()
// // }

// // // we export the seed function for testing purposes (see `./seed.spec.js`)
// // module.exports = seed
