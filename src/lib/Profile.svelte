<script lang="ts">
    export let url: string, name: string;
    if (!url) url = `https://cdn.statically.io/avatar/shape=circle/${name}`;
</script>

<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 250 250"
    id="profile"
>
    <defs>
        <mask id="msk1">
            <rect width="100%" height="100%" fill="black" />
            <circle cx="125" cy="125" r="100" fill="white" stroke-width="20" stroke="black" />
        </mask>
    </defs>

    <image xlink:href={url} x="0" y="0" width="100%" height="100%" mask="url(#msk1)" />

    <g id="gr1">
        <circle
            id="blue"
            cx="125"
            cy="125"
            r="100"
            fill="transparent"
            stroke="#4285F4"
            stroke-width="8"
            stroke-dasharray="183.2 445.1"
            stroke-dashoffset="78.54"
        />

        <circle
            id="red"
            cx="125"
            cy="125"
            r="100"
            fill="none"
            stroke="#EA4335"
            stroke-width="8"
            stroke-dasharray="203.3 425.1"
            stroke-dashoffset="281.9"
        />

        <circle
            id="gold"
            cx="125"
            cy="125"
            r="100"
            fill="none"
            stroke="#FABB04"
            stroke-width="8"
            stroke-dasharray="80 549.7"
            stroke-dashoffset="345	"
        />

        <circle
            id="green"
            cx="125"
            cy="125"
            r="100"
            fill="none"
            stroke="#34A852"
            stroke-width="8"
            stroke-dasharray="183.2 445.1"
            stroke-dashoffset="525.2	"
        />
    </g>
</svg>

<style>
    #profile {
        height: 11rem;
        width: 11rem;
        /* border-radius: 50%; */
        text-align: center;
        /* pointer-events: none; */
    }
    #gr1 {
        transform-origin: 125px 125px;
        -webkit-transition: -webkit-transform 0.75s ease-in-out;
        transition: transform 0.75s ease-in-out;
    }

    #gr1:hover {
        -webkit-transform: rotate(720deg);
        transform: rotate(720deg);
    }
</style>
