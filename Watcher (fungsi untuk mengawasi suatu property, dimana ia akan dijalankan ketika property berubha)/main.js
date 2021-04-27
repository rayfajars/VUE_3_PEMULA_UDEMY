const mountedApp = Vue.createApp({
  data() {
    return {
      panjang: 0,
      lebar: 0,
      luas: 0
    }
  },
  // computed dan watcher bisa harus dipilih
  computed: {
    luas() {
      return this.panjang * this.lebar
    }
  },
  // watche adalah fungsi untuk mengawasi suatu property, dimana ia akan dijalankan ketika property berubha
  watch: {
    panjang(val) {
      console.log('panjang', val)
      this.luas = val * this.lebar
    },
    lebar(val) {
      console.log(val)
      this.luas = val * this.panjang
    }
  }
}).mount('#app')