<template>
  <div class="about">
    <vue-event-calendar v-if="eventsLoaded" :events="Ayaat">
      <template slot-scope="props">
        <div v-for="(ayah, index) in props.showEvents" :key="index" class="event-item">
          <div class="wrapper">
            <h3 class="title">{{ayah.title}} <small>{{ayah.num}}</small> </h3>
            <p class="time">{{ayah.date.slice(0,ayah.date.length-1)}}</p>
            <!-- <p class="desc"></p> -->
          </div>
        </div>
      </template>
    </vue-event-calendar>
  </div>

</template>

<script>
export default {
  components: {},
  data() {
    return {
      Ayaat: [],
      eventsLoaded: false
    };
  },
  created() {
    for (let surah = 1; surah <= 12; surah++) {
      const element = require(`../assets/surah/surah_${surah}.json`);
      for (let i = 1; i < element.count && i <= 12; i++) {
        this.Ayaat.push({
          date: `2019/${i}/${surah}/`,
          title: element.verse["verse_" + i],
          num:` [${surah}:${i}]`,

          customClass: "highlight"
        });
      }
      for (let i = 1; i < element.count && i <= 31; i++) {
        this.Ayaat.push({
          date: `2019/${surah}/${i}/`,
          title: element.verse["verse_" + i],
          num:` [${surah}:${i}]`,
          customClass: "highlight"
        });
      }
    }
    this.Ayaat.sort((a, b) => {
      return a > b ? 1 : a < b ? -1 : 0;
    });
    this.eventsLoaded = true;
  }
};
</script>

<style>

.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-today {
  border-radius: 0% !important;
  background-color: #3c705de8 !important;
  color: #3c705de8;
  height: 3px;
}
.__vev_calendar-wrapper .events-wrapper .event-item .title {
  direction: rtl;
  margin-top: 34px;
  font-size: 1.5em;
  height: auto;
  font-weight: normal;
  font-family: "Tajawal", sans-serif;
}
.__vev_calendar-wrapper .events-wrapper {
  background-color: #73c1a5e8 !important;
}
.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-event {
  border-color: #cacaca !important;
}
.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .date-num {
  color: #3b3b3b !important;
}
.__vev_calendar-wrapper
  .cal-wrapper
  .cal-body
  .dates
  .item.selected-day
  .is-event {
  background: #73c1a5e8 !important;
}
.__vev_calendar-wrapper
  .cal-wrapper
  .cal-body
  .dates
  .item.selected-day
  .date-num {
  color: #fff !important;
  font-weight: 900;
}

.__vev_calendar-wrapper .events-wrapper .date {
  max-width: 100%;
}
</style>
