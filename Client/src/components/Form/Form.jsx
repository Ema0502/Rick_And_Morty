import { useState } from "react";
import validation from "../Validation/validation";
import image1 from "./Rick_and_Morty.svg.png"
import image2 from "./rick_and_morty_png_by_lalingla_db72d4x-fullview.png";
import style from "./Form.module.css"


const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <img src={image1} alt="" className={style.img1} />
        <label htmlFor="email" style={{ color: "blue" }}>
          Email:{" "}
        </label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <hr />
        <label htmlFor="password" style={{ color: "blue" }}>
          Password:{" "}
        </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <button>Submit</button>

        <img src={image2} alt="" className={style.img2} />
      </form>
    );
}

export default Form;