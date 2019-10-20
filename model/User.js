const { Auth, database } = require("./auth");

class User {
  static async create(data) {
    const { password, fullname, email } = data;
    try {
      let user = await Auth().createUserWithEmailAndPassword(email, password);
      let userId = user.user.uid;

      let userProfile = database.ref("users/" + userId).set({
        userId,
        fullname
      })
      return userProfile;

    } catch (error) {

      error = error.message;
      return { error };
    
    }
  }
}

module.exports = User;
