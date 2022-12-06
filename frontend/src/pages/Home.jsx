import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost/5000"}/articles`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  console.warn(articles);

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
