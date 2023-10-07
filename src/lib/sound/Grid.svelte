<script>
    import GridItem from './GridItem.svelte';
    export let sounds;
</script>

<section class="grid">
    {#each sounds as sound}
        <GridItem {sound}/>
    {/each}
</section>

<style>
.grid {
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(4, 1fr);

}
@media screen and (max-width: 1024px){
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media screen and (max-width: 676px){
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width: 300px){
    .grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>



