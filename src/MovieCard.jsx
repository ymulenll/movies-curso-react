import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={imageUrl}
        alt={movie.title}
      />
      <div>{movie.title}</div>
    </li>
  );
}
