<template>

  <section class="src-components-notas">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- Campo nombre -->
        <validate tag="div">
          <!-- elemento de entrada -->
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            v-model.trim="formData.nombre"
            autocomplete="off"
            required
            no-espacios
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
          />

          <!-- Mensajes de validacion -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido.
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere entre {{ nombreMinLength }} y
              {{ nombreMaxLength }} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>

        <!-- Campo Apellido -->
        <validate tag="div">
          <!-- elemento de entrada -->
          <label for="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            class="form-control"
            v-model.trim="formData.apellido"
            autocomplete="off"
            required
            no-espacios
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
          />

          <!-- Mensajes de validacion -->
          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido.
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere entre {{ nombreMinLength }} y
              {{ nombreMaxLength }} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>

        <!-- Campo Nota -->
        <validate tag="div">
          <!-- elemento de entrada -->
          <label for="nota">Nota</label>
          <input
            type="number"
            id="nota"
            name="nota"
            class="form-control"
            v-model.trim="formData.nota"
            autocomplete="off"
            required
            :min="notaMin"
            :max="notaMax"
          />

          <!-- Mensajes de validacion -->
          <field-messages name="nota" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La nota no puede ser menor a 0
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La nota no puede ser mayor a 10
            </div>
          </field-messages>
        </validate>

        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid" @click="agregarRegistro(formData.nombre, formData.apellido, formData.nota)">Enviar</button>
      </vue-form>

      <table class="table">
        <div class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th>Alumno</th>
              <th>Nota</th>
            </tr>
            <tr v-for="(registro,index) in registros" :key="index" :style="getStyle(registro.nota)">
              <td>{{ registro.nombre + ' ' + registro.apellido }}</td>
              <td>{{ registro.nota }}</td>
            </tr>
            <tr v-if="registros.length" :style="getStyle(getPromedio)">
            <td>Promedio total</td>
            <td>{{getPromedio}}</td>
            </tr>

          </table>
       </div>
      </table>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-notas',
    props: [],
    mounted () {

    },
    data () {
      return {
        formData: this.getInicialData(),
        formState: {},
        nombreMinLength: 3,
        nombreMaxLength: 15,
        notaMin:0,
        notaMax:10,
        registros: []
      }
    },
    methods: {
        getInicialData() {
          return {
                  nombre: "",
                  apellido: "",
                  nota: "",
          };

    },
    agregarRegistro(nombre, apellido, nota) {
      const registro = { 
        nombre : nombre,
        apellido : apellido,  
        nota : nota,
        }            
        this.registros.push(registro)
      
    },
    enviar() {
            console.log({ ...this.formData });
            this.formData = this.getInicialData();
            this.formState._reset();
         },
          
    getStyle(nota) {
        return {
          color : "black",
          backgroundColor : nota >= 7 ? "green" : nota >= 4 ? "yellow" : "red"
        }
    },

    
    },      
    computed: {
    getPromedio() {
        let cant = this.registros.length
        let promedio = 0;
        this.registros.forEach(registro => { promedio += Number(registro.nota) })
        if (cant == 0) {
          promedio = 0;
        }

        return promedio / cant


        
}
    },
    };

</script>

<style scoped lang="css">
</style>
