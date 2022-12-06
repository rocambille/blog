import logo from "../assets/logo.svg";

export default function Home() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Blog !</h1>
      </header>
      <main>
        <article>
          <h1>Lorem ipsum 1</h1>
          <p>Lorem ipsum 1</p>
        </article>
        <article>
          <h1>Lorem ipsum 2</h1>
          <p>Lorem ipsum 2</p>
        </article>
      </main>
      <footer>footer</footer>
    </>
  );
}
