export async function get() {
	const credits = [
		{
			type: 'Both My Profile Picture and Website Favicon',
			artist: '@rimuu',
			username: 'rimuuarts',
			tweets: 'https://deviantart.com/rimuu/art/Cheshire-854695892'
		}
	];

	return {
		status: 200,
		body: {
			credits
		}
	};
}
