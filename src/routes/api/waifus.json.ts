export async function get() {
	const waifus = [
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
	];

	return {
		status: 200,
		body: {
			waifus
		}
	};
}
