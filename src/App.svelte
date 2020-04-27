<script>
  import { onMount, tick } from "svelte";
  import {
    Card,
    Button,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Col,
    Container,
    Row
  } from "sveltestrap";
  import JokeForm from "./Form.svelte";
  import Joke from "./Joke.svelte";
  import Transition from "./Transition.svelte";

  import { getRandomJoke, searchJokes } from "./request.js";

  let mode = "random";
  let randomJoke = "";
  let jokes = [];
  let noJokes = false;
  onMount(async () => {
    randomJoke = await getRandomJoke();
  });

  async function newRandomJoke() {
    try {
      mode = "random";
      randomJoke = "";
      let joke = await getRandomJoke();
      await sleep(1000);
      randomJoke = joke;
      jokes = [];
    } catch (e) {
      alert("There was an error with the server");
    }
  }

  async function onSearchJokes(e) {
    try {
      noJokes = false;
      jokes = [];
      mode = "search";
      const term = e.detail;
      const newJokes = await searchJokes(term);
      console.log(newJokes);
      await sleep(1000);
      randomJoke = "";
      jokes = newJokes;
      noJokes = jokes.length === 0;
    } catch (e) {
      alert("There was an error with the server");
    }
  }

  const sleep = delayMS => new Promise(resolve => setTimeout(resolve, delayMS));
</script>

<style>
  :global(.big-btn) {
    width: 100%;
  }
</style>

<Container>
  <Row>
    <Col>
      <h1>Dad Jokes!!! :)</h1>
    </Col>
  </Row>
  <JokeForm on:search={onSearchJokes} />
  <Row>
    <Col md="12" xs="12">
      <Button on:click={newRandomJoke} color="danger big-btn">
        Random Dad Joke
      </Button>
    </Col>
  </Row>
  {#if mode == 'random'}
    <Transition>
      <Row>
        <Col>
          <h2>Random Joke</h2>
        </Col>
      </Row>
      {#if randomJoke !== ''}
        <Transition>
          <Joke joke={randomJoke} />
        </Transition>
      {/if}
    </Transition>
  {/if}

  {#if mode === 'search'}
    {#if jokes.length > 0}
      {#each jokes as joke (joke.id)}
        <Transition>
          <Joke joke={joke.joke} />
        </Transition>
      {/each}
    {/if}
    {#if noJokes}
      <Transition>
        <Joke joke="No Joke, the joke on you!!! :) try agiain. :)" />
      </Transition>
    {/if}
  {/if}
</Container>
