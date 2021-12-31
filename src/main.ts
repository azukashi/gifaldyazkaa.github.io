import App from './App.svelte';
import './assets/scss/global.scss';
import 'boxicons/css/boxicons.min.css';

const app = new App({
  target: document.getElementById('app'),
  props: {
    self: {
      name: 'Gifaldy Azka',
      email: 'falcxxdev@pm.me',
      born_and_live_at: 'Bandung, West Java, Indonesia',
      avatarUrl: 'https://avatars.githubusercontent.com/u/68645946',
    },
    socials: [
      // Social links to display in /contact. Use shields.io badge for generating imgUrl!
      {
        name: 'GitHub',
        url: 'https://github.com/gifaldyazkaa',
        imgUrl:
          'https://img.shields.io/badge/-GitHub-%23181717?style=for-the-badge&logo=github&logoColor=white',
      },
      {
        name: 'Discord',
        url: 'https://discord.com/users/788260234409672754',
        imgUrl:
          'https://img.shields.io/badge/-Discord-%235865F2?style=for-the-badge&logo=discord&logoColor=white',
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com/falcxx',
        imgUrl:
          'https://img.shields.io/badge/-Facebook-%231877F2?style=for-the-badge&logo=facebook&logoColor=white',
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/falcxxdev',
        imgUrl:
          'https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/falcxxdev',
        imgUrl:
          'https://img.shields.io/badge/-Twitter-%231DA1F2?style=for-the-badge&logo=twitter&logoColor=white',
      },
      {
        name: 'XDA Developers',
        url: 'https://forum.xda-developers.com/m/falcxxdev.11950709/',
        imgUrl:
          'https://img.shields.io/badge/-XDA%20Developers-%23EA7100?style=for-the-badge&logo=xda-developers&logoColor=white',
      },
    ],
    projects: [
      {
        name: '湊あくあ Fanpage',
        description: '湊あくあ Fanpage created with Svelte and Sveltestrap.',
        repo_name: 'aqua-fanpage',
        demo_url: 'https://aqua-fanpage.vercel.app',
        img_preview: 'https://i.upload.systems/psUYhn2p',
        emoji: '⚓',
      },
      {
        name: 'Exxyll Discord Bot',
        description:
          'Multipurpose Discord Bot with Commands for Fun, Games, and many more!',
        repo_name: 'exxyll-origin',
        demo_url: 'None',
        img_preview: 'None',
        emoji: '🤖',
      },
      {
        name: 'Koyorin',
        description:
          'Maid and Helper Discord Bot for My Private Discord Servers',
        repo_name: 'koyorin',
        demo_url: 'https://gifaldyazka.is-a.dev/koyorin',
        img_preview: 'https://i.upload.systems/64lMDjGm',
        emoji: '🧪',
      },
      {
        name: 'Wangy-wangy Generator',
        description:
          'Generator Tools that created for fun and designed for weebs',
        repo_name: 'wangy-wangy',
        demo_url: 'https://gifaldyazka.is-a.dev/wangy-wangy',
        img_preview: 'https://i.upload.systems/swJC6mZ8',
        emoji: '🌸',
      },
    ],
    credits: [
      {
        type: 'Website Favicon',
        artist: 'Kona',
        username: 'konathegaymer',
        tweets: 'https://twitter.com/konathegaymer/status/1467020091128782848',
      },
      {
        type: 'My Profile Picture',
        artist: 'kiki-yu',
        username: 'kikiyu698',
        tweets: 'https://twitter.com/kikiyu698/status/1467777868868747265',
      },
    ],
  },
});

export default app;
