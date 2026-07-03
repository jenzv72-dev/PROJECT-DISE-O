import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const en = {
  translation: {
    nav: {
      home: "Home",
      properties: "Properties",
      about: "About Us",
      contact: "Contact",
      appraisal: "Free Appraisal"
    },
    common: {
      viewDetails: "View Details",
      seeAll: "See All",
      send: "Send",
      close: "Close"
    },
    home: {
      hero: {
        subtitle: "Luxury Real Estate Agency — Lima, Peru",
        title: "Where Space",
        titleHighlight: "Defines Style",
        description: "We select the most exclusive properties in Lima for those who don't settle for less than extraordinary.",
        viewAll: "View all properties",
        explore: "Explore"
      },
      search: {
        type: "Property Type",
        type1: "Apartment",
        type2: "House / Mansion",
        type3: "Penthouse",
        type4: "Loft",
        type5: "Beach Villa",
        district: "District",
        budget: "Budget",
        budget1: "Up to S/ 1,000,000",
        budget2: "S/ 1M — S/ 2M",
        budget3: "S/ 2M — S/ 4M",
        budget4: "Over S/ 4M",
        button: "Search"
      },
      stats: {
        properties: "Properties",
        years: "Years",
        transactions: "Transactions"
      },
      featured: {
        subtitle: "Curated Selection",
        title: "Featured Properties",
        viewAll: "View all"
      },
      whyUs: {
        yearsExperience: "Years of<br />Experience",
        subtitle: "Differential",
        title: "Why<br />Choose Us",
        reason1: {
          title: "Exclusive Curation",
          desc: "We only represent properties that exceed our rigorous standards of quality, location, and potential appreciation in Lima."
        },
        reason2: {
          title: "Comprehensive Advice",
          desc: "From the search to the deed in Public Registries, our advisors accompany you in every decision with total transparency."
        },
        reason3: {
          title: "International Network",
          desc: "Access to buyers and investors in more than 20 countries through our network of strategic partnerships."
        },
        reason4: {
          title: "Absolute Discretion",
          desc: "We operate with maximum confidentiality. Your transactions and personal data always remain strictly reserved."
        },
        learnMore: "Learn more about ARQUÉ"
      },
      contact: {
        subtitle: "Direct Contact",
        title: "Let's Talk About",
        titleHighlight: "Your Property",
        description: "Tell us what you are looking for. One of our advisors will contact you within 24 hours, without any commitment.",
        name: "Full Name",
        phone: "Mobile",
        email: "Email Address",
        message: "What kind of property are you looking for?",
        submit: "Send Inquiry"
      }
    },
    footer: {
      description: "The leading luxury real estate agency in Lima, Peru. 18 years creating life stories in the best spaces in the country.",
      navigation: "Navigation",
      contact: "Contact",
      copyright: "© 2026 ARQUÉ Inmobiliaria S.A.C. — Lima, Peru. All rights reserved.",
      privacy: "Privacy Policy",
      legal: "Legal Notice",
      cookies: "Cookies"
    },
    tasacion: {
      title: "How much is your property worth?",
      subtitle: "Free Appraisal",
      steps: {
        property: "Property",
        features: "Features",
        contact: "Contact"
      },
      form: {
        addressLabel: "Property address *",
        addressPlaceholder: "E.g. Av. Larco 123, Miraflores",
        typeLabel: "Property type *",
        districtLabel: "District *",
        districtPlaceholder: "Select district",
        roomsLabel: "Rooms",
        bathsLabel: "Bathrooms",
        areaLabel: "Total area (m²) *",
        areaPlaceholder: "E.g. 120",
        ageLabel: "Age",
        agePlaceholder: "Select",
        conditionLabel: "Condition",
        conditionPlaceholder: "Select",
        summary: "Summary",
        rooms: "rooms",
        baths: "baths",
        nameLabel: "Full name *",
        namePlaceholder: "Your full name",
        emailLabel: "Email address *",
        emailPlaceholder: "you@email.com",
        phoneLabel: "Phone / Mobile *",
        phonePlaceholder: "987 654 321",
        reasonLabel: "Why do you need the appraisal?",
        reasonPlaceholder: "Select a reason",
        privacyText1: "I accept the ",
        privacyLink: "Privacy Policy",
        privacyText2: " and the processing of my personal data to receive the appraisal. *"
      },
      buttons: {
        prev: "Previous",
        next: "Next",
        submit: "Request Free Appraisal",
        close: "Close"
      },
      success: {
        title: "Appraisal in Progress!",
        p1_1: "We received your request for ",
        p1_2: "the property",
        p1_3: " in ",
        p2: "One of our specialized advisors will analyze your property and send you the appraisal report to ",
        p3: " within 24–48 hours.",
        codeLabel: "Tracking code"
      },
      errors: {
        address: "Address is required",
        type: "Select property type",
        district: "Select district",
        area: "Enter area in m²",
        name: "Name is required",
        email: "Email is required",
        emailInvalid: "Invalid email",
        phone: "Phone is required",
        privacy: "You must accept the privacy policy"
      },
      options: {
        types: {
          house: "House",
          apartment: "Apartment",
          land: "Land",
          office: "Office",
          commercial: "Commercial Space"
        },
        ages: {
          brandNew: "Brand new",
          under5: "Under 5 years",
          fiveTo15: "5–15 years",
          fifteenTo30: "15–30 years",
          over30: "Over 30 years"
        },
        conditions: {
          excellent: "Excellent",
          good: "Good",
          fair: "Fair",
          needsWork: "Needs renovation"
        },
        reasons: {
          sell: "I want to sell",
          rent: "I want to rent",
          bank: "Bank / Refinancing",
          info: "Just asking for info"
        },
        other: "Other"
      }
    },
    properties: {
      catalog: "Full Catalog",
      title: "Properties",
      filterTitle: "Filter Properties",
      filters: "Filters",
      clearAll: "Clear all",
      type: "Property Type",
      district: "District",
      price: "Price",
      minBeds: "Minimum Bedrooms",
      allTypes: "All types",
      allDistricts: "All districts",
      anyPrice: "Any price",
      anyBeds: "Any",
      viewProps: "View {{count}} property",
      viewProps_plural: "View {{count}} properties",
      propsFound: "property found",
      propsFound_plural: "properties found",
      sortBy: {
        featured: "Featured",
        priceAsc: "Price: Low to High",
        priceDesc: "Price: High to Low"
      },
      empty: {
        title: "No results",
        desc: "We couldn't find any properties matching the selected filters.",
        clear: "Clear Filters"
      }
    },
    property: {
      notFound: {
        title: "Property not found",
        btn: "View Properties"
      },
      back: "Back to catalog",
      area: "Area",
      rooms: "Rooms",
      baths: "Baths",
      description: "Description",
      features: "Features",
      actions: {
        schedule: "Schedule Visit",
        contact: "Contact Advisor",
        dossier: "Download Dossier"
      },
      price: {
        label: "Sale price",
        note: "Negotiable price · Financing available"
      },
      related: {
        subtitle: "You might also like",
        title: "Similar Properties",
        viewAll: "View all"
      }
    },
    schedule: {
      desc: "Complete your details and we will contact you to confirm your visit to this property.",
      submit: "Request Visit"
    },
    about: {
      hero: {
        subtitle: "About ARQUÉ",
        title: "Architects<br /><em class=\"not-italic text-[#c9a96e]\">of Space</em>",
        desc: "Since 2006, ARQUÉ has been synonymous with excellence in the Peruvian luxury real estate market. We don't just sell properties — we create life stories in the best corners of the country."
      },
      history: {
        subtitle: "Our History",
        title: "18 years leading<br />the Lima market",
        p1: "ARQUÉ was born from the conviction that the Peruvian real estate market deserved an agency that combined professional rigor with genuine aesthetic vision. Since our early years in Miraflores, we have grown to become the undisputed benchmark of the sector in Peru.",
        p2: "Today we operate with a team of specialized advisors who dominate every micro-market in Lima, from classic San Isidro to bohemian Barranco, passing through residential La Molina and the exclusive beach resort of Asia.",
        btn: "View our properties",
        badge: "No. 1",
        badgeDesc: "Luxury agency<br />in Peru 2024"
      },
      philosophy: {
        subtitle: "Philosophy",
        title: "Our Values"
      },
      team: {
        subtitle: "The people behind ARQUÉ",
        title: "Our Team",
        sold: "properties<br />sold",
        email: "Email",
        call: "Call",
        meeting: "Schedule meeting"
      },
      awards: {
        subtitle: "Recognitions",
        title: "Awards and Distinctions"
      },
      cta: {
        title: "Ready to find your ideal property?",
        desc: "Our advisors are available to guide you without any commitment.",
        btnProps: "View Properties",
        btnTalk: "Talk to an Advisor"
      }
    },
    contact: {
      subtitle: "We are here",
      title: "Let's talk about<br /><em class=\"not-italic text-[#c9a96e]\">your Property</em>",
      ref: "Reference:",
      form: {
        name: "Name *",
        namePh: "Your name",
        last: "Last Names *",
        lastPh: "Your last names",
        email: "Email *",
        emailPh: "you@email.com",
        phone: "Phone / Mobile *",
        phonePh: "987 654 321",
        type: "Type of interest",
        budget: "Budget",
        refProp: "Reference property",
        prefilled: "(pre-filled)",
        noRef: "No specific reference",
        msg: "Message *",
        msgPh: "Tell us what you're looking for or how we can help you...",
        privacy1: "I accept the",
        privacyLink: "Privacy Policy",
        privacy2: "and the processing of my personal data. *",
        submit: "Send Inquiry"
      },
      success: {
        title: "Message sent!",
        desc1: "Thank you,",
        desc2: ". One of our advisors will contact you shortly, within 24 hours."
      },
      direct: {
        title: "Direct Contact",
        main: "Main line",
        response: "Response in less than 24h"
      },
      social: "Social Media"
    }
  }
};

// Spanish translations
const es = {
  translation: {
    nav: {
      home: "Inicio",
      properties: "Propiedades",
      about: "Nosotros",
      contact: "Contacto",
      appraisal: "Tasación Gratuita"
    },
    common: {
      viewDetails: "Ver Detalles",
      seeAll: "Ver Todas",
      send: "Enviar",
      close: "Cerrar"
    },
    home: {
      hero: {
        subtitle: "Agencia Inmobiliaria de Lujo — Lima, Perú",
        title: "Donde el Espacio",
        titleHighlight: "Define el Estilo",
        description: "Seleccionamos las propiedades más exclusivas de Lima para quienes no se conforman con menos que lo extraordinario.",
        viewAll: "Ver todas las propiedades",
        explore: "Explorar"
      },
      search: {
        type: "Tipo de inmueble",
        type1: "Departamento",
        type2: "Casa / Mansión",
        type3: "Ático / Penthouse",
        type4: "Loft",
        type5: "Villa de Playa",
        district: "Distrito",
        budget: "Presupuesto",
        budget1: "Hasta S/ 1.000.000",
        budget2: "S/ 1M — S/ 2M",
        budget3: "S/ 2M — S/ 4M",
        budget4: "Más de S/ 4M",
        button: "Buscar"
      },
      stats: {
        properties: "Propiedades",
        years: "Años",
        transactions: "Transacciones"
      },
      featured: {
        subtitle: "Selección curada",
        title: "Propiedades Destacadas",
        viewAll: "Ver todas"
      },
      whyUs: {
        yearsExperience: "Años de<br />Experiencia",
        subtitle: "Diferencial",
        title: "Por qué<br />Elegirnos",
        reason1: {
          title: "Curación Exclusiva",
          desc: "Solo representamos propiedades que superan nuestros rigurosos estándares de calidad, ubicación y potencial de revalorización en Lima."
        },
        reason2: {
          title: "Asesoramiento Integral",
          desc: "Desde la búsqueda hasta la escritura en Registros Públicos, nuestros asesores te acompañan en cada decisión con total transparencia."
        },
        reason3: {
          title: "Red Internacional",
          desc: "Acceso a compradores e inversores en más de 20 países a través de nuestra red de partnerships estratégicos."
        },
        reason4: {
          title: "Discreción Absoluta",
          desc: "Operamos con la máxima confidencialidad. Tus transacciones y datos personales permanecen siempre bajo estricta reserva."
        },
        learnMore: "Conocer más sobre ARQUÉ"
      },
      contact: {
        subtitle: "Contacto Directo",
        title: "Hablemos de",
        titleHighlight: "tu Inmueble",
        description: "Cuéntanos qué estás buscando. Uno de nuestros asesores se pondrá en contacto contigo antes de 24 horas, sin ningún compromiso.",
        name: "Nombre completo",
        phone: "Celular",
        email: "Correo electrónico",
        message: "¿Qué tipo de propiedad buscas?",
        submit: "Enviar Consulta"
      }
    },
    footer: {
      description: "La agencia líder en propiedades de lujo en Lima, Perú. 18 años creando historias de vida en los mejores espacios del país.",
      navigation: "Navegación",
      contact: "Contacto",
      copyright: "© 2026 ARQUÉ Inmobiliaria S.A.C. — Lima, Perú. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      legal: "Aviso Legal",
      cookies: "Cookies"
    },
    tasacion: {
      title: "¿Cuánto vale tu inmueble?",
      subtitle: "Tasación Gratuita",
      steps: {
        property: "Inmueble",
        features: "Características",
        contact: "Contacto"
      },
      form: {
        addressLabel: "Dirección del inmueble *",
        addressPlaceholder: "Ej. Av. Larco 123, Miraflores",
        typeLabel: "Tipo de inmueble *",
        districtLabel: "Distrito *",
        districtPlaceholder: "Selecciona el distrito",
        roomsLabel: "Habitaciones",
        bathsLabel: "Baños",
        areaLabel: "Área total (m²) *",
        areaPlaceholder: "Ej. 120",
        ageLabel: "Antigüedad",
        agePlaceholder: "Seleccionar",
        conditionLabel: "Condición",
        conditionPlaceholder: "Seleccionar",
        summary: "Resumen",
        rooms: "hab.",
        baths: "baños",
        nameLabel: "Nombre completo *",
        namePlaceholder: "Tu nombre completo",
        emailLabel: "Correo electrónico *",
        emailPlaceholder: "tu@correo.com",
        phoneLabel: "Teléfono / Celular *",
        phonePlaceholder: "987 654 321",
        reasonLabel: "¿Para qué necesitas la tasación?",
        reasonPlaceholder: "Selecciona un motivo",
        privacyText1: "Acepto la ",
        privacyLink: "Política de Privacidad",
        privacyText2: " y el tratamiento de mis datos personales para recibir la tasación. *"
      },
      buttons: {
        prev: "Anterior",
        next: "Siguiente",
        submit: "Solicitar Tasación Gratuita",
        close: "Cerrar"
      },
      success: {
        title: "¡Tasación en Proceso!",
        p1_1: "Recibimos tu solicitud para ",
        p1_2: "el inmueble",
        p1_3: " en ",
        p2: "Uno de nuestros asesores especializados analizará tu propiedad y te enviará el informe de tasación a ",
        p3: " en un plazo de 24–48 horas.",
        codeLabel: "Código de seguimiento"
      },
      errors: {
        address: "La dirección es requerida",
        type: "Selecciona el tipo de inmueble",
        district: "Selecciona el distrito",
        area: "Ingresa el área en m²",
        name: "El nombre es requerido",
        email: "El correo es requerido",
        emailInvalid: "Correo inválido",
        phone: "El teléfono es requerido",
        privacy: "Debes aceptar la política de privacidad"
      },
      options: {
        types: {
          house: "Casa",
          apartment: "Departamento",
          land: "Terreno",
          office: "Oficina",
          commercial: "Local Comercial"
        },
        ages: {
          brandNew: "A estrenar",
          under5: "Menos de 5 años",
          fiveTo15: "5–15 años",
          fifteenTo30: "15–30 años",
          over30: "Más de 30 años"
        },
        conditions: {
          excellent: "Excelente",
          good: "Buena",
          fair: "Regular",
          needsWork: "Necesita remodelación"
        },
        reasons: {
          sell: "Quiero vender",
          rent: "Quiero alquilar",
          bank: "Trámite bancario / Refinanciamiento",
          info: "Solo información"
        },
        other: "Otro"
      }
    },
    properties: {
      catalog: "Catálogo completo",
      title: "Propiedades",
      filterTitle: "Filtrar Propiedades",
      filters: "Filtros",
      clearAll: "Limpiar todo",
      type: "Tipo de Inmueble",
      district: "Distrito",
      price: "Precio",
      minBeds: "Habitaciones mínimas",
      allTypes: "Todos los tipos",
      allDistricts: "Todos los distritos",
      anyPrice: "Cualquier precio",
      anyBeds: "Cualquiera",
      viewProps: "Ver {{count}} propiedad",
      viewProps_plural: "Ver {{count}} propiedades",
      propsFound: "propiedad encontrada",
      propsFound_plural: "propiedades encontradas",
      sortBy: {
        featured: "Destacados",
        priceAsc: "Precio: Menor a Mayor",
        priceDesc: "Precio: Mayor a Menor"
      },
      empty: {
        title: "Sin resultados",
        desc: "No encontramos propiedades con los filtros seleccionados.",
        clear: "Limpiar Filtros"
      }
    },
    property: {
      notFound: {
        title: "Propiedad no encontrada",
        btn: "Ver Propiedades"
      },
      back: "Volver al catálogo",
      area: "Área",
      rooms: "Habitaciones",
      baths: "Baños",
      description: "Descripción",
      features: "Características",
      actions: {
        schedule: "Agendar Visita",
        contact: "Contactar Asesor",
        dossier: "Descargar Dossier"
      },
      price: {
        label: "Precio de venta",
        note: "Precio negociable · Financiamiento disponible"
      },
      related: {
        subtitle: "También te puede interesar",
        title: "Propiedades Similares",
        viewAll: "Ver todas"
      }
    },
    schedule: {
      desc: "Complete sus datos y nos pondremos en contacto para confirmar su visita a esta propiedad.",
      submit: "Solicitar Visita"
    },
    about: {
      hero: {
        subtitle: "Acerca de ARQUÉ",
        title: "Arquitectos<br /><em class=\"not-italic text-[#c9a96e]\">del Espacio</em>",
        desc: "Desde 2006, ARQUÉ ha sido sinónimo de excelencia en el mercado inmobiliario de lujo peruano. No vendemos propiedades — creamos historias de vida en los mejores rincones del país."
      },
      history: {
        subtitle: "Nuestra Historia",
        title: "18 años liderando<br />el mercado limeño",
        p1: "ARQUÉ nació de la convicción de que el mercado inmobiliario peruano merecía una agencia que combinara rigor profesional con una visión estética genuina. Desde nuestros primeros años en Miraflores, hemos crecido para convertirnos en el referente indiscutible del sector en el Perú.",
        p2: "Hoy operamos con un equipo de asesores especializados que dominan cada micro-mercado de Lima, desde el clásico San Isidro hasta el bohemio Barranco, pasando por el residencial La Molina y el exclusivo balneario de Asia.",
        btn: "Ver nuestras propiedades",
        badge: "Nº1",
        badgeDesc: "Agencia de lujo<br />en Perú 2024"
      },
      philosophy: {
        subtitle: "Filosofía",
        title: "Nuestros Valores"
      },
      team: {
        subtitle: "Las personas detrás de ARQUÉ",
        title: "Nuestro Equipo",
        sold: "propiedades<br />vendidas",
        email: "Email",
        call: "Llamar",
        meeting: "Agendar reunión"
      },
      awards: {
        subtitle: "Reconocimientos",
        title: "Premios y Distinciones"
      },
      cta: {
        title: "¿Listo para encontrar tu propiedad ideal?",
        desc: "Nuestros asesores están disponibles para orientarte sin ningún compromiso.",
        btnProps: "Ver Propiedades",
        btnTalk: "Hablar con un Asesor"
      }
    },
    contact: {
      subtitle: "Estamos aquí",
      title: "Hablemos de<br /><em class=\"not-italic text-[#c9a96e]\">tu Propiedad</em>",
      ref: "Referencia:",
      form: {
        name: "Nombre *",
        namePh: "Tu nombre",
        last: "Apellidos *",
        lastPh: "Tus apellidos",
        email: "Correo electrónico *",
        emailPh: "tu@correo.com",
        phone: "Teléfono / Celular *",
        phonePh: "987 654 321",
        type: "Tipo de interés",
        budget: "Presupuesto",
        refProp: "Propiedad de referencia",
        prefilled: "(pre-cargada)",
        noRef: "Sin referencia específica",
        msg: "Mensaje *",
        msgPh: "Cuéntanos qué estás buscando o en qué podemos ayudarte...",
        privacy1: "Acepto la",
        privacyLink: "Política de Privacidad",
        privacy2: "y el tratamiento de mis datos personales. *",
        submit: "Enviar Consulta"
      },
      success: {
        title: "¡Mensaje enviado!",
        desc1: "Gracias,",
        desc2: ". Uno de nuestros asesores se pondrá en contacto contigo a la brevedad, antes de 24 horas."
      },
      direct: {
        title: "Contacto Directo",
        main: "Línea principal",
        response: "Respuesta en menos de 24 h"
      },
      social: "Redes Sociales"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      es
    },
    lng: "es", // default language
    fallbackLng: "es",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
