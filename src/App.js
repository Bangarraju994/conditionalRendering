import LoginPage from "./Components/Loginpage";

const App = () => (

  <div >
    <h1 > Hello, User </h1> 
    <div >
      <input className="container" type="text" />
    </div>
    <div>
      <input className="container" type="password" />
    </div>
    <div> 
      <LoginPage />
    </div>
    
  </div>
  )

export default App;