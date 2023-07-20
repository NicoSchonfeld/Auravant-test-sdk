const App = () => {
  return (
    <>
      <h1
        style={{
          color: "red",
          textAlign: "center",
        }}
      >
        Hola auravant!
      </h1>

      {/* Mostrar un JSON para saber si el SDK funciona */}
      <p>{JSON.stringify(avt?.test?.hiAuravant(), null, 2)}</p>
    </>
  );
};

export default App;
