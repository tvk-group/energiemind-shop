import type { Dictionary } from "@/i18n/types";

const es: Dictionary = {
  site: {
    name: "EnergieMIND Shop",
    tagline: "Hardware de minería e infraestructura consciente de la energía",
    domain: "https://energiemind.shop",
  },
  nav: {
    home: "Inicio",
    shop: "Tienda",
    miningHeaters: "Calefactores de minería",
    bitcoinMiners: "Mineros de Bitcoin",
    energySystems: "Sistemas energéticos",
    solarPower: "Solar y energía",
    monitoringDevices: "Dispositivos de monitorización",
    accessories: "Accesorios",
    support: "Soporte",
    contact: "Contacto",
  },
  hero: {
    headline: "Hardware de minería e infraestructura consciente de la energía",
    subheadline:
      "Equipamiento para aprovechamiento del calor de minería, monitorización energética, integración solar y sistemas de infraestructura inteligente.",
    browseProducts: "Ver productos",
    requestCustomSetup: "Solicitar instalación personalizada",
  },
  categories: {
    "mining-heaters": {
      title: "Calefactores de minería",
      description:
        "Mineros de Bitcoin diseñados para la reutilización del calor en entornos residenciales y comerciales. Convierta el trabajo computacional en energía térmica aprovechable.",
      metaTitle: "Calefactores de minería | EnergieMIND Shop",
      metaDescription:
        "Calefactores de minería que convierten la minería de Bitcoin en calor aprovechable. Hardware profesional para sistemas de calefacción conscientes de la energía.",
    },
    "bitcoin-miners": {
      title: "Mineros de Bitcoin",
      description:
        "Mineros ASIC de alta eficiencia para centros de datos, instalaciones industriales y despliegues integrados con recuperación de calor.",
      metaTitle: "Mineros de Bitcoin | EnergieMIND Shop",
      metaDescription:
        "Mineros ASIC de Bitcoin profesionales con especificaciones completas. Disponibles bajo solicitud con soporte de instalación personalizada.",
    },
    "solar-power": {
      title: "Solar y energía",
      description:
        "Inversores solares, sistemas híbridos e infraestructura eléctrica para minería y optimización energética.",
      metaTitle: "Equipamiento solar y energético | EnergieMIND Shop",
      metaDescription:
        "Paneles solares, inversores híbridos y sistemas eléctricos para infraestructura de minería consciente de la energía.",
    },
    "monitoring-devices": {
      title: "Monitorización energética",
      description:
        "Monitorización eléctrica en tiempo real, enchufes inteligentes y telemetría de infraestructura para un uso optimizado de la energía.",
      metaTitle: "Dispositivos de monitorización energética | EnergieMIND Shop",
      metaDescription:
        "Hardware profesional de monitorización energética para instalaciones de minería e infraestructura inteligente.",
    },
    "cooling-systems": {
      title: "Sistemas de refrigeración",
      description:
        "Refrigeración por inmersión, intercambiadores de calor para conductos y gestión térmica para hardware de minería.",
      metaTitle: "Sistemas de refrigeración | EnergieMIND Shop",
      metaDescription:
        "Soluciones de refrigeración para minería, incluidos kits de inmersión e intercambiadores de calor para una gestión térmica eficiente.",
    },
    accessories: {
      title: "Cables y accesorios",
      description:
        "Fuentes de alimentación industriales, cableado y accesorios para centros de datos y instalaciones de minería.",
      metaTitle: "Accesorios de minería | EnergieMIND Shop",
      metaDescription:
        "Fuentes de alimentación, cables y accesorios para minería profesional e infraestructura energética.",
    },
    "energy-systems": {
      title: "Sistemas energéticos",
      description:
        "Sistemas integrados de optimización energética que combinan minería, calefacción, solar y monitorización.",
      metaTitle: "Sistemas energéticos | EnergieMIND Shop",
      metaDescription:
        "Sistemas energéticos completos para aprovechamiento del calor de minería, integración solar y optimización de infraestructura.",
    },
    "custom-installations": {
      title: "Instalaciones personalizadas",
      description:
        "Paquetes de hardware a medida y planificación de instalación para su infraestructura energética específica.",
      metaTitle: "Instalaciones personalizadas | EnergieMIND Shop",
      metaDescription:
        "Solicite configuraciones personalizadas de hardware de minería y energía adaptadas a su edificio y objetivos energéticos.",
    },
  },
  productLabels: {
    brand: "Marca",
    model: "Modelo",
    hashrate: "Tasa de hash",
    powerConsumption: "Consumo eléctrico",
    heatOutput: "Potencia térmica",
    voltage: "Voltaje",
    useCase: "Caso de uso",
    warranty: "Garantía",
    shipping: "Envío",
    installation: "Notas de instalación",
    riskNotice: "Aviso de riesgos y seguridad",
    price: "Precio",
    addToCart: "Añadir al carrito",
    requestQuote: "Solicitar presupuesto",
    specifications: "Especificaciones técnicas",
    availability: "Disponibilidad",
    relatedProducts: "Productos relacionados",
    notApplicable: "N/D",
  },
  availability: {
    onRequest: "Disponible bajo solicitud",
    preOrder: "Consulta de reserva",
    customQuote: "Presupuesto personalizado",
  },
  products: {
    "heatbit-v2": {
      name: "Heatbit V2 Mining Heater",
      useCase:
        "Calefacción residencial con minería de Bitcoin integrada. Ideal para apartamentos y viviendas pequeñas con capacidad eléctrica adecuada.",
      warranty: "Garantía del fabricante de 2 años",
      shipping: "Envío en 5–10 días laborables tras la confirmación del pedido",
      installation:
        "Instalación plug-and-play. Requiere un circuito dedicado de 16 A. Se recomienda revisión eléctrica profesional.",
      riskNotice:
        "Dispositivo de alto consumo eléctrico. Asegure una ventilación y capacidad de circuito adecuadas. La potencia térmica varía según las condiciones ambientales.",
    },
    "heatcore-pro-12": {
      name: "HeatCore Pro 12 Mining Heater",
      useCase:
        "Integración de calefacción hidrónica comercial y residencial de gran tamaño. Se conecta a sistemas de radiadores o suelo radiante existentes.",
      warranty: "Garantía de 3 años con cobertura ampliada opcional",
      shipping: "Envío por transporte de mercancías. Plazo de entrega de 2–4 semanas",
      installation:
        "Requiere instalación profesional. Conexión hidrónica por técnico HVAC certificado.",
      riskNotice:
        "Consumo eléctrico de grado industrial. La distribución de calor del edificio debe evaluarse antes de la instalación.",
    },
    "antminer-s21-hydro": {
      name: "Antminer S21 Hydro",
      useCase:
        "Minería de Bitcoin de alto rendimiento con refrigeración hidráulica para centros de datos y sistemas industriales de recuperación de calor.",
      warranty: "Garantía del fabricante de 180 días",
      shipping: "Pedidos al por mayor enviados en palé. Plazo de entrega bajo solicitud",
      installation:
        "Requiere circuito de refrigeración hidráulica y alimentación trifásica de 380 V. Solo para instalación en centro de datos.",
      riskNotice:
        "Equipo de minería industrial. Instalación profesional obligatoria. Sin garantía de rentabilidad.",
    },
    "whatsminer-m60s": {
      name: "Whatsminer M60S",
      useCase:
        "Minero ASIC refrigerado por aire para instalaciones comerciales de minería con potencial de captura de calor.",
      warranty: "Garantía del fabricante de 180 días",
      shipping: "Disponible bajo solicitud. Las opciones de envío varían según la región",
      installation:
        "Requiere flujo de aire de refrigeración adecuado e infraestructura eléctrica de 220 V/380 V.",
      riskNotice:
        "Genera calor y ruido significativos. Los ingresos por minería no están garantizados.",
    },
    "solar-hybrid-8kw": {
      name: "Solar Hybrid Inverter 8kW",
      useCase:
        "Inversor solar híbrido para compensar el consumo eléctrico de la minería con generación en sitio.",
      warranty: "Garantía del inversor de 5 años, extensión opcional de 10 años",
      shipping: "Envío en 7–14 días laborables",
      installation:
        "Requiere electricista autorizado e instalador solar. Puede ser necesaria la aprobación de conexión a red.",
      riskNotice:
        "Las normativas de conexión a red varían según la región. Se requiere instalación profesional.",
    },
    "mppt-controller-pro": {
      name: "MPPT Solar Controller Pro",
      useCase:
        "Controlador de seguimiento del punto de máxima potencia para sistemas de alimentación de minería off-grid e híbridos.",
      warranty: "Garantía de 3 años",
      shipping: "En stock para cumplimiento de solicitudes",
      installation:
        "Compatible con bancos de baterías de 48 V. Siga las directrices de polaridad y fusibles.",
      riskNotice:
        "Los sistemas eléctricos de CC requieren medidas de seguridad adecuadas e instalación cualificada.",
    },
    "energymind-monitor-pro": {
      name: "EnergieMIND Monitor Pro",
      useCase:
        "Monitorización energética trifásica con panel en la nube para instalaciones de minería y edificios inteligentes.",
      warranty: "Garantía de 2 años",
      shipping: "Envío en 3–5 días laborables",
      installation:
        "Instalación de pinzas CT por electricista cualificado. Conectividad Wi-Fi o Ethernet.",
      riskNotice:
        "Debe instalarse en circuitos sin tensión por personal cualificado.",
    },
    "smart-plug-energy": {
      name: "Smart Plug Energy Monitor (6-Pack)",
      useCase:
        "Monitorización eléctrica por dispositivo para rigs de minería, calefactores y equipos de infraestructura.",
      warranty: "Garantía de 1 año",
      shipping: "Disponible bajo solicitud",
      installation:
        "Plug-and-play. Requiere configuración de la aplicación. Máx. 16 A por unidad.",
      riskNotice:
        "No supere la intensidad nominal. No apto para conexión directa de mineros de alta potencia.",
    },
    "immersion-cool-kit": {
      name: "Immersion Cooling Kit",
      useCase:
        "Sistema de refrigeración por inmersión dieléctrica para despliegues ASIC de alta densidad.",
      warranty: "Garantía de 2 años en depósito y unidad de refrigeración",
      shipping: "Entrega por transporte de mercancías. Plazos de entrega personalizados",
      installation:
        "Requiere instalación profesional. Es necesaria evaluación de las instalaciones.",
      riskNotice:
        "La manipulación del fluido dieléctrico requiere personal formado. Se requiere revisión de seguridad contra incendios.",
    },
    "duct-heat-exchanger": {
      name: "Duct Heat Exchanger Module",
      useCase:
        "Captura el calor del escape del minero para integración en conductos HVAC en edificios comerciales.",
      warranty: "Garantía de 2 años",
      shipping: "Envío en 10–15 días laborables",
      installation:
        "Instalación por profesional HVAC. Se requiere evaluación del dimensionado de conductos.",
      riskNotice:
        "La eficiencia de recuperación de calor depende del diseño del edificio y la configuración del flujo de aire.",
    },
    "psu-3600w-platinum": {
      name: "3600W Platinum PSU",
      useCase:
        "Fuente de alimentación de alta eficiencia para mineros ASIC y despliegues de calefactores de minería.",
      warranty: "Garantía de 1 año",
      shipping: "Disponible bajo solicitud",
      installation:
        "Ajuste el voltaje y el tipo de conector al hardware de destino. Se requiere flujo de aire adecuado.",
      riskNotice:
        "Use solo con hardware compatible. La sobrecarga anula la garantía.",
    },
    "cable-kit-industrial": {
      name: "Industrial Cable Kit",
      useCase:
        "Cableado eléctrico y de datos de alta resistencia para racks de minería e instalaciones de infraestructura.",
      warranty: "Garantía de 90 días",
      shipping: "Disponible bajo solicitud",
      installation:
        "Siga las normativas eléctricas locales. Use la sección adecuada para la intensidad.",
      riskNotice:
        "Un cableado incorrecto supone riesgo de incendio y daño al equipo. Se recomienda instalación profesional.",
    },
  },
  pages: {
    home: {
      title: "EnergieMIND Shop | Hardware de minería e infraestructura consciente de la energía",
      description:
        "Tienda oficial de hardware EnergieMIND. Calefactores de minería, mineros de Bitcoin, sistemas solares, monitorización energética y equipamiento de infraestructura.",
    },
    shop: {
      title: "Todos los productos | EnergieMIND Shop",
      description:
        "Explore calefactores de minería, mineros ASIC, equipamiento solar, dispositivos de monitorización y accesorios. Solicite presupuestos para todos los productos.",
      heading: "Catálogo de hardware",
      subheading:
        "Equipamiento físico para minería consciente de la energía, calefacción y optimización de infraestructura.",
    },
    support: {
      title: "Soporte | EnergieMIND Shop",
      description:
        "Guía de instalación, información de garantía y detalles de envío para productos de hardware EnergieMIND.",
      heading: "Soporte de productos",
      intro:
        "Nuestro equipo ofrece orientación técnica para la selección de hardware, planificación de instalación y soporte de garantía.",
      installationTitle: "Soporte de instalación",
      installationText:
        "Muchos productos requieren instalación eléctrica o HVAC profesional. Proporcionamos documentación y podemos recomendar instaladores certificados en su región.",
      warrantyTitle: "Garantía",
      warrantyText:
        "Los términos de garantía varían según el producto y el fabricante. Todas las reclamaciones requieren prueba de compra y documentación de instalación correcta.",
      shippingTitle: "Envío y cumplimiento",
      shippingText:
        "Los plazos de envío dependen de la disponibilidad del producto y del destino. No mostramos inventario ficticio: toda la disponibilidad se confirma bajo solicitud.",
    },
    contact: {
      title: "Contacto | EnergieMIND Shop",
      description:
        "Contacte con EnergieMIND Shop para consultas de productos, instalaciones personalizadas y soporte técnico.",
      heading: "Contáctenos",
      intro:
        "Escríbanos para preguntas sobre productos, pedidos al por mayor o planificación de infraestructura energética personalizada.",
      name: "Nombre completo",
      email: "Correo electrónico",
      company: "Empresa (opcional)",
      message: "Mensaje",
      submit: "Enviar mensaje",
      success: "Gracias. Responderemos en 1–2 días laborables.",
    },
    quote: {
      title: "Solicitar presupuesto | EnergieMIND Shop",
      description:
        "Solicite un presupuesto personalizado para hardware de minería, sistemas de calefacción y equipamiento de infraestructura energética.",
      heading: "Solicitar un presupuesto",
      intro:
        "Cuéntenos sobre su proyecto y prepararemos una propuesta de hardware a medida con orientación sobre envío e instalación.",
      product: "Producto o categoría",
      quantity: "Cantidad",
      setupType: "Tipo de instalación",
      setupResidential: "Residencial",
      setupCommercial: "Comercial / Industrial",
      setupCustom: "Infraestructura personalizada",
      submit: "Enviar solicitud de presupuesto",
      success:
        "Su solicitud de presupuesto ha sido recibida. Nuestro equipo se pondrá en contacto con usted en breve.",
    },
    energySystems: {
      title: "Sistemas energéticos | EnergieMIND Shop",
      description:
        "Sistemas energéticos integrados que combinan minería, calefacción, energía solar y monitorización para una infraestructura optimizada.",
      heading: "Sistemas energéticos integrados",
      body:
        "Combine el aprovechamiento del calor de minería, la generación solar y la monitorización en tiempo real en una infraestructura energética unificada. Diseñamos paquetes de hardware personalizados para despliegues residenciales, comerciales e industriales.",
    },
  },
  safety: {
    title: "Aviso importante de seguridad y aspectos legales",
    items: [
      "El equipo de minería consume mucha electricidad y puede requerir una infraestructura eléctrica mejorada.",
      "Puede ser necesaria instalación profesional para mineros, calefactores y equipamiento solar.",
      "La eficiencia de reutilización del calor depende del diseño del edificio, el aislamiento y la configuración HVAC.",
      "Todas las instalaciones eléctricas deben ser revisadas por personal cualificado para cumplir con la normativa de seguridad.",
      "Sin garantía de rentabilidad. Los ingresos por minería dependen de las condiciones de la red y los costes operativos.",
      "Sin garantía de ingresos por minería. El rendimiento pasado no predice resultados futuros.",
    ],
    footer:
      "Al solicitar un presupuesto o adquirir equipamiento, usted reconoce estos riesgos y acepta cumplir con todas las normativas locales.",
  },
  footer: {
    description:
      "EnergieMIND Shop ofrece hardware y equipamiento para minería consciente de la energía, calefacción, monitorización y optimización de infraestructura.",
    categories: "Categorías",
    legal: "Legal",
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
    disclaimer: "Aviso de seguridad",
    rights: "Todos los derechos reservados.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Venden hardware físico?",
        answer:
          "Sí. EnergieMIND Shop vende hardware físico de minería, calefactores, equipamiento solar, dispositivos de monitorización y accesorios. No es una preventa de tokens ni una tienda de productos virtuales.",
      },
      {
        question: "¿Puedo comprar directamente en línea?",
        answer:
          "Actualmente operamos en modo presupuesto. Use Solicitar presupuesto en cualquier página de producto para recibir precios, disponibilidad y detalles de envío para su región.",
      },
      {
        question: "¿Es rentable la minería?",
        answer:
          "No ofrecemos garantías de rentabilidad. Los rendimientos de la minería dependen del coste de la electricidad, la eficiencia del hardware, la dificultad de la red y las condiciones del mercado.",
      },
      {
        question: "¿Puede la minería calentar mi hogar?",
        answer:
          "Los calefactores de minería están diseñados para la reutilización del calor, pero la eficiencia depende del aislamiento del edificio, el clima y el sistema de calefacción. Se recomienda una evaluación profesional.",
      },
      {
        question: "¿Ofrecen instalación?",
        answer:
          "Proporcionamos documentación de instalación y podemos conectarle con electricistas y profesionales HVAC certificados en las regiones compatibles.",
      },
    ],
  },
  common: {
    learnMore: "Más información",
    viewAll: "Ver todo",
    backToShop: "Volver a la tienda",
    language: "Idioma",
    breadcrumbHome: "Inicio",
    breadcrumbShop: "Tienda",
  },
};

export default es;
