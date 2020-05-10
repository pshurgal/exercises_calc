<template>
  <div id="app">
    <div id="nav">
      <router-link to="/onerep">Разовый максимум</router-link> |
      <router-link to="/repcount">Количество повторений</router-link> |
      <router-link to="/targetweight">Повторения с заданным весом</router-link>
    </div>
    <router-view />
  </div>
</template>
