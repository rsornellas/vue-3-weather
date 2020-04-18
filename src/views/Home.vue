<template>
    <Tempo :data="data" :getFn="getData" />
</template>

<script>
import Tempo from "@/components/Tempo.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Tempo,
  },
  setup() {
    const store = useStore();
    return {
      data: computed(() => store.state.data),
      getData: () => store.dispatch("getData")
    };
  },
};
</script>
