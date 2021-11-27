<script lang="ts">
  import Greetings from './Components/Greetings.svelte';
  import WhoAmI from './Components/WhoAmI.svelte';
  import Projects from './Components/Projects.svelte';
  import Environments from './Components/Environments.svelte';
  import ReachMe from './Components/ReachMe.svelte';
  import ToggleMode from './Components/ToggleMode.svelte';
  import SvelteSeo from 'svelte-seo';
  export let name: string,
    role: string,
    country: string,
    interest: string,
    email: string,
    projects: any,
    environment: any,
    links: any;
</script>

<svelte:head>
  <title>Home | Gifaldy Azka</title>
  <meta
    name="description"
    content="Hello there! I'm Gifaldy Azka, Fullstack website Developer from Indonesia!"
  />
  <meta
    name="og:image"
    content="https://cdn.upload.systems/uploads/F7WMmXA2.png"
  />
  <meta
    name="twitter:image"
    content="https://cdn.upload.systems/uploads/F7WMmXA2.png"
  />
</svelte:head>

<SvelteSeo
  openGraph={{
    title: 'Home | Gifaldy Azka',
    description:
      "Hello there! I'm Gifaldy Azka, Fullstack website Developer from Indonesia!",
    url: 'https://gifaldyazka.is-a.dev',
    type: 'website',
    images: [
      {
        url: 'https://cdn.upload.systems/uploads/F7WMmXA2.png',
        width: 1365,
        height: 613,
        alt: 'Site Preview',
      },
    ],
  }}
  twitter={{
    site: '@gifaldyazkaa',
    title: 'Home | Gifaldy Azka',
    description:
      "Hello there! I'm Gifaldy Azka, Fullstack website Developer from Indonesia!",
    image: 'https://cdn.upload.systems/uploads/Q1CGS4P0.png',
    imageAlt: 'Site Preview',
  }}
/>

<ToggleMode />
<Greetings />
<WhoAmI
  propsName={name}
  propsRole={role}
  propsCountry={country}
  propsInterest={interest}
/>
<Projects propsProject={projects} />
<Environments propsData={environment} />
<ReachMe propsMail={email} propsUrl={links} />
