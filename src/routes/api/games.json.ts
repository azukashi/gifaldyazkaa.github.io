export async function get() {
    const games = [
        {
            name: 'Azur Lane',
            imgUrl: 'https://img.shields.io/badge/Azur%20Lane-72493403%20(EN%20Avrora)-%233399ff?logo=codeship&style=for-the-badge',
        },
    ];

    return {
        status: 200,
        body: {
            games,
        },
    };
}
