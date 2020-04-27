export const searchJokes = async (term) => {
  const jokeResponse = await fetch(
    `https://icanhazdadjoke.com/search?term=${term}`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );

  const jokeJson = await jokeResponse.json();
  return jokeJson.results.map((j) => {
    return {
      joke: j.joke,
      id: j.id,
    };
  });
};

export const getRandomJoke = async () => {
  const jokeResponse = await fetch(`https://icanhazdadjoke.com`, {
    headers: {
      Accept: 'application/json',
    },
  });

  const jokeJson = await jokeResponse.json();

  return jokeJson.joke;
};
