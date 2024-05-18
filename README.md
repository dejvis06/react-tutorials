# React Tutorials

## Table of Contents

- [React Essentials](#react-essentials)
  - [Components & Props](#components--props)
    - [Header Component](#header-component)

## React Essentials

Section about Components, Props State & more

### Components & Props

#### Header Component

The `Header.js` component is a reusable component designed to display a header section with an image, a paragraph, and a link. The component accepts the following props:

- `logo` (string): The source URL of the logo image.
- `paragraph` (string | JSX): The content of the paragraph to be displayed.
- `link` (object): An object containing the link properties:
  - `href` (string): The URL the link points to.
  - `text` (string): The text to be displayed for the link.

Below is an example of how to use the `Header` component in `App.js`:

```jsx
function App() {
  return (
    <div className="App">
      <Header
        logo={logo}
        paragraph={[
          "Edit ",
          <code key="code">src/App.js</code>,
          " and save to reload.",
        ]}
        link={{
          href: "https://reactjs.org",
          text: "Learn React",
        }}
      />
    </div>
  );
}
```

### Events
