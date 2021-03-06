// czy sie wyrenderuje poprawnie
// czy wyswietla poprawne dane z podanych danych
import React from "react";

import { render, screen } from "@testing-library/react";
import MovieListItem from "./MovieListItem";

test("movie list item renders", () => {
  render(
    <MovieListItem
      data={{
        Title: "test",
        Type: "episode",
        imdbID: "12345",
      }}
    />
  );

  const title = screen.getByText("test");
  expect(title).toBeInTheDocument();

  const type = screen.getByText("episode");
  expect(type).toBeInTheDocument();
});

test("Poster works if exists", () => {
  render(
    <MovieListItem
      data={{
        Title: "test",
        Type: "episode",
        imdbID: "12345",

        Poster: "http://localhost/some.jpg",
      }}
    />
  );

  const poster = screen.getByTestId("MovieListItem-poster");

  expect(poster).toBeInTheDocument(); // exist
  expect(poster).toHaveAttribute("src", "http://localhost/some.jpg"); // with correct value
});

test("Poster is not displayed for incorrect url", () => {
  render(
    <MovieListItem
      data={{
        Title: "test",
        Type: "episode",
        imdbID: "12345",

        Poster: "//localhost/some.jpg",
      }}
    />
  );

  const poster = screen.queryByTestId("MovieListItem-poster");

  expect(poster).not.toBeInTheDocument(); // doesnt exist
});

test("Year displayed if exists", () => {
  render(
    <MovieListItem
      data={{
        Title: "test",
        Type: "episode",
        imdbID: "12345",

        Year: "1979",
      }}
    />
  );

  const year = screen.getByTestId("MovieListItem-year");

  expect(year).toBeInTheDocument(); // exist
  expect(year).toHaveTextContent("1979");
});

test("Year NOT displayed", () => {
  render(
    <MovieListItem
      data={{
        Title: "test",
        Type: "episode",
        imdbID: "12345",
      }}
    />
  );

  const year = screen.queryByTestId("MovieListItem-year");

  expect(year).not.toBeInTheDocument(); // doesnt exist
});
