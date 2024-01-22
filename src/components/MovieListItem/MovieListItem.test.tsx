import { render, screen } from '@testing-library/react';
import MovieListItem from './MovieListItem';

import { describe, it, expect } from 'vitest';

describe('MovieListItem test', () => {
  it('movie list item renders', () => {
    render(
      <MovieListItem
        data={{
          Title: 'test',
          Type: 'episode',
          imdbID: '12345',
        }}
      />
    );

    const title = screen.getByText('test');
    expect(title).toBeInTheDocument();

    const type = screen.getByText('episode');
    expect(type).toBeInTheDocument();
  });

  it('Poster works if exists', () => {
    render(
      <MovieListItem
        data={{
          Title: 'test',
          Type: 'episode',
          imdbID: '12345',

          Poster: 'http://localhost/some.jpg',
        }}
      />
    );

    const poster = screen.getByTestId('MovieListItem-poster');

    expect(poster).toBeInTheDocument(); // exist
    expect(poster).toHaveAttribute('src', 'http://localhost/some.jpg'); // with correct value
  });

  it('Poster is not displayed for incorrect url', () => {
    render(
      <MovieListItem
        data={{
          Title: 'test',
          Type: 'episode',
          imdbID: '12345',

          Poster: '//localhost/some.jpg',
        }}
      />
    );

    const poster = screen.queryByTestId('MovieListItem-poster');

    expect(poster).not.toBeInTheDocument(); // doesnt exist
  });

  it('Year displayed if exists', () => {
    render(
      <MovieListItem
        data={{
          Title: 'test',
          Type: 'episode',
          imdbID: '12345',

          Year: '1979',
        }}
      />
    );

    const year = screen.getByTestId('MovieListItem-year');

    expect(year).toBeInTheDocument(); // exist
    expect(year).toHaveTextContent('1979');
  });

  it('Year NOT displayed', () => {
    render(
      <MovieListItem
        data={{
          Title: 'test',
          Type: 'episode',
          imdbID: '12345',
        }}
      />
    );

    const year = screen.queryByTestId('MovieListItem-year');

    expect(year).not.toBeInTheDocument(); // doesnt exist
  });
});
