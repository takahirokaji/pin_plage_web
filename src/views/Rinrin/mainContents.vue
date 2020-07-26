<template>
	<div>
		<ul v-for="(item,i) in contents" :key="i">
			<li>{{item.contents}}</li>
			<li>{{item.type}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			contents:{}
		}
	},
	created: function(){
		let that = this;
		that.contents = this.$store.state.rinrinAll;
	}
}
</script>