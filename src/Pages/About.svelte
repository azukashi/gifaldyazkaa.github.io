<script lang="ts">
  import { blur } from 'svelte/transition';
  export let self;
  let name = self.name;
  let avatarUrl = self.avatarUrl;
  if (!avatarUrl)
    avatarUrl = `https://cdn.statically.io/avatar/shape=circle/${name}`;
</script>

<svelte:head>
  <title>About | {self.name}</title>
</svelte:head>
<section
  class="container section section__height"
  id="about"
  in:blur={{ duration: 500 }}
  out:blur={{ duration: 500 }}
>
  <h2 class="section__title">About Me</h2>
  <hr />
  <div id="image-container">
    <img id="profile" src={avatarUrl} alt={name} />
  </div>
  <div id="paragraph">
    <p>
      Hello, my name is <strong>{name}</strong>. Usually called
      <strong>Gifaldy / Azka / Falcxxdev (at the internet)</strong>. Born and
      live in
      <a href="https://www.bandung.go.id/">{self.born_and_live_at}</a>.
    </p>
    <br />
    <p>
      I started learning about Data and Algorithm since 2020 with C++ language.
      And now i spend more time to explore Web development using JavaScript,
      Node.js, and Svelte.
    </p>
    <br />
    <p>
      Umm, I don't know, But i have some weird obsession with Virtual YouTubers.
      I can't control myself when watching their livestream. Hehehe...
    </p>
  </div>
</section>

<style>
  /* Base */
  h2,
  p {
    font-family: 'Lexend', sans-serif;
    cursor: default;
  }
  a {
    color: rgb(18, 18, 211);
  }
  a:hover {
    color: rgb(22, 22, 153);
  }
  a:visited {
    color: rgb(18, 18, 211);
  }
  /* Main section */
  #image-container {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  #profile {
    height: 8.5rem;
    width: 8.5rem;
    border-radius: 50%;
    border: solid 2px #fff;
    text-align: center;
    pointer-events: none;
  }
  #paragraph {
    padding-bottom: 90px;
  }
</style>
