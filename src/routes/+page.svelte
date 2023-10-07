<script>
    import Grid from '../lib/sound/Grid.svelte';
    import Menu from '../lib/menu/Menu.svelte';

    let sounds = ['epic.swf_1', 'nigga', 'pornhub-community-intro', 'shut-the-fuck-up', 'windows_xp_shutdown']
</script>

<main>
    <Menu />
    <h1>Future Ready Design</h1>
    <h2>Soundboard</h2>
    <Grid {sounds}/>
</main>



<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;900&display=swap');
   
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: clamp(20px, 10vmin, 50px);
        font-weight: 900;
        
    }
    h2 {
       
        font-weight: 500;
        margin-bottom: 4rem;
    }
    h1, h2 {
        color: #ffffff;
        font-family: 'Outfit', sans-serif;
    }
  </style>