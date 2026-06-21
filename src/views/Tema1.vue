<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Conceptualización del comercio y negocio electrónico
      p(data-aos="fade-left") La conceptualización del comercio y negocio electrónico permite comprender cómo las tecnologías digitales transforman las actividades comerciales y empresariales. En esta unidad se estudiarán los conceptos de comercio electrónico y negocio electrónico, sus diferencias y su importancia en la economía digital.
      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Definición de comercio electrónico
      //- Inicio Accordion
      p(data-aos="fade-left") El comercio electrónico corresponde al conjunto de transacciones comerciales realizadas mediante internet y plataformas digitales, permitiendo la compra y venta de productos o servicios de forma rápida, segura y accesible. A continuación, se detallará sus características, aspectos fundamentales, beneficios y elementos técnicos.
      .bg--img_03.mt-5
      .row.justify-content-center
        .col-lg-3 
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t1/img1.png", alt="").img400.m-auto
        .col-lg-9
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Características")
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Uso de plataformas digitales.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Disponibilidad permanente.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Interacción virtual entre cliente y empresa.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Automatización de procesos comerciales.
            .row(titulo="Aspectos fundamentales")
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Sitios web o aplicaciones.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Medios de pago electrónicos.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Plataformas digitales.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Sistemas logísticos y de distribución.
            .row(titulo="Beneficios")
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Acceso a mercados amplios.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Reducción de costos operativos.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Facilidad de compra para el usuario.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Mayor competitividad empresarial.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Experiencia de usuario eficiente y segura.
            .row(titulo="Elementos técnicos")
                p El funcionamiento del comercio electrónico se basa en una arquitectura tecnológica compuesta por diferentes elementos que interactúan entre sí para permitir las transacciones digitales:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span <b>Frontend (interfaz de usuario):</b> corresponde a la parte visible de la plataforma, donde el usuario navega, consulta productos y realiza compras.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span <b>Backend (servidor):</b> se encarga de procesar la información, gestionar las operaciones y conectar los diferentes componentes del sistema.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span <b>Base de datos:</b> almacena la información relacionada con productos, clientes, pedidos y transacciones.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span <b>Pasarelas de pago:</b> permiten procesar los pagos electrónicos de manera segura.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span <b>Sistemas logísticos:</b> gestionan el almacenamiento, despacho y entrega de los productos.
      //- Fin Accordion
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Definición de negocio electrónico
      p(data-aos="fade-left") El negocio electrónico o <i>e-business</i> comprende el conjunto de procesos empresariales desarrollados mediante tecnologías digitales. Es un concepto más amplio que el de comercio electrónico, incluye actividades comerciales, administrativas y organizacionales orientadas a mejorar la operación de la empresa. Los aspectos fundamentales del negocio electrónico son:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Alcance del negocio electrónico")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Alcance del negocio electrónico
                p El negocio electrónico no se limita a la compra y venta en línea. También integra procesos como:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Gestión organizacional.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Comunicación con proveedores.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Atención al cliente.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Administración de recursos.
          .py-3.py-md-4(titulo="Integración de áreas funcionales")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-md-6
                h4 Integración de áreas funcionales
                p El negocio electrónico integra áreas como:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Mercadeo
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Ventas
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Logística
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Finanzas
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Recursos humanos
                P Esto permite optimizar procesos, reducir costos y mejorar la competitividad empresarial.
          .py-3.py-md-4(titulo="Características del negocio electrónico")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-md-6
                h4 Características del negocio electrónico
                p El negocio electrónico se caracteriza por:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Transformación digital.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Uso estratégico de tecnologías.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Innovación empresarial.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Planeación y objetivos organizacionales.
          .py-3.py-md-4(titulo="Importancia en las organizaciones")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_4.png')
              .col-md-6
                h4 Importancia en las organizaciones
                p El negocio electrónico permite a las empresas adaptarse a los cambios del mercado, aprovechar oportunidades digitales y generar ventajas competitivas sostenibles.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Para comprender este tema, se presenta el siguiente ejemplo:
      .row.mb-5.justify-content-center.align-items-stretch
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center(data-aos="fade-left")
          figure.mb-0.w-100.text-center
            img(src='@/assets/curso/temas/t1/img2.png' alt='' style="width: 500px").img-fluid.m-auto
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-3.p-4.d-flex.flex-column.justify-content-center(data-aos="fade-right")
          h4 Ejemplo aplicado de negocio electrónico:
          p Una empresa que implementa un negocio electrónico no solo se limita a vender productos en línea, sino que integra diferentes procesos digitales como la gestión de inventarios mediante sistemas automatizados, el uso de plataformas de atención al cliente en línea, el análisis de datos de ventas para la toma de decisiones y la coordinación de la logística de distribución.
          p.mb-0 De esta manera, el negocio electrónico permite optimizar la operación de la organización en su totalidad, mejorando la eficiencia y la competitividad en el entorno digital.
      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Diferencias entre comercio y negocio electrónico
      .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img3.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Aunque el comercio electrónico y el negocio electrónico suelen confundirse, presentan diferencias importantes. El comercio electrónico se enfoca en la compra y venta de productos o servicios mediante medios digitales. En cambio, el negocio electrónico abarca todos los procesos de la organización apoyados en tecnologías digitales, incluyendo gestión administrativa, logística y comunicación. En este sentido, el comercio electrónico hace parte del negocio electrónico, el cual tiene un alcance más amplio dentro del entorno empresarial. 
      p.mb-5(data-aos="fade-left") La siguiente tabla presenta una comparación entre el comercio electrónico y el negocio electrónico, destacando sus principales diferencias en aspectos como enfoque, alcance, objetivo y uso de la tecnología.
      //- Inicio Tabla
      .row.bg-fondo-2
        .col-12
          .p-2
            .row.justify-content-center.mb-5(data-aos="fade-left")
              .col-lg-8.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 1.
                  span  Comparación entre comercio y negocio electrónicos
                .tabla-a
                  table
                    thead
                      tr
                        th.text-center(style="width: 33%") Aspecto
                        th.text-center(style="width: 33%") Comercio Electrónico
                        th.text-center(style="width: 33%") Negocio Electrónico
                    tbody
                      tr
                        td Enfoque
                        td Transacciones comerciales
                        td Gestión integral de la empresa
                      tr
                        td Alcance
                        td Compra y venta en línea
                        td Todos los procesos organizacionales
                      tr
                        td Objetivo
                        td Generar ventas
                        td Optimizar la operación del negocio
                      tr
                        td Uso de tecnología
                        td En ventas digitales
                        td En toda la organización
                      tr
                        td Ejemplo
                        td Tienda virtual
                        td Empresa digitalizada
            //- FinTabla
      p(data-aos="fade-left") Esta comparación permite diferenciar claramente el alcance de cada concepto dentro del entorno digital.
      Separador
      //- Inicio Tema1.5
      .row
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Importancia en la economía digital
      p(data-aos="fade-left") El comercio electrónico cumple un papel fundamental en la economía digital, ya que facilita el intercambio de bienes y servicios a través de medios digitales, al tiempo que fortalece la innovación, la competitividad y el crecimiento económico. Además, su importancia radica en que permite:
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
                          img(src='@/assets/curso/temas/t1/tarjeta02_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Acceso a nuevos mercados
                            p A través del comercio electrónico, las empresas pueden ampliar su alcance, llegar a clientes en diferentes lugares y diversificar sus canales de venta.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta02_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Nuevos hábitos del consumidor
                            p Los consumidores digitales buscan rapidez, comodidad, disponibilidad permanente y facilidad para acceder a productos o servicios desde distintos dispositivos.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta02_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Optimización de costos y procesos
                            p El comercio electrónico permite reducir costos operativos, optimizar procesos logísticos y mejorar la gestión comercial mediante herramientas digitales.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta02_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Personalización de la oferta
                            p El uso de datos y herramientas analíticas permite conocer las preferencias del consumidor, segmentar el mercado y ofrecer productos o servicios más ajustados a sus necesidades.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta02_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Nuevos modelos de negocio
                            p El comercio electrónico impulsa la creación de emprendimientos, modelos de negocio innovadores y soluciones digitales que dinamizan la economía.
                    .col-lg-3.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t1/img4.png', style="width: 450px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-5.p-4.rounded-4           
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/icono.svg', style="width: 80px")          
            .flex-grow-1.text-center.text-lg-start              
              p.mb-0 El comercio electrónico fortalece la economía digital al ampliar mercados, mejorar la experiencia del consumidor, optimizar procesos y generar nuevas oportunidades de negocio.
      p(data-aos="fade-right") El impacto del comercio electrónico en la economía digital puede evaluarse mediante indicadores clave de desempeño (KPI), los cuales permiten medir su crecimiento y efectividad. Estos son:
      //- Inicio Tarjetas
      .row.justify-content-center.mt-5.mb-5(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-3.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t1/tarjeta03_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Tráfico web
                p.text-center.mb-0 Cantidad de usuarios que visitan una plataforma digital.
        .col-12.col-sm-9.col-md-6.col-lg-3.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t1/tarjeta03_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Tasa de conversión
                p.text-center.mb-0 Porcentaje de usuarios que realizan una compra.
        .col-12.col-sm-9.col-md-6.col-lg-3.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t1/tarjeta03_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Volumen de ventas
                p.text-center.mb-0 Ingresos generados a través de canales digitales.
        .col-12.col-sm-9.col-md-6.col-lg-3.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t1/tarjeta03_4.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Alcance de mercado
                p.text-center.mb-0 expansión a nuevos segmentos o regiones.
          //- Fin Tarjetas
      p(data-aos="fade-right") El análisis de estos indicadores permite a las organizaciones tomar decisiones estratégicas y mejorar su desempeño en el entorno digital.



</template>

<script>
export default {
  name: 'Tema1',
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
