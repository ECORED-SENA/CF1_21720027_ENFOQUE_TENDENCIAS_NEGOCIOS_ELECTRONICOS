<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 9
        h1 Procesos de implementación de un negocio electrónico
      p(data-aos="fade-left") La implementación de un negocio electrónico comprende las actividades necesarias para poner en marcha una iniciativa comercial en el entorno digital. Este proceso requiere planificación, organización e integración de aspectos técnicos, organizacionales y estratégicos, con el fin de lograr una operación eficiente, coordinada y sostenible.
      Separador
      //- Inicio Tema9.1
      .row
        #t_9_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.1 Fases del proceso de implementación
      p(data-aos="fade-left") El proceso de implementación de un negocio electrónico puede organizarse en diferentes fases, las cuales permiten estructurar de manera ordenada el desarrollo del negocio:          
      //- Accordion
      .bg--img_03.mt-5(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t9/img1.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Fase de planificación")
                  p Se definen los objetivos del negocio, el público objetivo, el tipo de producto o servicio y las estrategias a implementar.
              .row(titulo="Fase de diseño")
                  p Se estructura el modelo de negocio, se seleccionan las herramientas tecnológicas y se diseña la plataforma digital.
              .row(titulo="Fase de desarrollo")
                  p Se construye la plataforma, se integran los sistemas de pago y se configuran los procesos operativos.
              .row(titulo="Fase de implementación")
                  p Se lanza el negocio al mercado y se inicia la operación comercial.
              .row(titulo="Fase de evaluación y mejora")
                  p Se analizan los resultados y se realizan ajustes para optimizar el funcionamiento del negocio.
      //- Accordion
      p(data-aos="fade-left") Durante la implementación de un negocio electrónico pueden presentarse riesgos técnicos, operativos o financieros que afectan el desarrollo del proceso. Por ello, es fundamental identificarlos, analizarlos y gestionarlos oportunamente, con el fin de reducir su impacto y garantizar una operación eficiente y segura.      
      Separador
      //- Inicio Tema9.2
      .row
        #t_9_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.2 Planeación del negocio digital
      p(data-aos="fade-left") La planeación es la etapa inicial del proceso de implementación y consiste en definir los aspectos fundamentales del negocio electrónico. Incluye:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t9/tarjeta01_1.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Etapas de planeación del negocio
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Definición de objetivos.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Identificación del público objetivo.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Análisis del mercado.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Selección del tipo de negocio.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Definición de estrategias.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t9/tarjeta01_2.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo aplicado
                p Una empresa define que venderá productos tecnológicos en línea, identifica su público objetivo y establece estrategias de <i>marketing</i> digital para posicionarse.
      p(data-aos="fade-left") Una adecuada planeación permite reducir riesgos, optimizar recursos y establecer una base sólida para el desarrollo del negocio electrónico. De esta manera, se facilita la organización de las actividades y se favorece una implementación más eficiente y sostenible.                
      Separador
      //- Inicio Tema9.3
      .row
        #t_9_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.3 Definición del producto o servicio
      p(data-aos="fade-left") En esta etapa se establece qué producto o servicio se ofrecerá en el entorno digital, teniendo en cuenta las necesidades del mercado y las oportunidades identificadas. Incluye:
      .row.bg-fondo-2
        .col-12
          .p-2
            //- Inicio Tarjetas
            .row.justify-content-center.mt-3(data-aos="fade-left")
              .col-12.col-sm-9.col-md-6.col-lg-5.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t9/tarjeta02_1.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 ¿Qué incluye un producto o servicio?
                      ul.lista-ul.color-vinotinto-custom.mb-0
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Características del producto o servicio
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Propuesta de valor
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Precio
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Diferenciación frente a la competencia
              .col-12.col-sm-9.col-md-6.col-lg-5.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t9/tarjeta02_2.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Ejemplo aplicado
                      p.text-center Una empresa decide ofrecer productos personalizados que respondan a necesidades específicas de los clientes.                      
                //- Fin Tarjetas
      p(data-aos="fade-left") Esta definición permite alinear la oferta con las necesidades del mercado, generar valor agregado para los clientes y mejorar la competitividad del negocio electrónico. De esta manera, se fortalece la propuesta comercial y se facilita su posicionamiento en el entorno digital.
      Separador
      //- Inicio Tema9.4
      .row
        #t_9_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.4 Estructuración del modelo de negocio
      p(data-aos="fade-left") La estructuración del modelo de negocio consiste en definir cómo funcionará el negocio electrónico y cómo generará ingresos. Incluye:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t9/tarjeta03_1.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 ¿Qué incluye la estructuración del modelo de negocio?
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Tipo de modelo de negocio (tienda en línea, marketplace, suscripción, etc.).
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Canales de distribución.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Fuentes de ingresos.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Relación con los clientes.                  
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t9/tarjeta03_2.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo aplicado
                p Una empresa decide implementar un modelo de tienda en línea con ventas directas al consumidor.
      p(data-aos="fade-left") Esta etapa permite organizar la operación del negocio, definir la estrategia comercial y establecer la estructura financiera necesaria para su funcionamiento. De esta manera, se facilita la planificación de las actividades y se fortalece la viabilidad del negocio electrónico.                  
      Separador
      //- Inicio Tema9.5
      .row
        #t_9_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.5 Puesta en marcha del negocio electrónico
      p(data-aos="fade-left") La puesta en marcha corresponde al momento en el cual el negocio entra en operación y comienza a interactuar con los clientes. Incluye:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Incluye")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/t9/tarjeta04_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Incluye
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Publicación de la plataforma digital.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Activación de medios de pago.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Inicio de campañas de <i>marketing</i>.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Gestión de pedidos y atención al cliente.
          .py-3.py-md-4(titulo="Ejemplo aplicado")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t9/tarjeta04_2.png')
              .col-md-6
                h4 Ejemplo aplicado
                p Una tienda virtual es publicada en internet, se activan los sistemas de pago y se inicia la promoción en redes sociales.
      p(data-aos="fade-left") Esta etapa permite iniciar la operación comercial del negocio electrónico, validar el funcionamiento del sistema y recibir retroalimentación de los clientes. De esta manera, se pueden identificar oportunidades de mejora y realizar ajustes que fortalezcan la experiencia del usuario y la eficiencia del negocio.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Aplicación de los procesos en el negocio electrónico
      p(data-aos="fade-right") La aplicación de estos procesos permite desarrollar un negocio electrónico de manera estructurada y eficiente. Entre sus principales beneficios se encuentran:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t9/tarjeta05_1.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Beneficios
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Organización de las actividades del negocio.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Reducción de errores en la implementación.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Mejor aprovechamiento de los recursos.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Mayor probabilidad de éxito en el mercado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t9/tarjeta05_2.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo aplicado
                p Una empresa sigue todas las fases del proceso, desde la planeación hasta la puesta en marcha, logrando implementar un negocio digital funcional y competitivo.
      p(data-aos="fade-left") El seguimiento adecuado de estos procesos garantiza que el negocio electrónico cumpla con los requerimientos establecidos y se adapte a las condiciones del entorno digital.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Indicadores de éxito del negocio
      .row.mb-5.justify-content-center.align-items-stretch(data-aos="fade-left")
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center(data-aos="fade-left")
          figure.mb-0.w-100.text-center
            img(src='@/assets/curso/temas/t9/img2.png' alt='' style="width: 500px").img-fluid.m-auto
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-8.p-4.d-flex.flex-column.justify-content-center(data-aos="fade-right")          
            p El éxito del negocio puede evaluarse mediante:
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Número de ventas.
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Tráfico <i>web.</i>
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Conversión de clientes.
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Satisfacción del usuario.
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
