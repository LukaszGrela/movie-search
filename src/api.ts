const GATEWAY = `http://img.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
console.log(GATEWAY);

export const searchMovies = (title: string): string => {
  return `${GATEWAY}&s=${encodeURIComponent(title)}&r=json`;
};
