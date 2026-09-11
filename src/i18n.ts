export type Lang = 'zh' | 'en'

export const GITHUB_URL = 'https://github.com/openfod'

export const copy = {
  zh: {
    brand: 'OpenFoD',
    brandSub: '开源傲世三国',
    nav: {
      chronicle: '序章',
      systems: '玩法',
      realms: '三分',
      revival: '开源',
      source: '源码',
    },
    hero: {
      kicker: '开源 · 重铸 · 乱世',
      title: 'OpenFoD',
      chinese: '开源傲世三国',
      english: 'Open-source Fate of the Dragon',
      lead: '汉室倾颓，天下三分。我们以现代引擎重开这座城池——内政治国、武将招揽、野战攻城，让第一款登上 E3 的中国游戏重新可玩、可改、可传。',
      ctaSource: '查阅源码',
      ctaScroll: '进入乱世',
      scroll: '卷轴向下',
      side: '天下大势  分久必合',
    },
    stats: [
      { num: '2001', label: '原作出世' },
      { num: 'E3', label: '首位亮相的中国游戏' },
      { num: '三势', label: '魏 · 蜀 · 吴' },
      { num: '百余', label: '魏晋史料科技' },
    ],
    chronicle: {
      kicker: '序章',
      title: '一款被世界看见的国产 RTS',
      p1: '《傲世三国》（Fate of the Dragon）由目标软件奥世工作室制作，2001 年发行。它不是红警式的纯兵线对冲，也不走三国志的回合棋盘——它把即时战略与经营模拟缝进同一座城池。',
      p2: '玩家择魏、蜀、吴之一，在城内安排农桑、税率、民心、祭祀与翰林科研；出城则是山川关隘上的实时交锋。金钱来自税收，军队靠粮食与酒水维系，攻破城门之后还有巷战。系统繁复，正是三国的气味。',
      p3: '它是第一款在 E3 正式展出的中国游戏，远渡重洋由 Eidos 以 Fate of the Dragon 之名发行。二十余年后，原作受困于旧系统与兼容性。OpenFoD 要做的，是把这座城重新点亮。',
      quote: '滚滚长江东逝水，浪花淘尽英雄。',
      quoteBy: '《临江仙》· 杨慎',
    },
    systems: {
      kicker: '玩法',
      title: '城中有城，战中有国',
      lead: '原作最被铭记的，不是某条兵种克制，而是两张同时运转的地图：治理一座城，同时注视整片山河。',
      items: [
        {
          title: '城中之城',
          en: 'City within a city',
          body: '战略大地图上，城池只是一座轮廓。踏入其中，农田、市集、寺庙、兵营与州府同时展开。双雷达窗口让内政与战场来回切换，毫不割裂。',
        },
        {
          title: '内政治国',
          en: 'Realm & livelihood',
          body: '税率、人口、民心彼此牵扯。种田、养猪、酿酒、铸铁组成生产线；祭祀可安民，灾荒会逼反。兵不是刷出来的——农民按恒定节奏成为士卒。',
        },
        {
          title: '武将与招揽',
          en: 'Officers & loyalty',
          body: '文官治城，武将破阵。赐爵、赏赐、宝物维系忠诚；战场上可单挑、可劝降。三国的故事不在数值表里，而在人心向背。',
        },
        {
          title: '三层战事',
          en: 'Field, siege, streets',
          body: '郊外野战、城墙攻防、破门后的巷战，分属不同图层。云梯、投石、弩车、水师各司其职，粮道一断，再强的军阵也会溃散。',
        },
      ],
      tagsLabel: '原作遗制',
      tags: [
        '税率民心',
        '屯田酿酒',
        '翰林科技',
        '云梯投石',
        '诸葛弩',
        '孔明灯',
        '招降单挑',
        '祭祀灾荒',
        '村县税赋',
        '水师连环',
      ],
    },
    realms: {
      kicker: '三分天下',
      title: '择一势，定山河',
      lead: '184 年黄巾之后，汉廷名存。三位雄主各自写下统一的方法——权谋、仁德，或据江自守。',
      cards: [
        {
          name: '魏',
          clan: '曹魏',
          motto: '挟天子以令诸侯',
          body: '北地苦寒，铁骑与屯田并重。曹魏以权谋开局：铁矿充足，冶铸先行，瓮城与箭塔把中原变成一座精密的战争机器。',
        },
        {
          name: '蜀',
          clan: '蜀汉',
          motto: '兴复汉室 还于旧都',
          body: '巴蜀四塞，农桑为本。蜀汉靠仁德聚人心、靠山地设伏。火油、拒马与粮产，是一条更慢、也更难被切断的统一之路。',
        },
        {
          name: '吴',
          clan: '孙吴',
          motto: '据长江而守江东',
          body: '江东以舟楫立国。港口、连环船与水上箭塔改写了中原那套步骑逻辑——谁控住大江，谁就控住东南的气运。',
        },
      ],
    },
    revival: {
      kicker: '开源',
      title: '让经典重新可玩',
      lead: 'OpenFoD 不是逆向发行，也不是怀旧滤镜。它是一次从引擎层开始的重铸：在现代系统上运行，被社区阅读、修改与传承。',
      goals: [
        {
          title: '现代可运行',
          body: '面向 Windows、Linux 与 macOS，摆脱旧日兼容补丁与分辨率枷锁。',
        },
        {
          title: '系统不简化',
          body: '保留城中之城、民心税制、武将忠诚与三层战事——复杂度是这款游戏的灵魂。',
        },
        {
          title: '社区共治',
          body: '代码、资料与平衡均公开讨论。欢迎引擎、历史、美术与关卡设计一齐入帐。',
        },
        {
          title: '致敬而非替代',
          body: '不附带原作商业数据。拥有正版资源的玩家与纯社区内容，将走不同的合法路径。',
        },
      ],
      ctaTitle: '帐下正缺人',
      ctaBody: '无论你写 C++ 还是画城砖，无论你能复原一架投石车还是校对一条史料——乱世需要你。',
      ctaBtn: '前往 GitHub',
    },
    footer: {
      mark: 'OpenFoD',
      line: '开源版《傲世三国》· Open-source Fate of the Dragon',
      legal:
        '本站为社区开源项目主页，与目标软件、Overmax Studios、Eidos Interactive 无隶属关系。《傲世三国》与 Fate of the Dragon 为原权利方之商标与作品。OpenFoD 向经典致敬，不发行原作商业数据。',
      copy: '© 2026 OpenFoD Community',
    },
  },
  en: {
    brand: 'OpenFoD',
    brandSub: 'Open Fate of the Dragon',
    nav: {
      chronicle: 'Chronicle',
      systems: 'Systems',
      realms: 'Three Realms',
      revival: 'Open Source',
      source: 'Source',
    },
    hero: {
      kicker: 'Open · Recast · The Chaos Age',
      title: 'OpenFoD',
      chinese: '开源傲世三国',
      english: 'Open-source Fate of the Dragon',
      lead: 'After the Han collapsed, the realm split in three. OpenFoD recasts the 2001 Chinese RTS classic for modern machines — city governance, officer loyalty, field battles and sieges — so the first Chinese game ever shown at E3 can be played, forked, and passed on.',
      ctaSource: 'View source',
      ctaScroll: 'Enter the realm',
      scroll: 'Unroll the scroll',
      side: 'What long divides must unite',
    },
    stats: [
      { num: '2001', label: 'Original release' },
      { num: 'E3', label: 'First Chinese game on the show floor' },
      { num: '3', label: 'Wei · Shu · Wu' },
      { num: '100+', label: 'Techs from Wei–Jin records' },
    ],
    chronicle: {
      kicker: 'Chronicle',
      title: 'The RTS that carried China to E3',
      p1: 'Fate of the Dragon (傲世三国) was built by Object Software’s Overmax studio and released in 2001. It is not a Red Alert arms race, nor a Romance of the Three Kingdoms board. It stitches real-time war to living city management.',
      p2: 'You take Wei, Shu or Wu. Inside the walls you set taxes, farms, rites and Hanlin research; beyond them, armies clash across passes and rivers. Coin comes from levies. Troops march on grain and wine. After the gates fall, street fighting begins.',
      p3: 'It was the first Chinese game formally shown at E3, later published in the West by Eidos. Two decades on, the original strains against modern OS and resolutions. OpenFoD exists to light that city again.',
      quote: 'The rolling Yangtze eastward flows, its waves have washed away all heroes.',
      quoteBy: 'Yang Shen · Immortal by the River',
    },
    systems: {
      kicker: 'Systems',
      title: 'A city inside a city',
      lead: 'What players remember is not a single counter, but two maps running at once: one city to govern, and a whole realm to watch.',
      items: [
        {
          title: 'City within a city',
          en: '双层地图',
          body: 'On the campaign map a city is a silhouette. Step inside and farms, markets, temples, barracks and the prefecture hall unfold together. Twin radars keep court and battlefield in the same glance.',
        },
        {
          title: 'Realm & livelihood',
          en: '内政治国',
          body: 'Tax, population and public will pull against each other. Farming, swine, brewing and iron form a production chain. Rites calm the people; famine turns them. Soldiers are not spawned — peasants become them at a fixed cadence.',
        },
        {
          title: 'Officers & loyalty',
          en: '武将招揽',
          body: 'Civil officers run the city; generals break the line. Titles, gifts and relics hold loyalty. Duels and defections belong on the field. The Three Kingdoms live in hearts, not only in stats.',
        },
        {
          title: 'Field, siege, streets',
          en: '三层战事',
          body: 'Open-field war, wall assault, and street fighting after the gate falls occupy different layers. Ladders, catapults, crossbow carts and river fleets each have a role. Cut the grain road, and even a famous host dissolves.',
        },
      ],
      tagsLabel: 'From the original',
      tags: [
        'Tax & morale',
        'Farming & wine',
        'Hanlin techs',
        'Ladders & catapults',
        'Zhuge crossbow',
        'Kongming lanterns',
        'Duels & defection',
        'Rites & disasters',
        'Village levies',
        'River navy',
      ],
    },
    realms: {
      kicker: 'Three Realms',
      title: 'Choose a mandate',
      lead: 'After the Yellow Turbans in 184, the Han court was a name. Three houses wrote three ways to reunify the realm — cunning, virtue, or the river.',
      cards: [
        {
          name: 'Wei',
          clan: 'Cao Wei',
          motto: 'Hold the emperor, command the lords',
          body: 'The north is iron, horse and winter. Wei opens with statecraft: abundant ore, early smelting, barbicans and towers that turn the Central Plains into a precise war engine.',
        },
        {
          name: 'Shu',
          clan: 'Shu Han',
          motto: 'Restore the Han, return to the old capital',
          body: 'The basin is walled by mountains, and agriculture is the root. Shu gathers hearts by virtue and fights from the slopes. Fire oil, chevaux-de-frise and grain — a slower road, harder to cut.',
        },
        {
          name: 'Wu',
          clan: 'Sun Wu',
          motto: 'Hold the Yangtze, keep Jiangdong',
          body: 'Jiangdong is a kingdom of hulls. Ports, chained ships and river towers rewrite the north’s infantry logic — who holds the great river holds the fortune of the southeast.',
        },
      ],
    },
    revival: {
      kicker: 'Open Source',
      title: 'Make the classic playable again',
      lead: 'OpenFoD is not a reverse-engineered rerelease, nor a nostalgia filter. It is a recast from the engine up: running on modern systems, readable, forkable, and kept by a community.',
      goals: [
        {
          title: 'Runs today',
          body: 'Windows, Linux and macOS — without the old compatibility patches and resolution ceilings.',
        },
        {
          title: 'Systems intact',
          body: 'The nested city, tax and morale, officer loyalty and three combat layers stay. Complexity is the soul of this game.',
        },
        {
          title: 'Governed in public',
          body: 'Code, data and balance are discussed in the open. Engine, history, art and scenario design are all needed in camp.',
        },
        {
          title: 'Homage, not replacement',
          body: 'No commercial original data ships with the project. Retail assets and community content will follow separate, legitimate paths.',
        },
      ],
      ctaTitle: 'The camp still has empty seats',
      ctaBody: 'Whether you write engines or draw rammed-earth walls, restore a catapult or check a historical note — the chaos age needs you.',
      ctaBtn: 'Open GitHub',
    },
    footer: {
      mark: 'OpenFoD',
      line: 'Open-source Fate of the Dragon · 开源版《傲世三国》',
      legal:
        'A community project, not affiliated with Object Software, Overmax Studios, or Eidos Interactive. Fate of the Dragon and 傲世三国 are trademarks of their respective rights holders. OpenFoD is an homage and does not redistribute original commercial data.',
      copy: '© 2026 OpenFoD Community',
    },
  },
} as const
