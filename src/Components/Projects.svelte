<script lang="ts">
  import Emoji from 'svelte-emoji';
  export let propsProject: any;
</script>

<div id="projects">
  <h1>
    <a href="#projects" class="hashtag">#</a>
    <Emoji symbol="📚" label="books" /> Projects
  </h1>
  <p>Here are some lists of My Projects!</p>
  {#each propsProject as { emoji, emoji_label, name, url, tooltip_text }, i}
    <div data-tooltip={tooltip_text}>
      <a href={url} class="links"
        >{i + 1}. <Emoji symbol={emoji} label={emoji_label} /> {name}</a
      >
    </div>
  {/each}
</div>

<style>
  #projects {
    padding-top: 1rem;
  }
  .links {
    color: #000000;
  }
  .links:visited {
    color: #000000;
  }
  :global(.dark .links) {
    color: #ffffff;
  }
  :global(.dark .links:visited) {
    color: #ffffff;
  }
  :global(.dark .hashtag) {
    color: #ffffff;
  }
  :global(.dark .hashtag:visited) {
    color: #ffffff;
  }
</style>
