<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Estudio de mercado en negocios electrónicos
      p(data-aos="fade-left") El estudio de mercado en los negocios electrónicos permite analizar el entorno digital, identificar oportunidades y comprender el comportamiento de los consumidores. Esta información facilita la toma de decisiones y el diseño de estrategias adaptadas a un mercado competitivo y en constante evolución.
      Separador
      //- Inicio Tema7.1
      .row
        #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.1 Tipos de estudio de mercado
      p(data-aos="fade-left") El estudio de mercado puede clasificarse según el tipo de información que se desea obtener y la forma en que se recopilan los datos:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Investigación de mercado primaria")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta01_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Investigación de mercado primaria
                p Se basa en la recolección directa de información a través de encuestas, entrevistas o formularios aplicados a los usuarios.
                p <b>Ejemplo</b>
                p Una empresa realiza encuestas en línea para conocer las preferencias de sus clientes sobre un producto.
          .py-3.py-md-4(titulo="Investigación de mercado secundaria")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta01_2.png')
              .col-md-6
                h4 Investigación de mercado secundaria
                p Utiliza información ya existente, como informes, estadísticas, estudios previos o bases de datos.
                p <b>Ejemplo</b>
                p Analizar reportes sobre tendencias de consumo en comercio electrónico.   
          .py-3.py-md-4(titulo="Investigación cualitativa")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta01_3.png')
              .col-md-6
                h4 Investigación cuantitativa
                p Se enfoca en comprender percepciones, opiniones y comportamientos de los usuarios.
                p <b>Ejemplo</b>
                p Analizar comentarios y opiniones en redes sociales.     
          .py-3.py-md-4(titulo="Investigación cuantitativa")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta01_4.png')
              .col-md-6
                h4 Investigación cuantitativa
                p Se basa en datos numéricos que permiten medir el comportamiento del mercado.
                p <b>Ejemplo</b>
                p Número de visitas a una página <i>web</i> o tasa de conversión.
      p(data-aos="fade-left") Los estudios de mercado emplean herramientas como encuestas digitales, formularios <i>web</i>, análisis de redes sociales y plataformas de analítica, las cuales permiten recopilar información relevante para apoyar la toma de decisiones en los negocios electrónicos.                
      Separador
      //- Inicio Tema7.2
      .row
        #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.2 Características del estudio de mercado digital	      
      .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t7/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El estudio de mercado en entornos digitales presenta características que lo diferencian del análisis tradicional:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-circle-right.me-3
              span Acceso a información en tiempo real
            li.d-flex.mt-3
              i.fas.fa-circle-right.me-3
              span Gran volumen de datos disponibles
            li.d-flex.mt-3
              i.fas.fa-circle-right.me-3
              span Facilidad para medir el comportamiento del usuario
            li.d-flex.mt-3
              i.fas.fa-circle-right.me-3
              span Segmentación precisa del mercado
            li.d-flex.mt-3
              i.fas.fa-circle-right.me-3
              span Uso de herramientas tecnológicas para análisis
      p(data-aos="fade-left") Estas características permiten a las organizaciones obtener información más precisa y actualizada, lo que facilita la toma de decisiones estratégicas.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Uso de herramientas digitales de análisis
      p(data-aos="fade-left") El estudio de mercado digital se apoya en herramientas tecnológicas que permiten analizar grandes volúmenes de datos y generar información útil para la organización.
      Separador
      //- Inicio Tema7.3
      .row
        #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.3 Análisis del entorno digital
      p(data-aos="fade-left") El análisis del entorno digital permite identificar las condiciones del mercado en el cual se desarrollará el negocio electrónico. Incluye aspectos como:
      .row.bg-fondo-2
        .col-12
          .p-2
            //- Inicio Tarjetas
            .row.justify-content-center.mt-3(data-aos="fade-left")
              .col-12.col-sm-9.col-md-6.col-lg-5.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t7/tarjeta02_1.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Aspectos                      
                      ul.lista-ul.color-vinotinto-custom.mb-0
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Tendencias del mercado.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Competencia digital.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Comportamiento del consumidor.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Oportunidades y amenazas.
              .col-12.col-sm-9.col-md-6.col-lg-5.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t7/tarjeta02_2.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Ejemplo aplicado
                      p Una empresa analiza qué productos tienen mayor demanda en internet y qué estrategias utilizan sus competidores para posicionarse.
                      p Este análisis permite definir estrategias más efectivas y reducir riesgos en la implementación del negocio.
                //- Fin Tarjetas
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Análisis DOFA en entornos digitales
      //- Título con imagen
      p(data-aos="fade-left") El análisis del entorno puede realizarse mediante herramientas como la matriz DOFA (Debilidades, Oportunidades, Fortalezas y Amenazas), la cual permite identificar factores internos y externos que afectan el negocio.
      Separador
      //- Inicio Tema7.4
      .row
        #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.4 Aplicación del estudio de mercado
      p(data-aos="fade-left") El estudio de mercado se utiliza para apoyar la toma de decisiones en la creación y desarrollo de un negocio electrónico. Entre sus principales aplicaciones se encuentran:
      .row.bg-fondo-2
        .col-12
          .p-2
            //- Inicio Tarjetas
            .row.justify-content-center.mt-3(data-aos="fade-left")
              .col-12.col-sm-9.col-md-6.col-lg-5.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t7/tarjeta03_1.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Aplicabilidad                      
                      ul.lista-ul.color-vinotinto-custom.mb-0
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Identificación de oportunidades de negocio.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Definición del público objetivo.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Diseño de estrategias de comercialización.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Evaluación de la competencia.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Ajuste de productos o servicios según la demanda.
              .col-12.col-sm-9.col-md-6.col-lg-5.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t7/tarjeta03_2.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Ejemplo aplicado
                      p Una empresa identifica que existe alta demanda de un producto específico en el mercado digital y decide enfocarse en ese segmento para desarrollar su negocio.
                      p El uso adecuado del estudio de mercado permite a las organizaciones reducir la incertidumbre, optimizar recursos y aumentar las probabilidades de éxito en el entorno digital.
                //- Fin Tarjetas  
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Toma de decisiones basada en datos
      //- Título con imagen
      p(data-aos="fade-left") El estudio de mercado permite a las organizaciones tomar decisiones estratégicas fundamentadas en datos reales, reduciendo la incertidumbre y mejorando la eficiencia.
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
