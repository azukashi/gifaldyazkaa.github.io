export async function get() {
    const socials = [
        {
            name: 'GitHub',
            url: 'https://github.com/gifaldyazkaa',
            imgUrl: 'https://img.shields.io/badge/-GitHub-%23181717?style=for-the-badge&logo=github&logoColor=white',
        },
        {
            name: 'Discord',
            url: 'https://discord.com/users/788260234409672754',
            imgUrl: 'https://img.shields.io/badge/-Discord-%235865F2?style=for-the-badge&logo=discord&logoColor=white',
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/falcxxdev',
            imgUrl: 'https://img.shields.io/badge/-Facebook-%231877F2?style=for-the-badge&logo=facebook&logoColor=white',
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/falcxxdev',
            imgUrl: 'https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/falcxxdev',
            imgUrl: 'https://img.shields.io/badge/-Twitter-%231DA1F2?style=for-the-badge&logo=twitter&logoColor=white',
        },
        {
            name: 'XDA Developers',
            url: 'https://forum.xda-developers.com/m/falcxxdev.11950709/',
            imgUrl: 'https://img.shields.io/badge/-XDA%20Developers-%23EA7100?style=for-the-badge&logo=xda-developers&logoColor=white',
        },
    ];

    return {
        status: 200,
        body: {
            socials,
        },
    };
}
