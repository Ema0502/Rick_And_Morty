const { login } = require("../controllers/login")
const {getCharById} = require("../controllers/getCharById")
const { postUser } = require("../controllers/postUser");
const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav");


const router = require("express").Router();
                                                            //use va al index, aqui se usa get
router.get("/character/:id", (req, res) => {
    getCharById(req, res);
})

router.get("/login", (req, res) => {
    login(req, res);
});
router.post("/login", postUser);

router.post("/fav", postFav);                      //es mas directo

router.delete("/fav/:id", deleteFav);

module.exports = router;