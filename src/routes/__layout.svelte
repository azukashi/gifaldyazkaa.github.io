<script lang="ts">
    import NProgress from 'nprogress';
    import Header from '$lib/Header.svelte';
    import { navigating } from '$app/stores';
    import '../assets/scss/global.scss';
    import 'material-icons/iconfont/outlined.css';

    NProgress.configure({
        minimum: 0.16,
    });

    $: {
        if ($navigating) {
            NProgress.start();
        }
        if (!$navigating) {
            NProgress.done();
        }
    }
</script>

<Header />
<main>
    <slot />
</main>
