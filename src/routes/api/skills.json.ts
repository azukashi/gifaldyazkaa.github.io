export async function get() {
    const skills = {
        langSkills: [
            { name: 'C++' },
            { name: 'Shell Script' },
            { name: 'JavaScript' },
            { name: 'TypeScript' },
            { name: 'YAML' },
        ],
        frontEndSkills: [
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'SASS' },
            { name: 'SvelteKit' },
            { name: 'Vue.js' },
            { name: 'Bootstrap' },
        ],
        backEndSkills: [{ name: 'Node.js' }, { name: 'MySQL' }, { name: 'MongoDB' }],
        toolsSkills: [{ name: 'Git' }, { name: 'Vim & Neovim' }, { name: 'Visual Studio Code' }],
    };

    return {
        status: 200,
        body: {
            skills,
        },
    };
}
