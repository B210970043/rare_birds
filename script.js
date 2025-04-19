// Шувууны мэдээллийн өгөгдөл
const birds = [
    {
        name: "Цагаан тогоруу",
        image: "images/siberian_white_crane.jpg",
        sketches: ["sketches/siberian_white_crane.jpg", "sketches/siberian_white_crane_2.jpg"],
        description: "Монгол орны нэн ховор шувуу. ДБХХ-ны Улаан дансны дагуу \"устаж байгаа зүйл\". Цас мэт цагаан биетэй, хөл, нүүр, хошуу улаан, далавчны үзүүр хар. Чийглэг тундр нутагт үүрлэж 2 өндөг гаргана. Монголд хавар нүүдэллэн ирж намгархаг нутагт зусдаг.",
        habitat: "Чийглэг намаг, нууруудын эрэг. Обь мөрөн, Якутын зүүн хойд хэсэгт үржиж, Монголын нутгаар дамжин өнгөрч, Хятадын Хөх мөрний адагт өвөлждөг. Монголд Биндэрийн нуур орчимд зусдаг.",
        size: "120-140 см",
        weight: "4.9-8.6 кг",
        latinName: "Grus leucogeranus",
        englishName: "Siberian White Crane",
        status: "Нэн ховор, устаж байгаа зүйл",
        population: "Якутад 840 орчим, Монголд маш ховор тааралддаг",
        threats: "Мал, хүний нөлөөллөөс үүдэн тайван орчин алдагдаж тоо толгой цөөрч байна",
        protection: "CITES I хавсралт, CMS I, II хавсралт, Монголын улаан номд бүртгэгдсэн. Агнахыг 1995 оноос хориглосон",
        conservation: "Байршил нутгийг хамгаалах, олон нийтэд сурталчлах"
    },
    {
        name: "Цэн тогоруу",
        image: "images/white_naped_crane.jpg",
        sketches: ["sketches/white_naped_crane.jpg", "sketches/white_naped_crane_2.jpg"],
        description: "Нэн ховор, \"эмзэг\" зүйл. Саарал бие, хүзүүгээрээ цагаан зурвастай, дух шанаа улаан. 2 өндөг гаргаж, эм нь дарна. VIII сард дэгдээхий нисэх чадвартай болдог.",
        habitat: "БНХАУ, ОХУ-д үржиж, Монголын зүүн голын сав газраар зусна. Хятад, Солонгос, Японд өвөлжинө.",
        size: "130 см",
        weight: "4.8-6.1 кг",
        latinName: "Grus vipio",
        englishName: "White-naped Crane",
        status: "Нэн ховор, эмзэг зүйл",
        population: "Дэлхийд 2.5–3 мянга. Монголд 800 орчим зусдаг",
        threats: "Ойн түймэр, махчин амьтдын нөлөө, хүний үйл ажиллагаа",
        protection: "CITES I, CMS II хавсралт, Монголын улаан ном, Азийн улаан номд орсон",
        conservation: "Байршил нутгийн хамгаалалт, орон нутгийн оролцоог нэмэгдүүлэх"
    },
    {
        name: "Хархираа тогоруу",
        image: "images/hooded_crane.jpg",
        sketches: ["sketches/common_crane.jpg", "sketches/common_crane_2.jpg"],
        description: "Ховор зүйл. \"Ховордож болзошгүй\" зүйл. Хөх-саарал биетэй, хүзүүний ар дагуу цагаан зурвастай, дагз улаан, хоолой хар. Намгархаг нутагт амьдарч, 2 өндөг гаргана. \"Хархирах\" дуу нь онцлог. Шавж, ургамлын үр, хоёр нутагтнаар хооллоно.",
        habitat: "Африк, Ази, Энэтхэг, Хятадад өвөлжинө. Монголд Дөргөн, Хар, Айраг, Увс нуур, Сэлэнгэ, Туул, Улзын голын хөндийд тохиолдоно.",
        size: "125 см",
        weight: "3-6.1 кг",
        latinName: "Grus grus",
        englishName: "Common Crane",
        status: "Ховор зүйл, ховордож болзошгүй",
        population: "2012 онд 200–300 толгойтой сүрэг Айрхан нуурт ажиглагдсан",
        threats: "Нийт хомсдлын шалтгаан нарийн судлагдаагүй",
        protection: "Монголын Засгийн газрын тогтоолоор бүртгэгдсэн. CITES II, CMS жагсаалтад орсон",
        conservation: "Хамгаалалтын менежментийг бүрдүүлэх, тоо толгойг тогтоох"
    },
    {
        name: "Хар тогоруу",
        image: "images/common_crane.jpg",
        sketches: ["sketches/hooded_crane.png", "sketches/hooded_crane_2.jpg"],
        description: "Нэн ховор, \"эмзэг\" зүйл. Жижиг биетэй, саарал бие, цагаан толгой, улаан зулай. Тайгын намгуудад 2 өндөг гаргана. Тариалангийн талбайд сүрэглэн хооллоно.",
        habitat: "Якут, Примор, Хабаровскт үржиж, Монголын зүүн хэсгээр нүүдэллэн дайрч өнгөрнө.",
        size: "95-100 см",
        weight: "3.5-4.9 кг",
        latinName: "Grus monacha",
        englishName: "Hooded Crane",
        status: "Нэн ховор, эмзэг зүйл",
        population: "7000 орчим. Монголд 1000 гаруй тохиол бүртгэгдсэн",
        threats: "Нуур, цөөрөм хатаж буй нь амьдралд сөрөг нөлөө үзүүлнэ",
        protection: "CITES I, CMS II хавсралт, Монголын болон Азийн улаан номд орсон",
        conservation: "Агнахыг хориглосон. Тайван амьдрах нөхцөлийг бүрдүүлэх"
    },
    {
        name: "Алаг тогоруу",
        image: "images/red_crowned_crane.jpg",
        sketches: ["sketches/red_crowned_crane.jpg", "sketches/red_crowned_crane_2.jpg"],
        description: "Нэн ховор зүйл. ДБХХ-ны Улаан дансны ангиллаар устаж болзошгүй зүйл. Цэвэр цагаан зүстэй, далавчны үзүүр болон хүзүү, сүүл орчмоор хар зүс орсон. Толгойн дээд хэсэгт улаан \"шарх\" мэт судалтай. Урт хөл, хүчирхэг хошуутай. Залуу шувууд нь хар хүрэн зүстэй. Намаг, зэгстэй газарт хуурай довцог дээр үүрээ зэгсээр засч, ихэвчлэн 2 өндөг гаргадаг боловч зөвхөн нэг дэгдээхий амьд үлддэг. Өндөг дарах хугацаа 29–31 хоног. Хосууд олон жилийн турш нэгнээ сонгон тогтвортой амьдардаг.",
        habitat: "Монголын зүүн хойд нутгийн намгархаг, чийглэг бүс нутгуудад (Буйр нуур, Улз гол, Халх голын хөндий, Нөмрөг) цөөн тоогоор зусдаг. Намар Солонгос, Япон, Хятад, Тайван руу өвөлжихөөр буцна.",
        size: "140 см",
        weight: "7.7-10 кг",
        latinName: "Grus japonensis",
        englishName: "Red-crowned Crane",
        status: "Нэн ховор, устаж болзошгүй зүйл",
        population: "Дэлхий дээр 3,000–3,200 орчим, Монголд 20–30 хос зусдаг",
        threats: "Үржлийн амжилт багатай, үүрлэх нутагт нь хүн, малын нөлөө, түймэр, усны түвшин өөрчлөгдөх. Өвөлжих бүс нутагт нь амьдрах орчны хомсдол, бохирдол",
        protection: "Монгол Улсын Улаан номонд 1987 оноос хойш. CITES-ийн I хавсралт, CMS-ийн I, II хавсралт. Байршил нутгуудыг улсын тусгай хамгаалалттай газар нутагт хамруулсан",
        conservation: "Үүрлэх байршлын хамгаалалтыг сайжруулах, хүн малын дарамтыг бууруулах, хяналт тавих, сурталчилгаа хийх"
    },
    {
        name: "Хонин тоодог",
        image: "images/great_bustard.jpg",
        sketches: ["sketches/great_bustard.png", "sketches/great_bustard_2.jpg"],
        description: "Ховор, \"эмзэг\" зүйл. Маш том биетэй, эр нь сахал маягийн өдтэй, эм нь жижиг. III сард ирж үржилд орно. 2–3 өндөг гаргаж, эм нь дэгдээхийг тэжээнэ.",
        habitat: "Монголын тал хээрийн нутгаар ховор тохиолдоно. Увс, Дорнод, Булган, Сэлэнгэ, Төв зэрэг аймгуудад өвөлждөг.",
        size: "90-105 см (эрэгчин), 75-85 см (эмэгчин)",
        weight: "4.8-18 кг (эрэгчин), 3.1-5 кг (эмэгчин)",
        latinName: "Otis tarda",
        englishName: "Great Bustard",
        status: "Ховор, эмзэг зүйл",
        population: "Нарийн судалгаагүй боловч ховор",
        threats: "Агнах, бэлчээр ашиглалт, зуд, өвчин",
        protection: "CITES II хавсралт, Монголын улаан номд орсон",
        conservation: "Өвөлжих нутгийг хамгаалах, судалгаа хийх, тэжээж өсгөх"
    },
    {
        name: "Жороо тоодог",
        image: "images/houbara_bustard.jpg",
        sketches: ["sketches/houbara_bustard.png", "sketches/houbara_bustard_2.jpg"],
        description: "Нэн ховор, \"эмзэг\" зүйл. Хамгийн жижиг тоодог. Шаргал биетэй, хүзүүндээ хар зурвастай, гүйх дуртай. Газарт үүрлэн 1–4 өндөг гаргана. Эр өндөг дарахгүй.",
        habitat: "Их нууруудын хотгор, Говийн бүс нутгаар цөөн тоогоор таарна.",
        size: "60-70 см",
        weight: "1.5-2.5 кг",
        latinName: "Chlamydotis undulata",
        englishName: "Houbara Bustard",
        status: "Нэн ховор, эмзэг зүйл",
        population: "Монголд 200–300",
        threats: "Тайван байдал алдагдах, агнуурын дарамт",
        protection: "CITES I хавсралт, Монголын улаан номд бүртгэгдсэн",
        conservation: "Байршил нутгийн хамгаалалтыг сайжруулах, өсгөн үржүүлэх, сурталчлах"
    },
    {
        name: "Усны бух шувуу",
        image: "images/eurasian_bittern.jpg",
        sketches: ["sketches/eurasian_bittern.png", "sketches/eurasian_bittern_2.jpg"],
        description: "Ховор зүйл. \"Ховордож болзошгүй\" зүйл. Богино хөлтэй, хүчирхэг хошуутай. Нуруу, толгой хар бараан, хөндлөн судалтай, өнгө нь зэгсэнд уусан харагддаг. Зэгс хулсны гүнд нуувчлан амьдардаг. 3–6 өндөг гаргана. Эр бух адил дуугарч холбоо тогтооно. Жижиг загас, хоёр нутагтан, шавжаар хооллоно.",
        habitat: "Европоос Зүүн Ази хүртэл тархана. Монголд Орог, Бөөнцагаан, Хар, Хяргас, Увс зэрэг нуурууд, Туул, Хэрлэн, Онон зэрэг голын сав газарт үүрлэнэ.",
        size: "76 см",
        weight: "0.87-2.1 кг",
        latinName: "Botaurus stellaris",
        englishName: "Eurasian Bittern",
        status: "Ховор зүйл, ховордож болзошгүй",
        population: "Тодорхойгүй",
        threats: "Усны нөөц багасах, тайван орчин алдагдах",
        protection: "2012 оны Засгийн газрын тогтоолоор ховор амьтнаар бүртгэсэн. Зарим тархац нутаг улсын хамгаалалтад хамрагдсан",
        conservation: "Тайван орчныг хадгалах, усны хамгаалалтын бүс тогтоох, олон улсын конвенцуудад бүртгэх"
    },
    {
        name: "Бичил одойбух",
        image: "images/little_bittern.jpg",
        sketches: ["sketches/little_bittern.png", "sketches/little_bittern_2.jpg"],
        description: "Ховор зүйл. \"Ховордож болзошгүй\" зүйл. Эр нь хар нуруутай, улбар шаргал хэвлийтэй. Эм нь бордуу, хээтэй. Хошуу шар-ногоон. Зэгс, буттай намагт үүрлэнэ. 5–6 өндөг гаргана. Ангаахайгаа 7–9 хоног үүрэнд тэжээнэ. VIII–IX сард цөөн тоогоор ганцаараа ажиглагддаг.",
        habitat: "Хар ус, Хяргас, Айраг нуурууд, Увс, Тэсийн гол зэрэг зэгс ихтэй газар. Батсүмбэр, Говийн баян бүрдүүдэд ч тохиолдоно.",
        size: "27-36 см",
        weight: "59-150 г",
        latinName: "Ixobrychus minutus",
        englishName: "Little Bittern",
        status: "Ховор зүйл, ховордож болзошгүй",
        population: "Тодорхойгүй",
        threats: "Ус ширгэх, бэлчээрийн доройтол, усан цахилгаан станцын нөлөө, махчин амьтад, халдварт өвчин",
        protection: "2012 оны Засгийн газрын тогтоолоор ховор амьтнаар бүртгэгдсэн. Ус намгийн олон улсын конвенцийн хамгаалалтад хамрагдсан",
        conservation: "Хамгаалалтын менежмент, мониторинг хийх, үржлийн биологийг судлах, сурталчилгаа хийх"
    },
    {
        name: "Зээрд дэглий",
        image: "images/purple_heron.jpg",
        sketches: ["sketches/purple_heron.png", "sketches/purple_heron_2.jpg"],
        description: "Ховор зүйл. \"Ховордож болзошгүй\" зүйл. Сайн сунасан нарийн бие, хүзүүтэй. Хүзүү улаан хар судалтай, мөр улаан бор. Хошуу шар, хөл саарал. IV–VI сард үржилтэй. 2–5 өндөг гаргаж, 24–28 хоног дарна. Хосууд ангаахайгаа 42 хоног хооллоно. Нүүдлийн үед Сингапур хүртэл нүүдэллэнэ.",
        habitat: "Монголын ус, намгийн бүс: Буйр нуур, Халх гол, Монгол дагуур, Өгий, Тэрхийн цагаан нуур орчим.",
        size: "70-90 см",
        weight: "0.5-1.4 кг",
        latinName: "Ardea purpurea",
        englishName: "Purple Heron",
        status: "Ховор зүйл, ховордож болзошгүй",
        population: "Монголд судалгаа хангалтгүй, тархац хязгаарлагдмал",
        threats: "Тодорхойгүй",
        protection: "2012 оны Засгийн газрын тогтоолд ховор амьтнаар бүртгэгдсэн. RAMSAR болон бусад олон улсын хамгаалалттай",
        conservation: "Судалгаа явуулах, ургамлан бүрхэвчийг хамгаалах, хамгаалалтын менежмент сайжруулах"
    }
];

// Шувууны мэдээллийг харуулах функц
function displayBirds(birdsToShow = birds) {
    const container = document.getElementById('birdContainer');
    container.innerHTML = '';

    birdsToShow.forEach(bird => {
        const card = document.createElement('a');
        card.className = 'bird-card';
        card.href = `detail.html?id=${encodeURIComponent(bird.name)}`;
        card.innerHTML = `
            <div class="basic-info">
                <img src="${bird.image}" alt="${bird.name}" class="bird-image">
                <div class="bird-names">
                    <h2 class="bird-name">${bird.name}</h2>
                    <p class="bird-latin">${bird.latinName}</p>
                    <p class="bird-english">${bird.englishName}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Хайлтын функц
function searchBirds() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredBirds = birds.filter(bird => 
        bird.name.toLowerCase().includes(searchTerm) ||
        bird.description.toLowerCase().includes(searchTerm) ||
        bird.habitat.toLowerCase().includes(searchTerm) ||
        bird.latinName.toLowerCase().includes(searchTerm) ||
        bird.englishName.toLowerCase().includes(searchTerm)
    );
    
    displayBirds(filteredBirds);
}

// Анхны мэдээллийг харуулах
document.addEventListener('DOMContentLoaded', () => {
    displayBirds();
}); 