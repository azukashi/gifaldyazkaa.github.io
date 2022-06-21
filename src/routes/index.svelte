<script lang="ts" context="module">
    export async function load({ fetch }) {
        const selfRes = await fetch(`/api/self.json`);
        const { self } = await selfRes.json();
        if (selfRes.ok) {
            return {
                props: {
                    self,
                },
            };
        }
        return {
            status: selfRes.status,
            error: new Error('Could not fetch the data'),
        };
    }
</script>

<script lang="ts">
    import { blur } from 'svelte/transition';
    export let self: any;
    const handleClick = () => {
        window.location.href = '/about';
    };
</script>

<svelte:head>
    <title>Home | {self.name}</title>
    <meta name="theme-color" id="color-theme" content="#FFFFFF" />
</svelte:head>

<main>
    <section class="container section greeting" id="home" transition:blur={{ duration: 700 }}>
        <h1>
            👋 Hi,
            <br />
            I'm {self.name},
            <br />
            Website developer
        </h1>
        <button class="button" on:click={handleClick}>About me →</button>
    </section>
</main>

<style lang="scss">
    @import '../styles/variable';
    // Main section
    .greeting {
        margin-top: 5rem;
        font-size: 1.5em;
        cursor: default;
        overflow-x: hidden;
        font-family: $poppins;
        padding-bottom: 230px;
    }
    .button {
        height: 2rem;
        width: 7.4rem;
        margin-top: 1rem;
        background-color: rgba(255, 255, 255, 0.05);
        cursor: pointer;
        border: solid 1px $text-color;
        border-radius: 15px;
        color: $text-color;
        font-family: 'Lexend', sans-serif;
        text-align: center;
        font-size: 1rem;
        transition: 0.2s ease-in-out;
        &:hover {
            background-color: $text-color;
            color: $container-color;
        }
    }
</style>
