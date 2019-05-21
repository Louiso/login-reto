import React from 'react';
import './App.css';
import styled from 'styled-components'

const LoginWrapper = styled.div`
  background-color: blue;
  .formulario{
    display: flex;
    flex-direction: column;
  }
  &:hover {
    background-color: red;
  }
`

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    const { value , name } = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render(){
    const {changeMode} = this.props;
    const { email , password } = this.state;
    const { handleChange , handleSubmit } = this;
    return (
      <LoginWrapper>
        <form className = "formulario" onSubmit = { handleSubmit }>
          <input 
            name = "email"
            type = "text" 
            value = { email } 
            onChange = { handleChange }
          />
          <input 
            name = "password"
            type = "text" 
            value = { password } 
            onChange = { handleChange }
          />
          <input type = "submit" value = "Iniciar Sesion"/>
        </form>
        <div onClick = { () => changeMode(false) }>Registrar</div>
      </LoginWrapper>
    )
  }
}

class Register extends React.Component {
  render(){
    const {changeMode} = this.props;
    return (
      <div>
        <form>
          <input/>
          <input/>
          <input type = "submit" value = "Registrar"/>
        </form>
        <div onClick = { () => changeMode(true) }>Ya tengo cuenta</div>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    loginMode: true
  }
  changeMode = (mode) => {
    this.setState({
      loginMode: mode
    })
  }
  render() {
    const { loginMode } = this.state;
    const { changeMode } = this;
    return (
      <div className="App">
        { loginMode ? (
            <Login changeMode = { changeMode }/>
          ): (
            <Register changeMode = { changeMode }/>
          )}
      </div>
    )
  }
}

export default App;
