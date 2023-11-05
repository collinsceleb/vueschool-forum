<script setup>
import sourceData from "@/data.json"
import {reactive} from "vue";
import PageThreadList from "@/components/PageThreadList.vue";


const threads = reactive(sourceData.threads)
const posts = reactive(sourceData.posts)
const users = reactive(sourceData.users)

const postById = (postId) => posts.find(p => p.id === postId)
const userById = (userId) => users.find(u => u.id === userId)


</script>

<template>
   <h1>Welcome to home page</h1>
  <PageThreadList :threads="threads"/>
</template>

<style scoped>

</style>