import React,{useState} from 'react'
import { useUserInput } from '../components/UserInput';
import { usePasswordInput } from "../components/PasswordInput"
import { EmailInput } from '../components/EmailInput';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const [errorMessage,setErrorMessage] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(false);
  const navigate = useNavigate(); 
  const userName = useUserInput({
    placeholder: 'Enter username',
    minLength: 7,
  });
  const password = usePasswordInput({
    placeholder: 'EnterPassword',
    minLength: 7,
  });
  const formSubmit = async () => {
    const usercondi = userName.checkInput();
    const passwordcondi = password.checkPassword();
  
    if (passwordcondi && usercondi) {
      console.log("You can submit.......");
      setLoading(true);
      const response = await fetch("http://localhost:3001/api/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName.userInput.toLowerCase(),
          password: password.userPassword,
        }),

      });
      setLoading(false);
  
      const responseFromServer = await response.json();
      console.log(responseFromServer)
      if (responseFromServer.success) {

        localStorage.setItem("authToken", JSON.stringify(responseFromServer.authToken));
        navigate("/")
        }
        else{
          setErrorMessage("Enter username and password correctly");
        }
      
    }
  };
  
  const email = EmailInput({
    placeholder: "Enter the email"
  })
  return (

    <section className="vh-100 d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

            <p className="fs-2 fw-bold">Log In</p>

            <div className="form-outline mb-4">
              <label className="form-label fs-4" htmlFor="form3Example3">UserName</label>
              <br />
              {userName.userInputComponent}
            </div>

            <div className="form-outline mb-3">
              <label className="form-label fs-4" htmlFor="form3Example4">Password</label>
              {password.userPasswordComponent}
            </div>

            <p className="error-text">{errorMessage}</p>

            <div className="text-center text-lg-start mt-4 pt-2">
              <button type='submit' onClick={formSubmit} className="btn btn-primary btn-lg"
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                  
                  {loading?"Submitting":"Login"}</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="{% url 'signup' %}"
                className="link-danger">Register</a></p>
            </div>


          </div>
        </div>
      </div>



    </section>

  );
};

export default LoginPage