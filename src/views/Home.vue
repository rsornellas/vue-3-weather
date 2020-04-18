<template>
  <Tempo v-if="data" :data="data" />
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
    store.dispatch("getData");

    return {
      data: computed(() => store.state.data),
    };
  },
};
</script>
