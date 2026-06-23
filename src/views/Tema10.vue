<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 10
        h1 Valor agregado en productos y servicios
      p(data-aos="fade-left") El valor agregado en productos y servicios reúne características, beneficios o atributos adicionales que permiten diferenciar la oferta y responder mejor a las necesidades de los clientes. En el comercio electrónico, este factor ayuda a atraer, fidelizar y mejorar la experiencia del usuario, fortaleciendo el posicionamiento de la empresa.
      Separador
      //- Inicio Tema10.1
      .row
        #t_10_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 10.1 Tipos de valor agregado	
      p(data-aos="fade-left") El valor agregado puede clasificarse según la forma en que impacta al cliente o al producto:
      //- Accordion
      .bg--img_03.mt-5(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t10/img1.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Valor agregado funcional")                  
                  p Se refiere a mejoras en las características del producto o servicio que aumentan su utilidad.
                  p <b>Ejemplo:</b>
                  p Un producto con mejores especificaciones técnicas o mayor durabilidad.
              .row(titulo="Valor agregado emocional")
                  p Se relaciona con la percepción del cliente hacia la marca o el producto.
                  p <b>Ejemplo:</b>
                  p Una marca que genera confianza o identificación con los clientes.
              .row(titulo="Valor agregado en el servicio")
                  p Incluye beneficios adicionales en la atención al cliente o en el proceso de compra.
                  p <b>Ejemplo:</b>
                  p Entrega rápida, atención personalizada o soporte en línea.
              .row(titulo="Valor agregado digital")
                  p Se basa en el uso de herramientas tecnológicas para mejorar la experiencia del usuario.
                  p <b>Ejemplo:</b>
                  p Plataformas intuitivas, seguimiento de pedidos o recomendaciones personalizadas.
      //- Accordion      
      Separador
      //- Inicio Tema10.2
      .row
        #t_10_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 10.2 Características del valor agregado en el entorno digital
      p(data-aos="fade-left") El valor agregado en los negocios electrónicos presenta características que lo hacen fundamental para la competitividad:
      .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t10/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Características:</b>
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-circle-right.me-3
              span Diferenciación frente a la competencia
            li.d-flex.mt-3
              i.fas.fa-circle-right.me-3
              span Mejora de la experiencia del usuario
            li.d-flex.mt-3
              i.fas.fa-circle-right.me-3
              span Adaptación a las necesidades del cliente
            li.d-flex.mt-3
              i.fas.fa-circle-right.me-3
              span Uso de tecnología para optimizar procesos
            li.d-flex.mt-3
              i.fas.fa-circle-right.me-3
              span Generación de confianza y fidelización
      p(data-aos="fade-left") Estas características permiten a las organizaciones ofrecer productos o servicios más atractivos y competitivos en el mercado digital.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Relación con la experiencia del usuario
      //- Título con imagen
      p(data-aos="fade-left") El valor agregado está directamente relacionado con la experiencia del usuario, ya que influye en la percepción del producto o servicio.      
      Separador
      //- Inicio Tema10.3
      .row
        #t_10_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 10.3 Importancia del valor agregado en el comercio electrónico
      p(data-aos="fade-left") El valor agregado cumple un papel fundamental en el éxito de los negocios electrónicos, ya que permite a las empresas destacarse en un entorno donde los clientes tienen múltiples opciones. Entre sus principales aportes se encuentran:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Requerimientos técnicos")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/t10/tarjeta01_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Aportes
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Incremento en la satisfacción del cliente.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Mayor probabilidad de compra.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Fidelización de usuarios.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Posicionamiento de la marca.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Ventaja competitiva en el mercado.
          .py-3.py-md-4(titulo="Ejemplo aplicado")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t10/tarjeta01_2.png')
              .col-md-6
                h4 Ejemplo aplicado
                p Una tienda en línea ofrece envíos gratuitos, atención personalizada y recomendaciones basadas en compras anteriores, lo que mejora la experiencia del cliente y aumenta la probabilidad de compra.
      Separador
      //- Inicio Tema10.4
      .row
        #t_10_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 10.4 Estrategias para generar valor agregado
      p(data-aos="fade-left") Las organizaciones pueden implementar diferentes estrategias para generar valor agregado en sus productos o servicios: 
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t10/tarjeta01_3.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Beneficios
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Personalización de la oferta.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Mejora en la atención al cliente.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Optimización de procesos de compra.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Implementación de tecnología innovadora.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Desarrollo de contenido informativo y relevante.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t10/tarjeta01_4.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo aplicado
                p Una empresa utiliza herramientas digitales para recomendar productos según las preferencias del usuario, mejorando la experiencia de compra.
                p Estas estrategias permiten aumentar la competitividad del negocio y fortalecer su presencia en el mercado.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Innovación como factor de valor agregado
      //- Título con imagen      
      p(data-aos="fade-left") La innovación constante permite a las organizaciones mantenerse competitivas y ofrecer propuestas diferenciadas en el mercado digital.
      Separador
      //- Inicio Tema10.5
      .row
        #t_10_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 10.5 Aplicación del valor agregado en los negocios electrónicos
      p(data-aos="fade-left") La aplicación del valor agregado permite a las organizaciones mejorar su oferta y adaptarse a las exigencias del entorno digital. Entre sus principales aplicaciones se encuentran:
      //- Accordion
      .bg--img_03.mt-5(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t10/img1.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Aplicabilidad")                  
                  ul.lista-ul.color-vinotinto-custom.mb-0
                    li.d-flex
                      i.fas.fa-circle-right.me-3
                      span Diferenciación de productos o servicios.
                    li.d-flex
                      i.fas.fa-circle-right.me-3
                      span Mejora de la experiencia del cliente.
                    li.d-flex
                      i.fas.fa-circle-right.me-3
                      span Incremento en las ventas.
                    li.d-flex
                      i.fas.fa-circle-right.me-3
                      span Fortalecimiento de la marca.
                    li.d-flex
                      i.fas.fa-circle-right.me-3
                      span Fidelización de clientes.
              .row(titulo="Ejemplo aplicado")                  
                  p Una empresa implementa un sistema de atención en línea, ofrece promociones personalizadas y garantiza entregas rápidas, logrando mejorar su posicionamiento en el mercado.
      p(data-aos="fade-left") La correcta aplicación del valor agregado permite a las organizaciones consolidarse en el entorno digital y generar ventajas competitivas sostenibles.
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
