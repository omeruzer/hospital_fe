<template>
  <div>
    <TopTitle title="Hastalar" subtitle="Sisteme kayıt olmuş hastalar" />
    <div v-if="isOkey" class="row">
      <div class="d-flex justify-content-end my-3">
        <NewModal @refreshData="list = $event" />
      </div>
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-borderless">
                <thead>
                  <tr>
                    <th>Ad Soyad</th>
                    <th>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in list.data" :key="index">
                    <td>{{ item.user.name }}</td>
                    <td>
                      <div class="d-flex justify-content-end align-items-center">
                        <div>
                          <button class="btn btn-info btn-sm" @click="getDetail(item.id)">
                            <i class="fa fa-eye"></i>
                          </button>
                        </div>
                        <div class="">
                          <button class="btn btn-warning btn-sm ml-2">
                            <i class="fa fa-edit"></i>
                          </button>
                        </div>
                        <div class="">
                          <button
                            @click="remove(item.id)"
                            class="btn btn-danger btn-sm ml-2"
                          >
                            <i class="fa fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <PatientDetail :data="detail" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<script>
import axios from "axios";
import TopTitle from "../../components/shared/TopTitle.vue";
import Loader from "@/components/Loader.vue";
import NewModal from "@/components/patients/NewModal.vue";
import PatientDetail from "@/components/patients/PatientDetail.vue";
export default {
  data() {
    return {
      list: [],
      btnLoad: false,
      isOkey: false,
      detail: {},
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      await axios
        .get("/api/patient")
        .then((result) => {
          this.list = result.data.data;
          this.isOkey = true;
        })
        .catch((err) => {});
    },
    async getDetail(id) {
      await axios.get("/api/patient/" + id).then((result) => {
        this.detail = result.data;
        $("#exampleModal-" + id).modal("show");
      });
    },
    async remove(id) {
      this.$swal
        .fire({
          title: "Emin misniz?",
          text: "Bu veriyi silerseniz ilgili tüm verileri silmiş olursunuz",
          icon: "Warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Evet, Sil!",
        })
        .then(async (result) => {
          if (result.value) {
            await axios
              .delete(`/api/patient/${id}`)
              .then(async (result) => {
                await this.$store.dispatch("LIST", "patient");
                this.item = result.data;
                console.log(this.item);
                await this.$swal
                  .fire("Tebrikler!", "İşlem Başarıyla Gerçekleşti", "success")
                  .then(async (result) => {
                    console.log(this.$store.state.list);
                    await setTimeout(async () => {
                      this.list = await this.$store.state.list;
                    }, 1500);
                  })
                  .catch((err) => {});
              })
              .catch((err) => {});
          }
        });
    },
  },
  components: { TopTitle, Loader, NewModal, PatientDetail, Loader, PatientDetail },
};
</script>

<style lang="scss" scoped></style>
