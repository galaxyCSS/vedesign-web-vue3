<template>
  <div class="ve-text-typing">
    <span
      :class="['item', idx === arr.length - 1 ? 'last' : '']"
      v-for="(item, idx) in arr"
    >
      {{ item }}
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
defineOptions({
  name: "VeTextTyping",
});
const arr = ref([]);
const props = defineProps({
  content: String,
  speed: {
    type: Number,
    default: 100,
  },
});
const splitTextAc = () => {
  let splits = props.content.split("");
  let time = props.speed;
  let index = 0;
  let timeid = setInterval(() => {
    arr.value.push(splits[index]);
    index++;
    if (index === splits.length) {
      arr.value.push("_");
      clearInterval(timeid);
    }
  }, time);
};
onMounted(() => {
  splitTextAc();
});
</script>

<style scoped>
@keyframes flashing {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.ve-text-typing {
  width: 200px;
  .item {
    padding: 2px;
    &.last {
      animation: flashing 0.3s linear infinite alternate;
    }
  }
}
</style>
