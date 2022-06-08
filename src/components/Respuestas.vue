<template>

  <section class="src-components-respuestas">
    <table class="table">
        <div class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th>Nro pregunta</th>
              <th>Respuesta</th>
            </tr>
            <tr v-for="(pregunta,index) in preguntas" :key="index" :style="{color: 'black', backgroundColor:'silver'}">
              <td>{{ pregunta.numero }}</td>
              <td>{{ pregunta.respuesta }}</td>
            </tr>
          </table>
       </div>
      </table>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
            preguntas : [
                    { numero: 1, respuesta: ['C'] },
                    { numero: 2, respuesta: ['C'] },
                    { numero: 3, respuesta: ['B'] },
                    ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
