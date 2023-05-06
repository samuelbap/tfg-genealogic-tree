<script>
  import Header from "./components/Common/Header.svelte";
  import Footer from "./components/Common/Footer.svelte";
  import "../app.css";
</script>

<div class="vtmn-flex vtmn-flex-col vtmn-min-h-screen vtmn-margin-0">
  <Header />

  <main class="vtmn-flex-1">
    <slot />
  </main>

  <Footer />
</div>
