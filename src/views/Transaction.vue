<template>
  <section id="home" class="video-hero wrapper">
    <div class="overlay"></div>
    <div class="display-t text-center">
      <div class="display-tc">
        <div class="container wrapper">
          <div class="col-md-12 align-content-center">
            <div class="animate-box">
              <h2>Checkout the details of each transactions</h2>
              <p class="text-warning">You can view even more...</p>
            </div>
          </div>

          <section>
            <div class="row">
              <!-- <div class="col-3">
                <Transactions :data="top5Transactions" />
              </div> -->
              <div class="col-md-12">
                <table
                  class="
                    table table-bordered table-hover table-active
                    text-white
                    table-sm
                  "
                >
                  <tr>
                    <td>Account</td>
                    <td>{{ transaction.account }}</td>
                  </tr>

                  <tr>
                    <td>Description</td>
                    <td>{{ transaction.description }}</td>
                  </tr>

                  <tr>
                    <td>Category</td>
                    <td>{{ transaction.category }}</td>
                  </tr>

                  <tr>
                    <td>Reference</td>
                    <td>{{ transaction.reference }}</td>
                  </tr>

                  <tr>
                    <td>Currency</td>
                    <td>{{ transaction.currency }}</td>
                  </tr>

                  <tr>
                    <td>Amount</td>
                    <td>{{ transaction.amount }}</td>
                  </tr>

                  <tr>
                    <td>Status</td>
                    <td>{{ transaction.status }}</td>
                  </tr>

                  <tr>
                    <td>Transaction Date</td>
                    <td>{{ formatDate(transaction.transactionDate) }}</td>
                  </tr>

                  <tr>
                    <td>Crteated At</td>
                    <td>{{ formatDate(transaction.createdAt) }}</td>
                  </tr>

                  <tr>
                    <td>Updated At</td>
                    <td>{{ formatDate(transaction.updatedAt) }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch("all");
  },

  computed: {
    transaction() {
      const id = this.$route.params.id;
      return this.$store.getters.show(id);
    },
  },

  methods: {
    formatDate(date) {
      return new Date(date).toISOString().split("T")[0];
    },
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