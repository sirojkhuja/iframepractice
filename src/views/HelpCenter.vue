<template>
  <div class="help-center">
    <h2>Help Center Page</h2>
    <button @click="getUrl">Get url</button>

    <iframe id="childFrame" src="https://help.k15t.com/scroll-viewport" frameborder="0"></iframe>

  </div>
</template>

<script>
  export default {
    name: "HelpCenter",

    data: () => ({
      url: "http://127.0.0.1:5500"
    }),

    created () {
      const obj = this;
      window.addEventListener('message', (event) => {
        if (event.origin ===  obj.url) {
          obj.$router.push('/help-center' + event.data.path.replace(obj.url, ''));
        }
      });
    },

    methods: {
      getUrl() {
        console.log(document.getElementById('childFrame').contentWindow.location.href);
      }
    }
  }
</script>


<style>
  .help-center {
    width: 100%;
    height: 100%;
  }

  iframe {
    width: 100%;
    height: 100%;
  }
</style>
