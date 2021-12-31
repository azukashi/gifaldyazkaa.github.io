<script>
  import { onMount } from 'svelte';

  let time = new Date();

  $: hours = time.getHours();
  $: minutes = time.getMinutes();
  $: seconds = time.getSeconds();

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<h3 id="time">{hours}:{minutes}:{seconds}</h3>

<style>
  #time {
    font-family: 'Lexend', sans-serif;
  }
</style>
