<script lang="ts">
  const handleCtxMenu = () => {
    return false;
  };
</script>

<div class="container">
  <div class="content">
    <img
      src="/koyori-excited.png"
      id="koyori-img"
      alt="Koyori Excited"
      on:contextmenu={handleCtxMenu}
    />
    <h1 id="title">🧪 This website is under construction~!</h1>
    <h4>
      This website is closed and currently in development until further
      information. Please comeback again soon, ありがとう〜！
    </h4>
    <div id="footer">
      <h6>
        Art credits by : <a class="link" href="https://twitter.com/V33983897"
          >やさしいV</a
        >
      </h6>
      <h6>
        This website is created with <a class="link" href="https://svelte.dev"
          >Svelte</a
        >
        by
        <a class="link" href="https://github.com/gifaldyakaa">Gifaldy Azka</a>
      </h6>
    </div>
  </div>
</div>

<style>
  .container {
    height: auto;
    margin: 0 auto;
    min-height: 400px;
    position: relative;
    width: 500px;
    overflow-x: hidden;
  }
  .content {
    margin-top: 3rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Lexend', sans-serif !important;
  }
  #koyori-img {
    width: 363px;
    height: 263px;
    pointer-events: none;
  }
  .link {
    color: rgb(60, 60, 223);
  }
  .link:hover {
    color: rgb(6, 6, 151);
  }
  .link:visited {
    color: rgb(60, 60, 223);
  }
  #title {
    margin-top: 2rem;
  }
  #footer {
    margin-top: 2rem;
    color: rgb(128, 128, 128);
  }
</style>
