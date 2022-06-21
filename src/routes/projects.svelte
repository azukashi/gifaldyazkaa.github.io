<script lang="ts" context="module">
    export async function load({ fetch }) {
        const projectRes = await fetch(`/api/projects.json`);
        const selfRes = await fetch(`/api/self.json`);
        const { projects } = await projectRes.json();
        const { self } = await selfRes.json();
        if (projectRes.ok && selfRes.ok) {
            return {
                props: {
                    self,
                    projects,
                },
            };
        }
        return {
            status: projectRes.status,
            error: new Error('Could not fetch the data'),
        };
    }
</script>

<script lang="ts">
    import { blur } from 'svelte/transition';
    export let self: any, projects: any;
</script>

<svelte:head>
    <title>Projects | {self.name}</title>
</svelte:head>
<section class="container section section__height" id="projects" transition:blur={{ duration: 500 }}>
    <h2 class="section__title">Projects</h2>
    <hr />
    <p class="description">Some projects that i've been working on</p>
    {#each projects as { name, description, repo_name, demo_url, img_preview, emoji }, i}
        <div class="list">
            <h1>{i + 1}. {emoji} {name}</h1>
            <p>{description}</p>
            <p>
                <a href={demo_url} target="_blank">Demo</a> |
                <a href="https://github.com/gifaldyazkaa/{repo_name}" target="_blank">View on GitHub</a>
                |
                <a href={img_preview} target="_blank">Preview</a>
            </p>
        </div>
    {/each}
    <p class="info">
        These projects are listed depending on GitHub Pins at <a href="https://github.com/gifaldyazkaa" target="_blank"
            >My GitHub Profile</a
        >.
    </p>
</section>

<style lang="scss">
    @import '../styles/anchor';
    // Base
    h1,
    h2,
    p {
        cursor: default;
    }
    // Main section
    .section__title,
    .description {
        font-family: 'Lexend', sans-serif;
    }
    .description {
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .list {
        margin-bottom: 15px;
    }
    .info {
        padding-bottom: 90px;
        font-size: 10px;
        font-family: 'Lexend', sans-serif;
    }
</style>
