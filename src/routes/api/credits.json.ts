export async function get() {
    const credits = [
        {
            type: 'Both My Profile Picture and Website Favicon',
            artist: 'ゆさゆさ (@yusa_39)',
            username: 'yusa_39',
            tweets: 'https://twitter.com/yusa_39/status/1490259792086335490',
        },
    ];

    return {
        status: 200,
        body: {
            credits,
        },
    };
}
