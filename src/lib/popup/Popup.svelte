<script>
    import { createEventDispatcher } from 'svelte';
    import soundRef from "../index.js";
    import { ref, uploadBytes, updateMetadata, getMetadata } from "firebase/storage";
    
    const dispatch = createEventDispatcher();
    
    export let popupState;
    export let audioRef = null;
    let title = '';

    function closePopup() {
        audioRef = null;
        title = '';
        dispatch('closePopup', { mode: 'close' }); 
    }

    function uploadAudio() {
        const fileInput = document.getElementById('audioInput');
        const file = fileInput.files[0]; // Get the selected file
        const audioStorageRef = ref(soundRef, file.name); // Create a reference to the file in a specific folder (e.g., 'audio')

        // Upload the file to Firebase Storage
        uploadBytes(audioStorageRef, file, { customMetadata: { 'title': title } }).then(function(snapshot) {
            console.log('Uploaded a file:', snapshot);
            alert('Audio file uploaded successfully!');
        }).catch(function(error) {
            console.error('Error uploading file:', error);
            alert('Error uploading audio file. Please try again.');
        });
    }

    function editAudio() {
        if (audioRef) {
            // Update the metadata of the existing audioRef
            const metadata = { customMetadata: { 'title': title } };
            updateMetadata(audioRef, metadata)
                .then(() => {
                    console.log('Metadata updated successfully.');
                    alert('Audio metadata updated successfully!');
                })
                .catch(error => {
                    console.error('Error updating metadata:', error);
                    alert('Error updating audio metadata. Please try again.');
                });
        }
    }

    // This function listens for changes in the audioRef and updates the title when it changes.
    $: {
        if (audioRef) {
            if(title == ''){
                getMetadata(audioRef)
                .then(metadata => {
                
                    title = metadata?.customMetadata?.title || '';
                })
                .catch(error => {
                    console.error('Error fetching metadata:', error);
                });
            }
        }
    }
</script>

{#if popupState == 'upload' || audioRef !== null}
    <section on:click|self={closePopup} class="popup-overlay">
        <div class="popup">
            <button on:click={closePopup}>X</button>
            {#if popupState == 'edit' && audioRef !== null }
                <h1>Editing sound</h1>
                <input bind:value={title} id="audioTitle" type="text" placeholder="Sound name"> 
                <button on:click={editAudio}>Edit</button>
            {:else if popupState == 'upload'}
                <h1>Upload new sound</h1>
                <input bind:value={title} id="audioTitle" type="text" placeholder="Sound name">
                <input type='file' id='audioInput'/> 
                <button on:click={uploadAudio}>Upload</button>
            {/if}
        </div>
    </section>
{/if}


<style>
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }

    .popup {
        background: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
    h1 {
        font-family: 'Outfit', sans-serif;
        
        font-size: clamp(16px, 5vmin, 32px);
        font-weight: 600;
    }
</style>