import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}
