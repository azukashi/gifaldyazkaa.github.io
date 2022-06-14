interface DiscordCard {
    userId: String;
    altText: String;
}

export async function get() {
    const discordCard: DiscordCard = {
        userId: '788260234409672754',
        altText: 'Discord Card',
    };

    return {
        status: 200,
        body: {
            discordCard,
        },
    };
}
