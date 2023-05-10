<script>
  import Header from "../lib/Common/Header.svelte";
  import Footer from "../lib/Common/Footer.svelte";
  import "../app.css";
</script>

<div class="flex flex-col min-h-screen margin-0">
  <Header />

  <main class="flex-1">
    <slot />
  </main>

  <Footer />
</div>
