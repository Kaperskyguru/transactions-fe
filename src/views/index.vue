<template>
  <section id="home" class="video-hero wrapper">
    <div class="overlay"></div>
    <div class="display-t text-center">
      <div class="display-tc">
        <div class="container wrapper">
          <div class="col-md-12 align-content-center">
            <div class="animate-box">
              <h2>Check the list of all available transactions</h2>
              <p class="text-warning">
                You can filter each transactions with dates
              </p>
              <FilterByDate />
            </div>
          </div>

          <Transactions :data="transactions" />
        </div>
      </div>
      <Loader :show="show" />
    </div>
  </section>
</template>

<script>
import Transactions from "../components/Transactions.vue";
import FilterByDate from "../components/FilterByDate.vue";
import { mapState } from "vuex";
export default {
  components: {
    Transactions,
    FilterByDate,
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState(["transactions", "errors"]),
  },

  async created() {
    this.show = true;
    await this.$store.dispatch("all", {});
    this.show = false;
  },
};
</script>

<style scoped>
.video-hero {
  background-image: url("/images/cover_img_1.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
.wrapper {
  margin-top: 70px;
}
</style>