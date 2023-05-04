const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => { 
    const { name, status, image, origin, species, gender } = req.body;
    if (!name || !status || !image || !origin || !species || !gender) return res.status(401).send("Faltan datos");
    try {
        const [fav, bool] = await Favorite.findOrCreate({
          where: { name },
          defaults: {
            name,
            status,
            image,
            origin,
            species,
            gender,
          },
        });
        const results = await Favorite.findAll();
        return bool ? res.status(200).json(results) : res.status(400).send("Error xd");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    postFav
}