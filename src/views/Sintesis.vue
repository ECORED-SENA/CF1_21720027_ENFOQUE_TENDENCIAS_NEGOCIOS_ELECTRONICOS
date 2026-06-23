<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5
        .col-12.ps-3(style="border-left: 10px solid #39A900;") 
          h3.mb-1 Enfoque y tendencias de los negocios electrónicos
          p.mb-0 
            | Síntesis:             
            | Fundamentos y requerimientos del negocio electrónico.
      p.mt-5 A continuación, se presenta una síntesis de la temática estudiada por el componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Diagrama La que presenta la estructura temática del componente Fundamentos y requerimientos del negocio electrónico, organizada en capítulos y subtemas relacionados con el comercio electrónico, los negocios digitales y su implementación. En ella se abordan aspectos como la conceptualización del comercio electrónico, los modelos de negocio digital, los elementos que lo conforman, el entorno digital, las ventajas, el estudio de mercado, los requerimientos técnicos y organizacionales, los procesos de implementación y la generación de valor agregado. En conjunto, el esquema permite visualizar de manera ordenada los contenidos necesarios para comprender, planificar y desarrollar negocios electrónicos competitivos en el entorno digital.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
