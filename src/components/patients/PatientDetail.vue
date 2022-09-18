<template>
  <div>
    <div
      class="modal fade"
      :id="'exampleModal-' + data.id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Hasta Detay</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div>
              <b>Ad Soyad:</b> <span>{{ data.user.name }}</span>
            </div>
            <div class="mt-2">
              <b>E-mail:</b> <span>{{ data.user.email }}</span>
            </div>
            <div class="mt-2">
              <b>Telefon:</b> <span>{{ data.user.phone }}</span>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
              Tamam
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped></style>
