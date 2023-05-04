import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  onClose,
  name,
  species,
  gender,
  image,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image, onClose });
    }
  };

  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.card}>
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>

      <button className={style.closeButton} onClick={() => onClose(id)}>
        X
      </button>
      <img src={image} alt="" className={style.imageIcon} />
      <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
      </Link>
      <h3>{species}</h3>
      <h3>{gender}</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispach) => {
  return {
    addFav: (character) => {
      dispach(addFav(character));
    },
    removeFav: (id) => {
      dispach(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
