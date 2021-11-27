<script lang="ts">
  import Emoji from 'svelte-emoji';
  export let propsName: string,
    propsRole: string,
    propsCountry: string,
    propsInterest: string;
</script>

<div id="introduction">
  <h1>
    <a href="#introduction" class="hashtag">#</a>
    <Emoji symbol="❔" label="question" /> Who am I
  </h1>
  <p>
    I'm {propsName}, {propsRole} from {propsCountry}. Besides being a developer,
    I have some interest to {propsInterest}. Nice to meet you!
  </p>
</div>

<style>
  #introduction h1 {
    font-weight: 500;
  }
  #introduction {
    padding-top: 1rem;
  }
</style>
