<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-stretch.mb-4
        .col-11.col-md-12.col-lg-8.order-2.order-lg-1(data-aos="fade-right")
          .rounded-3.overflow-hidden.h-100
            .row.align-items-stretch.h-100
              p El avance de las Tecnologías de la Información y la Comunicación (TIC) ha transformado la forma en que las organizaciones desarrollan sus actividades comerciales, creando nuevos escenarios de interacción entre empresas y consumidores. En este contexto, el comercio y los negocios electrónicos se consolidan como pilares de la economía digital, al permitir ampliar mercados, optimizar procesos y fortalecer la competitividad organizacional.
              .col-12.col-md-6.d-flex
                figure.mb-0.w-100
                  img(src="@/assets/curso/temas/intro/img2.png", alt="", style="width: 100%; height: 100%; object-fit: cover; min-height: 250px;")                            
              .col-12.col-md-6.d-flex.align-items-center
                .p-md-4.bg-color-2
                  p.mb-0.p-4.p-md-0 El comercio electrónico comprende las transacciones realizadas mediante plataformas digitales, integrando herramientas tecnológicas, sistemas de pago, logística y estrategias de <i>marketing</i> digital. Por su parte, los negocios electrónicos abarcan un enfoque más amplio, orientado a la gestión integral de procesos empresariales mediante recursos tecnológicos que favorecen la eficiencia y sostenibilidad de las organizaciones.
              p.mt-3 Por ello, es fundamental que el aprendiz conozca los fundamentos, características y aplicaciones de los negocios electrónicos en diferentes contextos productivos. Asimismo, el análisis del entorno digital y del mercado permite identificar oportunidades, comprender el comportamiento del consumidor y reconocer tendencias y dinámicas competitivas propias del entorno comercial actual.
        .col-8.col-sm-6.col-md-4.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center.justify-content-center(data-aos="zoom-in")
          figure.mb-0.w-100.text-center
            img.img-fluid(src="@/assets/curso/temas/intro/img1.png", alt="", style="width: 500px;")
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
