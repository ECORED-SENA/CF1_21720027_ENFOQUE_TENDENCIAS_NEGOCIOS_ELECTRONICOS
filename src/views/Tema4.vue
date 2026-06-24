<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Elementos del comercio electrónico
      p(data-aos="fade-left") El comercio electrónico está compuesto por elementos tecnológicos, operativos y estratégicos que permiten realizar transacciones digitales, gestionar información y satisfacer al cliente. Comprenderlos facilita la implementación eficiente de negocios electrónicos y la identificación de los recursos necesarios para su funcionamiento.
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Infraestructura tecnológica
      p(data-aos="fade-left") La infraestructura tecnológica constituye la base del comercio electrónico, ya que soporta todas las operaciones digitales del negocio. Incluye los recursos físicos y lógicos necesarios para el almacenamiento, procesamiento y transmisión de la información. Los principales componentes y elementos fundamentales.       
      .row.bg-fondo-2
        .col-12
          .p-2
            //- Inicio Tarjetas
            .row.justify-content-center.mt-3(data-aos="fade-left")
              .col-12.col-sm-9.col-md-6.col-lg-5.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t4/tarjeta01_1.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Principales componentes
                      ul.lista-ul.color-vinotinto-custom.mb-0
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Servidores <i>web</i> y de aplicaciones
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Bases de datos
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Sistemas operativos
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Redes de comunicación
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Servicios de <i>hosting</i>
              .col-12.col-sm-9.col-md-6.col-lg-5.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t4/tarjeta01_2.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Elementos fundamentales
                      p Una infraestructura tecnológica adecuada permite:
                      ul.lista-ul.color-vinotinto-custom.mb-0
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Alta disponibilidad del sistema
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Escalabilidad del negocio
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Protección de la información
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Respuesta eficiente a la demanda de usuarios
                //- Fin Tarjetas
      p(data-aos="fade-left") Para mayor comprensión de lo que es la infraestructura tecnológica, se tiene el siguiente ejemplo:                
      .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img.png')})` }")
        .bloque-texto-g__texto.p-4
          h4 Ejemplo aplicado:<br><br>
          p.mb-0 Una empresa que comercializa productos en línea necesita contratar un servicio de <i>hosting</i> para alojar su página <i>web</i>, implementar una base de datos para gestionar productos y clientes, y contar con una conexión estable a internet para garantizar el acceso continuo.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Tipos de infraestructura tecnológica
      //- Título con imagen
      p(data-aos="fade-left") La infraestructura tecnológica puede clasificarse según el tipo de servicio utilizado:
      //- Inicio Tarjetas
      .row.justify-content-center.mt-5(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t4/tarjeta02_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 <i>Hosting</i> compartido
                p.text-center Varios sitios <i>web</i> comparten un mismo servidor, ideal para proyectos pequeños.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t4/tarjeta02_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Servidor VPS (<i>Virtual Private Server</i>)
                p.text-center Ofrece mayor control y recursos dedicados.                
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t4/tarjeta02_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Computación en la nube (<i>Cloud</i>)
                p.text-center Permite escalabilidad y alta disponibilidad mediante servicios distribuidos.                
      //- Fin Tarjetas
      p El comercio electrónico opera mediante una arquitectura cliente-servidor, en la que el usuario accede a la plataforma desde un navegador y el servidor procesa las solicitudes. Una infraestructura adecuada garantiza rendimiento, seguridad y escalabilidad en el negocio electrónico.
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Plataformas digitales
      p(data-aos="fade-left") Las plataformas digitales son los espacios donde se desarrollan las transacciones comerciales y la interacción entre la empresa y los clientes. Representan el punto de contacto principal del negocio electrónico. Estas plataformas pueden adoptar diferentes formas, tienen características y funcionalidades; estas se detallan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t4/tarjeta03_1.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Formas que adopta
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Sitios <i>web</i> de comercio electrónico.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Aplicaciones móviles
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span <i>Marketplaces</i>
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t4/tarjeta03_2.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Características fundamentales                
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Facilidad de navegación
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Diseño atractivo
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Compatibilidad con dispositivos móviles
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Rapidez de carga
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Seguridad en la interacción
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t4/tarjeta03_3.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Funcionalidades
                p Además, las plataformas digitales permiten implementar funcionalidades como:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Carrito de compras
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Gestión de usuarios
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Seguimiento de pedidos
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Integración con sistemas de pago
      //- Fin Slideshow
      p.mt-5(data-aos="fadae-left") Para facilitar la comprensión del tema, se presenta el siguiente ejemplo.
      .row.bg-fondo-3
        .col-12
          .p-2
            .row.mb-5.justify-content-center.align-items-stretch              
              .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0.d-flex.align-items-center(data-aos="fade-left")
                figure.mb-0.w-100.text-center
                  img(src='@/assets/curso/temas/t4/img1.png' alt='' style="width: 500px").img-fluid.m-auto
              .col-12.col-lg-5.order-2.order-lg-2.bg-color-6.p-4.d-flex.flex-column.justify-content-center(data-aos="fade-right")
                h4 Ejemplo aplicado:
                p Una empresa que vende calzado puede desarrollar su propia tienda virtual o utilizar un <i>marketplace</i> para ofrecer sus productos, permitiendo a los clientes visualizar el catálogo, seleccionar productos y realizar compras.
      p(data-aos="fade-left") La calidad de la plataforma influye directamente en la experiencia del usuario, la tasa de conversión y la fidelización del cliente.                  
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Experiencia de usuario (UX) y diseño de interfaz (UI)
      //- Título con imagen
      p(data-aos="fade-left") En las plataformas digitales, la experiencia de usuario (UX) y el diseño de interfaz (UI) son elementos clave para el éxito del negocio electrónico.
      .row.bg-fondo-2
        .col-12
          .p-2
            //- Inicio Tarjetas
            .row.justify-content-center.mt-3(data-aos="fade-left")
              .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t4/tarjeta04_1.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 UX (<i>User Experience</i>)
                      p.text-center Se enfoca en la facilidad de uso, navegación y satisfacción del usuario.
              .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t4/tarjeta04_2.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 UI (<i>User Interface</i>)
                      p.text-center Corresponde al diseño visual de la plataforma, incluyendo colores, tipografía y estructura.                      
                //- Fin Tarjetas
      p(data-aos="fade-left") Una plataforma bien diseñada mejora la interacción del usuario, incrementa la tasa de conversión y reduce el abandono de compras.                
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Medios de pago electrónicos
      p(data-aos="fade-left") Los medios de pago electrónicos permiten realizar transacciones económicas de manera segura y eficiente en entornos digitales. Son un elemento esencial para la viabilidad del comercio electrónico. Entre los principales medios de pago y aspectos fundamentales se encuentran:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t4/tarjeta05_1.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Principales medios de pago
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Tarjetas de crédito y débito
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Transferencias bancarias
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Billeteras digitales
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Pasarelas de pago
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t4/tarjeta05_2.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo aplicado de medios de pago
                p Un cliente realiza una compra en una tienda virtual y utiliza su tarjeta de crédito para efectuar el pago a través de una pasarela electrónica que valida la operación en tiempo real.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t4/tarjeta05_3.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aspectos fundamentales
                p Los aspectos fundamentales de los medios de pago:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Seguridad en la transacción.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Rapidez en el procesamiento.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Facilidad de uso.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Disponibilidad de múltiples opciones.
      //- Fin Slideshow
      p(data-aos="fade-left") La diversidad de medios de pago permite atender diferentes tipos de clientes y mejorar la accesibilidad del servicio.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Proceso de transacción electrónica
      //- Título con imagen
      .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img3.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-5 El proceso de pago en el comercio electrónico sigue una secuencia estructurada:          
          ol.lista-ol--cuadro.ms-4
            li.d-flex.mb-3.mt-3 
              .lista-ol--cuadro__vineta
                span 1
              | El usuario selecciona el producto y elige el medio de pago.
            li.d-flex.mb-3 
              .lista-ol--cuadro__vineta
                span 2
              | La información es enviada a una pasarela de pago.
            li.d-flex.mb-3 
              .lista-ol--cuadro__vineta
                span 3
              | La entidad financiera valida la transacción.
            li.d-flex.mb-3 
              .lista-ol--cuadro__vineta
                span 4
              | Se confirma el pago y se genera la orden de compra.
      p.mt-3(data-aos="fade-left") Este proceso garantiza la seguridad, validación y registro de cada transacción realizada en la plataforma digital.
      Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Seguridad en transacciones
      p La seguridad es un componente crítico en el comercio electrónico, ya que protege la información sensible de los usuarios y garantiza la confiabilidad del sistema. A continuación, se presentarán los mecanismos que incluye y ejemplo aplicado para mayor comprensión el tema:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Mecanismos que incluye")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta06_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Mecanismos que incluye
                p Incluye mecanismos como:                
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Cifrado de datos.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Protocolos de seguridad (SSL).
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Autenticación de usuarios.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Sistemas de detección de fraude.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Protección contra ataques informáticos.
          .py-3.py-md-4(titulo="Ejemplo aplicado")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta06_2.png')
              .col-md-6
                h4 Ejemplo aplicado
                p Cuando un usuario realiza una compra en línea, la información de su tarjeta debe ser cifrada para evitar accesos no autorizados.                
                p La implementación de medidas de seguridad permite:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Generar confianza en los clientes
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Reducir riesgos de fraude
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Proteger la reputación de la empresa
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Cumplir con normativas de protección de datos
      p(data-aos="fade-left") Además, la seguridad debe ser un proceso continuo, que incluya actualizaciones constantes y monitoreo permanente del sistema.                    
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Normativas y estándares de seguridad
      //- Título con imagen 
      p(data-aos="fade-left") La seguridad en el comercio electrónico debe cumplir con estándares y normativas que garanticen la protección de la información:      
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t4/tarjeta07_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 PCI DSS (<i>Payment Card Industry Data Security Standard</i>)
                p.text-center Regula la seguridad en el manejo de datos de tarjetas.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t4/tarjeta07_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Protección de datos personales
                p.text-center Cumplimiento de leyes de privacidad.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t4/tarjeta07_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Certificados digitales SSL/TLS
                p.text-center Garantizan la comunicación segura entre usuario y servidor.
      //- Fin Tarjetas
      p(data-aos="fade-left") El cumplimiento de estas normativas fortalece la confianza del usuario y reduce los riesgos de vulnerabilidad en el sistema.
      Separador
      //- Inicio Tema4.5
      .row
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Logística y distribución
      p(data-aos="fade-left") Para este tema se invita a reproducir el siguiente video que explicará cómo la logística y la distribución permiten gestionar pedidos, entregas y devoluciones en el comercio electrónico, garantizando una mejor experiencia para el cliente y mayor eficiencia en el negocio digital.    
      //- Inicio Video
      figure.mb-5(data-aos="fade-down")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/nHjl83QvSUw?si=PYOSxqLdAk88V5nb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //- Fin Video
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
