<script setup>
import sourceData from "@/data.json"
import {computed, reactive} from "vue";


const threads = reactive(sourceData.threads)
const posts = reactive(sourceData.posts)
const users = reactive(sourceData.users)
const props = defineProps({
  id: {
    required: true,
    type: String
  }
})

const postById = (postId) => posts.find(p => p.id === postId)
const userById = (userId) => users.find(u => u.id === userId)

const currentView = computed(() => {
  return threads.find(thread => thread.id === props.id)
})
</script>

<template>
  <div class="col-large push-top">

    <h1>{{ thread.title }}</h1>

    <div class="post-list">
      <div v-for="postId in thread.posts" :key="postId" class="post">

        <div class="user-info">
          <a href="#" class="user-name">{{ userById(postById(postId).userId).name }}</a>

          <a href="#">
            <img class="avatar-large" src="{{userById(postById(postId).userId).avatar}}" alt="User image">
          </a>

          <p class="desktop-only text-small">107 posts</p>

        </div>

        <div class="post-content">
          <div>
            <p>
              {{ postById(postId).text }}
            </p>


            <div class="post-date text-faded">
              {{ postById(postId).publishedAt }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <component :is="currentView" />
</template>

<style scoped>

</style>