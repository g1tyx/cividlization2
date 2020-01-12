/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Add to queue': '加入队列',
    'Agriculture': '农业',
    'Ancient Era': '上古时代',
    'Archer': '弓兵',
    'Archery': '箭术',
    'Armies': '军队',
    'Art': '艺术',
    'Artists': '艺人',
    'Attacks & Transfers': '进攻与运输',
    'AI attacks disabled': 'AI不进攻',
    'AI attacks enabled': 'AI会进攻',
    'AI attacks enabled but rare': 'AI会偶尔进攻',
    'AI attacks more frequent': 'AI会频繁进攻',
    'and provided': '并提供',
    'Auto-assign': '自动分配',
    'Available': '解锁',
    'Available for purchase': '允许购买',
    'Barabarian attacks disabled': '土著不进攻',
    'Barabarian attacks enabled': '土著会进攻',
    'Barabarian attacks more frequent': '土著会频繁进攻',
    'Barracks': '兵营',
    'Base': '基地',
    'Battle reports': '战斗报告',
    'Bronze Working': '青铜铸造',
    'Builders': '建造工人',
    'Building nothing': '没有在建造',
    'Buildings': '建筑',
    'Buy those useless items': '购买这些无用的东西',
    'Calendar': '日历',
    'Chest': '箱子',
    'Children': '小孩',
    'Cities & Citizens': '城市和市民',
    'City': '城市',
    'City-state': '城邦',
    'Classical Era': '古典时代',
    'Code of Honor': '荣耀守则',
    'Code of Laws': '法典',
    'Collective Rules': '集团规则',
    'Colonialism': '殖民主义',
    'completly free': '完全免费',
    'Continue': '继续',
    'Credits': '鸣谢',
    'Crop Rotation': '轮作',
    'Cultural Diplomacy': '文化外交',
    'Culture': '文化',
    'Culture & Social Policies': '文化和社会政策',
    'Current': '当前',
    'Date': '日志',
    'Defense': '防御',
    'Daily Bonus': '每日奖励',
    'Despotism': '独裁',
    'Destination': '目的地',
    'Difficulty': '难度',
    'Diplomacy': '外交',
    'Diplomacy & Trade': '外交与贸易',
    'Discipline': '纪律',
    'Dog domestication': '驯化狗',
    'Done': '完成',
    'Exclude': '不包括',
    'Exploration': '探索',
    'Export': '导出',
    'Farmers': '农夫',
    'Food': '食物',
    'Food, Health & Happiness': '食物，健康和幸福度',
    'Freepik': 'Freepik',
    'from': '从',
    'From': '从',
    'Gold': '黄金',
    'Granary': '粮仓',
    'Hardcore': '核心内容',
    'Help': '帮助',
    'Herding': '放牧',
    'Here you will find answers to all of your questions about this Game.': '你可以在这里找到一些对你有帮助的提示',
    'Holy Wars': '圣战',
    'Horseriding': '骑术',
    'However, if you wish to support it, you can still offer a gift !': '当然，如果你赞助本游戏，就可以获得一份礼物！',
    'Icons made by': '图片来源',
    'Idle': '放置',
    'Imperialism': '帝国主义',
    'in every city': '在所有城市',
    'in the Capital': '仅在首都',
    'In the footer of this page, you will see links to different pages related to your current page.': '在这个页面的底部，你可以看到前往不同页面的链接',
    'in this section': '在这个部分',
    'Justice': '正义',
    'Landed Elite': '地主阶级',
    'Language': '语言',
    'Literature': '文学',
    'Load an exported save': '导入游戏',
    'Load game': '加载存档',
    'Locked': '未解锁',
    'Longhouse': '长屋',
    'Mark all as read': '全部设为已读',
    'Masonry': '砖石结构',
    'Medieval Era': '中世纪',
    'Merchant Confederacy': '商人联盟',
    'Merchants': '商人',
    'Meritocracy': '精英统治',
    'Militarism': '军国主义',
    'Military buildings cost': '军事建筑消耗',
    'Military Tradition': '军事制度',
    'Mining': '采矿',
    'Miscelanous': '杂项',
    'Monarchy': '君主制',
    'Monument': '纪念碑',
    'Navigation': '导航',
    'New game': '新游戏',
    'No malus for Barbarians': 'No malus for Barbarians',
    'Normal': '普通',
    'Notifications': '通知',
    'Oligarchy': '寡头政治',
    'Options': '功能',
    'Organized Religion': '宗教组织',
    'Origin': '起源',
    'Pacifism': '和平主义',
    'Patriotism': '爱国主义',
    'Patronage': '赞助',
    'Peaceful': '和平',
    'Philantropy': '慈善活动',
    'Philosophy': '哲学',
    'Piety': '虔诚',
    'Population': '人口',
    'Pottery': '制陶',
    'Prehistoric Era': '史前时代',
    'Prevent growth': '抑制增长',
    'Priority': '优先',
    'Production': '生产',
    'Production & Buildings': '生产和建筑',
    'Professional Army': '专业军队',
    'Purchased': '购买',
    'Rationalism': '理性主义',
    'Recruiting nothing': '没有在招募',
    'Reduce troop maintenance in the Capital by half': '首都的部队维护费用减半',
    'Reformation': '改革',
    'Related': '相关的',
    'Monument': '纪念碑',
    'Navigation': '导航',
    '': '',
    'Administration': '行政部门',
    'Allow recruitment of melee & ranged units': '允许招募近战和远程单位',
    'Aristocracy': '贵族政治',
    'Background by': '背景来源',
    'Background vector created by freepik - www.freepik.com': '背景由freepik提供 - www.freepik.com',
    'Citizens': '市民',
    'Cividlization II': '文明放置2',
    'Happiness': '幸福度',
    'Increase': '增加',
    'kept after growth': '人口增长后保留',
    'limi': '限制',
    'Number of Cities': '城市数量',
    'Ranged units attack before all other troops': '远程单位会在其他单位攻击前先攻击',
    'Relax': '放松',
    'Religion': '宗教',
    'Religious Laws': '宗教律法',
    'Remaining Time': '剩余时间',
    'Required': '需要',
    'Save': '保存',
    'Scholasticism': '经院哲学',
    'Science': '科学',
    'Scientific State': '科学状态',
    'Scout': '侦察兵',
    'Scouts are used to explore the world': '侦察兵可以用于探索地图',
    'Secularism': '世俗主义',
    'Select building': '选择建筑',
    'Show on map': '在地图上显示',
    'Shrine': '圣地',
    'Social Policies': '社会政策',
    'Sovereignty': '主权',
    'Speed': '速度',
    'Spirituality': '精神',
    'Spoiler alert !': '剧透警告！',
    'State': '国家',
    'Status': '状态',
    'Strong priority': '强优先级',
    'Support': '赞助',
    'Support & Credits': '赞助与鸣谢',
    'Tanning': '制革',
    'Theocracy': '神权政治',
    'There is nothing we can build in this city': '这座城市没有可以建造的建筑',
    'This game is': '这个游戏是',
    'To': 'To',
    'Tools': '工具',
    'Total': '总计',
    'Total gains': '获得总计',
    'Total production': '生产总计',
    'Trade': '交易',
    'Traditionalism': '传统主义',
    'Troop maintenance': '部队维护费',
    'Troop unitary maintenance cost': '单个部队维护费',
    'Unavailable': '未解锁',
    'Unlock': '解锁',
    'Version: 1.': 'Version: 1.',
    'War & Troops': '战争与工具',
    'Warrior': '勇士',
    'Welcome to the Cividlization II Help pages !': '欢迎来到文明放置2的帮助页面！',
    'Wheel': '车轮',
    '': '',
    'Ancients\' Wisdom': '上古智慧',
    'Cancel': '取消',
    'Collective Rule': '集体规则',
    'Daily Bonus !': '每日奖励！',
    'Delete': '删除',
    'Education': '教育',
    'Empire': '帝国',
    'Era: Prehistoric Era': '时代：史前时代',
    'Governor': '统治者',
    'Load': '载入',
    'Paste your exported save here and click on the load button': '在这里粘贴你导出的存档并点击导入',
    'Recruiting': '正在招募',
    'Republic': '共和国',
    'Scholars': '学者',
    'Scouting': '正在探索',
    'Send scout (auto': '派遣侦察兵（自动',
    'Town Hall': '市政厅',
    'Treasury': '财政部门',
    'Use a bonus': '使用奖励',
    'While the help sections are a great way to learn more about the mechanics of this game, it might reveal some features that are locked in the early stage of the game.': '虽然帮助可以让你了解这个游戏，但也会剧透一些你未解锁的功能',
    'Wisdom of the Ancients': '古人的智慧',
    'without ads': '没有广告',
    'World': '世界',
    'World Map': '世界地图',
    'Writing': '写作',
    'You can find the meaning of all the icons used in this game': '你可以在这里找到所有图标的含义',
    'and': '和',
    'provides': '上一页',
    'A detailed list of buildings is available in': '可获得的建筑列表',
    'A detailed list of policies is available in': '可获得的政策列表',
    'A list of icons used in this game': '所有图标表示的含义',
    'A new citizen will be available every time you reach the required amount of food for growth. This amount depends on the city current population': '你的食物达到上限后可以获得一个人口，食物上限取决于你这座城市的人口数量',
    'A trade route will automatically be erased if the civilizations are at war or if one of the 2 cities changes ownership.': '如果贸易双方其中一座城市易主，或者双方的所属国家宣战，贸易将立即中断',
    'affects almost everything from food to culture.': '几乎影响从食物到文化的一切',
    'All citizens provide a small contribution to the': '所有市民都会少量加成',
    'Allow recruitment of mounted units': '允许招募骑兵',
    'Allow recruitment of siege units': '允许招募攻城单位',
    'allow you to reveal the details of a city: troops, buildings, treasury etc...': '允许你观察一个城市的情报：部队，建筑，资源等等',
    'Also, do not forget that barbarians are weaker than other civilizations.': '另外，不要忘记土著比其他文明弱得多',
    'Also, keep in mind that troops require': '另外，别忘了你解锁了什么军队',
    'An effective way to gain gold is by raiding other cities. If you clear an enemy city without bringing a governor, your troops will pillage it and bring the gold back in their city of origin.': '一个有效的赚钱手段是去劫掠其它城市，如果你不带总督出征，军队就不会占领城市而是劫掠一番就走',
    'and can be increased in several ways, including': '也能通过多种方式增加，包括',
    'Aqueduct': '水渠',
    'are specialized in': '专门用于',
    'are used to explore the world. Discovering the world is very important since it allows you to discover other civilizations, or to discover cities to pillage or to conquer.': '用来探索世界，这是非常重要的，你可以找到其它城市和文明来探索和征服',
    'Armory': '军械库',
    'artists': '艺术家',
    'Assur': '亚述城',
    'Assyrians': '亚述',
    'Assyrians\n': '亚述\n',
    'Athens': '雅典',
    'Attack': '攻击',
    'Attacking': '正在攻击',
    'auto-allocation option to prevent the algorithm to allocate other type of population (except from Farmers & Merchants that will keep your city running.': '自动分配选项会影响你其它资源的产出（农民和商人除外，他们要维持你的城市正常运转',
    'Auto-assign will always make sure that': '自动分配将尽可能的保证这一点',
    'auto-assignment of your citizens': '你的市民自动分配工作',
    'Aztecs': '阿兹特克',
    'Bank': '银行',
    'Barb. vil.': '土著村庄',
    'Barbarians': '土著',
    'Barbarians will behave differently from other civilizations. The only way to interact with them is on the battlefield.': '土著和其它文明不同，你只能在战场上和他们交流',
    'Beijing': '北京',
    'builders': '建筑工人',
    'Building': '建筑',
    'Buildings List': '建筑列表',
    'Buildings provide great bonuses for your cities and might even be required to recruit troops.': '建筑将对你的城市有巨大加成，并且可以解锁一些新的部队',
    'but you will gain some divine': '但你将得到一些神圣的',
    'Capacity': '容量',
    'Capital': '首都',
    'caravan': '大篷车',
    'Caravan': '大篷车',
    'Caravan cost': '大篷车消耗',
    'Caravans': '大篷车',
    'Castle': '城堡',
    'Catapult': '投石机',
    'Chinese': '中国',
    'Chinese\n': '中国\n',
    'Choose wisely, you will not be able to change your deity before you reincarnate !': '请谨慎地选择，在转生之前你将无法改变你的神',
    'Circus': '马戏团',
    'Cities': '城市',
    'civilizations': '文明',
    'Civilizations': '文明',
    'Coatlicue': '大地之母',
    'Common': '常见',
    'Consulate': '领事馆',
    'Copper Mine': '铜矿',
    'cost of governors will increase with the number of cities you own and the number of governor you currently have.': '总督的价格将随着你拥有的总督数和城市数总和上升而上升',
    'culture': '文化',
    'Culture production': '文化产出',
    'Cusco': '库斯科',
    'Declare war !': '宣战！',
    'Default priority will still allocate other types of citizens. You can check the': '默认优先级仍将自动分配其它职业的市民，你可以检查',
    'Deities': '神',
    'deity': '神',
    'Deity': '神',
    'Delhi': '德里',
    'depending of your devotion in this life.': '取决于你这一轮的信仰',
    'diplomacy': '外交',
    'Each civilization is different and they will behave differently. They will attack you if they consider you weak enough.': '每个文明发展方向都不相同，如果他们认为你很弱就会攻击你',
    'Each deity will grant you favors once you decide to': '当你信仰一个神，它就会给你一些恩惠',
    'Effect': '效果',
    'Egyptians': '埃及',
    'Egyptians\n': '埃及\n',
    'Embassy': '大使馆',
    'Empire': '帝国',
    'Epic': '史诗',
    'everything': '所有',
    'Except in a special situation, you do not want to reach that limit, all the gold gained after that will be lost.': '除非在特殊情况下，否则达到上限不是个好主意，超出上限的黄金将无法获得',
    'faith': '失败',
    'Faith': '失败',
    'favor': '神恩',
    'Favor': '神恩',
    'Favor allows you to gain special': '神恩允许你获得一些特别的东西',
    'first, then send it to another city.': '，然后把它们发送到其它城市',
    'food': '食物',
    'Food production': '食物产量',
    'For a succesful war, or for a succesful defense, you will need to recruit': '在一场成功的战争之后，你可能会需要招募',
    'Friendly': '友善',
    'Furnace': '熔炉',
    'Gardens': '花园',
    'Gifts include': '礼物包括',
    'gold': '黄金',
    'Gold Capacity': '黄金上限',
    'Gold cost': '黄金消耗',
    'Gold Mine': '金矿',
    'Gold production': '黄金产量',
    'governor': '总督',
    'Governor': '总督',
    'Governor cost': '总督消耗',
    'Governors': '总督',
    'Governors are used to capture a city': '总督用于占领城市',
    'Greeks': '希腊',
    'Greeks\n': '希腊\n',
    'Guarded': '已防御',
    'happiness': '幸福度',
    'have a carry capacity which means you will not be able to pilllage a lot if you don\'t bring enough troops': '部队有运载上限，你如果不携带足够的运载单位将无法带回足够的战利品',
    'Health': '健康',
    'Here is a list of all buildings available in this game': '这个列表显示了所有可建造的建筑物',
    'Here is a list of all military troops available in this game': '这个列表显示了所有可招募的军队',
    'Here is a list of all policies available in this game': '这个列表显示了所有可用的政策',
    'Here is the complete list of existing civilizations at the beginning of a game': '这个列表显示了你这次游戏出现的所有文明',
    'Here you will find the help sections that wouldn\'t fit anywhere else': '这里你能找到不适合放在其他标签页的帮助',
    'Horseman': '骑兵',
    'Horus': '荷鲁斯',
    'Hospital': '医院',
    'Hunter-gatherers': '采猎者',
    'hunter-gatherers or farmers': '采猎者或者农夫',
    'Icons': '图标',
    'Idle citizens don\'t produce only what is needed to keep them alive. It is the default role of new citizens': '无业的市民只提供自身生存所需的资源，这是所有新市民的默认工作',
    'If you choose': '如果你选择',
    'If you want to conquer a city, you will need to bring a': '如果你想占领一个城市，你需要带一个',
    'Incans': '印加',
    'Incans\n': '印加\n',
    'Increase recruitment speed by': '加速招募时间',
    'Indians\n': '印度\n',
    'Indians': '印度',
    'industrial': '工业',
    'Industrial': '工业',
    'industrial production': '工业产量',
    'Industrial production': '工业产量',
    'is essential to an healthy empire. Without it, you will not be able to produce anything and your cities might even revolt.': '对健康的帝国来说必不可少，没有它你将无法生产任何东西，甚至可能会发生叛乱',
    'is essential to the growth of your cities.': '对你的城市发展来说必不可少',
    'is essential to your empire.': '对你的帝国来说必不可少',
    'is required to acquire new social policies.': '允许你点亮一个新的社会政策',
    'is required to acquire new technologies.': '允许你点亮一个新的技术',
    'is required to create a': '允许你创建',
    'is the most important resource in this game. Without it, your cities will not grow and you will not be able to produce anything else.': '是这个游戏最重要的资源，没有它你的城市将停止发展且不能产出任何资源',
    'is the way to construct buildings in your cities.': '是你建造建筑物的途径',
    'is vital to sustain the growth of your cities.': '对你的城市发展非常重要',
    'It is also very important to be able to defend your cities. While you will never be attacked during the Prehistoric Era, barbarians and other civilizations will not hesitate to attack you if you appear weak.': '配置足够的驻守部队也非常重要，虽然在史前时代不会被攻击，但除此之外如果你显得软弱，其它文明和土著就会来攻击你',
    'Knight': '骑士',
    'Knights cost': '骑士消耗',
    'Lancier': '枪兵',
    'Library': '图书馆',
    'Longbowman': '长弓手',
    'Longswordsman': '长剑士',
    'Make sure to use it at the right time! For ex. do not use a gold gift if you treasury is full !': '确保你正确地使用他们！比如不要在满黄金的时候使用黄金礼物！',
    'Market': '市场',
    'merchants': '商人',
    'Military': '军事',
    'Military Academy': '军事学院',
    'Military units cost': '军队消耗',
    'Mill': '军队',
    'Mint': '铸币厂',
    'Monastery': '寺院',
    'Name': '名字',
    'Neutral': '中立',
    'Nidaros': '特隆赫姆',
    'Nothing': '没有',
    'Odin': '奥丁',
    'Once you discover': '一旦你发现',
    'Once you discovered Religion, you will be able to choose a': '一旦你发现宗教，你就可以选择',
    'Once your city grow, all food will be consumed in the process but you there is a few buildings that allow to keep a portion of it.': '一旦你的城市人口增加，食物就会被消耗，有部分建筑可以保留一些食物',
    'Only available in Capital City': '只能在首都',
    'Opera': '歌剧院',
    'option. your city will still grow but just so that your people don\'t die of starvation.': '选项，你的城市将继续发展但食物只保证不会饿死',
    'or': '或',
    'or offer gifts.': '或获得一个礼物',
    'or powers but they do have access to': '或powers，但他们必须可以这么做',
    'or troops': '或部队',
    'Palace': '宫殿',
    'Parent': '总部',
    'Peace': '和平',
    'Persepolis': '波斯波利斯',
    'Persians': '波斯',
    'Persians\n': '波斯\n',
    'Pikeman': '长矛兵',
    'Player / City': '玩家 / 城市',
    'Policies': '政策',
    'Policy': '政策',
    'powers': 'powers',
    'Powers': 'Powers',
    'priests': '牧师',
    'Priests': '牧师',
    'produced, the more': '生产，越多',
    'production': '产量',
    'Production / Industry': '产量 / 工业',
    'production is impacted by': '产量受到',
    'production is provided by': '产量由',
    'production is provided by all of your citizens in a small amount, but much more efficiently by': '产量由市民提供一小部分，另一部分由',
    'progress of your civilization.': '你的文明进度',
    'Ranged attack': '范围攻击',
    'Ranged?': '范围？',
    'Rare': '少见',
    'Recruitment': '招募',
    'recruitment speed': '招募速度',
    'Reduce discontent due to distance from capital by half': '减半基于首都距离的负面效果',
    'Reduce troop maintenance by half': '减半部队维护费用',
    'Reduce troop maintenance in this city by half': '减半这座城市的部队维护费用',
    'reincarnate': '转生',
    'Reincarnate': '转生',
    'Reincarnation': '转生',
    'Reincarnation is the way to get a better start by learning from your mistakes and get some new powers.': '转生可以使你获得一些新的力量，并吸取上次的经验发展的更好',
    'Require to recruit': '允许招募',
    'Romans': '罗马',
    'Romans\n': '罗马\n',
    'Rome': '罗马',
    'Scholars': '学者',
    'science': '科学',
    'Science production': '科学产量',
    'scientific': '科学的',
    'scientists': '科学家',
    'Scientists': '科学家',
    'Scouting': '正在探索',
    'Scouts': '侦察兵',
    'Shiva': '湿婆',
    'Siege attack': '攻城',
    'Siege Factory': '攻城武器工厂',
    'Siege?': '攻城？',
    'Social Policies provide great bonuses for your Empire.': '社会政策对你的帝国提供大量加成',
    'Some cities have bonuses which make them more productive in a certain domain': '有些城市在某些领域有额外加成',
    'Some groups are exclusing. Be careful before choosing one !': '有些选项是互斥的，选择之前要注意！',
    'Spies': '间谍',
    'Spying': '间谍活动',
    'Stables': '马厩',
    'Starting relation': '初始关系',
    'Stats': '状态',
    'strong': '强大',
    'Success of the operation will depend on the amount of spies you bring and the amount of spies present in the spied city. It does not depend on the amount of military troops.': '行动的成功率取决于你的间谍数量，与军队数量无关',
    'Swordsman': '剑士',
    'Technologies are grouped in Eras that can only be visible right before you can access it.': '科技被分割成数个时代，你只能在抵达对应的时代之后才能看到那些科技',
    'Technologies are required to unlock buildings, troops, social policies and many more.': '科技可以解锁建筑、部队、社会政策等等',
    'Temple': '寺庙',
    'The': '这个',
    'The more': '更多',
    'Theatre': '剧场',
    'Thebes': '底比斯',
    'There are 4 deities in this game': '这个游戏有四个神',
    'There are 4 eras available in this game so far: Prehistoric, Ancient, Classical and Medieval Eras': '这个游戏有四个时代，史前，上古，古典和中世纪',
    'There is 3 level of gift': '礼物有三个等级',
    'There is a few ways to increase your troops attacking power, including': '有少数手段可以提高你部队的攻击力，包括',
    'There is a limited amount of trade routes allowed.': '贸易路线有上限',
    'There is a maximum number of trade routes allowed by civilization. This maximum can be increased with science or policies.': '每个文明有贸易上限，这个上限可以靠科技和政策提高',
    'There is also a few special units who are not made to fight': '有部分特殊单位不是用来战斗的',
    'Theres is different type of citizens which all contribute to your empire in a specific way': '不同职业的市民以不同的方式对你的帝国做贡献',
    'They also have a penality of 20% while attacking ot defending': '进攻和防御时也有20%的惩罚',
    'They are constantly at war with everyone, they do not have access to': '他们经常和所有人打仗，他们不能',
    'They are divided in 6 groups: Traditionalism, Imperialism, Piety, Rationalism, Pacifism and Militarism.': '他们分为六类，传统主义，帝国主义，虔诚，理性主义，和平主义和军国主义',
    'They will recruit troops, attack, take cities, create trade routes, select special powers, etc...': '他们会招募军队，进攻，占领城市，创造贸易路线，选择政策等等',
    'this help section': '这个帮助标签',
    'This is a list of all icons used in this game.': '这是这个游戏使用的所有图标',
    'To be able to recruit those, you usually have to construct the necessary building.': '想要招募这些单位，你通常需要对应的建筑',
    'To create a': '创建一个',
    'To ensure a great afterlife of course !': '当然是为了保证来世更强大！',
    'To improve relations with one civilization, you can create': '要改善一个文明的关系，你可以创建',
    'to maintain so be careful that your economy is strong enough to sustain your army!': '创建强大的军队时注意经济是否负担得起！',
    'to the city of origin and a smaller gain for the city of destination. It also improve the diplomatic relations with between the 2 civilizations.': '对目标城市也有少量产量加成，同时也会改善两个文明之间的关系',
    'To use a caravan, you need to click on the city where the caravan is located in the world panel.': '你需要在地图上点击你拥有大篷车的城市来使用它',
    'To use a gift, you need to select it in the top menu of the City Screen.': '礼物要在城市面板上方使用',
    'To use it, you need to click on the city where the scout is located in the world panel.': '你需要在地图上点击你拥有侦察兵的城市使用它',
    'To use it, you need to click on the city you want to spy in the world panel.': '你需要在地图上点击你想要进行间谍活动的城市使用它',
    'Town Hall': '市政厅',
    'trade route': '贸易路线',
    'Trade Route': '贸易路线',
    'trade routes': '贸易路线',
    'Trade routes': '贸易路线',
    'Trade Routes': '贸易路线',
    'Treasury': '财政部门',
    'Trebuchet': '投石机',
    'Tribunal': '裁判所',
    'Ulundi': '乌伦迪',
    'University': '大学',
    'Vikings': '维京',
    'Vikings\n': '维京\n',
    'Walls': '城墙',
    'War can be an essential part of your game or not. It depends on how you like to play.': '战争可以是你游戏的重要组成部分也可以不是，取决于你怎么玩这个游戏',
    'Well': '水井',
    'archer': '弓手',
    'Armie': '陆军',
    'Artist': '艺术家',
    'Back to list': '返回列表',
    'Barbarians\n': '土著\n',
    'Barrack': '兵营',
    'Battle of': '战斗在',
    'Battle report': '战斗报告',
    'Builder': '建筑工人',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    "(": "(",
    "-": "-",
    "+": "+",
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    'A': 'A',
    'www.flaticon.com': 'www.flaticon.com',
    'x': 'x',
    '-': '-',
    ',': ',',
    '?': '?',
    '.': '.',
    '(': '(',
    '/': '/',
    '|': '|',
    '＆': '＆',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    'A new discovery': '新的发现',
    'A new citizen is available in': '一个新的市民出现在了',
    'A new feature has been unlocked': '一个新的功能被解锁了',
    'State': '状态',
    'New civilization discovered': '新的文明被发现',
    'Diplomacy': '外交',
    'Gardens': '花园',
    'Gold transfer arrived in': '黄金运输队已经抵达',
    'Military': '军事',
    'Production': '产量',
    'Time': '时间',
    'Time to recruit': '招募时间',
    'War': '战争',
    'Allow recruitment of melee': '允许招募军事单位',
    'Attacks': '进攻',
    'Battle of': '战斗在',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "s (+": "s (+",
    "(": "(",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    'Village': '村',
    'Agriculture': '农业',
    'Archery': '箭术',
    'Art': '艺术',
    'Dog domestication': '驯养狗',
    'Exploration': '探索',
    'Language': '语言',
    'Mining': '采矿',
    'Pottery': '制陶',
    'Spirituality': '精神',
    'Tanning': '制革',
    'Tools': '工具',
    'Trade': '交易',
    'Ancient Era': '上古时代',
    'Artist': '艺术家',
    'Builder': '建筑工人',
    'Buildings': '建筑',
    'Daily Bonus': '每日奖励',
    'Merchant': '商人',
    'Social Policies': '社会政策',
    'Troop queues': '部队队列',
    'Troops': '部队',
    'World panel': '世界组织',
    'citizen': '市民',
    'hunter-gatherer': '采猎者',
    'Monastery': '寺院',
    'trade route': '贸易路线',
    'in the Capital': '在首都',
    'Persians': '波斯',
    'buildings and can be increased in several ways, including': '建筑可以通过多种方法解锁，包括',
    'buildings and can be increased in several ways.': '建筑可以通过多种方法解锁',
    'buildings,': '建筑，',
    'the gold production will drop when you reach the limit, allowing your citizens to work on more useful tasks.': '当黄金达到上限，你的市民将自动转移到其它更有用的工作上去',
    'they will grant you special favor that you can choose to spend on powers.': '它们会给你一些特殊的奖励，你可以把它们花费在power上',
    'you need to recruit a': '你需要招募一个',
    'you will be able to chose a deity to worship. Each deity have a special power they will grant their followers.': '你可以选择一个神来崇拜，每个神都会给予追随者一些特殊的力量',
    'you will be able to create': '你将允许创建',
    'you will be able to interact with them more.': '你将允许和它们进行更多互动',
    'you will be receive one random gift every 24h.': '你每24小时将获得一个随机的礼物',
    'And once you discover': '并且一旦你发现',
    'Those beasts need to be pacified.': '那些野兽需要被安抚',
    'Those favors can be used to acquire': '你可以获得这些好处',
    'barracks': '兵营',
    'citizen': '市民',
    'city': '城市',
    'library': '图书馆',
    'Monastery': '寺院',
    'scientist': '科学家',
    'shrine': '圣地',
    'Temple': '寺庙',
    'trade route': '贸易路线',
    'University': '大学',
    'attack & defense against barbarians': '对土著的攻防加成',
    'chance to break walls & castle with siege units': '攻城器械破坏城墙和城堡的概率',
    'Barb. vil.': '土著村庄',
    'k': 'k',
    'm': 'm',
    'Aztecs': '阿兹特克',
    'Delay': '延迟',
    'ranged unit': '远程单位',
    'Transfer': '运输',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);