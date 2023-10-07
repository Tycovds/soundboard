<script> 
    import {getDownloadURL} from "firebase/storage";
    import {createEventDispatcher} from "svelte"
    const dispatch = createEventDispatcher();

    export let sound;
    export let popupState;

    let soundUrl;
    getDownloadURL(sound).then((url) => {
        soundUrl = url;
    })

    function playSound(url){
        let audio = new Audio(url);
        audio.volume = 0.1;
        audio.play();
    }

    function editPopup() {

        dispatch('editPopup', {mode: 'edit', audioReference: sound}); 
    }
</script>

<div class="item-wrapper">
    {#if popupState == 'edit'}
        <button on:click={()=>{editPopup()}} class="item">
            <p>Edit: {sound}</p>
        </button>
    {:else}
        <button on:click={()=>{playSound(soundUrl)}} class="item">
            <p>{sound}</p>
        </button>
    {/if}
</div>

<style>
.item-wrapper {
    display: block;
    border-radius: 12px;
    padding: 2rem;
    aspect-ratio: 1/1;
    background-color: #26191A;
}

.item{
    border: none;
    background-color: #26191A;
}

.item p {
    font-family: 'outfit', sans-serif;
    font-weight: 500;
    color: #fff;
    font-size: 1rem;
}

</style>