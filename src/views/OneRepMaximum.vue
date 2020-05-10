<template>
  <div>
    <label for="weight">Вес, который Вы поднимаете:</label>
    <input id="weight" v-model="weight" type="text" name="weight" />
    <br /><br />
    <label for="reps">Количество повторений:</label>
    <input id="reps" v-model="reps" type="text" name="reps" />
    <br /><br />
    <div v-if="resultEnabled">
      Формула Бржыки: {{ brjika }}<br /><br />
      Формула Эпли: {{ epli }}<br /><br />
      Формула Лэндера: {{ lender }}
    </div>
  </div>
</template>

<script>
export default {
  name: "OneRepMaximum",
  data() {
    return {
      weight: null,
      reps: null
    };
  },
  computed: {
    resultEnabled: {
      get() {
        if (!this.weight || !this.reps) return false;
        return true;
      }
    },
    brjika: {
      get() {
        return this.weight * (36 / (37 - this.reps));
      }
    },
    epli: {
      get() {
        return this.weight * (1 + this.reps / 30);
      }
    },
    lender: {
      get() {
        return (100 * this.weight) / (101.3 - 2.67123 * this.reps);
      }
    }
  }
};
</script>
