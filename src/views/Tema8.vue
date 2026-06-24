<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 8
        h1 Requerimientos del negocio electrónico
      p(data-aos="fade-left") Los requerimientos del negocio electrónico son las condiciones, recursos y elementos necesarios para implementar y mantener un negocio en entornos digitales. Su identificación permite definir aspectos técnicos, organizacionales y estratégicos que garanticen una operación eficiente, segura y competitiva.      
      Separador
      //- Inicio Tema8.1
      .row
        #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.1 Tipos de requerimientos del negocio electrónico
      p(data-aos="fade-left") Los requerimientos del negocio electrónico pueden clasificarse según su naturaleza y función dentro de la organización:
      .row.bg-fondo-1
        .col-12
          .p-5
            //- Carrusel
            .bg-full-width.mt-5(data-aos="fade-left")
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-9.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t8/tarjeta01_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Requerimientos técnicos
                            p.text-center Se relacionan con la infraestructura tecnológica necesaria para el funcionamiento del negocio digital.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t8/tarjeta01_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Requerimientos organizacionales
                            p.text-center Corresponden a la estructura interna de la empresa, incluyendo talento humano, procesos y gestión administrativa.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t8/tarjeta01_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Requerimientos legales y normativos
                            p.text-center Incluyen las leyes, regulaciones y políticas que deben cumplirse para operar en el entorno digital.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t8/tarjeta01_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Requerimientos estratégicos
                            p.text-center Se enfocan en la planificación del negocio, definición de objetivos y posicionamiento en el mercado..
                    .col-lg-3.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t8/img1.png', style="width: 450px", data-aos="zoom-in").m-auto            
                p(data-aos="fade-left") Esta clasificación permite organizar de manera estructurada los elementos necesarios para la implementación del negocio electrónico.            
            Separador
      //- Inicio Tema8.2
      .row
        #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.2 Requerimientos técnicos
      p(data-aos="fade-left") Los requerimientos técnicos son fundamentales para garantizar el funcionamiento del negocio electrónico, ya que permiten la operación de las plataformas digitales y la gestión de la información. Entre los principales requerimientos técnicos se encuentran:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Requerimientos técnicos")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/t8/tarjeta02_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Requerimientos técnicos                
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Infraestructura tecnológica (servidores, <i>hosting</i>, bases de datos).
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Plataformas de comercio electrónico.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Sistemas de pago electrónico.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Seguridad informática.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Conectividad a internet.
          .py-3.py-md-4(titulo="Ejemplo aplicado")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t8/tarjeta02_2.png')
              .col-md-6
                h4 Ejemplo aplicado
                p Una empresa que desea implementar una tienda virtual debe contar con un sitio <i>web</i> funcional, una base de datos para gestionar productos y clientes, y un sistema de pago que permita realizar transacciones seguras.
      .row.mb-5.justify-content-center.align-items-stretch(data-aos="fade-left")
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center(data-aos="fade-left")
          figure.mb-0.w-100.text-center
            img(src='@/assets/curso/temas/t8/img2.png' alt='' style="width: 500px").img-fluid.m-auto
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-6.p-4.d-flex.flex-column.justify-content-center(data-aos="fade-right")          
            p La adecuada implementación de estos requerimientos permite:
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Garantizar la disponibilidad del servicio
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Proteger la información del usuario
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Facilitar la operación del negocio      
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Priorización de requerimientos técnicos
      //- Título con imagen
      p(data-aos="fade-left") Los requerimientos técnicos pueden clasificarse en:
      .row.bg-fondo-2
        .col-12
          .p-2
            //- Inicio Tarjetas
            .row.justify-content-center(data-aos="fade-left")
              .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t8/tarjeta03_1.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Básicos                      
                      p.text-center Necesarios para iniciar el negocio.
              .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t8/tarjeta03_2.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Avanzados
                      p.text-center Permiten optimizar y escalar el negocio.
                //- Fin Tarjetas
      p(data-aos="fade-left") Esta priorización facilita la planificación del desarrollo del negocio electrónico.
      Separador
      //- Inicio Tema8.3
      .row
        #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.3 Requerimientos organizacionales
      p(data-aos="fade-left") Los requerimientos organizacionales hacen referencia a la estructura interna de la empresa y a los recursos humanos necesarios para la gestión del negocio electrónico. Incluyen:
      .row.bg-fondo-2
        .col-12
          .p-2
            //- Inicio Tarjetas
            .row.justify-content-center.mt-5(data-aos="fade-left")
              .col-12.col-sm-9.col-md-6.col-lg-5.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t8/tarjeta04_1.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Requerimientos organizacionales                      
                      ul.lista-ul.color-vinotinto-custom.mb-0
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Personal capacitado en tecnologías digitales.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Definición de roles y responsabilidades.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Procesos internos de operación.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Gestión administrativa y financiera.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Atención al cliente.
              .col-12.col-sm-9.col-md-6.col-lg-5.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t8/tarjeta04_2.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Ejemplo aplicado
                      p Una empresa debe contar con personal encargado de la gestión de la tienda virtual, atención de pedidos y soporte al cliente.
                      p Estos requerimientos permiten:
                      ul.lista-ul.color-vinotinto-custom.mb-0
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Organizar las actividades del negocio
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Mejorar la eficiencia operativa
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Mejorar la eficiencia operativa
                //- Fin Tarjetas
      p(data-aos="fade-right") Las organizaciones deben contar con personal capacitado en herramientas digitales, <i>marketing</i> y gestión tecnológica para garantizar el éxito del negocio.                
      Separador
      //- Inicio Tema8.4
      .row
        #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.4 Políticas de la organización
      p(data-aos="fade-left") Las políticas organizacionales son lineamientos que regulan el funcionamiento del negocio electrónico y orientan la toma de decisiones dentro de la empresa. Entre las principales políticas se encuentran:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t8/tarjeta05_1.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Principales políticas                
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Políticas de privacidad de datos.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Políticas de seguridad de la información.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Políticas de devoluciones y garantías.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Políticas de servicio al cliente.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Políticas de uso de plataformas digitales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t8/tarjeta05_2.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo aplicado
                p Una tienda en línea establece políticas claras sobre devoluciones y protección de datos para generar confianza en los clientes.
      .row.bg-fondo-3
        .col-12
          .p-2
            .row.mb-5.justify-content-center.align-items-stretch
              .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center(data-aos="fade-left")
                figure.mb-0.w-100.text-center
                  img(src='@/assets/curso/temas/t8/img3.png' alt='' style="width: 500px").img-fluid.m-auto
              .col-12.col-lg-5.order-2.order-lg-1.bg-color-7.p-4.d-flex.flex-column.justify-content-center(data-aos="fade-right")
                p Las políticas organizacionales permiten::
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex.mt-3
                    i.fas.fa-circle-right.me-3
                    span Establecer normas claras de operación
                  li.d-flex.mt-3
                    i.fas.fa-circle-right.me-3
                    span Generar confianza en los usuarios
                  li.d-flex.mt-3
                    i.fas.fa-circle-right.me-3
                    span Cumplir con regulaciones legales
                p.mt-3 Las políticas deben alinearse con las normativas legales vigentes en protección de datos y comercio electrónico.
      Separador
      //- Inicio Tema8.5
      .row
        #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.5 Recursos necesarios para la implementación
      p(data-aos="fade-left") La implementación de un negocio electrónico requiere la disponibilidad de diversos recursos que permitan su desarrollo y sostenibilidad. Entre los principales recursos se encuentran:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t8/tarjeta06_1.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Principales recursos
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Recursos tecnológicos
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Recursos humanos
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Recursos financieros
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Recursos informativos
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t8/tarjeta06_2.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo aplicado
                p Una empresa necesita invertir en tecnología, contratar personal capacitado y definir un presupuesto para la operación del negocio.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t8/tarjeta06_3.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ventas de los recursos
                p Estos recursos permiten:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Iniciar el negocio electrónico.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Mantener su funcionamiento.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Adaptarse a los cambios del mercado.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Aplicación de los requerimientos en el negocio electrónico
      //- Título con imagen
      p(data-aos="fade-left") La correcta identificación y gestión de los requerimientos permite implementar un negocio electrónico de manera eficiente y alineada con las necesidades del mercado. Entre sus principales aplicaciones se encuentran:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Requerimientos técnicos")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/t8/tarjeta07_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Principales aplicaciones
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Planificación del negocio digital.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Definición de la estructura organizacional.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Implementación de plataformas tecnológicas.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Establecimiento de políticas internas.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Optimización de recursos.
          .py-3.py-md-4(titulo="Ejemplo aplicado")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t8/tarjeta07_2.png')
              .col-md-6
                h4 Ejemplo aplicado
                p Una empresa analiza sus necesidades, define sus recursos tecnológicos y humanos, establece políticas de operación y lanza su tienda virtual al mercado.
      .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t8/img4.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-5 El cumplimiento de estos requerimientos permite:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-circle-right.me-3
              span Reducir riesgos
            li.d-flex
              i.fas.fa-circle-right.me-3
              span Mejorar la eficiencia
            li.d-flex
              i.fas.fa-circle-right.me-3
              span Aumentar la competitividad
            li.d-flex
              i.fas.fa-circle-right.me-3
              span Garantizar la sostenibilidad del negocio
      .row.justify-content-center.mb-4.mt-5(data-aos="fade-left")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-5.p-4.rounded-4           
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/icono2.svg', style="width: 80px")          
            .flex-grow-1.text-center.text-lg-start              
              h4 Asignación eficiente de recursos:
              p La correcta distribución de recursos permite optimizar la operación y mejorar la rentabilidad del negocio.
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
