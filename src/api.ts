const GATEWAY = `api/movie-search.php?`;

export const searchMovies = (title: string): string => {
  return `${GATEWAY}&s=${encodeURIComponent(title)}&r=json`;
};
