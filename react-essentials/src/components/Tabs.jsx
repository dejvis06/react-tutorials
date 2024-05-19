export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // Treat like a component to apply styling
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
