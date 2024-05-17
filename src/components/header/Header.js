import "./header.css";

function Header(props) {
  return (
    <header className="App-header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <p>{props.paragraph}</p>
      <a
        className="App-link"
        href={props.link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.link.text}
      </a>
    </header>
  );
}
export default Header;
