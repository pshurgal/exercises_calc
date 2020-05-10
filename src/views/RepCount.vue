<template>
  <div>
    <label for="weight">Разовый максимум:</label>
    <input id="weight" v-model="weight" type="text" name="weight" />
    <br /><br />
    <label for="reps">Прогнозируемые повторения:</label>
    <input id="reps" v-model="reps" type="text" name="reps" />
    <br /><br />
    <div v-if="resultEnabled">
      Формула Бржыки: {{ brjika }}<br /><br />
      Формула Эпли: {{ epli }}<br /><br />
      Формула Лэндера: {{ lender }}<br /><br />
      Формула О'Коннора: {{ okonnor }}
    </div>
  </div>
</template>

<script>
export default {
  name: "RepCount",
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
        return (1.0278 - 0.0278 * this.reps) * this.weight;
      }
    },
    epli: {
      get() {
        return (
          this.weight /
          Math.pow(
            0.066 * Math.pow(this.reps, 2) +
              0.001089 * Math.pow(this.reps, 2) +
              1,
            2
          )
        );
      }
    },
    lender: {
      get() {
        return (1.013 - 0.0267123 * this.reps) * this.weight;
      }
    },
    okonnor: {
      get() {
        return this.weight / (1 + 0.025 * this.reps);
      }
    }
  }
};
</script>
