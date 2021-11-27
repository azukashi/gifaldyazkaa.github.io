import App from './App.svelte';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = new App({
  target: document.body,
  props: {
    name: 'Gifaldy Azka',
    role: 'Fullstack website Developer',
    country: 'Indonesia',
    interest: 'Watching anime',
    email: 'falcxxdev (at) pm.me',
    projects: [
      {
        emoji: '⚓',
        emoji_label: 'anchor',
        name: '湊あくあ Fanpage',
        url: 'https://github.com/gifaldyazkaa/aqua-fanpage',
        tooltip_text: '湊あくあ Fanpage created with Svelte and Sveltestrap',
      },
      {
        emoji: '🤖',
        emoji_label: 'robot',
        name: 'Exxyll Discord Bot (Archived)',
        url: 'https://github.com/gifaldyazkaa/exxyll-origin',
        tooltip_text:
          'Multipurpose Discord Bot with Commands for Fun, Games, Moderation, Utility, and other more!',
      },
      {
        emoji: '🌺',
        emoji_label: 'hibiscus',
        name: 'Wangy-wangy Generator',
        url: 'https://github.com/gifaldyazkaa/wangy-wangy',
        tooltip_text:
          'Generator Tools that created for fun and designed for weebs',
      },
      {
        emoji: '🔎',
        emoji_label: 'magnifier',
        name: 'Anime Searcher Discord Bot',
        url: 'https://github.com/gifaldyazkaa/anime-searcher',
        tooltip_text: 'Discord Bot to Search an Anime from Image Source',
      },
    ],
    environment: {
      os: [
        {
          name: 'ElementaryOS',
          version: '6 Odin',
          family: 'Linux',
          emoji: '🐧',
          emojiLabel: 'penguin',
          url: 'https://elementary.io',
        },
        {
          name: 'Windows 10',
          version: '2004',
          edition: 'Home',
          family: 'Windows',
          emoji: '🪟',
          emojiLabel: 'window',
          url: 'https://www.microsoft.com/p/windows-10-home/d76qx4bznwk4',
        },
      ],
      codeEditor: [
        {
          name: 'Visual Studio Code',
          url: 'https://code.visualstudio.com',
        },
        {
          name: 'Sublime Text',
          url: 'https://sublimetext.com',
        },
      ],
    },
    links: [
      {
        name: 'Discord',
        url: 'https://discord.com/users/788260234409672754',
        badgeUrl:
          'https://img.shields.io/badge/-Discord-%235865F2?style=for-the-badge&logo=discord&logoColor=white',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/gifaldyazkaa',
        badgeUrl:
          'https://img.shields.io/badge/-GitHub-%23181717?style=for-the-badge&logo=github&logoColor=white',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gifaldyazkaa',
        badgeUrl:
          'https://img.shields.io/badge/-Twitter-%231DA1F2?style=for-the-badge&logo=twitter&logoColor=white',
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/falcxxdev',
        badgeUrl:
          'https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white',
      },
      {
        name: 'AniList',
        url: 'https://anilist.co/user/gifaldyazkaa',
        badgeUrl:
          'https://img.shields.io/badge/-AniList-%2302A9FF?style=for-the-badge&logo=anilist&logoColor=white',
      },
    ],
  },
});

export default app;
