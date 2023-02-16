// хуки и роутинг

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Войти
    </button>
  );
} 
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Выйти
    </button>
  );
}

function UserGreeting(props) {
  return <h1>С возварщением!</h1>
}
function GuestGreeting(props.onClick) {
  return <h1>Войдите, пожалуйста.</h1>
}

function Greeting(props) {
  const inLoggedIn = props.isLoggedIn;
  if
}

class LoginControl extends React.Component {
  constructor(props) {
  super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {inLoggedin: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({inLoggedIn: false});
  }
}

  render() {
    const isLoggedIn = this.state.inLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onclick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onclick={this.handleLoginClick} />;
    }
  }
function App() {
  return (
    <div className="App">
      <Greeting inLoggedIn={inLoggedIn} />
      {button}
    </div>
  );
}

export default App;
