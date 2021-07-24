<template>
	<div>
		<LikeHeader></LikeHeader>
		<LikeNumber></LikeNumber>
	</div>
</template>

<script>
import LikeHeader from './componentes/LikeHeader.vue'

export default {
	components: {
		LikeHeader
	}
}
</script>

<style scoped>
	div {
		border: 1px solid blue
	}

</style>
