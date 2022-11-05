import './App.css';

function App() {
  return(
    <div className='app'>
      <div className='form'>
        <h2>Sign in</h2>
        <div className='input_box'>
          <input type="text" required = "required" />
          <span>Username</span>
          <i></i>
        </div>

        <div className='input_box'>
          <input type="password" required="required" pattern='[A-Za-z0-9]{1,20}'/>
          <span>Password</span>
          <i></i>
        </div>

        <div className='links'>
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>

        <input type="submit" value = "Login"/>
      </div>
    </div>
  )
}

export default App;
