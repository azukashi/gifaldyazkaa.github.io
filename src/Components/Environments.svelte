<script lang="ts">
  import Emoji from 'svelte-emoji';
  export let propsData: any;
  const os1 = propsData.os[0];
  const os2 = propsData.os[1];
  const codeEditor1 = propsData.codeEditor[0];
  const codeEditor2 = propsData.codeEditor[1];
</script>

<div id="environments">
  <h1>
    <a href="#environments" class="hashtag">#</a>
    <Emoji symbol="🖥️" label="computer" /> Environments
  </h1>
  <p>
    Now, I've used <a href={os1.url} class="links"
      ><Emoji symbol={os1.emoji} label={os1.emojiLabel} />
      {os1.family}
      {os1.name}</a
    >
    for Daily-use. But i have installed
    <a href={os2.url} class="links"
      ><Emoji symbol={os2.emoji} label={os2.emojiLabel} /> {os2.name}</a
    >
    too at My Machine. For Code Editor, I Mostly use
    <a href={codeEditor1.url} class="links">{codeEditor1.name}</a>, Sometimes i
    used
    <a href={codeEditor2.url} class="links">{codeEditor2.name}</a> when editing Big
    and Laggy stuffs.
  </p>
</div>

<style>
  #environments {
    padding-top: 1rem;
  }
  .links {
    color: #000000;
  }
  .links:visited {
    color: #000000;
  }
</style>
