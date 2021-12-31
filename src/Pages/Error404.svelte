<svelte:head>
  <title>404 | Gifaldy Azka</title>
</svelte:head>
<section class="container section">
  <div>
    <h1 id="sad">:(</h1>
    <h2 id="errcode">404 - Not Found</h2>
    <p id="details">
      Uhh, sadly we can't find your request at this web page. Please check back
      the URL.
      <br />
      Or maybe you want back to <a href="/">Home page</a>?
    </p>
  </div>
</section>

<style>
  /* Base */
  h1,
  h2,
  p {
    text-align: center;
    font-family: 'Lexend', sans-serif;
    cursor: default;
  }
  a {
    color: rgb(18, 18, 211);
  }
  a:hover {
    color: rgb(13, 13, 118);
  }
  a:visited {
    color: rgb(18, 18, 211);
  }
  /* Main section */
  #sad {
    margin-top: 7rem;
    font-size: 50px;
  }
  #details {
    text-align: center;
  }
</style>
