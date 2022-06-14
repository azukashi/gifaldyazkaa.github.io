interface Self {
    name: String;
    email: String;
    born_and_live_at: String;
    avatarUrl: String;
}

export async function get() {
    const self: Self = {
        name: 'Gifaldy Azka',
        email: 'me@falcxxdev.ml',
        born_and_live_at: 'Bandung, West Java, Indonesia',
        avatarUrl: 'https://avatars.githubusercontent.com/u/68645946',
    };

    return {
        status: 200,
        body: {
            self,
        },
    };
}
