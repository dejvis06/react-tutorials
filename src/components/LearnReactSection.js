function LearnReactSection(props) {
  return (
    <>
      <a
        className="App-link"
        href={props.link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.link.text}
      </a>
    </>
  );
}
export default LearnReactSection;
