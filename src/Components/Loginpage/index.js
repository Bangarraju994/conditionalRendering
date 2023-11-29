import { Component } from "react";
    

class LoginPage extends Component {
    state = {isLoggedIn: true}

    render() {
        const {isLoggedIn} = this.state
    return(
    <div> 
      
        <div> 
            { isLoggedIn ? <button> Logout </button> : <button> Login </button> }       
        </div>
    </div>
    )
    }
}

export default LoginPage;

