import { defineStore } from 'pinia';

export const usePostStore = defineStore('Posts', {
  state: () => ({
    posts: [],
    currentPost: {
      title: '',
      body: '',
    },
  }),
  actions: {
    async fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      this.posts = await response.json();
      return this.posts;
    },
    editPost(post) {
      this.currentPost = { ...post };
    },
    async createPost() {
      // ... (similar to previous example)
    },
    async updatePost() {
      // ... (similar to previous example)
    },
    async deletePost(postId) {
      // ... (similar to previous example)
    },
  },
});