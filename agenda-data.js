/*
  AGENDA DEL EVENTO — datos
  =========================
  Este es el ÚNICO archivo que hay que tocar para actualizar la agenda.
  No hace falta saber programar: solo editar los textos entre comillas.

  Estructura de cada CATEGORÍA:
  {
    nombre: "Nombre de la categoría",
    nota: "Aclaración opcional (se muestra chica al lado del nombre)",
    items: [ {...}, {...} ]
  }

  Cada CATEGORÍA se abre con un click y muestra su lista de "items"
  (cada uno con su "+").

  Hay DOS formas de armar un ITEM:

  1) CASO SIMPLE (la mayoría de las categorías: un local, un stand,
     una actividad puntual). Copiá y pegá este bloque y completalo:

     {
       titulo: "Nombre de la actividad o del local",
       horario: "14 a 19 hs.",
       lugar: "Dirección",
       inscripcion: "Si requiere inscripción, poner acá (si no, borrar esta línea)",
       descripcion: "Descripción breve.",
       redes: ["@usuario_ig"],
       pendientes: ["Lo que falte confirmar (si no falta nada, borrar esta línea)"],
     }

  2) CASO AGRUPADO (cuando varias actividades pasan en el mismo lugar,
     como Terminal 39): el item tiene "actividades" en vez de los
     campos directos, y adentro va una lista de bloques como el de
     arriba:

     {
       titulo: "#1 NOMBRE DEL LUGAR",
       subtitulo: "Dirección / IG del lugar (opcional)",
       actividades: [
         { titulo: "...", horario: "...", lugar: "...", descripcion: "...", redes: [...] },
         { titulo: "...", ... },
       ],
     }

  Todos los campos son opcionales: se puede borrar o dejar vacío "" el
  que no corresponda. Al abrir el item con "+" se muestra toda la info
  junta, sin clicks extra.
*/

const AGENDA_DATA = [
  {
    nombre: "Visitas guiadas, Caminatas y recorridos",
    items: [
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
    nombre: "#5 Diseño y Decoración",
    items: [
      {
        titulo: "Airaudo Platero",
        horario: "14 a 19 hs.",
        lugar: "Guevara 542",
        descripcion:
          "Pasá por este local único en Chacarita y te contamos de los productos y las historias.",
        redes: ["@airaudoplatero"],
      },
      {
        titulo: "Belén Amigo",
        lugar: "Juan Ramírez de Velasco 1408",
        redes: ["@belenamigo"],
        pendientes: ["Pendiente info y pago"],
      },
      {
        titulo: "Blind, Fragancias de autor & Café de especialidad",
        lugar: "Fraga 316",
        redes: ["@blindfragrances"],
        pendientes: ["Pendiente actividad y logo"],
      },
      {
        titulo: "Cruda",
        lugar: "Av. Jorge Newbery 3691",
        redes: ["@crudabsas"],
        pendientes: ["Pendiente actividad"],
      },
      {
        titulo: "Eu Katz",
        lugar: "Bonpland 883",
        redes: ["@eukatz"],
        pendientes: ["Pendiente actividad"],
      },
      {
        titulo: "Floresta",
        horario: "15 a 19 hs.",
        lugar: "Bonpland 930",
        descripcion:
          "Vení a conocer la nueva colección y llevate un 10% de descuento con cualquier medio de pago.",
        redes: ["@florestavestimenta"],
      },
      {
        titulo: "Hábito",
        lugar: "Bonpland 931",
        redes: ["@habitoar"],
        pendientes: ["No sabemos si se suman"],
      },
      {
        titulo: "Nadine Zlotogora",
        horario: "Desde las 14 hs.",
        lugar: "Av. Jorge Newbery 3618",
        descripcion:
          "Otro encuentro #6: artistas, joyeras/os, ceramistas, diseñadores, una hermosa florista, propuestas y la mejor compañía... porque juntarse con personas que admirás inspira!",
        redes: ["@nadinezlotogora"],
        pendientes: ["Faltan otros IG de artistas"],
      },
      {
        titulo: "Laborando — ¿Qué hacés?",
        horario: "14 a 16 hs.",
        lugar: "Otero 246",
        descripcion:
          'Networking para emprendedores, artistas y creativos. Vení a contar quién sos, qué hacés y a conocer a otros como vos: contarlo no solo "vende" tus productos y servicios, también te ayuda a pulir tu propuesta y mejorarla.',
        redes: ["@laborando.hacedores"],
        pendientes: ['Creadores de las estatuillas de "Te conozco, Chacarita"'],
      },
      {
        titulo: "Odd taller y café — Joyería en vivo",
        horario: "14 a 16 hs.",
        lugar: "Rodney 310",
        descripcion:
          "Mientras te tomás un cafecito, te comés una medialuna épica, una clásica pepa de membrillo o un tostado de pastrón, te acompaño trabajando en mi banco de joyero. Podés observar o preguntarme lo que te dé curiosidad sobre el proceso de diseño de cualquiera de los objetos que vas a encontrar en Odd taller café.",
        redes: ["@oddtallercafe"],
      },
      {
        titulo: "Sanfitters",
        lugar: "Guevara 532",
        descripcion: "El mundo en Chacarita. (??)",
        redes: ["@sanfitters"],
        pendientes: ['Definir horario (dice "desde xxx")'],
      },
      {
        titulo: "Sol Suide — Caminata/Recorrido",
        horario: "16 hs. (duración 2 hs.)",
        lugar: "Comienza en Bonpland 821",
        inscripcion: "Con inscripción previa, link en bio. (hacer form)",
        descripcion:
          "Recorrido por los espacios de diseño de indumentaria y accesorios.",
        redes: ["@solsuide"],
      },
      {
        titulo: "Trópico. Plantas & Objetos",
        horario: "Hasta las 19 hs.",
        lugar: "Av. Jorge Newbery 3742",
        descripcion:
          "Durante el evento haremos un descuento exclusivo del 15% en plantas a quienes mencionen el festival.",
        redes: ["@tienda.tropico"],
      },
      {
        titulo: "Zapatos Mixtos",
        lugar: "Av. Jorge Newbery 3562",
        descripcion:
          "Exposición de la nueva colección Primavera Verano con descuentos especiales el día del festival.",
        redes: ["@mixtosba"],
        pendientes: ["Definir horario"],
      },
    ],
  },
  {
    nombre: "Infancias",
    items: [],
  },
  {
    nombre: "Arte y Cultura",
    nota: "librerías, artistas",
    items: [],
  },
  {
    nombre: "Música",
    nota: "incluir a Casa de Canto como protagonista",
    items: [],
  },
  {
    nombre: "Recreación",
    nota: "yoga, talleres, arreglo de bici",
    items: [],
  },
  {
    nombre: "Teatros",
    nota: "según lo que diga Germán",
    items: [],
  },
  {
    nombre: "Chaca y Vino",
    items: [],
  },
  {
    nombre: "Espacios Gastronómicos",
    items: [],
  },
  {
    nombre: "Cafés",
    items: [],
  },
];
