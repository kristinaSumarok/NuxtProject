<template>
  <body>
    <NuxtLayout>
      <header>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/planner">Planner</NuxtLink></li>
        </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
</body>
</template>


<style scoped>
body {
  background-color: black;
}
div {
  color: #84cc16;;
}
li {
  color:aquamarine;
}
</style>

