<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Clasificación y modelos de negocio electrónico
      p Para comprender el funcionamiento del comercio electrónico, es necesario diferenciar dos aspectos fundamentales: la <b>clasificación según los actores que intervienen en las transacciones y los modelos de negocio digital utilizados por las organizaciones.</b> Esta distinción permite analizar cómo se estructuran las relaciones comerciales en entornos digitales y de qué manera las empresas generan valor, ingresos y ventajas competitivas.
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Clasificación del comercio electrónico (B2B, B2C, C2C, etc.)
      p(data-aos="fade-left") El comercio electrónico se clasifica de acuerdo con los actores que participan en la transacción, lo cual permite identificar las dinámicas de interacción dentro del mercado digital. Estas se detallan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t3/tarjeta01_1.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 <i>Business to consumer</i> (B2C)
                p Este modelo representa la relación directa entre una empresa y el consumidor final. Es el más común en el comercio electrónico y se evidencia en tiendas virtuales donde los clientes adquieren productos o servicios de forma directa.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t3/tarjeta01_2.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo de <i>business to consumer</i> (B2C)
                p Una tienda en línea que vende ropa, donde los usuarios seleccionan productos, realizan el pago y reciben el pedido en su domicilio.
                p Este modelo se caracteriza por:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Alta competencia.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Enfoque en la experiencia del usuario.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Uso intensivo de <i>marketing</i> digital.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t3/tarjeta01_3.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 <i>Business to business</i> (B2B)
                p Se refiere a las transacciones comerciales entre empresas. En este modelo, los productos o servicios suelen comercializarse en grandes volúmenes y bajo condiciones específicas de negociación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t3/tarjeta01_4.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo de <i>business to business</i> (B2B)
                p Una empresa que vende insumos tecnológicos a otras empresas para su operación.
                p Este modelo se caracteriza por:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Procesos de compra más estructurados.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Relaciones comerciales a largo plazo.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Mayor formalidad en contratos y acuerdos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t3/tarjeta01_5.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 <i>Consumer to consumer</i> (C2C)
                p Este modelo permite la interacción directa entre consumidores, quienes compran y venden productos a través de plataformas digitales intermediarias.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t3/tarjeta01_6.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplo <i>consumer to consumer</i> (C2C)
                p Personas que venden productos usados a través de plataformas digitales.
                p Se caracteriza por:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Interacción directa entre usuarios.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Uso de plataformas como intermediarias.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Menor control sobre la calidad del producto.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t3/tarjeta01_7.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 <i>Consumer to business</i> (C2B)
                p En este modelo, el consumidor ofrece productos o servicios a las empresas.
                h4 Ejemplo:
                p Un diseñador gráfico independiente que ofrece sus servicios a empresas a través de plataformas digitales.
                p Se caracteriza por:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Participación activa del usuario como proveedor.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Modelos colaborativos.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Flexibilidad en la oferta de servicios.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/temas/t3/tarjeta01_8.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 <i>Business to government</i> (B2G) y <i>government to consumer</i> (G2C)
                p Estos modelos involucran la interacción entre empresas, entidades gubernamentales y ciudadanos.
                h4 Ejemplo:
                p Plataformas para pagos de impuestos o participación en licitaciones públicas.
                p Se caracterizan por:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Procesos regulados.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Uso de plataformas oficiales.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Enfoque en servicios públicos.
      //- Fin Slideshow
      p(data-aos="fade-left") Esta clasificación permite comprender cómo se estructura el mercado digital y facilita la definición de estrategias comerciales según el tipo de cliente o usuario.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Análisis estratégico de los modelos de comercio electrónico
      //- Título con imagen
      p(data-aos="fade-left") Cada modelo de comercio electrónico responde a necesidades específicas del mercado y requiere estrategias diferentes para su implementación. Estos son algunos ejemplos:
      //- Inicio Tarjetas
      .row.justify-content-center.mt-5(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta02_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 En el modelo B2C 
                p.text-center.mb-0 Las empresas deben enfocarse en la experiencia del usuario (UX), la rapidez de la plataforma y estrategias de <i>marketing</i> digital.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta02_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 En el modelo B2B
                p.text-center.mb-0 Es fundamental la gestión de relaciones comerciales, la negociación y la automatización de procesos.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta02_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 En el modelo C2C
                p.text-center.mb-0 La confianza entre usuarios y la reputación de la plataforma son factores clave.
          //- Fin Tarjetas
      p(data-aos="fade-left") Este análisis permite a las organizaciones seleccionar el modelo más adecuado según su tipo de negocio y público objetivo.
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Modelos de negocio digital
      p(data-aos="fade-left") Los modelos de negocio digital representan la forma en que una organización crea, entrega y captura valor en el entorno digital. No solo definen cómo se vende un producto o servicio, sino también cómo se generan ingresos y se construyen relaciones con los clientes. Estos son:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Tienda en línea ")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Tienda en línea 
                p Consiste en la venta directa de productos o servicios a través de una plataforma digital.
                p <b>Ejemplo:</b> una empresa que vende productos tecnológicos mediante su página <i>web</i>.
                p Características
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Catálogo digital.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Sistema de pagos.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Gestión de envíos.                
          .py-3.py-md-4(titulo="Modelo de suscripción")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_2.png')
              .col-md-6
                h4 Modelo de suscripción
                p Permite a los usuarios acceder a un servicio mediante pagos periódicos.
                p <b>Ejemplo:</b> plataformas de contenido digital donde el usuario paga mensualmente.
                p Características
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Ingresos recurrentes.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Fidelización del cliente.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Acceso continuo a servicios.
          .py-3.py-md-4(titulo="Modelo <i>freemium</i>")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_3.png')
              .col-md-6
                h4 Modelo <i>freemium</i>
                p Combina servicios gratuitos con funcionalidades premium de pago.
                p <b>Ejemplo:</b> aplicaciones que ofrecen funciones básicas gratis y funciones avanzadas mediante suscripción.
                p Características
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Atracción de usuarios.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Conversión a clientes pagos.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Escalabilidad del servicio.
          .py-3.py-md-4(titulo="<i>Marketplace</i>")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_4.png')
              .col-md-6
                h4 <i>Marketplace</i>
                p Plataforma que conecta múltiples vendedores con compradores.
                p <b>Ejemplo:</b> sitios donde diferentes vendedores ofrecen productos en un mismo espacio digital.
                p Características
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Intermediación comercial.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Generación de comisiones.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Amplia variedad de productos.
          .py-3.py-md-4(titulo="Afiliación")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_5.png')
              .col-md-6
                h4 Afiliación
                p Modelo basado en la promoción de productos de terceros a cambio de una comisión.
                p <b>Ejemplo:</b> sitios <i>web</i> o creadores de contenido que recomiendan productos y reciben ingresos por ventas generadas.
                p Características
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Bajo costo de implementación.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Dependencia del tráfico digital.
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Enfoque en <i>marketing.</i>
      p(data-aos="fade-left") Estos modelos permiten a las organizaciones definir cómo operan en el entorno digital y cómo generan ingresos de manera sostenible.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Estructura de ingresos en los modelos digitales
      //- Título con imagen
      p(data-aos="fade-left") Cada modelo de negocio digital define su forma de generar ingresos, lo cual es fundamental para su sostenibilidad:
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-3.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta04_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Venta directa
                p.text-center.mb-0 Ingresos por la comercialización de productos o servicios.
        .col-12.col-sm-9.col-md-6.col-lg-3.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta04_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Suscripción
                p.text-center.mb-0 Ingresos periódicos por acceso continuo.
        .col-12.col-sm-9.col-md-6.col-lg-3.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta04_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Comisiones
                p.text-center.mb-0 Ingresos generados por intermediación (<i>marketplace</i>).
        .col-12.col-sm-9.col-md-6.col-lg-3.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta04_4.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Publicidad
                p.text-center.mb-0 Ingresos por promoción de productos o servicios.
          //- Fin Tarjetas
      p(data-aos="fade-left") La definición clara de la estructura de ingresos permite garantizar la viabilidad económica del negocio electrónico.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Indicadores de desempeño en modelos digitales
      //- Título con imagen
      .row.mb-5.justify-content-center.align-items-stretch
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center(data-aos="fade-left")
          figure.mb-0.w-100.text-center
            img(src='@/assets/curso/temas/t3/img1.png' alt='' style="width: 500px").img-fluid.m-auto
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-3.p-4.d-flex.flex-column.justify-content-center(data-aos="fade-right")
          p Para evaluar el rendimiento de un modelo de negocio digital, se utilizan indicadores como:
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Tasa de conversión
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Número de usuarios activos
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Ingresos por cliente
              li.d-flex
                i.fas.fa-circle-right.me-3
                span Retención de clientes
          p Estos indicadores permiten medir la efectividad del modelo de negocio y tomar decisiones estratégicas.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Plataformas de comercio electrónico
      p(data-aos="fade-left") Las plataformas de comercio electrónico son herramientas tecnológicas que permiten gestionar todas las operaciones de un negocio digital, desde la publicación de productos hasta la entrega final al cliente.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Funciones principales
      //- Título con imagen
      p(data-aos="fade-left") Las plataformas de comercio electrónico son importantes porque cumplen las siguientes funciones:
      .row.bg-fondo-2
        .col-12
          .px-3.py-4
            .row.mb-5.justify-content-center.align-items-stretch
              .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0.d-flex.align-items-center(data-aos="fade-left")
                figure.mb-0.w-100.text-center
                  img(src='@/assets/curso/temas/t3/img2.png' alt='' style="width: 500px").img-fluid.m-auto
              .col-12.col-lg-5.order-2.order-lg-2.bg-color-6.p-4.d-flex.flex-column.justify-content-center(data-aos="fade-right")
                p Funciones principales:
                  ul.lista-ul.color-vinotinto-custom.mb-0
                    li.d-flex
                      i.fas.fa-circle-right.me-3
                      span Publicación de productos o servicios
                    li.d-flex
                      i.fas.fa-circle-right.me-3
                      span Gestión de inventarios
                    li.d-flex
                      i.fas.fa-circle-right.me-3
                      span Procesamiento de pagos
                    li.d-flex
                      i.fas.fa-circle-right.me-3
                      span Seguimiento de pedidos
                    li.d-flex
                      i.fas.fa-circle-right.me-3
                      span Atención al cliente
      p Estas plataformas son fundamentales, ya que integran todos los procesos necesarios para el funcionamiento del negocio electrónico.
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Tipos de plataforma
      //- Título con imagen
      p(data-aos="fade-left") Los principales tipos de plataformas son:
      .row.bg-fondo-2
        .col-12
          .p-2
            //- Inicio Tarjetas
            .row.justify-content-center(data-aos="fade-left")
              .col-12.col-sm-9.col-md-6.col-lg-5.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta05_1.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Plataformas propias
                      p.text-center.mb-3 Desarrolladas por la empresa, permiten mayor control sobre el diseño, la información y la operación del negocio.
                      p <b>Ventajas:</b>
                      ul.lista-ul.color-vinotinto-custom.mb-0
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Personalización
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Control total
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Integración con otros sistemas.
              .col-12.col-sm-9.col-md-6.col-lg-5.mb-4.d-flex.flex-column
                .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta05_2.png', alt='').w-100
                  .p-4.d-flex.flex-column.justify-content-between.h-100
                    div
                      h4.card-title.text-center.mb-4 Plataformas de terceros
                      p.text-center.mb-3 Permiten implementar el negocio de forma rápida sin necesidad de desarrollo propio.
                      p <b>Ventajas:</b>
                      ul.lista-ul.color-vinotinto-custom.mb-0
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Facilidad de uso.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Menor inversión inicial.
                        li.d-flex
                          i.fas.fa-circle-right.me-3
                          span Soporte técnico incluido.
                //- Fin Tarjetas
      p(data-aos="fade-left") La elección de la plataforma depende de factores como el tipo de negocio, los recursos disponibles y los objetivos de la organización.                
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Criterios técnicos para la selección de plataformas
      //- Título con imagen
      p(data-aos="fade-left") La elección de una plataforma de comercio electrónico debe basarse en criterios técnicos que aseguren su funcionalidad y escalabilidad; tales como:
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
                          img(src='@/assets/curso/temas/t3/tarjeta06_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Escalabilidad
                            p.text-center Capacidad de la plataforma para crecer según la demanda.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta06_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Seguridad
                            p.text-center Protección de datos y transacciones.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta06_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Integración
                            p.text-center Compatibilidad con sistemas de pago, logística y <i>marketing</i>.
                        .bg-color-4.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta06_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Usabilidad
                            p.text-center Facilidad de uso para el usuario final. 
                    .col-lg-3.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t3/img3.png', style="width: 450px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      p(data-aos="fade-left") Una correcta selección de la plataforma permite mejorar la eficiencia del negocio y la experiencia del cliente.            
      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Casos de aplicación en el entorno real
      p(data-aos="fade-left") El comercio electrónico se aplica en diversos sectores, evidenciando su impacto en la economía digital; dentro de los cuales están:          
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta07_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Sector comercial
                p.text-center.mb-0 Empresas que venden productos a través de tiendas virtuales, ampliando su alcance a nivel nacional e internacional.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta07_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Sector servicios
                p.text-center.mb-0 Organizaciones que ofrecen servicios digitales como educación virtual, asesorías y entretenimiento.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-white.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta07_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Emprendimientos digitales
                p.text-center.mb-0 Personas que inician negocios en línea con baja inversión, aprovechando herramientas digitales.
          //- Fin Tarjetas
      .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img4.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-5 Estos casos demuestran que el comercio electrónico:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-circle-right.me-3
              span Reduce barreras de entrada
            li.d-flex
              i.fas.fa-circle-right.me-3
              span Amplía mercados
            li.d-flex
              i.fas.fa-circle-right.me-3
              span Facilita la innovación
      //- Título con imagen
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/imagen-titulos.svg")
              h3.titulo-con-imagen__texto Análisis de impacto en el mercado digital
      //- Título con imagen      
      .row.justify-content-center.align-items-stretch.mb-4        
        .col-12.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          p La implementación del comercio electrónico en diferentes sectores ha generado cambios significativos en la forma de hacer negocios:          
          .row.g-3.align-items-stretch.mb-3            
            .col-12.col-md-5.d-flex
              figure.mb-0.w-100
                img.h-100.w-100(src="@/assets/curso/temas/t3/img5.png", alt="", style="object-fit: cover; border-radius: 4px;")                            
            .col-12.col-md-7.d-flex
              .p-4.w-100.h-100.rounded-3(style="background-color: #FFFDC3;")
                p Impactos:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex.mt-3
                    i.fas.fa-circle-right.me-3
                    span Digitalización de procesos comerciales
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Reducción de costos operativos
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Incremento en la competitividad
                  li.d-flex
                    i.fas.fa-circle-right.me-3
                    span Acceso a mercados globales
          p Este impacto demuestra que el comercio electrónico no solo es una herramienta de venta, sino un factor estratégico para el crecimiento empresarial.        
        .col-12.col-sm-8.col-md-6.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center.justify-content-center(data-aos="zoom-in")
          figure.mb-0.w-100.text-center
            img.img-fluid(src="@/assets/curso/temas/t3/img6.png", alt="", style="max-width: 100%;")



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
