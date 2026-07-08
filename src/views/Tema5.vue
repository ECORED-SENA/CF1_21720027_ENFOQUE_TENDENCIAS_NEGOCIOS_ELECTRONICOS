<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Entorno digital y herramientas del mercado
      p(data-aos="fade-left") El entorno digital es el espacio donde se desarrollan las actividades del comercio electrónico, mediante el uso de tecnologías, plataformas y canales de comunicación que facilitan la interacción entre empresas y usuarios. Su constante evolución exige que las organizaciones se adapten a los cambios del mercado, identifiquen oportunidades de negocio y diseñen estrategias para posicionar sus productos o servicios.
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Tipos de herramientas del entorno digital
      p(data-aos="fade-left") Dentro del entorno digital existen diversas herramientas que facilitan la interacción, promoción y comercialización de productos o servicios. Estas herramientas se pueden clasificar de la siguiente manera:
      .bg--img_03.mt-5(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img1.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Motores de búsqueda")
                  p Son plataformas que permiten a los usuarios encontrar información en internet mediante palabras clave.
                  p <b>Ejemplo:</b> cuando un usuario busca un producto en internet, utiliza un motor de búsqueda que le muestra diferentes opciones disponibles.
              .row(titulo="Redes sociales")
                  p Son plataformas digitales que permiten la interacción entre usuarios y empresas, facilitando la comunicación, promoción y posicionamiento de productos o servicios.
                  p <b>Ejemplo:</b> una empresa pública contenido sobre sus productos para atraer clientes potenciales.
              .row(titulo="Plataformas de publicidad digital")
                  p Permiten a las empresas promocionar sus productos o servicios mediante anuncios dirigidos a públicos específicos.
                  p <b>Ejemplo:</b> anuncios que aparecen mientras el usuario navega en internet o utiliza aplicaciones.
              .row(titulo="Herramientas de analítica digital")
                  p Permiten recopilar y analizar datos sobre el comportamiento de los usuarios en plataformas digitales.
                  p <b>Ejemplo:</b> medir cuántas personas visitan una página <i>web</i> y qué productos consultan.
              .row(titulo="Plataformas de contenido digital")
                  p Facilitan la creación y difusión de contenido que atrae y retiene a los usuarios.
                  p <b>Ejemplo:</b> blogs, videos o publicaciones informativas relacionadas con productos o servicios.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Estrategias de posicionamiento digital (SEO y SEM)
      //- Título con imagen 
      p(data-aos="fade-left") Dentro de las herramientas del entorno digital, es fundamental el uso de estrategias de posicionamiento:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="SEO (<i>Search Engine Optimization</i>)")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_2.png')
              .col-md-6.mb-4.mb-md-0
                h4 SEO (<i>Search Engine Optimization</i>)
                p Permite mejorar la visibilidad de un sitio <i>web</i> en los resultados orgánicos de los motores de búsqueda mediante el uso de palabras clave, optimización de contenido y estructura web.                
          .py-3.py-md-4(titulo="SEM (<i>Search Engine Marketing</i>)")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_1.png')
              .col-md-6
                h4 SEM (<i>Search Engine Marketing</i>)
                p Consiste en la promoción de sitios <i>web</i> mediante anuncios pagados en motores de búsqueda.                
      p(data-aos="fade-left") Estas estrategias permiten aumentar el tráfico hacia las plataformas digitales y mejorar el posicionamiento de productos o servicios en el mercado.
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Características del entorno digital
      p(data-aos="fade-left") El entorno digital presenta características que lo diferencian del entorno tradicional y que influyen directamente en el desarrollo de los negocios electrónicos:
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
                          img(src='@/assets/curso/temas/t5/tarjeta02_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Interactividad
                            p.text-center Permite la comunicación directa entre empresa y cliente.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Accesibilidad
                            p.text-center Disponibilidad permanente desde diferentes dispositivos.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Globalización
                            p.text-center Acceso a mercados internacionales.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Inmediatez
                            p.text-center Respuesta rápida a las necesidades del usuario.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Medición
                            p.text-center Posibilidad de analizar el comportamiento del consumidor.
                    .col-lg-3.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t5/img2.png', style="width: 450px", data-aos="zoom-in").m-auto
      p Estas características permiten a las organizaciones adaptar sus estrategias y mejorar la relación con sus clientes.
            //- Fin Carrusel
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Métricas del entorno digital
      //- Título con imagen
      p(data-aos="fade-left") El entorno digital permite medir el comportamiento del usuario mediante indicadores clave (KPI), tales como:
      .row.mb-5.justify-content-center.align-items-stretch(data-aos="fade-left")
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center(data-aos="fade-left")
          figure.mb-0.w-100.text-center
            img(src='@/assets/curso/temas/t5/img3.png' alt='' style="width: 500px").img-fluid.m-auto
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-6.p-4.d-flex.flex-column.justify-content-center(data-aos="fade-right")          
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Número de visitas (tráfico <i>web</i>)
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Tasa de conversión
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Tiempo de permanencia en la página
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Porcentaje de rebote
      p(data-aos="fade-left") El análisis de estas métricas permite evaluar el rendimiento de las estrategias digitales y tomar decisiones para su optimización.      
      Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Redes sociales y su impacto en el comercio electrónico	
      p(data-aos="fade-left") Las redes sociales son herramientas clave del entorno digital, ya que permiten a las empresas promocionar productos o servicios, interactuar con los usuarios y fortalecer la relación con los clientes. Además, facilitan la comunicación directa y el conocimiento de sus necesidades, opiniones y preferencias en tiempo real. A continuación, se explican los principales aportes, las estrategias que permite implementar y un ejemplo:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t5/tarjeta03_1.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Principales aportes
                p Entre los principales aportes de las redes sociales al comercio electrónico se encuentran:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Difusión de productos y servicios a gran escala.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Interacción directa con clientes potenciales.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Generación de confianza mediante contenido y opiniones.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Posicionamiento de marca en el entorno digital.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t5/tarjeta03_2.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Estrategias
                p Las redes sociales permiten implementar estrategias como:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Publicaciones promocionales.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Contenido informativo.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Atención al cliente en línea.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Campañas publicitarias segmentadas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t5/tarjeta03_3.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo aplicado
                p Una empresa pública contenido sobre sus productos en redes sociales, interactúa con los usuarios mediante comentarios y mensajes, y dirige a los clientes hacia su tienda virtual para realizar compras.                
      //- Fin Slideshow      
      p(data-aos="fade-left") El uso adecuado de las redes sociales permite aumentar la visibilidad del negocio, mejorar la relación con los clientes y fortalecer la presencia digital de la empresa.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Algoritmos y segmentación en redes sociales
      //- Título con imagen
      p(data-aos="fade-left") Las redes sociales emplean algoritmos para mostrar contenido según los intereses, interacciones y comportamiento de los usuarios. Además, permiten segmentar audiencias por edad, ubicación, intereses y actividad en línea, facilitando campañas publicitarias más efectivas y dirigidas.
      Separador
      //- Inicio Tema5.4
      .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Publicidad digital y viral	
      p(data-aos="fade-left") En este apartado se estudiarán los conceptos y aspectos esenciales de la publicidad digital y viral.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t5/tarjeta04_1.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 ¿Qué es publicidad digital?
                p La publicidad digital es una estrategia que permite promocionar productos o servicios a través de internet mediante anuncios dirigidos a públicos específicos. Esta forma de publicidad se caracteriza por su capacidad de segmentación, medición y adaptación a las necesidades del mercado.                
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t5/tarjeta04_2.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Funcionamiento de publicidad digital
                p A diferencia de la publicidad tradicional, la publicidad digital permite:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Dirigir anuncios a públicos específicos según intereses.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Medir resultados en tiempo real.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Ajustar campañas de manera inmediata.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Optimizar la inversión publicitaria.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t5/tarjeta04_3.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 ¿Qué es publicidad viral?
                p Dentro de la publicidad digital se destaca la publicidad viral, la cual se basa en la difusión de contenido que los usuarios comparten de manera masiva, generando un alcance amplio sin necesidad de grandes inversiones.
                p Este tipo de publicidad se apoya en:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Contenido atractivo
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Creatividad
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Emoción
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Interacción del usuario
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t5/tarjeta04_4.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo aplicado
                p Un video promocional creativo es compartido por los usuarios en redes sociales, generando una amplia difusión del producto sin costos adicionales de publicidad.
      //- Fin Slideshow
      p(data-aos="fade-left") La publicidad digital y viral permite a las empresas ampliar su alcance, atraer nuevos clientes, fortalecer el posicionamiento de marca e incrementar las ventas. Su adecuada implementación es fundamental para el éxito de los negocios electrónicos en un entorno competitivo.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Indicadores de rendimiento en publicidad digital
      //- Título con imagen
      p(data-aos="fade-left") Para evaluar la efectividad de una campaña digital se utilizan indicadores como:
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t5/tarjeta05_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 CTR (<i>Click Through Rate</i>)
                p.text-center Porcentaje de usuarios que hacen clic en un anuncio.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t5/tarjeta05_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 CPC (Costo por clic)
                p.text-center Costo por cada interacción
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t5/tarjeta05_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 ROI (Retorno de inversión)
                p.text-center Relación entre la inversión y las ganancias obtenidas.
      //- Fin Tarjetas
      p(data-aos="fade-left") Estos indicadores permiten optimizar las campañas publicitarias y mejorar su rendimiento.
      Separador
      //- Inicio Tema5.5
      .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Comportamiento del consumidor digital	      
      p(data-aos="fade-left") El consumidor digital se caracteriza por utilizar herramientas tecnológicas para buscar información, comparar productos y tomar decisiones de compra. Posteriormente, se presentarán las características, un ejemplo aplicado y el proceso de decisión de compra digital.          
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-right")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t5/tarjeta06_1.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Características
                p Entre sus principales características se encuentran:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Búsqueda constante de información.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Comparación de precios y características.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Preferencia por la comodidad y rapidez.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Influencia de opiniones y recomendaciones.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Uso frecuente de dispositivos móviles.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t5/tarjeta06_2.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo aplicado
                p Un usuario busca un producto, compara varias opciones, revisa opiniones de otros clientes y finalmente realiza la compra en la plataforma que le ofrece mejores condiciones.
                p Comprender este comportamiento permite a las empresas diseñar estrategias más efectivas y mejorar la experiencia del usuario.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t5/tarjeta06_3.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Proceso de decisión de compra digital
                p El comportamiento del consumidor digital sigue un proceso estructurado:
                ol.lista-ol--cuadro.ms-4
                  li.d-flex.mb-3.mt-3 
                    .lista-ol--cuadro__vineta
                      span 1
                    | Reconocimiento de la necesidad.
                  li.d-flex.mb-3.mt-3 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Búsqueda de información.
                  li.d-flex.mb-3.mt-3 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Evaluación de alternativas.
                  li.d-flex.mb-3.mt-3 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Decisión de compra.
                  li.d-flex.mb-3.mt-3 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Evaluación posterior a la compra.
      //- Fin Slideshow
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
