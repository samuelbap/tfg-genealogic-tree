<script>
  import "../app.css";
  import List from "../../lib/Common/List.svelte";
  import {data} from "../../stores/document.mock";
  import {
    documentId,
    documentType,
    protagonist,
    rootPerson,
  } from "../../server/serverMock";
</script>

<main class=" min-h-screen">
  <h1>Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
  <!-- {#each data as document}
  <List {document.} {documentType} {protagonist} {rootPerson} />
  {/each} -->
</main>
