export async function get() {
    const projects = [
        {
            name: '湊あくあ Fanpage',
            description: '湊あくあ Fanpage created with Svelte and Sveltestrap.',
            repo_name: 'aqua-fanpage',
            demo_url: 'https://aqua.falcxxdev.ml',
            img_preview: 'https://i.upload.systems/psUYhn2p',
            emoji: '⚓',
        },
        {
            name: 'Exxyll Discord Bot',
            description: 'Multipurpose Discord Bot with Commands for Fun, Games, and many more!',
            repo_name: 'exxyll',
            demo_url: '#',
            img_preview: '#',
            emoji: '🤖',
        },
        {
            name: 'Zeta',
            description: 'Helper Discord Bot for My Private Discord Server',
            repo_name: 'zeta',
            demo_url: 'https://zetaa.gq/',
            img_preview: 'https://i.upload.systems/64lMDjGm',
            emoji: '📜',
        },
        {
            name: 'Wangy wangy',
            description: 'Generator Tools that created for fun and designed for weebs',
            repo_name: 'wagny-wangy',
            demo_url: 'https://wangy.falcxxdev.ml',
            img_preview: 'https://i.upload.systems/1pukVaLj',
            emoji: '🌸',
        },
    ];

    return {
        status: 200,
        body: {
            projects,
        },
    };
}
