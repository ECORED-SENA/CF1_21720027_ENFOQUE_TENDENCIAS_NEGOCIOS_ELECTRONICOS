<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Enfoques y tendencias de los negocios electrónicos
      p(data-aos="fade-left") El entorno digital evoluciona rápidamente; conocer sus enfoques actuales y tendencias emergentes es clave para que las empresas se adapten, optimicen sus ingresos y sigan siendo competitivas.
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Evolución del comercio electrónico
      .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El comercio electrónico ha evolucionado desde el intercambio básico de información y la publicación de catálogos digitales hasta convertirse en un componente estratégico de las empresas a nivel global. Con el crecimiento de internet surgieron las primeras tiendas virtuales y, posteriormente, se incorporaron sistemas de pago más seguros, mejoras en la experiencia del usuario y procesos logísticos más eficientes. Actualmente, el comercio electrónico integra tecnologías como inteligencia artificial, análisis de datos, automatización y dispositivos móviles, lo que permite personalizar ofertas, optimizar procesos y ampliar la participación de las empresas en el mercado digital.
      p(data-aos="fade-left") La evolución del comercio electrónico puede entenderse a través de diferentes etapas:
      //- Inicio Slideshow
      .bg-full-width.bg-fondo-slider.mb-3(data-aos="fade-left")
        .p-4.p-md-5
          .tarjeta.tarjeta--gris.p-4
            LineaTiempoC.color-acento-contenido(text-small)
              .row.align-items-center(titulo="1990-1999")
                .col-md-7.mb-4.mb-md-0
                  h4.ps-5 Etapa inicial:
                  p.ps-5  uso de páginas web básicas y catálogos digitales..
                .col-md-5
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_1.png')
              .row.align-items-center(titulo="2000-2009")
                .col-md-7.mb-4.mb-md-0
                  h4.ps-5 Etapa de crecimiento:
                  p.ps-5  incorporación de sistemas de pago en línea y mejora en la seguridad..
                .col-md-5
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_2.png')              
              .row.align-items-center(titulo="2010-2019")
                .col-md-7.mb-4.mb-md-0
                  h4.ps-5 Etapa de consolidación:
                  p.ps-5  integración de plataformas completas de comercio electrónico y logística..
                .col-md-5
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_3.png')              
              .row.align-items-center(titulo="2020 en adelante")
                .col-md-7.mb-4.mb-md-0
                  h4.ps-5 Etapa actual:
                  p.ps-5  uso de tecnologías avanzadas como inteligencia artificial, big data y automatización..
                .col-md-5
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_4.png')
              //- Fin Slideshow
      p(data-aos="fade-left") Esta evolución demuestra cómo el comercio electrónico ha pasado de ser una herramienta informativa a un sistema integral de negocio.
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Tendencias actuales del mercado digital
      p(data-aos="fade-left") El mercado digital se encuentra en constante transformación, impulsado por la innovación tecnológica y los cambios en el comportamiento del consumidor. Entre las principales tendencias actuales se destacan las siguientes:
      .bg--img_03.mt-5(data-aos="fade-left")
      .row.justify-content-center
        .col-lg-3 
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t2/img2.png", alt="").img400.m-auto
        .col-lg-9
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Comercio móvil")
                p El uso de celulares y tabletas permite que los usuarios realicen compras desde cualquier lugar y en cualquier momento.
            .row(titulo="Personalización de la experiencia")
                p Las empresas utilizan datos y algoritmos para ofrecer productos, servicios y contenidos ajustados a las preferencias del usuario.
            .row(titulo="Comercio social")
                p Las redes sociales se han convertido en canales para promocionar productos, interactuar con clientes y facilitar procesos de compra.
            .row(titulo="Estrategias omnicanal")
                p Las empresas integran tiendas físicas, plataformas digitales, redes sociales y otros canales para ofrecer una experiencia más coherente al cliente.
            .row(titulo="Automatización y análisis de datos")
                p El uso de herramientas digitales permite automatizar procesos, analizar información del mercado y mejorar la toma de decisiones.
      //- Fin Accordion
      p(data-aos="fade-left") Además de las tendencias mencionadas, existen tecnologías clave que están transformando el mercado digital. Estas son:
      .row.bg-fondo-1(data-aos="fade-left")
        .col-12
          .p-2
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.align-items-center
                    .col-lg-9.mb-3.mb-lg-0.order-lg-1
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column.align-items-center
                          img(src='@/assets/curso/temas/t2/tarjeta02_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                          h4.card-title.text-center.mb-4 Inteligencia artificial (IA)
                          p Permite personalizar la experiencia del usuario mediante recomendaciones automatizadas.
                        .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column.align-items-center
                          img(src='@/assets/curso/temas/t2/tarjeta02_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                          h4.card-title.text-center.mb-4 <i>Big Data</i>
                          p Facilita el análisis de grandes volúmenes de información para la toma de decisiones.
                        .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column.align-items-center
                          img(src='@/assets/curso/temas/t2/tarjeta02_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                          h4.card-title.text-center.mb-4 SEO y SEM
                          p Estrategias para posicionar productos en motores de búsqueda.
                        .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column.align-items-center
                          img(src='@/assets/curso/temas/t2/tarjeta02_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                          h4.card-title.text-center.mb-4 Automatización del <i>marketing</i>
                          p Permite enviar contenido personalizado a los usuarios de manera automática.
                    .col-lg-3.order-lg-2.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t2/img3.png', alt='', style="max-width: 250px", data-aos="zoom-in").m-auto            
      p(data-aos="fade-left") Estas herramientas permiten a las organizaciones optimizar sus estrategias y mejorar su competitividad en el entorno digital.
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Impacto de las TIC en los negocios
      p(data-aos="fade-left") Las Tecnologías de la Información y la Comunicación (TIC) han sido el principal motor del desarrollo de los negocios electrónicos, al proporcionar las herramientas necesarias para la digitalización de los procesos empresariales. De acuerdo con lo anterior, se invita a conocer de manera detallada cómo estas impactan en los negocios:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="¿Qué aportan las TIC?")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 ¿Qué aportan las TIC?
                p Las TIC impulsan el desarrollo de los negocios electrónicos al facilitar la digitalización de procesos empresariales. Permiten automatizar tareas, gestionar información de manera eficiente y mejorar la comunicación interna y externa de las organizaciones.
          .py-3.py-md-4(titulo="Beneficios para la empresa")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-md-6
                h4 Beneficios para la empresa
                p El uso de tecnologías digitales contribuye a mejorar la eficiencia operativa, reducir costos, fortalecer la competitividad y apoyar la toma de decisiones con información precisa y actualizada.
          .py-3.py-md-4(titulo="Innovación y nuevos modelos de negocio")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-md-6
                h4 Innovación y nuevos modelos de negocio
                p Las TIC favorecen la creación de servicios en línea, plataformas colaborativas y soluciones digitales que responden a las necesidades del mercado y generan nuevas oportunidades empresariales.
          .py-3.py-md-4(titulo="Adaptación organizacional")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-md-6
                h4 Adaptación organizacional
                p Para aprovechar las TIC, las empresas deben capacitar al talento humano, invertir en infraestructura tecnológica e integrar la tecnología en sus procesos estratégicos, administrativos y operativos.
          .py-3.py-md-4(titulo="Aplicación en áreas empresariales")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_4.png')
              .col-md-6
                h4 Aplicación en áreas empresariales                
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span <b>Área comercial:</b> uso de plataformas digitales para ventas en línea.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span <b>Área administrativa:</b> implementación de sistemas de gestión empresarial.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span <b>Área de marketing:</b> uso de herramientas digitales para promoción y análisis de clientes.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span <b>Área logística:</b> optimización de procesos de distribución mediante sistemas tecnológicos.
</template>

<script>
export default {
  name: 'Tema2',
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
