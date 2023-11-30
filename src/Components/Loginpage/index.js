import { Component } from "react";
    

class LoginPage extends Component {
    state = {isLoggedIn: false}

    render() {
        const {isLoggedIn} = this.state
    return(
    <div> 
        <div> 
            { isLoggedIn && <button> Logout </button> }
            { !isLoggedIn && <div> <button> Login </button> 
                     <div>
                         <p> Don't have an account!  </p>
                         <a href="Register Here"> Register Here </a>
                      </div>    
                  </div>}       
        </div>
    </div>
    )
    }
}

export default LoginPage;

