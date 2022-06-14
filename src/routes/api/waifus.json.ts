export async function get() {
    const waifus = [
        {
            name: {
                jp: 'シリアス',
                en: 'Sirius',
            },
            from: 'Azur Lane',
            link: 'https://azurlane.koumakan.jp/wiki/Sirius',
            fromLink: 'https://azurlane.yo-star.com',
        },
    ];

    return {
        status: 200,
        body: {
            waifus,
        },
    };
}
