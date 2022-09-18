<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-success"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <i class="fa fa-plus mr-2"></i> Ekle
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Hasta Ekle</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="">Ad Soyad</label>
              <input
                type="text"
                name=""
                v-model="form.name"
                id=""
                class="form-control"
                placeholder="Ad Soyad"
              />
            </div>
            <div class="form-group">
              <label for="">E-mail</label>
              <input
                type="text"
                name=""
                v-model="form.email"
                id=""
                class="form-control"
                placeholder="E-mail"
              />
            </div>
            <div class="form-group">
              <label for="">Telefon</label>
              <input
                type="number"
                v-model="form.phone"
                name=""
                id=""
                class="form-control"
                placeholder="Telefon"
              />
            </div>
            <div class="form-group">
              <label for="">Şifre</label>
              <input
                type="password"
                name=""
                id=""
                v-model="form.password"
                class="form-control"
                placeholder="Şifre"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button @click="add()" type="button" class="btn btn-primary">Ekle</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    async add() {
      if (
        this.form.name == "" ||
        this.form.email == "" ||
        this.form.phone == "" ||
        this.form.password == ""
      ) {
        this.$swal.fire("Dikkat!", "Lütfen Tüm Alanları Doldurun", "warning");
      } else {
        await axios
          .post("/api/patient", this.form)
          .then(async (result) => {
            await this.$store.dispatch("LIST", "patient");
            // this.form = {};
            await this.$swal
              .fire("Tebrikler!", "İşlem Başarıyla Gerçekleşti", "success")
              .then(async (result) => {
                await this.$emit("refreshData", this.$store.state.list);
              })
              .catch((err) => {});
          })
          .catch((err) => {});
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
