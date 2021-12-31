<script lang="ts">
  import router from 'page';
  import Header from './Components/Header.svelte';
  import Home from './Pages/Home.svelte';
  import About from './Pages/About.svelte';
  import Projects from './Pages/Projects.svelte';
  import Contact from './Pages/Contact.svelte';
  import Error404 from './Pages/Error404.svelte';
  export let self, socials, projects, credits;
  let page;
  let props;
  const dataProps = () => {
    (page = Home), About, Projects, Contact, Error404;
    props = { self, socials, projects, credits };
  };
  dataProps();
  router('/', () => (page = Home));
  router('/about', () => (page = About));
  router('/projects', () => (page = Projects));
  router('/contact', () => (page = Contact));
  router('*', () => (page = Error404));
  router.start();
</script>

<Header />

<svelte:component this={page} {...props} />
