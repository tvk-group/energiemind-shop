import type { Dictionary } from "@/i18n/types";

const pt: Dictionary = {
  site: {
    name: "EnergieMIND Shop",
    tagline: "Hardware de mineração e infraestrutura consciente de energia",
    domain: "https://energiemind.shop",
  },
  nav: {
    home: "Início",
    shop: "Loja",
    miningHeaters: "Aquecedores de mineração",
    bitcoinMiners: "Mineradores de Bitcoin",
    energySystems: "Sistemas energéticos",
    solarPower: "Solar e energia",
    monitoringDevices: "Dispositivos de monitorização",
    accessories: "Acessórios",
    support: "Suporte",
    contact: "Contacto",
  },
  hero: {
    headline: "Hardware de mineração e infraestrutura consciente de energia",
    subheadline:
      "Equipamento para aproveitamento do calor de mineração, monitorização energética, integração solar e sistemas de infraestrutura inteligente.",
    browseProducts: "Ver produtos",
    requestCustomSetup: "Solicitar instalação personalizada",
  },
  categories: {
    "mining-heaters": {
      title: "Aquecedores de mineração",
      description:
        "Mineradores de Bitcoin concebidos para reutilização de calor em ambientes residenciais e comerciais. Converta o trabalho computacional em energia térmica aproveitável.",
      metaTitle: "Aquecedores de mineração | EnergieMIND Shop",
      metaDescription:
        "Aquecedores de mineração que convertem a mineração de Bitcoin em calor aproveitável. Hardware profissional para sistemas de aquecimento conscientes de energia.",
    },
    "bitcoin-miners": {
      title: "Mineradores de Bitcoin",
      description:
        "Mineradores ASIC de alta eficiência para data centers, instalações industriais e implementações integradas com recuperação de calor.",
      metaTitle: "Mineradores de Bitcoin | EnergieMIND Shop",
      metaDescription:
        "Mineradores ASIC de Bitcoin profissionais com especificações completas. Disponíveis sob pedido com suporte de instalação personalizada.",
    },
    "solar-power": {
      title: "Solar e energia",
      description:
        "Inversores solares, sistemas híbridos e infraestrutura elétrica para mineração e otimização energética.",
      metaTitle: "Equipamento solar e energético | EnergieMIND Shop",
      metaDescription:
        "Painéis solares, inversores híbridos e sistemas elétricos para infraestrutura de mineração consciente de energia.",
    },
    "monitoring-devices": {
      title: "Monitorização energética",
      description:
        "Monitorização elétrica em tempo real, tomadas inteligentes e telemetria de infraestrutura para uso otimizado de energia.",
      metaTitle: "Dispositivos de monitorização energética | EnergieMIND Shop",
      metaDescription:
        "Hardware profissional de monitorização energética para instalações de mineração e infraestrutura inteligente.",
    },
    "cooling-systems": {
      title: "Sistemas de arrefecimento",
      description:
        "Arrefecimento por imersão, permutadores de calor para condutas e gestão térmica para hardware de mineração.",
      metaTitle: "Sistemas de arrefecimento | EnergieMIND Shop",
      metaDescription:
        "Soluções de arrefecimento para mineração, incluindo kits de imersão e permutadores de calor para gestão térmica eficiente.",
    },
    accessories: {
      title: "Cabos e acessórios",
      description:
        "Fontes de alimentação industriais, cablagem e acessórios para data centers e instalações de mineração.",
      metaTitle: "Acessórios de mineração | EnergieMIND Shop",
      metaDescription:
        "Fontes de alimentação, cabos e acessórios para mineração profissional e infraestrutura energética.",
    },
    "energy-systems": {
      title: "Sistemas energéticos",
      description:
        "Sistemas integrados de otimização energética que combinam mineração, aquecimento, solar e monitorização.",
      metaTitle: "Sistemas energéticos | EnergieMIND Shop",
      metaDescription:
        "Sistemas energéticos completos para aproveitamento do calor de mineração, integração solar e otimização de infraestrutura.",
    },
    "custom-installations": {
      title: "Instalações personalizadas",
      description:
        "Pacotes de hardware à medida e planeamento de instalação para a sua infraestrutura energética específica.",
      metaTitle: "Instalações personalizadas | EnergieMIND Shop",
      metaDescription:
        "Solicite configurações personalizadas de hardware de mineração e energia adaptadas ao seu edifício e objetivos energéticos.",
    },
  },
  productLabels: {
    brand: "Marca",
    model: "Modelo",
    hashrate: "Taxa de hash",
    powerConsumption: "Consumo elétrico",
    heatOutput: "Potência térmica",
    voltage: "Voltagem",
    useCase: "Caso de uso",
    warranty: "Garantia",
    shipping: "Envio",
    installation: "Notas de instalação",
    riskNotice: "Aviso de riscos e segurança",
    price: "Preço",
    addToCart: "Adicionar ao carrinho",
    requestQuote: "Solicitar orçamento",
    specifications: "Especificações técnicas",
    availability: "Disponibilidade",
    relatedProducts: "Produtos relacionados",
    notApplicable: "N/D",
  },
  availability: {
    onRequest: "Disponível sob pedido",
    preOrder: "Consulta de pré-encomenda",
    customQuote: "Orçamento personalizado",
  },
  products: {
    "heatbit-v2": {
      name: "Heatbit V2 Mining Heater",
      useCase:
        "Aquecimento residencial com mineração de Bitcoin integrada. Ideal para apartamentos e casas pequenas com capacidade elétrica adequada.",
      warranty: "Garantia do fabricante de 2 anos",
      shipping: "Envio em 5–10 dias úteis após confirmação do pedido",
      installation:
        "Instalação plug-and-play. Requer circuito dedicado de 16 A. Recomenda-se revisão elétrica profissional.",
      riskNotice:
        "Dispositivo de alto consumo elétrico. Garanta ventilação e capacidade de circuito adequadas. A potência térmica varia consoante as condições ambientais.",
    },
    "heatcore-pro-12": {
      name: "HeatCore Pro 12 Mining Heater",
      useCase:
        "Integração de aquecimento hidrónico comercial e residencial de grande dimensão. Liga-se a sistemas de radiadores ou piso radiante existentes.",
      warranty: "Garantia de 3 anos com cobertura alargada opcional",
      shipping: "Envio por transporte de mercadorias. Prazo de entrega de 2–4 semanas",
      installation:
        "Requer instalação profissional. Ligação hidrónica por técnico HVAC certificado.",
      riskNotice:
        "Consumo elétrico de nível industrial. A distribuição de calor do edifício deve ser avaliada antes da instalação.",
    },
    "antminer-s21-hydro": {
      name: "Antminer S21 Hydro",
      useCase:
        "Mineração de Bitcoin de alto desempenho com arrefecimento hidráulico para data centers e sistemas industriais de recuperação de calor.",
      warranty: "Garantia do fabricante de 180 dias",
      shipping: "Encomendas em volume enviadas em palete. Prazo de entrega sob pedido",
      installation:
        "Requer circuito de arrefecimento hidráulico e alimentação trifásica de 380 V. Apenas para instalação em data center.",
      riskNotice:
        "Equipamento de mineração industrial. Instalação profissional obrigatória. Sem garantia de rentabilidade.",
    },
    "whatsminer-m60s": {
      name: "Whatsminer M60S",
      useCase:
        "Minerador ASIC refrigerado a ar para instalações comerciais de mineração com potencial de captura de calor.",
      warranty: "Garantia do fabricante de 180 dias",
      shipping: "Disponível sob pedido. As opções de envio variam consoante a região",
      installation:
        "Requer fluxo de ar de arrefecimento adequado e infraestrutura elétrica de 220 V/380 V.",
      riskNotice:
        "Gera calor e ruído significativos. Os rendimentos de mineração não são garantidos.",
    },
    "solar-hybrid-8kw": {
      name: "Solar Hybrid Inverter 8kW",
      useCase:
        "Inversor solar híbrido para compensar o consumo elétrico da mineração com geração no local.",
      warranty: "Garantia do inversor de 5 anos, extensão opcional de 10 anos",
      shipping: "Envio em 7–14 dias úteis",
      installation:
        "Requer eletricista licenciado e instalador solar. Pode ser necessária aprovação de ligação à rede.",
      riskNotice:
        "Os regulamentos de ligação à rede variam consoante a região. Instalação profissional obrigatória.",
    },
    "mppt-controller-pro": {
      name: "MPPT Solar Controller Pro",
      useCase:
        "Controlador de seguimento do ponto de máxima potência para sistemas de alimentação de mineração off-grid e híbridos.",
      warranty: "Garantia de 3 anos",
      shipping: "Em stock para satisfação de pedidos",
      installation:
        "Compatível com bancos de baterias de 48 V. Siga as diretrizes de polaridade e fusíveis.",
      riskNotice:
        "Os sistemas elétricos CC requerem medidas de segurança adequadas e instalação qualificada.",
    },
    "energymind-monitor-pro": {
      name: "EnergieMIND Monitor Pro",
      useCase:
        "Monitorização energética trifásica com painel na nuvem para instalações de mineração e edifícios inteligentes.",
      warranty: "Garantia de 2 anos",
      shipping: "Envio em 3–5 dias úteis",
      installation:
        "Instalação de pinças CT por eletricista qualificado. Conectividade Wi-Fi ou Ethernet.",
      riskNotice:
        "Deve ser instalado em circuitos sem tensão por pessoal qualificado.",
    },
    "smart-plug-energy": {
      name: "Smart Plug Energy Monitor (6-Pack)",
      useCase:
        "Monitorização elétrica por dispositivo para rigs de mineração, aquecedores e equipamento de infraestrutura.",
      warranty: "Garantia de 1 ano",
      shipping: "Disponível sob pedido",
      installation:
        "Plug-and-play. Configuração da aplicação necessária. Máx. 16 A por unidade.",
      riskNotice:
        "Não exceda a amperagem nominal. Não adequado para ligação direta de mineradores de alta potência.",
    },
    "immersion-cool-kit": {
      name: "Immersion Cooling Kit",
      useCase:
        "Sistema de arrefecimento por imersão dielétrica para implementações ASIC de alta densidade.",
      warranty: "Garantia de 2 anos no depósito e unidade de arrefecimento",
      shipping: "Entrega por transporte de mercadorias. Prazos de entrega personalizados",
      installation:
        "Requer instalação profissional. Avaliação das instalações necessária.",
      riskNotice:
        "A manipulação do fluido dielétrico requer pessoal formado. Revisão de segurança contra incêndios necessária.",
    },
    "duct-heat-exchanger": {
      name: "Duct Heat Exchanger Module",
      useCase:
        "Captura o calor de escape do minerador para integração em condutas HVAC em edifícios comerciais.",
      warranty: "Garantia de 2 anos",
      shipping: "Envio em 10–15 dias úteis",
      installation:
        "Instalação por profissional HVAC. Avaliação do dimensionamento de condutas necessária.",
      riskNotice:
        "A eficiência de recuperação de calor depende do design do edifício e da configuração do fluxo de ar.",
    },
    "psu-3600w-platinum": {
      name: "3600W Platinum PSU",
      useCase:
        "Fonte de alimentação de alta eficiência para mineradores ASIC e implementações de aquecedores de mineração.",
      warranty: "Garantia de 1 ano",
      shipping: "Disponível sob pedido",
      installation:
        "Ajuste a voltagem e o tipo de conector ao hardware de destino. Fluxo de ar adequado necessário.",
      riskNotice:
        "Use apenas com hardware compatível. A sobrecarga anula a garantia.",
    },
    "cable-kit-industrial": {
      name: "Industrial Cable Kit",
      useCase:
        "Cablagem elétrica e de dados de alta resistência para racks de mineração e instalações de infraestrutura.",
      warranty: "Garantia de 90 dias",
      shipping: "Disponível sob pedido",
      installation:
        "Siga os códigos elétricos locais. Use a secção adequada para a amperagem.",
      riskNotice:
        "Cablagem incorreta representa risco de incêndio e danos no equipamento. Recomenda-se instalação profissional.",
    },
  },
  pages: {
    home: {
      title: "EnergieMIND Shop | Hardware de mineração e infraestrutura consciente de energia",
      description:
        "Loja oficial de hardware EnergieMIND. Aquecedores de mineração, mineradores de Bitcoin, sistemas solares, monitorização energética e equipamento de infraestrutura.",
    },
    shop: {
      title: "Todos os produtos | EnergieMIND Shop",
      description:
        "Explore aquecedores de mineração, mineradores ASIC, equipamento solar, dispositivos de monitorização e acessórios. Solicite orçamentos para todos os produtos.",
      heading: "Catálogo de hardware",
      subheading:
        "Equipamento físico para mineração consciente de energia, aquecimento e otimização de infraestrutura.",
    },
    support: {
      title: "Suporte | EnergieMIND Shop",
      description:
        "Orientação de instalação, informações de garantia e detalhes de envio para produtos de hardware EnergieMIND.",
      heading: "Suporte de produtos",
      intro:
        "A nossa equipa fornece orientação técnica para seleção de hardware, planeamento de instalação e suporte de garantia.",
      installationTitle: "Suporte de instalação",
      installationText:
        "Muitos produtos requerem instalação elétrica ou HVAC profissional. Fornecemos documentação e podemos recomendar instaladores certificados na sua região.",
      warrantyTitle: "Garantia",
      warrantyText:
        "Os termos de garantia variam consoante o produto e o fabricante. Todas as reclamações de garantia requerem prova de compra e documentação de instalação correta.",
      shippingTitle: "Envio e processamento",
      shippingText:
        "Os prazos de envio dependem da disponibilidade do produto e do destino. Não apresentamos inventário fictício — toda a disponibilidade é confirmada sob pedido.",
    },
    contact: {
      title: "Contacto | EnergieMIND Shop",
      description:
        "Contacte a EnergieMIND Shop para consultas de produtos, instalações personalizadas e suporte técnico.",
      heading: "Contacte-nos",
      intro:
        "Entre em contacto para questões sobre produtos, encomendas em volume ou planeamento de infraestrutura energética personalizada.",
      name: "Nome completo",
      email: "Endereço de email",
      company: "Empresa (opcional)",
      message: "Mensagem",
      submit: "Enviar mensagem",
      success: "Obrigado. Responderemos em 1–2 dias úteis.",
    },
    quote: {
      title: "Solicitar orçamento | EnergieMIND Shop",
      description:
        "Solicite um orçamento personalizado para hardware de mineração, sistemas de aquecimento e equipamento de infraestrutura energética.",
      heading: "Solicitar um orçamento",
      intro:
        "Conte-nos sobre o seu projeto e prepararemos uma proposta de hardware à medida com orientação sobre envio e instalação.",
      product: "Produto ou categoria",
      quantity: "Quantidade",
      setupType: "Tipo de instalação",
      setupResidential: "Residencial",
      setupCommercial: "Comercial / Industrial",
      setupCustom: "Infraestrutura personalizada",
      submit: "Enviar pedido de orçamento",
      success:
        "O seu pedido de orçamento foi recebido. A nossa equipa entrará em contacto em breve.",
    },
    energySystems: {
      title: "Sistemas energéticos | EnergieMIND Shop",
      description:
        "Sistemas energéticos integrados que combinam mineração, aquecimento, energia solar e monitorização para infraestrutura otimizada.",
      heading: "Sistemas energéticos integrados",
      body:
        "Combine o aproveitamento do calor de mineração, a geração solar e a monitorização em tempo real numa infraestrutura energética unificada. Desenhamos pacotes de hardware personalizados para implementações residenciais, comerciais e industriais.",
    },
  },
  safety: {
    title: "Aviso importante de segurança e legal",
    items: [
      "O equipamento de mineração consome muita eletricidade e pode requerer infraestrutura elétrica reforçada.",
      "Pode ser necessária instalação profissional para mineradores, aquecedores e equipamento solar.",
      "A eficiência de reutilização de calor depende do design do edifício, isolamento e configuração HVAC.",
      "Todas as instalações elétricas devem ser revistas quanto à conformidade de segurança por pessoal qualificado.",
      "Sem garantia de rentabilidade. Os rendimentos de mineração dependem das condições da rede e dos custos operacionais.",
      "Sem garantia de rendimentos de mineração. O desempenho passado não prevê resultados futuros.",
    ],
    footer:
      "Ao solicitar um orçamento ou adquirir equipamento, reconhece estes riscos e concorda em cumprir todos os regulamentos locais.",
  },
  footer: {
    description:
      "A EnergieMIND Shop fornece hardware e equipamento para mineração consciente de energia, aquecimento, monitorização e otimização de infraestrutura.",
    categories: "Categorias",
    legal: "Legal",
    privacy: "Política de privacidade",
    terms: "Termos de serviço",
    disclaimer: "Aviso de segurança",
    rights: "Todos os direitos reservados.",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        question: "Vendem hardware físico?",
        answer:
          "Sim. A EnergieMIND Shop vende hardware físico de mineração, aquecedores, equipamento solar, dispositivos de monitorização e acessórios. Não é uma pré-venda de tokens nem uma loja de produtos virtuais.",
      },
      {
        question: "Posso comprar diretamente online?",
        answer:
          "Atualmente operamos em modo de orçamento. Use Solicitar orçamento em qualquer página de produto para receber preços, disponibilidade e detalhes de envio para a sua região.",
      },
      {
        question: "A mineração é rentável?",
        answer:
          "Não oferecemos garantias de rentabilidade. Os rendimentos da mineração dependem dos custos de eletricidade, eficiência do hardware, dificuldade da rede e condições de mercado.",
      },
      {
        question: "A mineração pode aquecer a minha casa?",
        answer:
          "Os aquecedores de mineração são concebidos para reutilização de calor, mas a eficiência depende do isolamento do edifício, clima e sistema de aquecimento. Recomenda-se avaliação profissional.",
      },
      {
        question: "Oferecem instalação?",
        answer:
          "Fornecemos documentação de instalação e podemos conectá-lo com eletricistas e profissionais HVAC certificados nas regiões suportadas.",
      },
    ],
  },
  common: {
    learnMore: "Saber mais",
    viewAll: "Ver tudo",
    backToShop: "Voltar à loja",
    language: "Idioma",
    breadcrumbHome: "Início",
    breadcrumbShop: "Loja",
  },
};

export default pt;
