<template>
	<header class="page-header">
      <div class="panel-title">
        <img class="img-circle img-thumbnail" src="./assets/timg.jpg">
        <h1 class="text-info">{{this.$route.query.Title ==null ? "HuTianFa" : this.$route.query.Title}}</h1>
      </div>
    </header>
</template>