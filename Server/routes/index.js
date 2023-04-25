const {login } = require("../controllers/login")
const {getCharById} = require("../controllers/getCharById")
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = require("express").Router();
                                                            //use va al index, aqui se usa get
router.get("/character/:id", (req, res) => {
    getCharById(req, res);
})

router.get("/login", (req, res) => {
    login(req, res);
});

router.post("/fav", postFav);                      //es mas directo

router.delete("/fav/:id", deleteFav);

module.exports = router;