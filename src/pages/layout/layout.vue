<template>
  <div class="container-scroller">
    <Header />
    <div class="container-fluid page-body-wrapper">
      <Sidebar />
      <div class="main-panel">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/shared/Header.vue";
import Sidebar from "../../components/shared/Sidebar.vue";
import Footer from "@/components/shared/Footer.vue";
export default {
  components: { Header, Sidebar, Footer },
};
</script>

<style lang="scss" scoped></style>
