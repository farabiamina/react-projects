function MovieItem(props) {
  const link ='https://image.tmdb.org/t/p/w500'
  return (
    <div className="movie-item">
        <img
          src={link+props.data.poster_path}
          alt=""
        />
        <h1>{props.data.title}</h1>
    </div>
  );
}
export default MovieItem;
