<script lang="ts">
    import { navigating } from '$app/stores';
    import Header from '$lib/Header.svelte';
    import 'material-icons/iconfont/outlined.css';
    import NProgress from 'nprogress';
    import '../main.scss';

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
