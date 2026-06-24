export default {
  global: {
    Name: 'Fundamentos y requerimientos del negocio electrónico',
    Description:
      'Este componente aborda los fundamentos del comercio y negocio electrónico, analizando su importancia, características y beneficios en el entorno digital. Asimismo, permite identificar los requerimientos necesarios para la implementación de un negocio electrónico, teniendo en cuenta el estudio de mercado, las políticas organizacionales y las oportunidades del entorno.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptualización del comercio y negocio electrónico	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición de comercio electrónico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Definición de negocio electrónico',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Diferencias entre comercio y negocio electrónico	',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Importancia en la economía digital',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Enfoques y tendencias de los negocios electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Evolución del comercio electrónico	',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tendencias actuales del mercado digital',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Impacto de las TIC en los negocios',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Transformación digital en las organizaciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Clasificación y modelos de negocio electrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Clasificación del comercio electrónico (B2B, B2C, C2C, etc.)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Modelos de negocio digital',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Plataformas de comercio electrónico',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Casos de aplicación en el entorno real',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Elementos del comercio electrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Infraestructura tecnológica',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Plataformas digitales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Medios de pago electrónicos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Seguridad en transacciones',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Logística y distribución',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Entorno digital y herramientas del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de herramientas del entorno digital',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características del entorno digital',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Redes sociales y su impacto en el comercio electrónico',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Publicidad digital y viral',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Comportamiento del consumidor digital',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Ventajas del comercio electrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos de ventajas del comercio electrónico',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Beneficios para las empresas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Beneficios para los clientes',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Ventajas competitivas en el mercado digital',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Impacto de las ventajas en los negocios electrónicos',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Estudio de mercado en negocios electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Tipos de estudio de mercado',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Características del estudio de mercado digital',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Análisis del entorno digital',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Aplicación del estudio de mercado',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Requerimientos del negocio electrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Tipos de requerimientos del negocio electrónico',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Requerimientos técnicos',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Requerimientos organizacionales',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Políticas de la organización',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Recursos necesarios para la implementación',
            hash: 't_8_5',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Procesos de implementación de un negocio electrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Fases del proceso de implementación',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Planeación del negocio digital',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Definición del producto o servicio',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Estructuración del modelo de negocio',
            hash: 't_9_4',
          },
          {
            numero: '9.5',
            titulo: 'Puesta en marcha del negocio electrónico',
            hash: 't_9_5',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Valor agregado en productos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Tipos de valor agregado',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Características del valor agregado en el entorno digital',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Importancia del valor agregado en el comercio electrónico',
            hash: 't_10_3',
          },
          {
            numero: '10.4',
            titulo: 'Estrategias para generar valor agregado',
            hash: 't_10_4',
          },
          {
            numero: '10.5',
            titulo:
              'Aplicación del valor agregado en los negocios electrónicos',
            hash: 't_10_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Análisis de mercado',
      significado:
        'Proceso de recolección y evaluación de información sobre consumidores, competencia y tendencias para apoyar la toma de decisiones comerciales.',
    },
    {
      termino: 'Comercio electrónico',
      significado:
        'Realización de transacciones de compra y venta de productos o servicios a través de internet y plataformas digitales.',
    },
    {
      termino: 'Consumidor digital',
      significado:
        'Usuario que utiliza medios tecnológicos para buscar información, comparar opciones y realizar compras en línea.',
    },
    {
      termino: 'E-business (negocio electrónico)',
      significado:
        'Modelo empresarial que integra tecnologías digitales en los procesos organizacionales, comerciales y administrativos.',
    },
    {
      termino: 'Entorno digital',
      significado:
        'Espacio virtual conformado por plataformas, herramientas tecnológicas y canales de comunicación utilizados en internet.',
    },
    {
      termino: 'Infraestructura tecnológica',
      significado:
        'Conjunto de recursos físicos y digitales que soportan el funcionamiento de un negocio electrónico.',
    },
    {
      termino: 'Marketplace',
      significado:
        'Plataforma digital que conecta compradores y vendedores en un mismo entorno virtual.',
    },
    {
      termino: 'Modelo B2B',
      significado:
        'Modelo de comercio electrónico en el que las transacciones se realizan entre empresas.',
    },
    {
      termino: 'Modelo B2C',
      significado:
        'Modelo de comercio electrónico en el que una empresa vende productos o servicios directamente al consumidor final.',
    },
    {
      termino: 'Pasarela de pago',
      significado:
        'Herramienta tecnológica que permite procesar pagos electrónicos de forma segura.',
    },
    {
      termino: 'Plataforma digital',
      significado:
        'Entorno tecnológico utilizado para desarrollar actividades comerciales, promocionales o de interacción en línea.',
    },
    {
      termino: 'SEO',
      significado:
        'Estrategia de optimización utilizada para mejorar el posicionamiento de un sitio <i>web</i> en motores de búsqueda.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'Proceso de incorporación de tecnologías digitales en las diferentes áreas de una organización para optimizar su funcionamiento.',
    },
    {
      termino: 'Valor agregado',
      significado:
        'Conjunto de características o beneficios adicionales que diferencian un producto o servicio en el mercado digital.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cardozo, N. (2025, abril 18). Análisis DOFA: Qué es, cómo se hace y por qué es importante para el éxito de tu negocio. DaTum. ',
      link: 'https://datumdigitalmarketing.com/noticias/dofa-foda-swot-que-es-como-se-hace-por-que-es-importante',
    },
    {
      referencia:
        'Coursera. (2023, noviembre 29). Análisis de mercado: Qué es y cómo hacerlo. Coursera. ',
      link: 'https://www.coursera.org/mx/articles/market-analysis',
    },
    {
      referencia:
        'Haim, I. (2025, noviembre 25). ¿Qué es el comercio electrónico? Definición, tipos, historia y ejemplos. Elementor.',
      link: 'https://elementor.com/blog/es/que-es-el-comercio-electronico-definicion-tipos-historia-y-ejemplos/',
    },
    {
      referencia:
        'Laudon, K. C., & Traver, C. G. (2022). E-commerce 2022: Business, technology, society (18.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Osterwalder, A., & Pigneur, Y. (2011). Generación de modelos de negocio. Deusto.',
      link: '',
    },
    {
      referencia:
        'Universidad Europea. (2023, noviembre 21). E-business: ¿Qué es y para qué sirve? ',
      link: 'https://universidadeuropea.com/blog/e-business/',
    },
    {
      referencia:
        'Turban, E., King, D., Lee, J., Liang, T. P., & Turban, D. (2018). Electronic commerce: A managerial and social networks perspective (9.ª ed.). Springer.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06.<br> Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>fullstack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
