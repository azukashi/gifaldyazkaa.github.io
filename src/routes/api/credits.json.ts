export async function get() {
	const credits = [
		{
			type: 'Both My Profile Picture and Website Favicon',
			artist: '@96mimo414',
			username: '96mimo414',
			tweets: 'https://twitter.com/96mimo414/status/1519985840356700160'
		}
	];

	return {
		status: 200,
		body: {
			credits
		}
	};
}
