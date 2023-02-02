import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validateInput from "../../utils/validations";
import "./login-sign.css";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, userIsAuthorised } from "../../redux/authSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginAndSignUp = () => {
  const [activeScreen, setActiveScreen] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.userAuth);

  const formDataHandler = (key, value) => {
    setFormData((preState) => {
      return {
        ...preState,
        [key]: value,
      };
    });
  };

  const loginHandler = (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.password === "")
      return toast.warn("Please fill the empty fields");

    if (auth.email === formData.email && auth.password === formData.password) {
      dispatch(userIsAuthorised());
      navigate("/home");
    } else {
      toast.error("Authentication failed");
    }
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.password === "")
      return toast.warn("Please fill the empty fields");
    dispatch(signUpUser(formData));
    toast.success("Greate Success Full SignUp");
  };

  const renderInput = (item) => {
    const { key, isRequired, label, type } = item;
    return (
      <>
        <input
          id={key}
          type={type}
          required={isRequired}
          className="forms_field-input"
          placeholder={label}
          value={formData && formData[key]}
          onChange={(event) => formDataHandler(key, event.target.value)}
          onBlur={() => {
            const errorswarn = validateInput({ key, formData });
            setErrors({
              ...errors,
              [key]: errorswarn,
            });
          }}
        />
        <div className="errors">{errors[key]}</div>
      </>
    );
  };

  const renderEmailPasswordInput = () => {
    return (
      <>
        <div className="forms_field">
          {renderInput({
            key: "email",
            isRequired: true,
            label: "Email",
            type: "email",
          })}
        </div>
        <div className="forms_field">
          {renderInput({
            key: "password",
            isRequired: true,
            label: "Password",
            type: "password",
          })}
        </div>
      </>
    );
  };

  const activeScreenHandler = (key) => {
    setActiveScreen(key);
    setErrors({});
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <section className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">
                Don't have an account?
              </h2>
              <button
                className="user_unregistered-signup"
                onClick={() => activeScreenHandler("signUp")}
              >
                Sign up
              </button>
            </div>

            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <button
                className="user_registered-login"
                onClick={() => activeScreenHandler("login")}
              >
                Login
              </button>
            </div>
          </div>

          <div
            className={`${
              activeScreen === "login" ? "bounceRight" : "bounceLeft"
            } user_options-forms`}
          >
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form autoComplete="off" className="forms_form">
                <fieldset className="forms_fieldset">
                  {renderEmailPasswordInput()}
                </fieldset>
                <div className="forms_buttons">
                  <input
                    type="submit"
                    value="Log In"
                    className="forms_buttons-action"
                    onClick={(event) => loginHandler(event)}
                  />
                </div>
              </form>
            </div>
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form autoComplete="off" className="forms_form">
                <fieldset className="forms_fieldset">
                  {/* <div className="forms_field">
                    {renderInput({
                      key: "name",
                      isRequired: true,
                      label: "Name",
                      type: "text",
                    })}
                  </div> */}
                  {renderEmailPasswordInput()}
                </fieldset>
                <div className="forms_buttons">
                  <input
                    type="submit"
                    value="Sign up"
                    className="forms_buttons-action"
                    onClick={(event) => signUpHandler(event)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default LoginAndSignUp;
