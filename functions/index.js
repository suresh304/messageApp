const functions = require("firebase-functions");
// const { initializeApp } = require('firebase-admin/app');
const admin = require("firebase-admin");



// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.getUsersList = functions.https.onRequest(async (req, res) => {
    try {
      const listUsersResult = await admin.auth().listUsers();
      const users = listUsersResult.users;
  
      const usersList = users.map((user) => {
        const { uid, email, displayName } = user;
        return { uid, email, displayName };
      });
  
      res.status(200).json(usersList);
    } catch (error) {
      console.error('Error retrieving users list:', error);
      res.status(500).send('Internal server error');
    }
  });
  