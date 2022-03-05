export async function get() {
	const projects = [
		{
			name: '湊あくあ Fanpage',
			description: '湊あくあ Fanpage created with Svelte and Sveltestrap.',
			repo_name: 'aqua-fanpage',
			demo_url: 'https://aqua-fanpage.vercel.app',
			img_preview: 'https://i.upload.systems/psUYhn2p',
			emoji: '⚓'
		},
		{
			name: 'Exxyll Discord Bot',
			description: 'Multipurpose Discord Bot with Commands for Fun, Games, and many more!',
			repo_name: 'exxyll-origin',
			demo_url: '#',
			img_preview: '#',
			emoji: '🤖'
		},
		{
			name: 'Koyorin',
			description: 'Maid and Helper Discord Bot for My Private Discord Servers',
			repo_name: 'koyorin',
			demo_url: 'https://gifaldyazka.is-a.dev/koyorin',
			img_preview: 'https://i.upload.systems/64lMDjGm',
			emoji: '🧪'
		},
		{
			name: 'Dotfiles',
			description: 'My dotfiles configuration for i3-gaps',
			repo_name: 'dotfiles',
			demo_url: '#',
			img_preview: 'https://i.upload.systems/1pukVaLj',
			emoji: '🔧'
		}
	];

	return {
		status: 200,
		body: {
			projects
		}
	};
}
