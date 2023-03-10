import chinaCard from '../assets/img/countries/china-card.jpg'
import chinaBanner from '../assets/img/countries/china-banner.jpg'
import indiaCard from '../assets/img/countries/india-card.jpg'
import japanCard from '../assets/img/countries/japan-card.jpg'
import chinaOne from '../assets/img/countries/china-one.jpg'
import chinaTwo from '../assets/img/countries/china-two.jpg'
import chinaThree from '../assets/img/countries/china-three.jpg'
import indiaOne from '../assets/img/countries/india-one.jpg'
import indiaThree from '../assets/img/countries/india-three.jpg'
import japanBanner from '../assets/img/countries/japan-banner.jpg'
import japanOne from '../assets/img/countries/japan-one.jpg'
import japanTwo from '../assets/img/countries/japan-two.jpg'

export const data = {
    mainInfo: {
        mainText: 'Зарубежная Азия включает 48 государств и подразделяется на 5 субрегионов. Субрегионами Зарубежной Азии являются Юго-Западная, Южная, Юго-Восточная, Восточная и Центральная Азия. Каковы же особенности и географическое положение этих регионов?',
        img: 'https://autogear.ru/misc/i/gallery/20842/646216.jpg',
    },
    characteristic: {
        chrMainText: 'Площадь Зарубежной Азии составляет 32 млн. кв. км. Все 48 государств можно разделить на островные, внутриконтинентальные и приморские. К островным государствам относятся, например, Япония, Мальдивы и др., к приморским – Индия, Южная Корея и др., к внутриконтинентальным – Монголия, Киргизия и др.',
        usefulInfo: 'Из 48 стран только 4 государства можно назвать экономически развитыми. Это Япония, Сингапур, Израиль, Южная Корея. Остальные страны относятся к группе развивающихся стран.',
        chrTexts: ['Климат Западной Азии разнообразен. Регион расположен в субтропическом, экваториальном (крайний юг) и умеренном поясе (север региона).',
        'Западная Азия омывается множеством заливов, морей и океанов. Азия имеет выход ко всем четырем океанам: на севере ее омывают воды Северного Ледовитого океана, на востоке – Тихий океан, на юге – Индийский океан, а на западе – Красное море, которое принадлежит бассейну Атлантического океана',
        'Природные условия регионов очень разнообразны. Главные природные ресурсы – нефть (страны Персидского залива), газ (страны Персидского залива, Туркмения), уголь и железная руда (Китай, Индия), руды цветных металлов. В регионе наблюдается крайне неравномерная обеспеченность минеральными ресурсами. В большинстве стран наблюдается нехватка земельных, а в Юго-Западной и Центральной Азии – водных ресурсов.',
        ],
        importantInfo: [
            {
                head: 'Площадь 32 млн. км',
                body: 'Площадь Зарубежной Азии составляет 32 млн. кв. км. Все 48 государств можно разделить на островные, внутриконтинентальные и приморские. К островным государствам относятся, например, Япония, Мальдивы и др., к приморским – Индия, Южная Корея и др., к внутриконтинентальным – Монголия, Киргизия и др.м'
            },
            {
                head: 'Население 3,7 млрд. чел.',
                body: 'На территории Зарубежной Азии проживает 4,2 млрд. человек. Здесь сосредоточено 50% населения земного шара. Самой густонаселенной страной является Китай, численность населения которого составляет 1,4 млрд. человек. Плотность населения крайне неравномерна: высокая плотность в приморских и островных государствах, низкая – в пустынных (например, Монголия и Казахстан). В регионе очень низкий уровень урбанизации.'
            },
            {
                head: '48 государств',
                body: 'Из 48 стран только 4 государства можно назвать экономически развитыми. Это Япония, Сингапур, Израиль, Южная Корея. Остальные страны относятся к группе развивающихся стран.'
            }
        ]
    },
    industry: {
        devGroups: [
            'Япония (вторая в мире по экономическому потенциалу) – высокий уровень развития промышленности. Также быстрыми темпами развивается Израиль.',
            'Китай и Индия выделяются большими масштабами производства, но отстают по производству товаров на долю населения.',
            'Новые индустриальные страны (НИС) (Корея, Сингапур). Основа экономики – обрабатывающая промышленность (в том числе машиностроение).',
            'Нефтеэкспортирующие страны (Саудовская Аравия, Кувейт). Основа экономики – нефтедобыча.',
            'Страны с начальной индустриализацией: горнодобывающая и легкая промышленность (Монголия, Вьетнам и др.)',
            'Наименее развитые страны (Лаос, Камбоджа, Непал, Бутан), где современная промышленность почти отсутствует.',
        ]
    },
    recognized: {
        text: 'Зарубежная Азия – крупный макрорегион, в состав которого входят пять субрегионов. Занимая площадь в 32 млн. кв. км, и имея в составе 48 государств, эта территория играет важную роль в мировой экономике. В этой статье  за 7 и  11 класс по  географии дается краткая информация о регионах, их географическом положении и экономических особенностях.'
    }
}

export const countriesData = [
    {
        name: 'Китай',
        photos: {
            card: chinaCard,
            banner: chinaBanner
        },
        enName: 'china',
        capital: 'Пекин',
        bazedData: '1 октября 1949 года',
        population: '1 411 778 724 людей',
        territory: '9 598 962 км²',
        governmentForm: 'однопартийная, парламентская республика',
        contents: [
            {
                title: 'Этимология',
                text: 'Русское слово «Китай» происходит от уйг. Kytai — «Китай, китаец», которое, в свою очередь, происходит от тюрк. Qytan, а то — от кит. 契丹 — так называли протомонгольскую группу кочевых племён из Маньчжурии — киданей (китаев). В 907 году они захватили Северный Китай и основали в нём свою династию Ляо[25]. Их место в XII—XIII веках заняли другие кочевники — чжурчжэни и монголы, однако этноним их предшественников закрепился как топоним Северного Китая. Посредством европейских путешественников, в частности, Марко Поло, это название в форме «Катай» («Cathay») попало в средневековую Западную Европу, частично вытеснив латинское «China»',
                photo: chinaOne,
            },
            {
                title: 'Рельеф',
                text: 'Топография Китая очень разнообразна, на его территории имеются высокие горы, плато, впадины, пустыни и обширные равнины. Более 2/3 страны занимают горные хребты, нагорья и плато, пустыни и полупустыни. В направлении с запада на восток китайский рельеф образует три ступени. Первая из них — Тибетское нагорье, где преобладают высоты более 4000 метров над уровнем моря. Следующую ступень образуют горы Сычуани и Центрального Китая, высота которых от 1500 до 3000 м. Здесь растительность резко изменяется, на сравнительно небольших расстояниях происходит смена природных зон от высокогорных холодных пустынь к субтропическому лесу. Последней ступенью служат плодородные равнины, занимающие высоты ниже 1500 м над уровнем моря.',
                photo: chinaTwo,
            },
            {
                title: 'Климат',
                text: 'Климат Китая очень разнообразен — от субтропического на юго-востоке до резко континентального (аридного) на северо-западе. На южном побережье погода определяется муссонами, которые возникают из-за различных поглощательных свойств суши и океана. Сезонные движения воздуха и сопутствующие ветра содержат большое количество влаги в летний период и довольно сухие зимой. Наступление и отход муссонов в большой степени определяют количество и распределение осадков по стране. Огромные разницы по широте, долготе и высоте на территории Китая порождают большое разнообразие температурных и метеорологических режимов, несмотря на то, что большая часть страны лежит в области умеренного климата.',
                photo: chinaThree,
            }
        ],
    },
    {
        name: 'Индия',
        photos: {
            card: indiaCard,
            banner: indiaCard
        },
        enName: 'india',
        capital: 'Нью-Дели',
        bazedData: '15 августа 1947 года',
        population: ' 1 400 000 000 людей',
        territory: '3 287 263 км²',
        governmentForm: 'федеративная, парламентская, республика',
        contents: [
            {
                title: 'Этимология',
                text: 'Официальное название страны — Республика Индия, происходящее от древнеперсидского слова хинду, родственного санскритскому синдху (санскр. सिन्धु) — историческое название реки Инд[10]. Древние греки называли индийцев индои (др.-греч. Ἰνδοί) — «люди Инда». Конституция Индии устанавливает название на хинди, официальном языке страны — Бхарат (хинди भारत), происходящее от санскритского имени древнеиндийского царя, история которого была описана в «Махабхарате». Со времён империи Великих Моголов использовалось также название Хиндустан, но официального статуса оно не имеет.',
                photo: indiaOne,
            },
            {
                title: 'Рельеф',
                text: 'Южная часть страны представлена равнинами. На севере находятся Гималаи с вершинами, покрытыми снежной и ледниковой шапкой. На западе имеются пустыни. Восточная часть представлена тропическими лесами. Гималаи являются самой высокой горной системой в мире. Практически целиком они находятся на полуострове Индостан, и только часть массива проходит по территории Индии. В данную гряду включается горная система Каракорум.В Гималаях находится 10 из 14 мировых пиков, превышающих отметку в 8 000 м над уровнем моря. Имеются в Индии спорные территории. Это Джамму и Кашмир, а также Аруначал-Прадеш.',
                photo: indiaCard,
            },
            {
                title: 'Климат',
                text: 'Климат Индии является ярким примером тропического муссонного климата. В связи с деятельностью муссона и изменениями температур на большей части страны можно выделить три основных сезона: зимний (октябрь — февраль), летний (март — июнь) и сезон дождей (июнь — сентябрь), продолжительность которых зависит от конкретного региона и может изменяться из года в год. Иногда выделяют также четвёртый сезон — постмуссон, который продолжается с октября по декабрь и является отступлением муссона. Важными климатообразующими факторами являются обширные горные системы на севере Индии и территории соседних государств, а также пустыня Тар на северо-западе страны. Климат каждого конкретного региона зависит также от многих локальных факторов, таких как особенности местного рельефа, высота над уровнем моря, близость к океану и крупным водоёмам и других.',
                photo: indiaThree,
            }
        ],
    },
    {
        name: 'Япония',
        photos: {
            card: japanCard,
            banner: japanBanner
        },
        enName: 'japan',
        capital: 'Токио',
        bazedData: '11 февраля 660 года до н. э.',
        population: '125 309 000 людей',
        territory: '377,976 км²',
        governmentForm: 'конституционная монархия',
        contents: [
            {
                title: 'Этимология',
                text: 'Первое упоминание в русских источниках о Японии как Нифон относится к XVII веку. Русское слово «Япония» — экзоним, в русский язык оно пришло, предположительно, из немецкого языка (от нем. Japan), хотя вокализм больше соответствует французскому Japon[17], что более достоверно. «Iапонию» упоминает Иоанн Ужевич в «Грамматыке словенской» (1643)[18].В период от Реставрации Мэйдзи до конца Второй мировой войны полное название Японии звучало как Дай Ниппон Тэйкоку (大日本帝國), что означает Великая Японская империя. Сейчас официальное название страны — «Нихон коку» или «Ниппон коку» (日本国). Сами японцы называют страну «Ниппон» слушать (инф.) или «Нихон» слушать (инф.), оба варианта записываются с помощью кандзи (日本). Первый часто используется в качестве официального, например, на иенах, почтовых марках и в названиях многих спортивных событий. «Нихон» обычно используется в быту. Себя японцы называют нихондзин (日本人), а свой язык — нихонго (日本語).',
                photo: japanOne,
            },
            {
                title: 'Рельеф',
                text: 'Япония покрыта возвышенностями и низкими и средневысотными горами, они составляют свыше 75 % территории страны. Низменности располагаются отдельными участками вдоль побережий страны. Крупнейшая низменность — Канто, занимающая около 17 000 км². Основные хребты Хоккайдо являются продолжением цепей Сахалина и Курильских островов. Они протягиваются с севера на юг и с северо-востока на юго-запад. Высочайшая точка острова — гора Асахи (2290 м), расположена в районе их пересечения.В северной части острова Хонсю находятся три продольные цепи средневысотных гор, разделённые долинами и котловинами. Осевое положение занимает хребет Оу, к востоку от него расположены хребты Китаками и Абукума, а к западу — хребты Дэва и Этиго; центральные и западные цепи увенчаны вулканами. В средней части остров пересекает зона разломов под названием Фосса-Магна (длиной около 250 км), над которой возвышается ряд вулканов, в том числе самый высокий в Японии — Фудзияма (3776 м). В центральной части Хонсю расположены Японские Альпы — хребты Хида, Кисо и Акаиси, вершины которых большую часть года покрыты снегом. На юго-западе в пределах тектонического понижения находится равнина Кинки и озеро Бива. Две полосы гор — северная (внутренняя), протягивающаяся по оси западной части Хонсю, и южная (внешняя) — на полуострове Кии, островах Сикоку и Кюсю, разделяются этим тектоническим понижением, на западном продолжении которого расположено Внутреннее Японское море[41]. Наибольшая высота острова Сикоку — гора Исидзути (1981 м), острова Кюсю — вулкан Кудзю (1788 м). На островах Рюкю преобладают плато и низкогорья[41].',
                photo: japanTwo,
            },
            {
                title: 'Климат',
                text: 'Япония относится к температурной зоне с четырьмя отличающимися сезонами, но её климат колеблется от низких температур на севере до субтропических — на юге. Климат также зависит от сезонных ветров, дующих с континента зимой и в обратном направлении — летом.',
                photo: japanCard,
            }
        ],
    }
]