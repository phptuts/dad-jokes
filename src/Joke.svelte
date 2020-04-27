<script>
  import { onDestroy, createEventDispatcher } from "svelte";
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

  export let joke;
</script>

<Row>
  <Col>
    <Card body>{joke}</Card>
  </Col>
</Row>
