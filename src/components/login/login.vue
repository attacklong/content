<template>
  <div class="login">
       <div class="photo"> <img src="./login.jpg" style="width:360px;height:500px;"/></div>
      <div class="cont">
    <form v-if="!isReg" class="form">
      <div class="form-box">用户名:</div>
      <input type="text" v-model="name">
      <div class="form-box">密码:</div>
      <input type="password" v-model="password"><br>
      <button type="button" @click="login()">登录</button>
      <button type="button" @click="reg()">注册</button>
    </form>
    <form v-else class="form">
      <div class="form-box">用户名:</div>
      <input type="text" v-model="name">
      <div class="from-box">密码:</div>
      <input type="password" v-model="password">
      <div class="from-box">再次输入密码:</div>
      <input type="password" v-model="repeat"><br>
      <button type="button" @click="addUser()">确定</button>
      <button type="button" @click="cancel()">取消</button>
    </form></div>
    
  </div>
</template>
 
<script>
export default {
  name: "login",
  data() {
    return {
      isReg: false,
      name: "admin",
      password: "12456",
      repeat: "",
      
    };
  },
  methods: {
       created:function () {

            this.$emit('header', false);

        },
    login() {
        
      //验证姓名和密码是否与locastorage一致
      if (localStorage.getItem("name") ==' ' || localStorage.getItem("password") == ' ') {
        alert("用户名或密码不能为空！");
      } 
      
      if (
        localStorage.getItem("name") === this.name &&
        localStorage.getItem("password") === this.password
      ) {
        //清空输入框
        this.name = "";
        this.password = "";
        this.$router.push("/goods");
      }else{
         this.name = "";
        this.password = "";
        alert("用户名或密码错误！")
      }
    },
    reg() {
      this.isReg = true;
    },
    cancel() {
      this.isReg = false;
    },
    addUser() {
      //验证两次输入密码是否一致
      if (this.password === this.repeat) {
        //将名字和密码存入localstorage中
        localStorage.setItem("name", this.name);
        localStorage.setItem("password", this.password);
        //清空输入框
        this.name = "";
        this.password = "";
        this.isReg = false;
      } else {
        this.name = "";
        this.password = "";
      }
    }
  }

};
</script>
<style lang="stylus">
  .photo
   width: 360px
   height: 500px
   margin:50px auto
  .cont
   background-color:#f0f0f0
   box-shadow:2px 2px 2px #aaa
   border:1px
   border-radius:10px
   width:360px
   heifht:500px
   margin:20px auto    
 .form
   width:200px
   margin:0px auto
  .form-box
   float:left
   margin-top:15px
  button 
   width:80px
   margin:20px auto
    
     
     
   

   


</style>