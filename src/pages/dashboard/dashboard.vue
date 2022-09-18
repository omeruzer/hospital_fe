<template>
  <div>
    <TopTitle title='Hoşgeldin, User' subtitle='Güzel Bir Gün Geçirme Dileğiyle'/>
    <div class="row">
      <div class="col-md-12 grid-margin transparent">
        <div class="row">
          <div class="col-md-3 mb-4 stretch-card transparent">
            <div class="card card-tale">
              <div class="card-body">
                <p class="mb-4">Today’s Bookings</p>
                <p class="fs-30 mb-2">4006</p>
                <p>10.00% (30 days)</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4 stretch-card transparent">
            <div class="card card-dark-blue">
              <div class="card-body">
                <p class="mb-4">Total Bookings</p>
                <p class="fs-30 mb-2">61344</p>
                <p>22.00% (30 days)</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4 stretch-card transparent">
            <div class="card card-light-blue">
              <div class="card-body">
                <p class="mb-4">Total Bookings</p>
                <p class="fs-30 mb-2">61344</p>
                <p>22.00% (30 days)</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4 stretch-card transparent">
            <div class="card card-light-danger">
              <div class="card-body">
                <p class="mb-4">Total Bookings</p>
                <p class="fs-30 mb-2">61344</p>
                <p>22.00% (30 days)</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from "@/components/shared/TopTitle.vue";
export default { components: { TopTitle } };
</script>

<style lang="scss" scoped></style>
