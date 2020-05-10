<template>
  <div>
    <label for="weight">Разовый максимум:</label>
    <input id="weight" v-model="weight" type="text" name="weight" />
    <br /><br />
    <label for="reps">Вес снаряда:</label>
    <input id="reps" v-model="equipmentWeight" type="text" name="reps" />
    <br /><br />
    <div v-if="resultEnabled">Формула Эпли: {{ epli }}</div>
  </div>
</template>

<script>
export default {
  name: "TargetWeight",
  data() {
    return {
      weight: null,
      equipmentWeight: null
    };
  },
  computed: {
    resultEnabled: {
      get() {
        if (!this.weight || !this.equipmentWeight) return false;
        return true;
      }
    },
    epli: {
      get() {
        return (
          (30 * (this.weight - this.equipmentWeight)) / this.equipmentWeight
        );
      }
    }
  }
};
</script>
