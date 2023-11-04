<script setup>
import sourceData from "@/data.json"
import {reactive} from "vue";


const threads = reactive(sourceData.threads)
const posts = reactive(sourceData.posts)
const users = reactive(sourceData.users)

const postById = (postId) => posts.find(p => p.id === postId)
const userById = (userId) => users.find(u => u.id === userId)
</script>

<template>
    <div v-for="thread in threads" :key="thread.id" class="col-large push-top">

      <ul class="breadcrumbs">
        <li><a href="#"><i class="fa fa-home fa-btn"></i>Home</a></li>
        <li><a href="category.html">Discussions</a></li>
        <li class="active"><a href="#">Cooking</a></li>
      </ul>

      <h1>{{ thread.title }}</h1>

      <p>
        By <a href="#" class="link-unstyled">Robin</a>, 2 hours ago.
        <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
      </p>

      <div class="post-list">
        <div v-for="postId in thread.posts" :key="postId">
          <p>{{ userById(postById(postId).userId).name }}</p>
          <p>{{ postById(postId).text }}</p>
        </div>
        <div v-for="postId in thread.posts" :key="postId" class="post">

          <div class="user-info">
            <a href="#" class="user-name">{{ userById(postById(postId).userId).name }}</a>

            <a href="profile.html#profile-details">
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

</template>

<style scoped>

</style>