<template>
  <PostsTable/>
</template>
<script setup lang="ts">
import {usePostStore} from '~~/store/PostStore'
const postStore = usePostStore()

const rows = ref([])
const getPost = async() =>{
 const response= await postStore.fetchPosts()
 console.log(response)
rows.value = response
}

onMounted( () =>{
  getPost()
})
</script>
