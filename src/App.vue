<template>
  <div id="app">
   <header class="flex-navbar">
  <img class="brand" src="./assets/New Project.png" @click="toCaledar" /> <span class="header-brand" @click="toCaledar"> Ayah Calendar</span>
  <ul class="items items-right">
    <li class="item"><router-link to="/">Home</router-link></li>
    <li class="item"><router-link to="/calendar">Calendar</router-link></li>
  </ul>
</header>
<br>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods:{
    toCaledar(){
      this.$router.push("/calendar");
    }
  }
}
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Tajawal");



.header-brand{
  cursor: pointer;
  font-size: 1.4em;
  font-weight: 100;
  margin-top: 10px;
  margin-left: 10px;
  color: #619280e8 ;
  font-family: "Tajawal", sans-serif;

}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Montserrat, sans-serif;
}

.flex-navbar {
  background-color: ##FAFAFA;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  padding: 2px 10px;
  display: flex;
  align-items: center;
}

.flex-navbar .items.items-right {
  margin-left: auto;
}


.flex-navbar .brand {
  color: #F9690E;
  max-width: 60px;
  font-size: 1.45em;
  margin-bottom: 10px;
  margin-top: 10px;
  cursor: pointer;
}
.flex-navbar ul.items {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  color: #34495e;
	font-size: .99em;
  text-transform: uppercase;
}

.flex-navbar > ul.items li.item {
  margin: 0 15px;
}

.flex-navbar > ul.items li.item a {
  text-decoration: none;
  color: #616161;
}

.flex-navbar > ul.items li.item a:hover {
  color: red;
}

@media only screen and (max-width: 577px) {
  .flex-navbar {
    flex-direction: column;
  }
  
  .flex-navbar ul.items {
    flex-direction: column;
  }
  
  .flex-navbar ul.items.items-right {
    margin-left: initial;
  }
  
  .flex-navbar > ul.items li.item {
    margin: 15px 15px;
  }
}
</style>
