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
    nombre: "Diseño y Decoración",
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
    items: [
      {
        titulo: "XXXXX",
        horario: "de xx a xx hs",
        lugar: "xxxxxxx",
        inscripcion: "xxxxxx",
        descripcion: "xxxxxx",
      },
    ],
  },
  {
    nombre: "Arte y Cultura",
    nota: "librerías, artistas",
    items: [
      {
        titulo: "Aluche",
        horario: "20 hs. (duración 2.30 hs.)",
        lugar: "Av. Dorrego 1184",
        descripcion: [
          '"Muña Muña, el yuyo del amor", de Tucumán a tu barrio.',
          "Función especial, charla con la directora y, para terminar bien arriba, abrimos el karaoke y cantamos en vivo las canciones originales de la película. Y, después, lo que vos quieras.",
          "Apto mayores de 13 años. Actividad a la gorra.",
        ],
        redes: ["@aluche_artes"],
      },
      {
        titulo: "Benjamín — cerámica, arte y objetos",
        horario: "15 a 18 hs. (duración 15 a 20 min.)",
        lugar: "Bonpland 744",
        descripcion:
          "Proceso de construcción: voy a mostrar cómo trabajo en la construcción de una pieza, compartiendo algunos de los procedimientos y decisiones que forman parte de mi manera de trabajar.",
        redes: ["@benjamin_ceramica"],
      },
      {
        titulo: "Central Newbery",
        horario: "16 a 20 hs.",
        lugar: "Av. Jorge Newbery 3599",
        descripcion: [
          'Muestra "Habitar el bosque": artistas Alejandra Guidardini, Leandro Niro, Mona Suárez, curaduría de Carolina Berardo.',
          'Muestra "La femme dans tous ses états": pintura, fotografía, collage y escultura. Artistas de Argentina, Perú, México y Alemania.',
        ],
        redes: ["@centralnewbery"],
        pendientes: ["Poner otros IG de artistas"],
      },
      {
        titulo: "Escena del crimen libros",
        pendientes: ["Falta info"],
      },
      {
        titulo: "Espacio Cultural Carlos Gardel — Tarde de swing",
        horario: "16 a 20 hs.",
        lugar: "Olleros 3640",
        descripcion: [
          "Tarde de swing en el Gardel: bandas de swing y clases.",
          "Club Piso 13: banda de swing & blues de los años '30 y '40. Formación: Julieta Sollner (voz), Mauricio Rodríguez (piano), Matías Jorge (armónica), Nacho Graña (saxo), Darío Escape (contrabajo), Paula Guillén (batería).",
          "Messengers: trío de swing y jazz de los años 40. Formación: Mariano Piñereiro (piano), Leandro Provera (bajo) y Eugenia Rei (voz y batería), con Ignacio Piñeiro como guitarrista invitado.",
        ],
        redes: ["@swingporlosbarrios", "@clubpisotrece", "@eccarlosgardel"],
      },
      {
        titulo: "Espacio EK — POLIFASES + After EK",
        horario: "16 a 2 am",
        lugar: "Av. Jorge Newbery 3880",
        descripcion: [
          "A partir del diálogo de diferentes disciplinas artísticas, Espacio EK presenta una jornada con una curaduría que yuxtapone las diversas maneras de expresar el cuerpo y el movimiento mediante el arte.",
          "16 hs. — Muestra visual donde el cuerpo y el movimiento se representan de diferentes maneras, desde la imagen figurativa hasta las marcas abstractas.",
          'El bar del espacio, "Dos Pasos Café & Vinos", estará abierto para quien quiera quedarse viendo la exposición y tomando un trago.',
          "20 hs. — Inicio del After EK, un ciclo para conocer nuevos artistas. En esta edición especial habrá un DJ set y una intervención performática de danza, hasta las 2 am.",
          "Acceso a la exposición visual de la tarde sin costo. Performance de la noche con costo accesible, consumición incluida.",
        ],
        redes: ["@espacioek"],
        pendientes: ["Acortar texto de la descripción del After EK"],
      },
      {
        titulo: "Hotelier Art Club",
        lugar: "Av. Jorge Newbery 3815",
        redes: ["@hotelierartclub"],
        pendientes: ["Ver propuesta por WhatsApp"],
      },
      {
        titulo: "Museo Fotográfico Simik — Bar Palacio",
        lugar: "Av. Federico Lacroze 3901",
        redes: ["@museosimik"],
        pendientes: ["Preguntar actividad", "Noche de los Museos (pedir datos)"],
      },
      {
        titulo: "Nativo Estudio — Showroom + Nativo Bar de Vinos",
        horario: "Showroom 14 a 18 hs. · Bar de vinos desde las 18 hs.",
        lugar: "Fraga 585",
        descripcion: [
          "A la tarde: open showroom de diseño y arte. El showroom estará abierto para recorrer una selección de mobiliario y objetos de diseño.",
          "A la noche: inauguramos Nativo Bar de Vinos, una nueva propuesta para encontrarnos, disfrutar de buenos vinos y compartir algo rico.",
        ],
        redes: ["@nativo.estudio"],
        pendientes: ["Vincular con la categoría Chaca y Vino"],
      },
      {
        titulo: "Otero y Dumont",
        horario: "16 hs.",
        lugar: "Otero 299",
        descripcion: "Charla: 7 formas de enmarcar una obra de arte.",
        redes: ["@oteroydumont"],
        pendientes: ["Faltan fotos"],
      },
      {
        titulo: "Sólido Amorfo",
        horario: "17 hs. (duración 15 min.)",
        lugar: "Bonpland 750",
        descripcion:
          "Demostración de cómo se utiliza el vidrio plano y vidrio en polvo, por Silvina Lewin y Paula Lekerman.",
        redes: ["@silvinalewinart"],
      },
      {
        titulo: "Tacha — muestra individual de Albert Stella",
        horario: "14 a 20 hs.",
        lugar: "Humboldt 1271",
        descripcion:
          "La obra de Albert Stella es un reflejo de la fusión entre sus raíces africanas y las diversas culturas que han marcado su vida. Mayormente autodidacta y alejado de cualquier canon académico, su obra gráfica, objetual y pictórica es un flujo continuo y fresco de retratos vitales: un espacio de encuentro entre lo personal y lo universal que invita a conectar sin intermediarios con los temas fundamentales del arte.",
        redes: ["@albertstellaart", "@tachabsas"],
      },
      {
        titulo: "Ventana Galería",
        lugar: "Av. Jorge Newbery 3599",
        redes: ["@ventana.galeria"],
        pendientes: ["Falta info"],
      },
      {
        titulo: "Verne Libros",
        horario: "Desde las 14 hs.",
        lugar: "Juan Ramírez de Velasco 1427",
        descripcion:
          "Feria de libros usados: 20% de descuento en libros usados seleccionados. Ofertas de usados a $5.000, $10.000 y $15.000.",
        redes: ["@verne.libros"],
      },
    ],
  },
  {
    nombre: "Recreación",
    nota: "yoga, talleres, arreglo de bici",
    items: [
      {
        titulo: "Arenal Espacio Creativo — taller de Cerámica",
        horario:
          "15.30 a 16.30 hs. y 17.30 a 18.30 hs. (duración 1 hora, 8 vacantes cada una). Para mayores de 18 años.",
        lugar: "Concepción Arenal 3972",
        inscripcion: "Con inscripción previa, en @arenal.espaciocreativo. Bono contribución: $5.000.",
        descripcion: [
          "Cerámica y Té argentino: una fusión de procesos creativos y degustación de sabores.",
          "Trazaremos un recorrido por los procesos de producción artesanal de las tazas de cerámica, que luego estarán en una íntima relación con la experiencia de degustación de variedades de blends originarios de Misiones de Pasionarias Tea.",
          "Apertura de tienda: 15 a 20 hs.",
        ],
        redes: ["@arenal.espaciocreativo", "@pasionarias_tea"],
      },
      {
        titulo: "Casa Naapura — Pilates, Arte y Movimiento",
        horario: "14.30 hs. (duración clase 1 h y feria 3 h)",
        lugar: "Guevara 525",
        descripcion: [
          "Movimiento Expresivo Exploratorio.",
          "La jornada consta de una muestra/feria de alumnos del estudio y una clase abierta a la comunidad.",
          "La clase tiene 3 momentos: uno de trabajo técnico de fuerza, flexibilidad y equilibrio con ejercicios de danza, pilates y yoga; un segundo de improvisación con fin exploratorio de calidades de movimiento, intencionalidad, expresividad y composición grupal; y un tercero de secuencia coreográfica fusionando estilos y técnicas, que cada estudiante va a poder ir llenando de vida y expresión propia.",
        ],
        redes: ["@casanaapura"],
      },
      {
        titulo: "Club Atlético Chacarita Juniors",
        lugar: "Sede: Teodoro García 3550",
        redes: ["@chacaoficial"],
        pendientes: ["Pendiente info. Hablar con Laurita."],
      },
      {
        titulo: "Fiammante — tienda y taller de gres",
        lugar: "Av. Jorge Newbery 4035",
        redes: ["@taller.fiammante"],
        pendientes: ["Falta info y fotos"],
      },
      {
        titulo: "LABA, Laboratorio de Artes Buenos Aires",
        horario: "16.00 a 17.30 hs.",
        lugar: "Fraga 648",
        inscripcion: "Con inscripción previa, link en bio de Casa de Canto.",
        descripcion: "Gran canto colectivo dirigido por el director José Teixidó.",
        redes: ["@casa.de.canto", "@laba_buenosaires"],
      },
      {
        titulo: "Labú — taller de cerámica",
        horario: "Desde las 19.30 hs. (duración 15 min., se repite cada 30 min.)",
        lugar: "Av. Forest 379",
        descripcion:
          "Demostración del uso de un torno alfarero para la confección de un objeto en cerámica.",
        redes: ["@labutallerdeceramica"],
      },
      {
        titulo: "Orc Shop",
        lugar: "Av. Jorge Newbery 3857",
        descripcion:
          "Chimi Juegos, editorial argentina de juegos: traen sus productos para que la gente pueda probarlos.",
        redes: ["@orcshopgames"],
      },
      {
        titulo: "Peregrino Indoor",
        horario: "17 hs. (charla 15 min., práctica 45 min.). Para mayores de 12 años.",
        lugar: "Av. Jorge Newbery 3566",
        inscripcion: "Con inscripción previa, por Instagram (chequear con Iván).",
        descripcion: "Charla introductoria sobre tiro con arco y práctica de tiro con arco.",
        redes: ["@peregrinoindoor"],
        pendientes: ['Revisar nota suelta: "Caminata besos"'],
      },
      {
        titulo: "Taller Nacional Bici Mecánica — Mecánica Express",
        horario: "Desde las 14 hs.",
        lugar: "Av. Jorge Newbery 4009",
        descripcion:
          "Mecánica Express para bicicletas. Si tu bici tiene algún detalle para solucionar, contá con nosotros: vení a conocer el taller y llevátela andando. Ajuste de frenos y cambios, regulación de dirección, revisión de transmisión, inflado y ajustes generales. No incluye repuestos.",
        redes: ["@tallernacionalbicimecanica"],
        pendientes: ["Falta foto y logo separado", "Definir hasta qué hora"],
      },
    ],
  },
  {
    nombre: "Música",
    nota: "incluir a Casa de Canto como protagonista",
    items: [
      {
        titulo: "XXXXX",
        horario: "de xx a xx hs",
        lugar: "xxxxxxx",
        inscripcion: "xxxxxx",
        descripcion: "xxxxxx",
      },
    ],
  },
  {
    nombre: "Teatros",
    nota: "según lo que diga Germán",
    items: [
      {
        titulo: "XXXXX",
        horario: "de xx a xx hs",
        lugar: "xxxxxxx",
        inscripcion: "xxxxxx",
        descripcion: "xxxxxx",
      },
    ],
  },
  {
    nombre: "Chaca y Vino",
    items: [
      {
        titulo: "XXXXX",
        horario: "de xx a xx hs",
        lugar: "xxxxxxx",
        inscripcion: "xxxxxx",
        descripcion: "xxxxxx",
      },
    ],
  },
  {
    nombre: "Espacios Gastronómicos",
    items: [
      {
        titulo: "XXXXX",
        horario: "de xx a xx hs",
        lugar: "xxxxxxx",
        inscripcion: "xxxxxx",
        descripcion: "xxxxxx",
      },
    ],
  },
  {
    nombre: "Cafés",
    items: [
      {
        titulo: "XXXXX",
        horario: "de xx a xx hs",
        lugar: "xxxxxxx",
        inscripcion: "xxxxxx",
        descripcion: "xxxxxx",
      },
    ],
  },
];
