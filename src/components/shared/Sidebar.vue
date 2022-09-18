<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link">
          <i class="fa fa-home"></i>
          <span class="menu-title ml-3">Dashboard</span>
        </router-link>
      </li>
      <li v-if="authUser.role.role_name=='doctor'" class="nav-item">
        <router-link to="/patients" class="nav-link">
          <i class="fa fa-clock"></i>
          <span class="menu-title ml-3">Bugünün Randevuları</span>
        </router-link>
      </li>
      <li v-if="authUser.role.role_name=='doctor'" class="nav-item">
        <router-link to="/patients" class="nav-link">
          <i class="fa fa-clock"></i>
          <span class="menu-title ml-3">Geçmiş Randevular</span>
        </router-link>
      </li>
      <li v-if="authUser.role.role_name=='doctor'" class="nav-item">
        <router-link to="/patients" class="nav-link">
          <i class="fa fa-clock"></i>
          <span class="menu-title ml-3">Gelecek Randevular</span>
        </router-link>
      </li>
      <li v-if="authUser.role.role_name=='patient'" class="nav-item">
        <router-link to="/patients" class="nav-link">
          <i class="fa fa-clock"></i>
          <span class="menu-title ml-3">Randevularım</span>
        </router-link>
      </li>
      <li v-if="authUser.role.role_name=='patient'" class="nav-item">
        <router-link to="/patients" class="nav-link">
          <i class="fa fa-clock"></i>
          <span class="menu-title ml-3">Geçmiş Randevularım</span>
        </router-link>
      </li>
      <li v-if="authUser.role.role_name=='patient'" class="nav-item">
        <router-link to="/patients" class="nav-link">
          <i class="fa fa-clock"></i>
          <span class="menu-title ml-3">Gelecek Randevularım</span>
        </router-link>
      </li>
      <li v-if="authUser.role.role_name=='doctor'" class="nav-item">
        <router-link to="/patients" class="nav-link">
          <i class="fa fa-users"></i>
          <span class="menu-title ml-3">Hastalar</span>
        </router-link>
      </li>
      <li @click="logout()" class="nav-item " style="cursor: pointer;">
        <div class="nav-link ">
          <i class="fa fa-arrow-right-from-bracket"></i>
          <span class="menu-title ml-3">Çıkış Yap</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
  import axios from 'axios';
export default {
  data() {
    return {
      authUser:JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    async logout() {
      await axios
        .post("/api/logout")
        .then(async (result) => {
          await localStorage.removeItem("token");
          await localStorage.removeItem("user");
          await this.$router.push("/");
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="scss" scoped></style>
