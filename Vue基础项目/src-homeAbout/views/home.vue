<template>
  <div>
    <h2>Home 组件内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link to="/home/news" aria-current="page" class="activeName"
          >News</router-link
        >
      </li>
      <li>
        <router-link to="/home/messages">Messages</router-link>
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>