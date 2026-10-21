/*
  AGENDA DEL EVENTO — datos
  =========================
  Este es el ÚNICO archivo que hay que tocar para actualizar la agenda.
  No hace falta saber programar: solo editar los textos entre comillas.

  Estructura de cada CATEGORÍA:
  {
    nombre: "Nombre de la categoría",
    nota: "Aclaración opcional (se muestra chica al lado del nombre)",

    // Opción A: actividades sueltas (sin agrupar por lugar)
    actividades: [ {...}, {...} ],

    // Opción B: actividades agrupadas por espacio/punto (como Visitas guiadas)
    grupos: [
      { titulo: "#1 NOMBRE DEL LUGAR", subtitulo: "Dirección / IG", actividades: [ {...} ] }
    ]
  }

  Estructura de cada ACTIVIDAD (todos los campos son opcionales, se puede
  borrar o dejar vacío "" el que no corresponda):
  {
    titulo: "Nombre de la actividad",
    horario: "18.00 hs.",
    lugar: "Dirección",
    inscripcion: "Con inscripción previa, link en bio.",
    descripcion: "Texto, o un array de párrafos: ['parr 1', 'parr 2']",
    redes: ["@usuario1", "@usuario2"],
    pendientes: ["Cosas que faltan definir o confirmar"]
  }
*/

const AGENDA_DATA = [
  {
    nombre: "Visitas guiadas, Caminatas y recorridos",
    grupos: [
      {
        titulo: "#1 ESPACIO CENTRAL: TERMINAL 39",
        subtitulo: "Av. Jorge Newbery 3943 · @linea_39",
        actividades: [
          {
            titulo: "Fotografías de Chacarita",
            lugar: "Terminal 39, av. Jorge Newbery 3943",
            descripcion:
              "Exhibición de fotografías coordinada por la fotógrafa Marisa Strelczenia.",
            redes: ["@marichi_st", "@linea_39"],
            pendientes: [
              "Poner nombres de los fotógrafos y sus IG",
              "Poner horario de la inauguración",
              "Caminata/Recorrida junto a Década 40 y 50 (?)",
            ],
          },
          {
            titulo: "Lectura y selección de cuentos por La Nube",
            lugar: "Colectivo antiguo del 39 · Terminal 39, av. Jorge Newbery 3943",
            redes: ["@linea_39"],
            pendientes: ["Poner hora"],
          },
          {
            titulo: 'Entrega de reconocimientos "Te conozco, Chacarita"',
            horario: "18.00 hs.",
            lugar: "Terminal 39, av. Jorge Newbery 3943",
            descripcion:
              "Se entregarán premios para reconocer a proyectos, personas e instituciones que nacieron en el barrio y han dejado huella. Las estatuillas fueron diseñadas por Laborando.",
            redes: ["@laborando.hacedores", "@linea_39"],
            pendientes: ["¿Nombramos a los elegidos o es sorpresa?"],
          },
          {
            titulo: "Cierre del espacio central del 39",
            lugar: "Terminal 39, av. Jorge Newbery 3943",
            redes: ["@linea_39"],
            pendientes: ["¿Quién cierra? (?)"],
          },
          {
            titulo: "Informes",
            descripcion:
              "Mesa de informes, podrán retirar la agenda y el mapa del evento.",
            redes: ["@linea_39"],
          },
        ],
      },
      {
        titulo: "#2 VISITAS GUIADAS SITIOS EMBLEMÁTICOS",
        actividades: [
          {
            titulo: "Barrio Los Andes",
            horario: "15.00 hs.",
            lugar: "Dirección luego de la inscripción",
            inscripcion: "Con inscripción previa, link en bio. (hacer form)",
            descripcion:
              "Visita guiada por el emblemático Barrio Los Andes a cargo de sus vecinas.",
          },
          {
            titulo: "Chacarita Juniors, Sede Social",
            lugar: "Av. Federico Lacroze 3860",
            pendientes: ["Falta envío de info"],
          },
          {
            titulo: "Cementerio de la Chacarita",
            horario: "15.00 hs.",
            lugar: "Av. Guzmán 680",
            inscripcion: "Con inscripción previa, link en bio. (pedir form a Máximo)",
            descripcion:
              "Visita guiada por el cementerio: se visitan mausoleos de figuras destacadas, se exploran réplicas artísticas y se relatan leyendas del lugar.",
            redes: ["@freetoursbuenosaires"],
          },
          {
            titulo: "Fábrica de Churros Olleros",
            lugar: "Olleros 4167",
            pendientes: ["Consultar si quieren participar"],
          },
          {
            titulo: "Museo del Acordeón Anconetani",
            lugar: "Info luego de la inscripción",
            inscripcion: "Link en bio. (hacer form)",
            descripcion:
              "Visita guiada dirigida por Aida, la nieta del fundador de la Fábrica de Acordeones Anconetani.",
            redes: ["@aidaanconetani"],
            pendientes: ["Faltan fotos"],
          },
          {
            titulo: "Pasaje Olleros",
            lugar: "Olleros 3950",
            inscripcion: "Link en bio. (hacer form)",
            descripcion:
              'Visita guiada por el "Pasaje Olleros", joya arquitectónica de estilo colonial.',
            pendientes: ["Definir horario"],
          },
        ],
      },
      {
        titulo: "#3 CAMINATAS Y RECORRIDOS",
        actividades: [
          {
            titulo:
              "Red Verde Ser — Chaca Composta: recorrido por las composteras comunitarias (5° aniversario)",
            horario: "16 a 18 hs.",
            lugar: "Punto de encuentro: Compostera de Fraga Cultural (Fraga 116) · Cierre en Roseti 390",
            descripcion: [
              "Recorrida guiada por algunas de las composteras comunitarias del barrio, comenzando en la compostera de Fraga Cultural. Cada estación permite conocer una parte de la historia, el funcionamiento y el impacto de la red.",
              "♻️ Primera estación – Fraga 116: presentación de Red Verde Ser, cómo surgió el proyecto y cómo creció la red de compostaje comunitario en Chacarita.",
              "♻️ Segunda estación – Roseti 296: qué es el compostaje comunitario, qué materiales se pueden compostar y cómo participar acercando residuos orgánicos a las composteras del barrio.",
              "♻️ Tercera estación – Santos Dumont 3602: muestra del proceso de transformación de los residuos orgánicos en compost, intercambio con vecinos y entrega de pequeñas muestras de compost a los participantes.",
              "♻️ Cuarta estación – Concepción Arenal 3803: presentación de las cuadrillas y las personas que sostienen la red día a día, invitación a sumarse al proyecto y cierre del recorrido.",
              "Durante toda la actividad se distribuirán materiales informativos sobre las composteras comunitarias, las formas de participación y las acciones de Red Verde Ser.",
            ],
            redes: ["@red.verde.ser"],
            pendientes: ["Pedir fotos e info"],
          },
        ],
      },
    ],
  },
  {
    nombre: "Diseño y Decoración",
    actividades: [],
  },
  {
    nombre: "Infancias",
    actividades: [],
  },
  {
    nombre: "Arte y Cultura",
    nota: "librerías, artistas",
    actividades: [],
  },
  {
    nombre: "Música",
    nota: "incluir a Casa de Canto como protagonista",
    actividades: [],
  },
  {
    nombre: "Recreación",
    nota: "yoga, talleres, arreglo de bici",
    actividades: [],
  },
  {
    nombre: "Teatros",
    nota: "según lo que diga Germán",
    actividades: [],
  },
  {
    nombre: "Chaca y Vino",
    actividades: [],
  },
  {
    nombre: "Espacios Gastronómicos",
    actividades: [],
  },
  {
    nombre: "Cafés",
    actividades: [],
  },
];
