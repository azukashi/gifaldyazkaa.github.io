export async function get() {
	const credits = [
		{
			type: 'Both My Profile Picture and Website Favicon',
			artist: '@cofyuuun',
			username: 'cofyuuun',
			tweets: 'https://twitter.com/cofyuuun/status/1400363994506874880'
		}
	];

	return {
		status: 200,
		body: {
			credits
		}
	};
}
