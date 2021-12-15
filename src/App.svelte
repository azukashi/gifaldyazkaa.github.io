<script lang="ts">
  import koyori from './assets/koyori-excited.png';
</script>

<div id="root">
  <img src={koyori} alt="こより" />
  <h1>🧪 This website is under construction~!</h1>
  <p>
    This website is closed and currently in development until further
    <br />
    information. Please comeback again soon, ありがとう〜！
  </p>
  <div id="info">
    <h4>This website will be back soon and ready at :</h4>
    <h2>December 31, 2021 16:00:00 JST</h2>
  </div>
</div>
<div id="footer">
  <h6 id="art-credits">
    Art credits by : <a href="https://twitter.com/V33983897">やさしいV</a>
  </h6>
  <h6 id="dev">
    This website is created with <a href="https://vitejs.dev">Vite</a>{' + '}
    <a href="https://svelte.dev">Svelte</a>
  </h6>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
  #root,
  #footer {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    font-family: 'Lexend', sans-serif;
  }
  #root h1 {
    margin-top: 0.5rem;
    font-size: 1.8rem;
  }
  #root p {
    margin-top: 0.5rem;
    font-size: 1.1rem;
  }
  #info h4 {
    margin-top: 0.7rem;
    font-size: 1.3rem;
  }
  #info h2 {
    margin-top: 0.4rem;
    font-size: 1.5rem;
    color: rgb(124, 119, 119);
  }
  #footer h6 {
    margin-top: 0.13rem;
    color: rgb(123, 120, 120);
  }
  #footer a {
    text-decoration: none;
    color: rgb(66, 66, 218);
  }
  #footer a:visited {
    color: rgb(66, 66, 218);
  }
  #footer a:hover {
    color: rgb(45, 45, 153);
    text-decoration: underline;
    text-decoration-style: dotted;
  }
  img {
    margin-top: 2rem;
    width: 363px;
    height: 263px;
    pointer-events: none;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
