<script>
    import GridItem from './GridItem.svelte';
    import {createEventDispatcher} from "svelte"
    const dispatch = createEventDispatcher();

    export let sounds;
    export let popupState;
    
    let items = sounds.items;
    function dispatchItemData(data){
        dispatch('itemData', data);
        
    }

</script>

<section class="grid">
    {#each items as sound}
        <GridItem on:editPopup={dispatchItemData} {popupState} {sound} />
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



