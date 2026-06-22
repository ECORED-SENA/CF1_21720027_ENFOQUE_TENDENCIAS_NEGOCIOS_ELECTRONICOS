<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 10
        h1 Valor agregado en productos y servicios
      

      Separador
      //- Inicio Tema10.1
      .row
        #t_10_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 10.1 Tipos de valor agregado	

      Separador
      //- Inicio Tema10.2
      .row
        #t_10_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 10.2 Características del valor agregado en el entorno digital

      Separador
      //- Inicio Tema10.3
      .row
        #t_10_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 10.3 Importancia del valor agregado en el comercio electrónico

      Separador
      //- Inicio Tema10.4
      .row
        #t_10_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 10.4 Estrategias para generar valor agregado

      Separador
      //- Inicio Tema10.5
      .row
        #t_10_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 10.5 Aplicación del valor agregado en los negocios electrónicos

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
