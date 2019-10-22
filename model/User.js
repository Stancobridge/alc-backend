const { Auth, database } = require("./auth");

class User {
  static async create(data) {
    const { password, fullname, email } = data;
    try {
      let user = await Auth().createUserWithEmailAndPassword(email, password);
      let userId = user.user.uid;
      database.ref("users/" + userId).set({
        userId,
        fullname
      });
      return { success: true };
    } catch (error) {
      error = error.message;
      throw new Error(JSON.stringify({ error }));
    }
  }

  static async login(data) {
    const { password, email } = data;

    try {
      let userLogin = Auth().signInWithEmailAndPassword(email, password);
      return userLogin;
    } catch (error) {
      return error;
    }
  }
}

module.exports = User;
