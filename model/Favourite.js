const { Auth, database } = require("./auth");

class Favourite {
  static async create(data) {
    try {
      const { favouriteVids, userId } = data;
      let favVideos = await database.ref("favourites/" + userId).set({
        favouriteVids
      });
      return { success: true };
    } catch (error) {
      return error;
    }
  }

  static async getFav(data) {
    try {
      const { userId } = data;
      let snapshot = await database.ref("favourites/" + userId).once('value');
      return snapshot.val()
    } catch (error) {}
  }
}

module.exports = Favourite;
