import { notFound } from "next/navigation"
import { ClientBlogPost } from "./ClientBlogPost"

// This is a static mapping of blog posts for GitHub Pages
const blogPosts = {
  "jornada-salud-niza": {
    title: "Jornada de Salud Comunitaria en Barrio Niza",
    date: "15 de Mayo, 2024",
    author: "Equipo Médico FVM",
    category: "Salud Comunitaria",
    readTime: "5 min read",
    image: "/images/fundacion1.jpeg", // Corrected path
    content: `
      <p>La Fundación Vivir Mejor llevó a cabo una exitosa jornada de salud comunitaria en el Barrio Niza, beneficiando a cientos de residentes con servicios médicos esenciales. Nuestro equipo de profesionales de la salud, incluyendo médicos generales y ginecólogos, trabajó arduamente para ofrecer atención de calidad a todos los asistentes.</p>
      
      <h2>Servicios Ofrecidos</h2>
      <p>Durante la jornada, se brindaron los siguientes servicios:</p>
      <ul>
        <li>Consultas médicas generales</li>
        <li>Exámenes ginecológicos</li>
        <li>Toma de presión arterial y glucemia</li>
        <li>Asesoría en planificación familiar</li>
        <li>Entrega de medicamentos básicos</li>
      </ul>
      
      <p>La respuesta de la comunidad fue abrumadora, con largas filas de personas esperando recibir atención. Nos sentimos orgullosos de poder llegar a quienes más lo necesitan y de contribuir al bienestar de nuestra gente.</p>
      
      <h2>Impacto en la Comunidad</h2>
      <p>Este evento no solo proporcionó atención médica inmediata, sino que también sirvió como un espacio para educar a la comunidad sobre la importancia de los chequeos regulares y los hábitos de vida saludables. Agradecemos a nuestros voluntarios y a todos los que hicieron posible esta jornada por su invaluable apoyo.</p>
    `,
    relatedPosts: [
      {
        title: "Detección Temprana y Prevención de Enfermedades",
        category: "Prevención",
        image: "/images/fundacion2.jpeg", // Corrected path
        slug: "deteccion-enfermedades",
      },
      {
        title: "Atención Médica Primaria en Zonas Rurales",
        category: "Salud Rural",
        image: "/images/fundacion4.jpeg", // Corrected path
        slug: "salud-rural",
      },
    ],
  },
  "deteccion-enfermedades": {
    title: "Detección Temprana y Prevención de Enfermedades",
    date: "2 de Junio, 2024",
    author: "Equipo de Prevención FVM",
    category: "Prevención",
    readTime: "6 min read",
    image: "/images/fundacion2.jpeg", // Corrected path
    content: `
      <p>La Fundación Vivir Mejor se compromete activamente en campañas de detección temprana y prevención de enfermedades. Creemos firmemente que la información y el acceso a exámenes oportunos son clave para mantener una comunidad sana y reducir la incidencia de enfermedades crónicas.</p>
      
      <h2>Nuestras Campañas</h2>
      <p>Realizamos jornadas de tamizaje y concientización enfocadas en:</p>
      <ul>
        <li>Diabetes y control de glucosa</li>
        <li>Hipertensión arterial</li>
        <li>Cáncer de mama y cuello uterino</li>
        <li>Enfermedades cardiovasculares</li>
      </ul>
      
      <p>Utilizamos unidades médicas móviles como la que se observa en la imagen, para llevar estos servicios a barrios y veredas de difícil acceso, asegurando que nadie se quede sin la oportunidad de cuidar su salud.</p>
      
      <h2>Educación y Empoderamiento</h2>
      <p>Además de los exámenes, cada campaña incluye charlas educativas sobre factores de riesgo, síntomas de alerta y la importancia de adoptar estilos de vida saludables. Nuestro objetivo es empoderar a la comunidad con el conocimiento necesario para tomar decisiones informadas sobre su bienestar.</p>
    `,
    relatedPosts: [
      {
        title: "Asesoría Psicológica y Emocional para Familias",
        category: "Bienestar",
        image: "/images/fundacion3.jpeg", // Corrected path
        slug: "asesoria-psicologica",
      },
      {
        title: "Campaña de Vacunación y Control de Enfermedades",
        category: "Vacunación",
        image: "/images/fundacion7.jpeg", // Corrected path
        slug: "campana-vacunacion",
      },
    ],
  },
  "asesoria-psicologica": {
    title: "Asesoría Psicológica y Emocional para Familias",
    date: "28 de Junio, 2024",
    author: "Departamento de Bienestar FVM",
    category: "Bienestar",
    readTime: "7 min read",
    image: "/images/fundacion3.jpeg", // Corrected path
    content: `
      <p>En Fundación Vivir Mejor, entendemos que la salud mental y emocional es tan crucial como la física. Por ello, ofrecemos servicios de asesoría psicológica para apoyar a individuos y familias en el manejo de desafíos emocionales y en el fortalecimiento de su bienestar integral.</p>
      
      <h2>Apoyo Individual y Familiar</h2>
      <p>Nuestros psicólogos brindan un espacio seguro y confidencial para abordar diversas situaciones, desde el estrés y la ansiedad hasta conflictos familiares y duelos. Creemos en un enfoque holístico que considere todas las facetas de la vida de una persona.</p>
      
      <h2>Talleres y Actividades</h2>
      <p>Complementamos las sesiones individuales con talleres grupales sobre temas como manejo de emociones, comunicación efectiva, resolución de conflictos y crianza positiva. Estas actividades fomentan el apoyo mutuo y el aprendizaje colectivo.</p>
      
      <p>La imagen muestra a uno de nuestros profesionales brindando una consulta. Este tipo de interacciones son fundamentales para construir confianza y ofrecer una ayuda significativa.</p>
      
      <h2>Nuestro Compromiso</h2>
      <p>Nos dedicamos a romper estigmas alrededor de la salud mental y a asegurar que la asistencia psicológica sea accesible para todos los miembros de nuestra comunidad, contribuyendo a una sociedad más resiliente y feliz.</p>
    `,
    relatedPosts: [
      {
        title: "Apoyo Psicosocial para Niños y Jóvenes",
        category: "Infancia",
        image: "/images/fundacion6.jpeg", // Corrected path
        slug: "apoyo-psicosocial",
      },
      {
        title: "Taller de Nutrición y Vida Saludable",
        category: "Nutrición",
        image: "/images/fundacion5.jpeg", // Corrected path
        slug: "nutricion-saludable",
      },
    ],
  },
  "salud-rural": {
    title: "Atención Médica Primaria en Zonas Rurales",
    date: "5 de Julio, 2024",
    author: "Brigada de Salud FVM",
    category: "Salud Rural",
    readTime: "5 min read",
    image: "/images/fundacion4.jpeg", // Corrected path
    content: `
      <p>La Fundación Vivir Mejor se enorgullece de llevar servicios de salud esenciales a las zonas rurales, donde el acceso a la atención médica es limitado. Nuestras brigadas de salud visitan regularmente estas comunidades para ofrecer consultas, exámenes y medicamentos.</p>
      
      <h2>Superando Barreras</h2>
      <p>Entendemos los desafíos que enfrentan los habitantes de las zonas rurales para acceder a servicios de salud. Por ello, nos esforzamos por superar barreras geográficas y económicas, asegurando que todos tengan la oportunidad de recibir atención médica digna.</p>
      
      <p>La imagen captura un momento de atención médica en una de nuestras jornadas, demostrando el impacto directo y personal de nuestro trabajo.</p>
      
      <h2>Nuestros Servicios Rurales</h2>
      <ul>
        <li>Consultas médicas generales y chequeos de rutina</li>
        <li>Toma de presión arterial y pruebas de glucosa</li>
        <li>Vacunación y control de enfermedades transmisibles</li>
        <li>Asesoría en salud preventiva y nutrición</li>
        <li>Entrega de medicamentos básicos y vitaminas</li>
      </ul>
      
      <p>Estamos comprometidos con el desarrollo integral de las comunidades rurales, promoviendo la salud como un pilar fundamental para su progreso.</p>
    `,
    relatedPosts: [
      {
        title: "Campaña de Vacunación y Control de Enfermedades",
        category: "Vacunación",
        image: "/images/fundacion7.jpeg", // Corrected path
        slug: "campana-vacunacion",
      },
      {
        title: "Entrega de Kits de Higiene y Suministros Médicos",
        category: "Ayuda Humanitaria",
        image: "/images/fundacion8.jpeg", // Corrected path
        slug: "kits-higiene",
      },
    ],
  },
  "nutricion-saludable": {
    title: "Taller de Nutrición y Vida Saludable",
    date: "18 de Julio, 2024",
    author: "Especialistas FVM",
    category: "Nutrición",
    readTime: "4 min read",
    image: "/images/fundacion5.jpeg", // Corrected path
    content: `
      <p>La Fundación Vivir Mejor organiza talleres de nutrición y vida saludable con el objetivo de empoderar a la comunidad con conocimientos prácticos para mejorar sus hábitos alimenticios y fomentar un estilo de vida activo.</p>
      
      <h2>Enseñanza Práctica</h2>
      <p>Nuestros talleres son interactivos y se centran en la enseñanza de principios de nutrición básica, la importancia de una dieta balanceada y cómo preparar comidas saludables con ingredientes accesibles.</p>
      
      <p>La imagen muestra a miembros de la comunidad participando activamente, lo que refleja el interés y la necesidad de este tipo de educación en salud.</p>
      
      <h2>Beneficios para la Comunidad</h2>
      <ul>
        <li>Prevención de enfermedades relacionadas con la alimentación</li>
        <li>Mejora de la energía y el bienestar general</li>
        <li>Conocimiento sobre alimentos nutritivos y económicos</li>
        <li>Fomento de la actividad física diaria</li>
      </ul>
      
      <p>Creemos que la educación en nutrición es una inversión en el futuro de nuestra comunidad, contribuyendo a una población más fuerte y saludable.</p>
    `,
    relatedPosts: [
      {
        title: "Apoyo Psicosocial para Niños y Jóvenes",
        category: "Infancia",
        image: "/images/fundacion6.jpeg", // Corrected path
        slug: "apoyo-psicosocial",
      },
      {
        title: "Formación en Primeros Auxilios para la Comunidad",
        category: "Capacitación",
        image: "/images/fundacion10.jpeg", // Corrected path
        slug: "primeros-auxilios",
      },
    ],
  },
  "apoyo-psicosocial": {
    title: "Apoyo Psicosocial para Niños y Jóvenes",
    date: "3 de Agosto, 2024",
    author: "Equipo de Psicología Infantil FVM",
    category: "Infancia y Juventud",
    readTime: "6 min read",
    image: "/images/fundacion6.jpeg", // Corrected path
    content: `
      <p>La Fundación Vivir Mejor se preocupa por el desarrollo integral de los niños y jóvenes, ofreciendo programas de apoyo psicosocial que fomentan su bienestar emocional, social y cognitivo. Creemos que una infancia feliz y saludable es la base para un futuro prometedor.</p>
      
      <h2>Programas Adaptados</h2>
      <p>Nuestros programas incluyen actividades lúdicas, talleres educativos y sesiones de acompañamiento individual o grupal, adaptados a las diferentes edades y necesidades de los participantes.</p>
      
      <p>La imagen muestra a un grupo de niños y adultos en un ambiente de interacción, destacando la importancia del apoyo comunitario en el crecimiento de los más jóvenes.</p>
      
      <h2>Beneficios del Apoyo Psicosocial</h2>
      <ul>
        <li>Fortalecimiento de la autoestima y confianza</li>
        <li>Desarrollo de habilidades sociales y emocionales</li>
        <li>Manejo de situaciones difíciles y resolución de conflictos</li>
        <li>Fomento de un ambiente de aprendizaje y crecimiento</li>
      </ul>
      
      <p>Nuestro compromiso es asegurar que cada niño y joven tenga las herramientas necesarias para enfrentar los desafíos de la vida y alcanzar su máximo potencial.</p>
    `,
    relatedPosts: [
      {
        title: "Taller de Nutrición y Vida Saludable",
        category: "Nutrición",
        image: "/images/fundacion5.jpeg", // Corrected path
        slug: "nutricion-saludable",
      },
      {
        title: "Asesoría Psicológica y Emocional para Familias",
        category: "Bienestar",
        image: "/images/fundacion3.jpeg", // Corrected path
        slug: "asesoria-psicologica",
      },
    ],
  },
  "campana-vacunacion": {
    title: "Campaña de Vacunación y Control de Enfermedades",
    date: "15 de Agosto, 2024",
    author: "Equipo de Salud Pública FVM",
    category: "Vacunación",
    readTime: "5 min read",
    image: "/images/fundacion7.jpeg", // Corrected path
    content: `
      <p>La Fundación Vivir Mejor lleva a cabo campañas de vacunación masivas y control de enfermedades para proteger a nuestra comunidad contra diversas afecciones. La vacunación es una herramienta fundamental en la salud pública y nuestro compromiso es asegurar que todos tengan acceso a ella.</p>
      
      <h2>Inmunización para Todos</h2>
      <p>Nuestras jornadas se centran en la aplicación de vacunas esenciales para niños y adultos, siguiendo los lineamientos de salud pública. Además, realizamos chequeos de salud para detectar y controlar enfermedades comunes, especialmente en poblaciones vulnerables.</p>
      
      <p>La imagen muestra a uno de nuestros profesionales de la salud aplicando una vacuna, un acto que simboliza nuestro compromiso con la prevención y el bienestar.</p>
      
      <h2>Prevención y Concientización</h2>
      <p>Más allá de la aplicación de vacunas, también educamos a la comunidad sobre la importancia de la inmunización, el calendario de vacunación y las medidas preventivas para evitar la propagación de enfermedades.</p>
      
      <p>Trabajamos incansablemente para construir una comunidad más saludable y protegida, donde la prevención sea la prioridad.</p>
    `,
    relatedPosts: [
      {
        title: "Atención Médica Primaria en Zonas Rurales",
        category: "Salud Rural",
        image: "/images/fundacion4.jpeg", // Corrected path
        slug: "salud-rural",
      },
      {
        title: "Entrega de Kits de Higiene y Suministros Médicos",
        category: "Ayuda Humanitaria",
        image: "/images/fundacion8.jpeg", // Corrected path
        slug: "kits-higiene",
      },
    ],
  },
  "kits-higiene": {
    title: "Entrega de Kits de Higiene y Suministros Médicos",
    date: "2 de Septiembre, 2024",
    author: "Departamento de Ayuda Social FVM",
    category: "Ayuda Humanitaria",
    readTime: "4 min read",
    image: "/images/fundacion8.jpeg", // Corrected path
    content: `
      <p>En Fundación Vivir Mejor, extendemos nuestra mano amiga a las familias más necesitadas a través de la distribución de kits de higiene y suministros médicos esenciales. Esta iniciativa es crucial para promover la salud básica y prevenir enfermedades, especialmente en contextos de vulnerabilidad.</p>
      
      <h2>Nuestros Kits</h2>
      <p>Cada kit de higiene incluye artículos básicos como jabón, cepillos de dientes, pasta dental, alcohol en gel y toallas sanitarias, adaptados a las necesidades de cada familia. Los suministros médicos varían según la jornada y las necesidades detectadas en la comunidad.</p>
      
      <p>La imagen muestra a jóvenes de la comunidad recibiendo asistencia, destacando el impacto directo de nuestras donaciones.</p>
      
      <h2>Impacto Directo</h2>
      <p>La entrega de estos kits no solo satisface una necesidad inmediata, sino que también fomenta hábitos de higiene fundamentales que contribuyen a la salud a largo plazo y a la dignidad de las personas. Colaboramos con la comunidad para identificar a las familias que más se benefician de esta ayuda.</p>
      
      <p>Agradecemos a todos los donantes y voluntarios que hacen posible esta labor humanitaria, permitiéndonos llegar a más hogares.</p>
    `,
    relatedPosts: [
      {
        title: "Campaña de Vacunación y Control de Enfermedades",
        category: "Vacunación",
        image: "/images/fundacion7.jpeg", // Corrected path
        slug: "campana-vacunacion",
      },
      {
        title: "Formación en Primeros Auxilios para la Comunidad",
        category: "Capacitación",
        image: "/images/fundacion10.jpeg", // Corrected path
        slug: "primeros-auxilios",
      },
    ],
  },
  "primeros-auxilios": {
    title: "Formación en Primeros Auxilios para la Comunidad",
    date: "20 de Septiembre, 2024",
    author: "Instructor de Salud FVM",
    category: "Capacitación",
    readTime: "7 min read",
    image: "/images/fundacion10.jpeg", // Corrected path
    content: `
      <p>La Fundación Vivir Mejor ofrece programas de formación en primeros auxilios dirigidos a líderes comunitarios y al público en general. Creemos que capacitar a las personas con habilidades básicas de primeros auxilios puede marcar una diferencia crucial en situaciones de emergencia y salvar vidas.</p>
      
      <h2>Habilidades para Salvar Vidas</h2>
      <p>Nuestros talleres cubren temas esenciales como:</p>
      <ul>
        <li>Reanimación Cardiopulmonar (RCP) básica</li>
        <li>Manejo de heridas y hemorragias</li>
        <li>Atención de quemaduras</li>
        <li>Reconocimiento y actuación ante un ataque de asma o convulsión</li>
        <li>Qué hacer en caso de atragantamiento</li>
      </ul>
      
      <p>La imagen muestra a participantes en uno de nuestros talleres, en un ambiente de aprendizaje práctico y colaborativo, reflejando el compromiso de la comunidad con la seguridad.</p>
      
      <h2>Impacto en la Seguridad Comunitaria</h2>
      <p>Al equipar a los miembros de la comunidad con estas habilidades, aumentamos la capacidad de respuesta ante emergencias y creamos entornos más seguros para todos. Esta formación es fundamental para fomentar una cultura de prevención y cuidado mutuo.</p>
      
      <p>Invitamos a todos a unirse a nuestras próximas sesiones de capacitación. Juntos, podemos hacer de nuestra comunidad un lugar más seguro y preparado.</p>
    `,
    relatedPosts: [
      {
        title: "Entrega de Kits de Higiene y Suministros Médicos",
        category: "Ayuda Humanitaria",
        image: "/images/fundacion8.jpeg", // Corrected path
        slug: "kits-higiene",
      },
      {
        title: "Jornada de Salud Comunitaria en Barrio Niza",
        category: "Salud Comunitaria",
        image: "/images/fundacion1.jpeg", // Corrected path
        slug: "jornada-salud-niza",
      },
    ],
  },
}

// generateStaticParams is required for dynamic routes with output: "export"
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  if (!Object.hasOwn(blogPosts, params.slug)) {
    notFound()
  }

  const post = blogPosts[params.slug as keyof typeof blogPosts]

  return <ClientBlogPost post={post} />
}
