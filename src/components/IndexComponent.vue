// IndexComponent.vue

<template>
  <div class="tes">
        <div class="row">
          <div class="col-md-10"> <h1>Input Andre</h1></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Item Names</th>
                <th>Item Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.name }}</td>
                    <td>{{ post.email }}</td>
                    <td>{{ post.password }}</td>
                    <td><router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" @click.prevent="deletePost(post.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
      data() {
        return {
          posts: []
        }
      },
      created() {
      let uri = `http://192.168.10.105:8000/api/alluser`;
      this.axios.get(uri).then(response => {
        this.posts = response.data.user
        console.log(this.posts)
      })
    }
    // methods: {
    //   deletePost(id)
    //   {
    //     let uri = `http://localhost:8000/api/post/delete/${id}`;
    //     this.axios.delete(uri).then(response => {
    //       this.posts.splice(this.posts.indexOf(id), 1);
    //     });
    //   }
    // }
  }
</script>
