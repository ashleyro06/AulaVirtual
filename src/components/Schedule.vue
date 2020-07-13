<template>
  <div>
    <b-table :fields="days" :items="classSchedule" bordered hover responsive striped></b-table>
  </div>
</template>

<script>
export default {
  name: "Schedule",
  props: {
    classes: Array
  },
  data() {
    return {
      days: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
      time: [6, 7, 8, 9, 10, 11, 12]
    };
  },
  computed: {
    classSchedule() {
      let schedule = [];
      if (this.classes) {
        this.time.forEach(hour => {
          let daySchedule = [];
          this.days.forEach(day => {
            let localDay = "-";
            if (day == "Hora") {
              localDay = hour;
            } else {
              this.classes.forEach(clas => {
                clas.schedule.forEach(cSchedule => {
                  if (
                    (cSchedule.start == hour ||
                      (cSchedule.start < hour && cSchedule.end > hour)) &&
                    day == cSchedule.day
                  ) {
                    localDay = clas.name;
                  }
                });
              });
            }
            daySchedule.push(localDay);
          });

          schedule.push({
            Hora: `${daySchedule[0]}:00`,
            Lunes: daySchedule[1],
            Martes: daySchedule[2],
            Miércoles: daySchedule[3],
            Jueves: daySchedule[4],
            Viernes: daySchedule[5]
          });
        });
      }
      return schedule;
    }
  }
};
</script>

<style>
</style>