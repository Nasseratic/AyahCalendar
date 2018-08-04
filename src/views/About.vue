<template>
  <div class="about">
      <vue-event-calendar :events="demoEvents"></vue-event-calendar>
  </div>
</template>

<script>

export default {
  components:{
  },
  data(){
    return{
      demoEvents: [{
        date: '2018/8/12', // Required
        title: 'Foo' // Required
      }, {
        date: '2018/8/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      },{
        date: '2018/8/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      },{
        date: '2018/8/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      },{
        date: '2018/8/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      },{
        date: '2018/8/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      },{
        date: '2018/8/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }]
    }
  }
}
</script>

<style>
.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-today{
  border-radius: 0% !important;
}
</style>
