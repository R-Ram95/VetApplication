
import React from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";


const Login = ({forgotPassword}) => {

    let navigate = useNavigate();
    function handleClick() {
        // TO-DO: Navigate to search page. Leave in when testing.
        // navigate('/home');

        // TO-DO: API call to check login credentials. Add back in when pushing final product.
        const apiEndpoint = 'http://localhost:8080/login';

        var u = document.getElementById('username').value;
        var p = document.getElementById('password').value;

        const user = {
            username:u,
            password:p
        }

        axios.post(apiEndpoint, user)
            .then((res) => {
                const token = res.data;

                if(token === ""){
                    alert("Failed to log in, try again.")
                    return; 
                }
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace('-', '+').replace('_', '/');
                const userInfo = JSON.parse(window.atob(base64));

                const userId = userInfo.userId
                const role = userInfo.role
                const password = userInfo.passWord

                sessionStorage.setItem('id', userId);
                sessionStorage.setItem('role', role);
                sessionStorage.setItem('password', password);

                if (userInfo != null && userInfo != "") {
                    navigate("/home")
                }
            })
    };

    return (
        // <div>
        <div className="column is-one-fifth is-centered ml-5">
            <div class="card">
               
                <div class="card-content login">
                <h2 className = "title is-3 has-text-primary-dark ml-5">Sign In</h2>

            <div className="field ml-5">
                <p class = "control has-iconsleft">
                <label className = "has-text-primary-dark">Username: </label>
                <input type="email" id="username" className="form-control " placeholder="Enter username" />
                {/* <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span> */}
                </p>
            </div>

            <div className="form-group ml-5">
                <label className = "has-text-primary-dark">Password: </label>
                <input type="password" id="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group is-centered ml-5">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label has-text-primary-dark" htmlFor="customCheck1"> Remember me</label>
                </div>
            </div>
            <button onClick = {handleClick} className = "button mx-6 is-primary is-light is-centered">Submit</button>
            
            <p className="forgot-password text-right ml-5">
                <a onClick={forgotPassword}> Forgot password?</a>
            </p>
            </div>
        </div>
        </div>

    );
}
 
export default Login;