<script lang="ts" context="module">
    export async function load({ fetch }) {
        const selfRes = await fetch(`/api/self.json`);
        const socialRes = await fetch(`/api/socials.json`);
        const gameRes = await fetch(`/api/games.json`);
        const creditRes = await fetch(`/api/credits.json`);
        const cardRes = await fetch(`/api/discordCard.json`);
        const { self } = await selfRes.json();
        const { socials } = await socialRes.json();
        const { games } = await gameRes.json();
        const { credits } = await creditRes.json();
        const { discordCard } = await cardRes.json();
        if (selfRes.ok && socialRes.ok && gameRes.ok && creditRes.ok && cardRes.ok) {
            return {
                props: {
                    self,
                    socials,
                    games,
                    credits,
                    discordCard,
                },
            };
        }
        return {
            status: socialRes.status,
            error: new Error('Could not fetch the data'),
        };
    }
</script>

<script lang="ts">
    import { blur } from 'svelte/transition';
    export let self: any, socials: any, games: any, credits: any, discordCard: any;
</script>

<svelte:head>
    <title>Contact | {self.name}</title>
</svelte:head>
<section class="container section" id="contactme" transition:blur={{ duration: 500 }}>
    <div id="title">
        <h2 class="section__title">Contact Me</h2>
        <hr />
    </div>
    <div class="description">
        <p>
            You can reach me out via email at <a href="mailto:{self.email}">{self.email}</a> or via socials below :
        </p>
    </div>
    <div class="image-container">
        {#each socials as { name, url, imgUrl }}
            <a href={url} target="_blank" class="lnk">
                <img class="image" src={imgUrl} alt="Social - {name}" />
            </a>
        {/each}
    </div>
    <div id="we-hate-form-input">
        <p>
            Where is the form input? No. I'm not using form input <s>cuz it's cringe</s>.
            <br />
            Reach me via email or socials instead of using form input.
        </p>
    </div>
    <div id="discord">
        <h2 id="discord-title">Me at Discord</h2>
        <a href="https://discord.com/users/{discordCard.userId}">
            <img
                id="discord-card"
                src="https://lanyard-profile-readme.vercel.app/api/{discordCard.userId}?theme=light"
                alt={discordCard.altText}
            />
        </a>
    </div>
    <div id="game">
        <h2 id="game-title">Play with me</h2>
        <div class="image-container">
            {#each games as { name, imgUrl }}
                <img id="game-badge" class="image" src={imgUrl} alt={name} />
            {/each}
        </div>
    </div>
    <div id="credits">
        <h2 id="credits-title">Credits</h2>
        <p id="desc">
            I used their fan-art in this website. So, here is some credits for those people who created the art.
            Thanks~!
        </p>
        <div id="list">
            {#each credits as { type, artist, username, tweets }}
                <ul>
                    <li>
                        {type} is drawn by
                        <a href="https://twitter.com/{username}">{artist}</a>
                        | <a href={tweets}>See tweet</a>
                    </li>
                </ul>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    @import '../styles/variable';
    @import '../styles/anchor';
    // Base
    h2,
    p {
        cursor: default;
        font-family: $lexend;
    }
    li {
        font-family: $lexend;
        list-style: disc;
        margin-left: 18px;
        cursor: default;
    }
    img {
        pointer-events: none;
    }
    // Main section
    .section__title {
        font-family: 'Lexend', sans-serif;
    }
    .description p {
        margin-top: 15px;
    }
    .image-container {
        margin-top: 10px;
        margin-right: 5px;
    }
    .image-container img {
        border-radius: 1vh;
    }
    #we-hate-form-input p {
        margin-top: 10px;
        font-size: 12px;
    }
    // Credits section
    #discord-title,
    #game-title,
    #credits-title {
        margin-top: 15px;
        color: var(--title-color);
    }
    #credits #desc {
        margin-top: 3px;
        margin-bottom: 5px;
        font-size: 13px;
    }
    #credits #list {
        margin-top: 3px;
        font-size: 14px;
        padding-bottom: 90px;
    }
    #discord-card {
        margin-top: 9px;
    }
    #game-badge {
        margin-right: 3px;
    }
</style>
