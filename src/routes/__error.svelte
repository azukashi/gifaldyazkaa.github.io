<script lang="ts" context="module">
    /** @type {import('@sveltejs/kit').ErrorLoad} */
    export function load({ error, status }) {
        return {
            props: { error, status },
        };
    }
</script>

<script lang="ts">
    export let status: number;
    export let error;
</script>

<svelte:head>
    <title>Error | Gifaldy Azka</title>
</svelte:head>

<section class="container section">
    <div>
        <h1 id="sad">:(</h1>
        <h2 id="errcode">{status} - Oops!</h2>
        <p id="details">
            Uh... sadly, we can't process your request. Please check back the URL.
            <br />
            Or maybe you want back to <a href="/">Home page</a>?
        </p>
        <p id="message">Error Message : <strong>{error.message}</strong></p>
    </div>
</section>

<style lang="scss">
    @import '../styles/variable';
    // Base
    h1,
    h2,
    p {
        text-align: center;
        font-family: $lexend;
        cursor: default;
    }
    // Main section
    #sad {
        margin-top: 7rem;
        font-size: 50px;
    }
    #details {
        text-align: center;
    }
    #message {
        margin-top: 15px;
        color: rgb(131, 131, 131);
    }
</style>
