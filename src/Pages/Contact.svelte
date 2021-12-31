<script lang="ts">
  import { blur } from 'svelte/transition';
  export let self, socials, credits;
</script>

<svelte:head>
  <title>Contact | {self.name}</title>
</svelte:head>
<section
  class="container section"
  id="contactme"
  transition:blur={{ duration: 500 }}
>
  <div id="title">
    <h2 class="section__title">Contact Me</h2>
    <hr />
  </div>
  <div id="secdesc">
    <p>
      You can reach me out via email at <a href="mailto:{self.email}"
        >{self.email}</a
      > or via socials below :
    </p>
  </div>
  <div id="image-container">
    {#each socials as { name, url, imgUrl }}
      <a href={url} target="_blank" class="lnk">
        <img class="image" src={imgUrl} alt="Social - {name}" />
      </a>
    {/each}
  </div>
  <div id="we-hate-form-input">
    <p>
      Where is the form input? Nah, I don't have time to read all incoming
      messages from Form inputs.
      <br />
      So, Reach me via email or socials instead of using form input.
    </p>
  </div>
  <div id="credits">
    <h2 id="credits-title">Credits</h2>
    <p id="desc">
      I used their fan-art in this website. So, here is some credits for those
      people who created the art. Thanks~!
    </p>
    <div id="list">
      {#each credits as { type, artist, username, tweets }}
        <ul>
          <li>
            {type} is drawn by
            <a href="https://twitter.com/{username}">{artist}</a>
            | <a href={tweets}>See tweets</a>
          </li>
        </ul>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Base */
  h2,
  p {
    cursor: default;
    font-family: 'Lexend', sans-serif;
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
  li {
    list-style: disc;
    margin-left: 18px;
    cursor: default;
  }
  /* Main section */
  .section__title {
    font-family: 'Lexend', sans-serif;
  }
  #secdesc p {
    margin-top: 15px;
  }
  #image-container {
    margin-top: 10px;
    margin-right: 5px;
  }
  #image-container img {
    border-radius: 1vh;
  }
  #we-hate-form-input p {
    margin-top: 10px;
    font-size: 12px;
  }
  /* Credits section */
  #credits-title {
    margin-top: 15px;
    color: var(--title-color);
  }
  #credits #desc {
    margin-top: 3px;
    font-size: 13px;
  }
  #credits #list {
    margin-top: 3px;
    font-size: 14px;
    padding-bottom: 90px;
  }
</style>
