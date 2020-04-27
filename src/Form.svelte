<script>
  import { createEventDispatcher } from "svelte";
  import {
    Col,
    Container,
    Row,
    Card,
    Button,
    Form,
    FormGroup,
    FormText,
    Input,
    Label
  } from "sveltestrap";
  const dispatch = createEventDispatcher();
  let search = "";
  $: disableSearch = search === "";

  function onSearch() {
    dispatch("search", search);
    search = "";
  }
</script>

<style>
  :global(.col-12) {
    position: relative;
  }
  :global(button:disabled) {
    cursor: not-allowed;
  }
  :global(.search) {
    bottom: 0;
    right: 0;
    left: 0;
    margin-top: 30px;
    width: 100%;
  }
  @media (max-width: 700px) {
    :global(.search) {
      position: inherit;
    }
  }
</style>

<Row>
  <Col md="8" xs="12">
    <Label for="dadJokesSearch">Search</Label>
    <Input
      type="text"
      bind:value={search}
      id="dadJokesSearch"
      placeholder="Search For Your Favorite Dad Jokes" />

  </Col>
  <Col md="4" xs="12">
    <Button
      disabled={disableSearch}
      on:click={onSearch}
      color="primary"
      class="search">
      Search
    </Button>
  </Col>
</Row>
