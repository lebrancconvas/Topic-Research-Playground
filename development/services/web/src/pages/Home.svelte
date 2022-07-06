<script lang="ts">
	const addTopic = () => {
		(document.getElementById('dialog-default') as HTMLInputElement).showModal();
	}
	const closeDialog = () => {
		(document.getElementById('dialog-default') as HTMLInputElement).close();
	}
	const submitLog = () => {

	}
</script>

<main>
	<div>
		<header>
			<h1>Topic Research</h1>
		</header>
		<section class="addResearch">
			<button type="button" class="nes-btn is-primary" on:click={addTopic}>Add Research Topic</button> 
			<dialog class="nes-dialog" id="dialog-default">
				<h2>Add Research Topic</h2> 
				<form action="">
					<input type="text" id="topic" placeholder="Input your topic" required />
					<br><br>
					<input type="text" id="description" placeholder="Input your description" />
					<br><br>
					<button on:click={closeDialog}>Cancel</button>
					<input type="submit" value="Submit" on:click={submitLog}>
				</form>
			</dialog>
		</section>
	</div>
	
</main>

<style>

</style>