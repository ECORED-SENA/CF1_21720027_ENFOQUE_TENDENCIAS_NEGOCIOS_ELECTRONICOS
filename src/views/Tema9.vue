<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 9
        h1 Procesos de implementación de un negocio electrónico


      Separador
      //- Inicio Tema9.1
      .row
        #t_9_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.1 Fases del proceso de implementación

      Separador
      //- Inicio Tema9.2
      .row
        #t_9_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.2 Planeación del negocio digital

      Separador
      //- Inicio Tema9.3
      .row
        #t_9_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.3 Definición del producto o servicio

      Separador
      //- Inicio Tema9.4
      .row
        #t_9_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.4 Estructuración del modelo de negocio

      Separador
      //- Inicio Tema9.5
      .row
        #t_9_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.5 Puesta en marcha del negocio electrónico



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
