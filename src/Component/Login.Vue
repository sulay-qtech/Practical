<template>
      <div class="page-center">
    <div class="page-center-in">
      <div class="container-fluid col-sm-6 mt-5">
        <form class="sign-box" onsubmit="return false;">
          <header class="sign-title text-center mb-4">Sign In</header>
          <div class="form-group">
              <lable class="mb-3">Email-Id</lable>
            <input type="text" class="form-control" placeholder="E-Mail" v-model="email" />
          </div>
          <div class="form-group">
              <lable class="mb-3">Password</lable>
            <input type="password" class="form-control" placeholder="Password" v-model="password" />
          </div>
          <div class="form-group"></div>
          <button type="submit" class="btn btn-primary" v-on:click="login">Sign in</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
        if(this.email =='admin@gmail.com' && this.password == 'admin@123')
        {
            this.$router.push("/dashboard");
        }
        else
        {
            alert("Invalid Credentials");    
        }
    }
  }

}
</script>