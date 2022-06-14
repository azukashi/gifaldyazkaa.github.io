export async function get() {
    const credits = [
        {
            type: 'Both My Profile Picture and Website Favicon',
            artist: 'komeshiro_kasu (@kasu1923)',
            username: 'kasu1923',
            tweets: 'https://twitter.com/kasu1923/status/1395048797378551811',
        },
    ];

    return {
        status: 200,
        body: {
            credits,
        },
    };
}
