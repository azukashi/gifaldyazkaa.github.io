export async function get() {
	const waifus = [
		{
			name: {
				jp: 'チェシャー',
				en: 'Cheshire'
			},
			from: 'Azur Lane',
			link: 'https://azurlane.koumakan.jp/wiki/Cheshire',
			fromLink: 'https://azurlane.yo-star.com'
		},
		{
			name: {
				jp: 'ベスティア・ゼータ',
				en: 'Vestia Zeta'
			},
			from: 'hololiveID Gen 3',
			link: 'https://virtualyoutuber.fandom.com/id/wiki/Vestia_Zeta',
			fromLink: 'https://www.hololive.tv/indonesia'
		}
	];

	return {
		status: 200,
		body: {
			waifus
		}
	};
}