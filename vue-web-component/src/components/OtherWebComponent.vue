<template>
  <div>
    <h1>My Other Web Component -- Also in Vue?</h1>
    <div>{{ msg }}</div>
  </div>
</template>
<script>
  export default {
    props: ['msg'] 
  }
</script>