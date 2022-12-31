import Counter from "./components/Counter";
import Student from "./components/Student";
import Welcome from "./components/Welcome";
import "./assets/style/app.scss";
import Product from "./components/Product";

export default () => {
  return (
    <div className="App">
      <header>
        <h1>The React Redux App</h1>
      </header>
      <section>
        <Counter />
        <Welcome />
      </section>
      <Student />
      <Product />
    </div>
  );
};
