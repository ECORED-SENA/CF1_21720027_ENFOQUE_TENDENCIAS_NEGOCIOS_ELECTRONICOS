<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Evaluación de conocimientos sobre comercio electrónico y negocio digital.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del comercio electrónico, los modelos de negocio digital, el entorno digital, los requerimientos y los procesos de implementación, mediante la resolución de un cuestionario de selección múltiple que permita verificar el aprendizaje adquirido por el aprendiz.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por comercio electrónico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestión interna empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compra y venta en línea. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso de redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenamiento de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza al negocio electrónico?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso limitado de tecnología.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Venta solo de productos físicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Integración de procesos digitales. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso exclusivo de redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la diferencia principal entre comercio y negocio electrónico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambos tienen el mismo alcance.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El negocio solo vende productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El comercio abarca toda la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El negocio incluye más procesos. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Por qué es importante el comercio electrónico?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce la innovación empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limita el acceso a mercados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facilita acceso a nuevos mercados. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina el uso de tecnología.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es una tendencia del mercado digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Menor uso de dispositivos móviles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminución del <i>marketing</i> digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crecimiento del comercio móvil. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminación de plataformas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué permite el <i>Big Data</i>?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar grandes volúmenes de datos. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Almacenar información básica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar páginas <i>web.</i>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué impacto tienen las TIC?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducen la eficiencia empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limitan el uso de tecnología.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminan plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejoran procesos y decisiones. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué implica la transformación digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso exclusivo de redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Integrar tecnología en la empresa. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir procesos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar uso de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué modelo es empresa a cliente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'B2C.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'C2C.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'B2B.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'C2B.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué caracteriza el modelo B2B?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Venta al consumidor final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interacción entre usuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Relación entre empresas. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso exclusivo de redes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué modelo es entre consumidores?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'C2C.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'B2C.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'B2B.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'B2G.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es un modelo digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Venta presencial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tienda física.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suscripción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Comercio tradicional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué función tienen las plataformas digitales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar operaciones digitales. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir interacción con clientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar logística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es un elemento del comercio electrónico?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ubicación física.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Infraestructura tecnológica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Documentos manuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Horarios laborales claros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué hacen los medios de pago electrónicos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitan pagos digitales. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Gestionan inventarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminan seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituyen logística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué caracteriza el entorno digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limita el acceso de usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reduce uso de tecnología.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite interacción directa. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina análisis de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué permite la publicidad digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar la segmentación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar la visibilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar internet.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dirigir anuncios específicos. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál es una ventaja para empresas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta costos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reduce mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acceso global. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Para qué sirve el estudio de mercado?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tomar decisiones sin datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar oportunidades. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar competencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué son los requerimientos del negocio electrónico?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elementos opcionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: ' Condiciones necesarias. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estrategias de <i>marketing</i>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Procesos sin relación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
