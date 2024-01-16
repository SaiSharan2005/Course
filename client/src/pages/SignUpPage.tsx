import React, { useState } from 'react'
import { useUserInput } from '../components/UserInput';
import { EmailInput } from "../components/EmailInput"
import { usePasswordInput } from "../components/PasswordInput"
// import { OutputProps, useFetchData } from '../utils/FetchingData';




import { useNavigate } from 'react-router-dom';
function SignUpPage() {
  const [checkBothPassword, setCheckBothPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const userName = useUserInput({
    placeholder: 'Enter text',
    minLength: 7,
  });
  const email = EmailInput({
    placeholder: "Enter Email"
  })
  const password1 = usePasswordInput({
    placeholder: "Enter the password",
    minLength: 8
  })

  const password2 = usePasswordInput({
    placeholder: "Enter the password",
    minLength: 8
  })

  const formSubmit = async () => {
    const userValid = userName.checkInput();
    const emailValid = email.checkEmail();
    const passwordValid = password1.checkPassword()
    setCheckBothPassword(true);
    if (checkBothPassword && password1.userPassword !== password2.userPassword) {
      password2.setIsShaking(true);

    }
    if (password1.userPassword === password2.userPassword && userValid && emailValid && passwordValid) {
      console.log("submitting....")
      setLoading(true);
      const response = await fetch("/api/SignUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "userName": userName.userInput.toLowerCase(),
          "passwordHash": password1.userPassword,
          "email": email.userEmail.toLowerCase(),
        }),
        // body:JSON.stringify({"name":"sai sharan"})
      });
      const responseFromServer = await response.json();
      console.log("response ", responseFromServer);
      if (responseFromServer.success) {
        alert(responseFromServer.message);

        const response = await fetch("/api/Login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: userName.userInput.toLowerCase(),
            password: password1.userPassword,
          }),

        });
        const responseFromServerLogin = await response.json();
        console.log(responseFromServerLogin)
        setLoading(false)

        if (responseFromServerLogin.success) {

          localStorage.setItem("authToken", JSON.stringify(responseFromServerLogin.authToken));
          navigate("/")
        }
        else {
          setErrorMessage("Enter username and password correctly");
        }

      }
      else {
        setLoading(false)

        alert(responseFromServer.message);
      }
    }
  }

  return (
    <div className='SignUpPage'>

      <div className="vh-99 d-flex align-items-center">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
                alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">



              <p className="fs-3 fw-bold">Sign up</p>
              <div className="form-outline mb-3">

                <label className="form-label" htmlFor="form3Example3">Username</label>
                <br />
                <div className="form-control-me">{userName.userInputComponent}</div>
              </div>
              <div className="form-outline mb-3">

                <label className="form-label" htmlFor="form3Example3">Email</label>
                <br />
                <div className="form-control-me">{email.userEmailComponent}</div>
              </div>
              <div className="form-outline mb-1">

                <label className="form-label" htmlFor="form3Example4">Password1</label>
                <br />
                <div className="form-control-me">{password1.userPasswordComponent}</div>


                <label className="form-label" htmlFor="form3Example4">Password2</label>
                <br />
                <div className={`form-control-me ${checkBothPassword && password1.userPassword !== password2.userPassword ? "invalid-input" : ""}`}>{password2.userPasswordComponent}</div>
                {/* <div className="password-error">password didnt match</div> */}
                <div className="error-text">{checkBothPassword && password1.userPassword !== password2.userPassword ? "Enter same password " : ""}</div>
              </div>
              <p className="error-text">{errorMessage}</p>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button onClick={formSubmit} className="btn btn-primary btn-lg" >
                  {checkBothPassword && loading ? "Submiting..." : "Sign up"}
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  have an account?
                  <a href="{% url 'login' %}" className="link-danger">Login</a>
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default SignUpPage;