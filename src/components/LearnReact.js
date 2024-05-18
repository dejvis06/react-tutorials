import LearnReactSection from "./LearnReactSection";

function LearnReact(props) {
  /* const [section, setSection] = useState(""); */

  return (
    <nav className="App-nav">
      <label>
        <ul
          className="list-no-bullets" /* value={roomId} onChange={(e) => setRoomId(e.target.value)} */
        >
          <li value="describing-the-ui">
            <LearnReactSection
              link={{
                href: "https://react.dev/learn/describing-the-ui",
                text: "Describing the UI",
              }}
            />
          </li>
          <li value="adding-interactivity">
            <LearnReactSection
              link={{
                href: "https://react.dev/learn/adding-interactivity",
                text: "Adding Interactivity",
              }}
            />
          </li>
          <li value="managing-state">
            <LearnReactSection
              link={{
                href: "https://react.dev/learn/managing-state",
                text: "Managing State",
              }}
            />
          </li>
          <li value="escape-hatches">
            <LearnReactSection
              link={{
                href: "https://react.dev/learn/escape-hatches",
                text: "Escape Hatches",
              }}
            />
          </li>
        </ul>
      </label>
      {/*  <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />} */}
    </nav>
  );
}
export default LearnReact;
