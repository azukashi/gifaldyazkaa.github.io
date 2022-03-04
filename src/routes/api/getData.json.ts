export async function get() {
	// Where main data will be handled and Loaded via GET Request to this api

	const data = {
		// [Self] Your data - Will be displayed at /, /about, /contact
		self: {
			name: 'Gifaldy Azka',
			email: 'falcxxdev@pm.me',
			born_and_live_at: 'Bandung, West Java, Indonesia',
			avatarUrl: 'https://avatars.githubusercontent.com/u/68645946'
		},
		// [Socials] Social Links - Will be displayed at /contact
		socials: [
			{
				name: 'GitHub',
				url: 'https://github.com/gifaldyazkaa',
				imgUrl:
					'https://img.shields.io/badge/-GitHub-%23181717?style=for-the-badge&logo=github&logoColor=white'
			},
			{
				name: 'Discord',
				url: 'https://discord.com/users/788260234409672754',
				imgUrl:
					'https://img.shields.io/badge/-Discord-%235865F2?style=for-the-badge&logo=discord&logoColor=white'
			},
			{
				name: 'Facebook',
				url: 'https://facebook.com/falcxx',
				imgUrl:
					'https://img.shields.io/badge/-Facebook-%231877F2?style=for-the-badge&logo=facebook&logoColor=white'
			},
			{
				name: 'Instagram',
				url: 'https://instagram.com/falcxxdev',
				imgUrl:
					'https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white'
			},
			{
				name: 'Twitter',
				url: 'https://twitter.com/falcxxdev',
				imgUrl:
					'https://img.shields.io/badge/-Twitter-%231DA1F2?style=for-the-badge&logo=twitter&logoColor=white'
			},
			{
				name: 'XDA Developers',
				url: 'https://forum.xda-developers.com/m/falcxxdev.11950709/',
				imgUrl:
					'https://img.shields.io/badge/-XDA%20Developers-%23EA7100?style=for-the-badge&logo=xda-developers&logoColor=white'
			}
		],
		games: [
			{
				name: 'Azur Lane',
				imgUrl:
					'https://img.shields.io/badge/Azur%20Lane-72493403%20(EN%20Avrora)-%233399ff?logo=codeship&style=for-the-badge'
			}
		],
		// [Waifus] Waifu List - Will be displayed at /about
		waifus: [
			{
				name: {
					jp: '浦和ハナコ',
					en: 'Urawa Hanako'
				},
				from: 'Blue Archive',
				link: 'https://bluearchive.wiki/wiki/Hanako',
				fromLink: 'https://bluearchive.jp'
			},
			{
				name: {
					jp: 'パーミャチ・メルクーリヤ',
					en: "Pamiat' Merkuria"
				},
				from: 'Azur Lane',
				link: 'https://azurlane.koumakan.jp/wiki/Pamiat_Merkuria',
				fromLink: 'https://azurlane.yo-star.com'
			}
		],
		// [Skills] Skills - Will be displayed at /about
		langSkills: [
			{ name: 'C++' },
			{ name: 'Shell Script' },
			{ name: 'JavaScript' },
			{ name: 'TypeScript' },
			{ name: 'YAML' }
		],
		frontEndSkills: [
			{ name: 'HTML' },
			{ name: 'CSS' },
			{ name: 'SASS' },
			{ name: 'SvelteKit' },
			{ name: 'Bootstrap' }
		],
		backEndSkills: [{ name: 'Node.js' }, { name: 'MySQL' }, { name: 'MongoDB' }],
		toolsSkills: [{ name: 'Git' }, { name: 'Vim & Neovim' }, { name: 'Visual Studio Code' }],
		// [Projects] Project List - Will be displayed at /projects
		projects: [
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
		],
		// [Credits] Art credits - Will be displayed at /contacts
		credits: [
			{
				type: 'Website Favicon',
				artist: '@13_ikari',
				username: '13_ikari',
				tweets: 'https://twitter.com/13_ikari/status/1475820302420840453'
			},
			{
				type: 'My Profile Picture',
				artist: '@divergenceok',
				username: 'divergenceok',
				tweets: 'https://twitter.com/divergenceok/status/1465697613152354309'
			}
		]
	};

	return {
		status: 200,
		body: {
			data
		}
	};
}
