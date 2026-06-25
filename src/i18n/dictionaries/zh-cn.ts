import type { Dictionary } from "@/i18n/types";

const zhCn: Dictionary = {
  site: {
    name: "EnergieMIND 商店",
    tagline: "能源感知型挖矿与基础设施硬件",
    domain: "https://energiemind.shop",
  },
  nav: {
    home: "首页",
    shop: "商店",
    miningHeaters: "挖矿取暖器",
    bitcoinMiners: "比特币矿机",
    energySystems: "能源系统",
    solarPower: "太阳能与电力",
    monitoringDevices: "监测设备",
    accessories: "配件",
    support: "支持",
    contact: "联系我们",
  },
  hero: {
    headline: "能源感知型挖矿与基础设施硬件",
    subheadline:
      "适用于挖矿余热利用、能源监测、太阳能集成及智能基础设施系统的设备。",
    browseProducts: "浏览产品",
    requestCustomSetup: "申请定制方案",
  },
  categories: {
    "mining-heaters": {
      title: "挖矿取暖器",
      description:
        "专为住宅和商业余热回收设计的比特币矿机。将计算工作转化为可利用的热能。",
      metaTitle: "挖矿取暖器 | EnergieMIND 商店",
      metaDescription:
        "将比特币挖矿转化为可用热量的挖矿取暖器。适用于能源感知型供暖系统的专业硬件。",
    },
    "bitcoin-miners": {
      title: "比特币矿机",
      description:
        "适用于数据中心、工业部署及热集成应用的高效 ASIC 矿机。",
      metaTitle: "比特币矿机 | EnergieMIND 商店",
      metaDescription:
        "配备完整规格的专业比特币 ASIC 矿机。可按需订购，并提供定制安装支持。",
    },
    "solar-power": {
      title: "太阳能与电力",
      description:
        "适用于挖矿与能源优化的太阳能逆变器、混合系统及电力基础设施。",
      metaTitle: "太阳能与电力设备 | EnergieMIND 商店",
      metaDescription:
        "适用于能源感知型挖矿基础设施的太阳能板、混合逆变器及电力系统。",
    },
    "monitoring-devices": {
      title: "能源监测",
      description:
        "实时电力监测、智能插座及基础设施遥测，优化能源使用。",
      metaTitle: "能源监测设备 | EnergieMIND 商店",
      metaDescription:
        "适用于矿场及智能基础设施的专业能源监测硬件。",
    },
    "cooling-systems": {
      title: "冷却系统",
      description:
        "适用于挖矿硬件的浸没式冷却、风道热交换器及热管理方案。",
      metaTitle: "冷却系统 | EnergieMIND 商店",
      metaDescription:
        "挖矿冷却解决方案，包括浸没套件及热交换器，实现高效热管理。",
    },
    accessories: {
      title: "线缆与配件",
      description:
        "适用于挖矿安装的工业电源、线缆及数据中心配件。",
      metaTitle: "挖矿配件 | EnergieMIND 商店",
      metaDescription:
        "适用于专业挖矿及能源基础设施的电源、线缆及配件。",
    },
    "energy-systems": {
      title: "能源系统",
      description:
        "整合挖矿、供暖、太阳能及监测的集成能源优化系统。",
      metaTitle: "能源系统 | EnergieMIND 商店",
      metaDescription:
        "适用于挖矿余热利用、太阳能集成及基础设施优化的完整能源系统。",
    },
    "custom-installations": {
      title: "定制安装",
      description:
        "针对您的能源基础设施量身定制的硬件套装及安装规划。",
      metaTitle: "定制安装 | EnergieMIND 商店",
      metaDescription:
        "申请根据您的建筑及能源目标定制的挖矿与能源硬件方案。",
    },
  },
  productLabels: {
    brand: "品牌",
    model: "型号",
    hashrate: "算力",
    powerConsumption: "功耗",
    heatOutput: "热输出",
    voltage: "电压",
    useCase: "使用场景",
    warranty: "保修",
    shipping: "配送",
    installation: "安装说明",
    riskNotice: "风险与安全提示",
    price: "价格",
    addToCart: "加入购物车",
    requestQuote: "申请报价",
    specifications: "技术规格",
    availability: "库存状态",
    relatedProducts: "相关产品",
    notApplicable: "不适用",
  },
  availability: {
    onRequest: "按需供应",
    preOrder: "预订咨询",
    customQuote: "定制报价",
  },
  products: {
    "heatbit-v2": {
      name: "Heatbit V2 挖矿取暖器",
      useCase:
        "集成比特币挖矿的住宅空间供暖。适合电力容量充足的公寓及小型住宅。",
      warranty: "2 年制造商保修",
      shipping: "订单确认后 5–10 个工作日内发货",
      installation:
        "即插即用安装。需要专用 16A 电路。建议进行专业电气评估。",
      riskNotice:
        "高功耗设备。请确保通风充足及电路容量足够。热输出随环境条件而变化。",
    },
    "heatcore-pro-12": {
      name: "HeatCore Pro 12 挖矿取暖器",
      useCase:
        "商业及大型住宅水暖系统集成。可连接现有散热器或地暖系统。",
      warranty: "3 年保修，可选延长保修",
      shipping: "货运配送。交货周期 2–4 周",
      installation:
        "需专业安装。水暖连接须由持证暖通技师完成。",
      riskNotice:
        "工业级功耗。安装前须评估建筑热量分配能力。",
    },
    "antminer-s21-hydro": {
      name: "Antminer S21 Hydro",
      useCase:
        "适用于数据中心及工业余热回收系统的高性能水冷比特币矿机。",
      warranty: "180 天制造商保修",
      shipping: "批量订单托盘发货。交货周期按需确认",
      installation:
        "需要水冷回路及 380V 三相电源。仅限数据中心安装。",
      riskNotice:
        "工业级挖矿设备。必须专业安装。不保证盈利。",
    },
    "whatsminer-m60s": {
      name: "Whatsminer M60S",
      useCase:
        "适用于具备热量捕获潜力的商业矿场的风冷 ASIC 矿机。",
      warranty: "180 天制造商保修",
      shipping: "按需供应。各地区配送方式不同",
      installation:
        "需要充足的冷却气流及 220V/380V 电力基础设施。",
      riskNotice:
        "产生大量热量及噪音。挖矿收益不作保证。",
    },
    "solar-hybrid-8kw": {
      name: "8kW 太阳能混合逆变器",
      useCase:
        "混合太阳能逆变器，通过现场发电抵消挖矿电力消耗。",
      warranty: "逆变器 5 年保修，可选延长至 10 年",
      shipping: "7–14 个工作日内发货",
      installation:
        "须由持证电工及太阳能安装商施工。可能需要并网审批。",
      riskNotice:
        "并网规定因地区而异。须专业安装。",
    },
    "mppt-controller-pro": {
      name: "MPPT 太阳能控制器 Pro",
      useCase:
        "适用于离网及混合挖矿电力系统的最大功率点跟踪控制器。",
      warranty: "3 年保修",
      shipping: "现货，可按需发货",
      installation:
        "兼容 48V 电池组。请遵循极性及保险丝规范。",
      riskNotice:
        "直流电气系统须采取适当安全措施并由合格人员安装。",
    },
    "energymind-monitor-pro": {
      name: "EnergieMIND Monitor Pro",
      useCase:
        "三相能源监测及云端仪表板，适用于矿场及智能建筑。",
      warranty: "2 年保修",
      shipping: "3–5 个工作日内发货",
      installation:
        "由合格电工安装电流互感器钳。支持 Wi-Fi 或以太网连接。",
      riskNotice:
        "须由合格人员在断电电路上安装。",
    },
    "smart-plug-energy": {
      name: "智能插座能源监测器（6 件装）",
      useCase:
        "针对矿机、取暖器及基础设施设备的单设备电力监测。",
      warranty: "1 年保修",
      shipping: "按需供应",
      installation:
        "即插即用。需配置应用程序。每单元最大 16A。",
      riskNotice:
        "请勿超过额定电流。不适用于直接连接大功率矿机。",
    },
    "immersion-cool-kit": {
      name: "浸没式冷却套件",
      useCase:
        "适用于高密度 ASIC 部署的介电浸没式冷却系统。",
      warranty: "储罐及冷却单元 2 年保修",
      shipping: "货运配送。定制交货周期",
      installation:
        "须专业安装。需进行场地评估。",
      riskNotice:
        "介电液体的操作须由受训人员完成。须进行消防安全审查。",
    },
    "duct-heat-exchanger": {
      name: "风道热交换器模块",
      useCase:
        "捕获矿机排气热量，集成至商业建筑的暖通风道系统。",
      warranty: "2 年保修",
      shipping: "10–15 个工作日内发货",
      installation:
        "须由暖通专业人员安装。需评估风道尺寸。",
      riskNotice:
        "余热回收效率取决于建筑设计及气流配置。",
    },
    "psu-3600w-platinum": {
      name: "3600W 白金级电源",
      useCase:
        "适用于 ASIC 矿机及挖矿取暖器部署的高效电源。",
      warranty: "1 年保修",
      shipping: "按需供应",
      installation:
        "请匹配目标硬件的电压及连接器类型。须保证充足气流。",
      riskNotice:
        "仅可与兼容硬件配合使用。过载将导致保修失效。",
    },
    "cable-kit-industrial": {
      name: "工业线缆套件",
      useCase:
        "适用于矿机机架及基础设施安装的重型电力与数据线缆。",
      warranty: "90 天保修",
      shipping: "按需供应",
      installation:
        "请遵循当地电气规范。根据电流选用合适线径。",
      riskNotice:
        "线缆配置不当存在火灾及设备损坏风险。建议专业安装。",
    },
  },
  pages: {
    home: {
      title: "EnergieMIND 商店 | 能源感知型挖矿与基础设施硬件",
      description:
        "EnergieMIND 硬件官方商店。挖矿取暖器、比特币矿机、太阳能系统、能源监测及基础设施设备。",
    },
    shop: {
      title: "全部产品 | EnergieMIND 商店",
      description:
        "浏览挖矿取暖器、ASIC 矿机、太阳能设备、监测设备及配件。所有产品均可申请报价。",
      heading: "硬件目录",
      subheading:
        "适用于能源感知型挖矿、供暖及基础设施优化的实体设备。",
    },
    support: {
      title: "支持 | EnergieMIND 商店",
      description:
        "EnergieMIND 硬件产品的安装指南、保修信息及配送详情。",
      heading: "产品支持",
      intro:
        "我们的团队提供硬件选型、安装规划及保修支持方面的技术指导。",
      installationTitle: "安装支持",
      installationText:
        "许多产品需要专业电气或暖通安装。我们提供文档，并可推荐您所在地区的持证安装商。",
      warrantyTitle: "保修",
      warrantyText:
        "保修条款因产品及制造商而异。所有保修索赔均需提供购买凭证及正确安装文档。",
      shippingTitle: "配送与履约",
      shippingText:
        "配送时间取决于产品供应情况及目的地。我们不展示虚假库存——所有供应状态均按需确认。",
    },
    contact: {
      title: "联系我们 | EnergieMIND 商店",
      description:
        "联系 EnergieMIND 商店咨询产品、定制安装及技术支持。",
      heading: "联系我们",
      intro:
        "如有产品咨询、批量订购或定制能源基础设施规划需求，欢迎与我们联系。",
      name: "姓名",
      email: "电子邮箱",
      company: "公司（选填）",
      message: "留言",
      submit: "发送消息",
      success: "感谢您的留言。我们将在 1–2 个工作日内回复。",
    },
    quote: {
      title: "申请报价 | EnergieMIND 商店",
      description:
        "申请挖矿硬件、供暖系统及能源基础设施设备的定制报价。",
      heading: "申请报价",
      intro:
        "请介绍您的项目，我们将为您准备量身定制的硬件方案及配送与安装指导。",
      product: "产品或类别",
      quantity: "数量",
      setupType: "安装类型",
      setupResidential: "住宅",
      setupCommercial: "商业 / 工业",
      setupCustom: "定制基础设施",
      submit: "提交报价申请",
      success:
        "您的报价申请已收到。我们的团队将尽快与您联系。",
    },
    energySystems: {
      title: "能源系统 | EnergieMIND 商店",
      description:
        "整合挖矿、供暖、太阳能及监测的集成能源系统，优化基础设施。",
      heading: "集成能源系统",
      body:
        "将挖矿余热利用、太阳能发电及实时监测整合为统一的能源基础设施。我们为住宅、商业及工业部署设计定制硬件套装。",
    },
  },
  safety: {
    title: "重要安全与法律声明",
    items: [
      "挖矿设备耗电量大，可能需要升级电力基础设施。",
      "矿机、取暖器及太阳能设备可能需要专业安装。",
      "余热利用效率取决于建筑设计、保温及暖通配置。",
      "所有电气安装均须由合格人员审查以确保安全合规。",
      "不保证盈利。挖矿收入取决于网络状况及运营成本。",
      "不保证挖矿收入。过往表现不代表未来结果。",
    ],
    footer:
      "申请报价或购买设备即表示您知悉上述风险，并同意遵守所有当地法规。",
  },
  footer: {
    description:
      "EnergieMIND 商店提供适用于能源感知型挖矿、供暖、监测及基础设施优化的硬件与设备。",
    categories: "分类",
    legal: "法律信息",
    privacy: "隐私政策",
    terms: "服务条款",
    disclaimer: "安全免责声明",
    rights: "版权所有。",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        question: "你们销售实体硬件吗？",
        answer:
          "是的。EnergieMIND 商店销售实体挖矿硬件、取暖器、太阳能设备、监测设备及配件。这不是代币预售或虚拟产品商店。",
      },
      {
        question: "可以直接在线购买吗？",
        answer:
          "我们目前采用报价模式。请在任意产品页面使用「申请报价」获取您所在地区的价格、供应情况及配送详情。",
      },
      {
        question: "挖矿能盈利吗？",
        answer:
          "我们不作任何盈利保证。挖矿回报取决于电费、硬件效率、网络难度及市场状况。",
      },
      {
        question: "挖矿热量能为房屋供暖吗？",
        answer:
          "挖矿取暖器专为余热利用设计，但效率取决于建筑保温、气候及供暖系统。建议进行专业评估。",
      },
      {
        question: "你们提供安装服务吗？",
        answer:
          "我们提供安装文档，并可为您对接支持地区的持证电工及暖通专业人员。",
      },
    ],
  },
  common: {
    learnMore: "了解更多",
    viewAll: "查看全部",
    backToShop: "返回商店",
    language: "语言",
    breadcrumbHome: "首页",
    breadcrumbShop: "商店",
  },
};

export default zhCn;
