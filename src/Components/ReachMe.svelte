<script lang="ts">
  import Emoji from 'svelte-emoji';
  export let propsMail: string, propsUrl: any;
</script>

<div id="reach-me">
  <h1>
    <a href="#reach-me" class="hashtag">#</a>
    <Emoji symbol="📬" label="mailbox" /> Reach me
  </h1>
  <p>
    Get in touch with me, and Let's talk together! You can reach me at below
  </p>
  {#each propsUrl as { name, url, badgeUrl }}
    <a href={url} class="links badges"><img src={badgeUrl} alt={name} /></a>
  {/each}
  <p id="e-mail"><Emoji symbol="📩" label="envelope" /> E-mail : {propsMail}</p>
</div>

<style>
  #reach-me {
    padding-top: 1rem;
    padding-bottom: 5rem;
  }
  .links {
    color: #000000;
  }
  .links:visited {
    color: #000000;
  }
  .badges img {
    padding-right: 5px;
    padding-bottom: 5px;
  }
  #e-mail {
    padding-top: 5px;
  }
  :global(.dark .links) {
    color: #ffffff;
  }
  :global(.dark .links:visited) {
    color: #ffffff;
  }
</style>
