const WALLPAPER_COLLECTIONS = [
  {
    title: "Samurai’s Horizon",
    description: "A cinematic Japanese inspired scene for a bold, focused screen.",
    image: "assets/wallpapers/samurais-horizon/samurais-horizon-wallpaper-art.png",
    variants: ["Wide Monitor", "Mac", "iPhone"],
    files: ["assets/wallpapers/samurais-horizon/samurais-horizon-wide-monitor.webp", "assets/wallpapers/samurais-horizon/samurais-horizon-mac.png", "assets/wallpapers/samurais-horizon/samurais-horizon-iphone.webp"]
  },
  {
    title: "Sunset Reflections",
    description: "Warm sunset tones and calm reflections to bring a little stillness to your screen.",
    image: "assets/wallpapers/sunset-reflections/sunset-reflections-cover.png",
    variants: ["Wide Monitor", "Mac", "iPhone"],
    files: ["assets/wallpapers/sunset-reflections/sunset-reflections-wide-monitor.png", "assets/wallpapers/sunset-reflections/sunset-reflections-mac.png", "assets/wallpapers/sunset-reflections/sunset-reflections-iphone.png"]
  },
  {
    title: "Mediterranean Serenity",
    description: "A sunlit coastal mood inspired by the relaxed beauty of the Mediterranean.",
    image: "assets/wallpapers/mediterranean-serenity/mediterranean-sunset-wallpaper-collection.png",
    variants: ["Wide Monitor", "Mac", "iPhone"],
    files: ["assets/wallpapers/mediterranean-serenity/mediterranean-serenity-wide-monitor.png", "assets/wallpapers/mediterranean-serenity/mediterranean-serenity-mac.png", "assets/wallpapers/mediterranean-serenity/mediterranean-serenity-iphone.png"]
  },
  {
    title: "Crossgray River Landscape",
    description: "A quiet monochrome river scene with soft mountain layers and a striking eclipse.",
    image: "assets/wallpapers/new-collections/crossgray-river-landscape.png",
    variants: ["Wide Monitor", "Mac", "iPhone"],
    files: ["assets/wallpapers/new-collections/crossgray-river-landscape.png", "assets/wallpapers/new-collections/crossgray-river-landscape.png", "assets/wallpapers/new-collections/crossgray-river-landscape.png"]
  },
  {
    title: "Cyber Fiction",
    description: "A neon-lit futuristic skyline beneath a vivid evening moon.",
    image: "assets/wallpapers/new-collections/cyber-fiction.png",
    variants: ["Wide Monitor", "Mac", "iPhone"],
    files: ["assets/wallpapers/new-collections/cyber-fiction.png", "assets/wallpapers/new-collections/cyber-fiction.png", "assets/wallpapers/new-collections/cyber-fiction.png"]
  },
  {
    title: "Indian Heritage Sunset",
    description: "A glowing riverside sunset framed by historic Indian architecture.",
    image: "assets/wallpapers/new-collections/indian-heritage-sunset.png",
    variants: ["Wide Monitor", "Mac", "iPhone"],
    files: ["assets/wallpapers/new-collections/indian-heritage-sunset.png", "assets/wallpapers/new-collections/indian-heritage-sunset.png", "assets/wallpapers/new-collections/indian-heritage-sunset.png"]
  },
  {
    title: "Japanese Landscape",
    description: "A minimalist Japanese seascape with a vermilion sun and winding path.",
    image: "assets/wallpapers/new-collections/japanese-landscape.png",
    variants: ["Wide Monitor", "Mac", "iPhone"],
    files: ["assets/wallpapers/new-collections/japanese-landscape.png", "assets/wallpapers/new-collections/japanese-landscape.png", "assets/wallpapers/new-collections/japanese-landscape.png"]
  },
  {
    title: "Kashmiri Twilight",
    description: "Mountain peaks, a crescent moon, and houseboats at blue hour in Kashmir.",
    image: "assets/wallpapers/new-collections/kashmiri-twilight.png",
    variants: ["Wide Monitor", "Mac", "iPhone"],
    files: ["assets/wallpapers/new-collections/kashmiri-twilight.png", "assets/wallpapers/new-collections/kashmiri-twilight.png", "assets/wallpapers/new-collections/kashmiri-twilight.png"]
  },
  {
    title: "Serene Lake",
    description: "A peaceful alpine lake and sunlit mountains in cool blue tones.",
    image: "assets/wallpapers/new-collections/serene-lake.png",
    variants: ["Wide Monitor", "Mac", "iPhone"],
    files: ["assets/wallpapers/new-collections/serene-lake.png", "assets/wallpapers/new-collections/serene-lake.png", "assets/wallpapers/new-collections/serene-lake.png"]
  },
  {
    title: "China Heritage",
    description: "A lantern-lit pagoda and mountain river beneath cherry blossoms at sunset.",
    image: "assets/wallpapers/new-collections/china-heritage.png",
    variants: ["Wide Monitor", "Mac", "iPhone"],
    files: ["assets/wallpapers/new-collections/china-heritage.png", "assets/wallpapers/new-collections/china-heritage.png", "assets/wallpapers/new-collections/china-heritage.png"]
  },
  {
    title: "Japan Heritage",
    description: "A tranquil traditional pavilion overlooking a glowing modern city at dusk.",
    image: "assets/wallpapers/new-collections/japan-heritage.png",
    variants: ["Wide Monitor", "Mac", "iPhone"],
    files: ["assets/wallpapers/new-collections/japan-heritage.png", "assets/wallpapers/new-collections/japan-heritage.png", "assets/wallpapers/new-collections/japan-heritage.png"]
  },
  {
    title: "Turkey Heritage",
    description: "A warm twilight over a waterfront mosque, framed by palms and glowing lanterns.",
    image: "assets/wallpapers/new-collections/turkey-heritage.png",
    variants: ["Wide Monitor", "Mac", "iPhone"],
    files: ["assets/wallpapers/new-collections/turkey-heritage.png", "assets/wallpapers/new-collections/turkey-heritage.png", "assets/wallpapers/new-collections/turkey-heritage.png"]
  }
];

/* Legacy writing catalog retained for now; the public middle column uses the wallpaper collections below. */
const BOOKS = [
  {
    category: "Stories",
    title: "The Lantern at Low Tide",
    icon: "🏮",
    cover: "assets/books/the-lantern-at-low-tide.jpg",
    description: "A keeper of an old harbor light learns what it means to guide someone home.",
    rating: 4.8,
    readers: 1120,
    story: "Every evening, Mira lit the harbor lantern for ships she could not see. One stormy night, a single bell answered from the fog. She held the flame steady until a small boat appeared—and her long-lost brother stepped onto the shore."
  },
  {
    category: "Stories",
    title: "Paper Boats in June",
    icon: "⛵",
    cover: "assets/books/paper-boats-in-june.jpg",
    description: "Two childhood friends send promises downstream and meet them again years later.",
    rating: 4.6,
    readers: 784,
    story: "Noah and Lina wrote their bravest wishes on paper boats. Twenty summers later, Lina found one caught beneath the old bridge: “Come back when you are ready.” She looked up. Noah was waiting on the opposite bank, holding the other boat."
  },
  {
    category: "Stories",
    title: "The Last Blue Bicycle",
    icon: "🚲",
    cover: "assets/books/the-last-blue-bicycle.jpg",
    description: "A forgotten bicycle carries three generations through one changing neighborhood.",
    rating: 4.7,
    readers: 953,
    story: "The blue bicycle first carried Ada to school, then her son to his first job. When the neighborhood changed, her granddaughter restored its silver bell. Its first bright ring brought every old story rushing back down the familiar street."
  },
  {
    category: "Stories",
    title: "A Map of Small Kindnesses",
    icon: "🗺️",
    cover: "assets/books/a-map-of-small-kindnesses.jpg",
    description: "A traveler marks every unexpected kindness until the map leads her home.",
    rating: 4.9,
    readers: 1187,
    story: "Inez drew a gold star wherever a stranger helped her: a shared umbrella, a warm meal, a patient direction. When her journey ended, the stars formed a path back to her own door, where she finally understood how kindness had carried her."
  },
  {
    category: "Stories",
    title: "The Window Garden",
    icon: "🌿",
    cover: "assets/books/the-window-garden.jpg",
    description: "A tiny city garden quietly reconnects neighbors who had stopped speaking.",
    rating: 4.5,
    readers: 648,
    story: "Leela planted basil in one cracked cup. A neighbor added mint, another thyme, and soon the sill became a garden. People paused to water it, then stayed to talk. By spring, the building had learned one another’s names."
  },
  {
    category: "Stories",
    title: "When the Clockmaker Smiled",
    icon: "🕰️",
    cover: "assets/books/when-the-clockmaker-smiled.jpg",
    description: "A precise old clockmaker discovers one moment that cannot be measured.",
    rating: 4.3,
    readers: 421,
    story: "Mr. Vale repaired every clock except the silent one above his workbench. On his birthday, his granddaughter filled the shop with laughter. The clock suddenly chimed, though its hands never moved. Some moments, he realized, were meant to remain timeless."
  },
  {
    category: "Stories",
    title: "The Orchard After Rain",
    icon: "🍎",
    cover: "assets/books/the-orchard-after-rain.jpg",
    description: "A family returns to a storm-damaged orchard and finds a new beginning.",
    rating: 4.4,
    readers: 536,
    story: "The storm left branches scattered across the orchard, but one young tree still stood. The family worked until dusk, saving every root they could. The next morning, sunlight caught a single red apple—and nobody spoke of leaving again."
  },
  {
    category: "Writings & Documentaries",
    title: "Hands That Built the Morning",
    icon: "👐",
    cover: "assets/books/hands-that-built-the-morning.jpg",
    description: "Portraits of early-shift workers whose quiet labor wakes a city.",
    rating: 4.8,
    readers: 1044,
    story: "Before sunrise, bakers knead dough, nurses change shifts, and drivers trace empty avenues. The city believes morning simply arrives. This documentary remembers the hands that prepare it—one loaf, one patient, and one safe journey at a time."
  },
  {
    category: "Writings & Documentaries",
    title: "Letters from the Monsoon",
    icon: "🌧️",
    cover: "assets/books/letters-from-the-monsoon.jpg",
    description: "A lyrical record of families, streets, and rituals shaped by seasonal rain.",
    rating: 4.7,
    readers: 896,
    story: "Rain changes the grammar of a city. Doors become meeting places, tea becomes an invitation, and every roof finds its own rhythm. Across seven monsoons, these letters preserve the voices that rise whenever the clouds return."
  },
  {
    category: "Writings & Documentaries",
    title: "The Memory of Rivers",
    icon: "🏞️",
    cover: "assets/books/the-memory-of-rivers.jpg",
    description: "Communities along one river tell how water shapes work, identity, and belonging.",
    rating: 4.9,
    readers: 1200,
    story: "At its source, the river is a whisper. Downstream it becomes a livelihood, a boundary, a prayer, and a childhood memory. Eleven communities tell its story, reminding us that a river carries more than water to the sea."
  },
  {
    category: "Writings & Documentaries",
    title: "Notes from a Quiet Classroom",
    icon: "🏫",
    cover: "assets/books/notes-from-a-quiet-classroom.jpg",
    description: "An intimate essay about teachers who transform lives without applause.",
    rating: 4.6,
    readers: 732,
    story: "The greatest lessons were rarely written on the board. They arrived as extra patience, a book quietly lent, or a question asked at the right time. Years later, former students still carried those invisible lessons into the world."
  },
  {
    category: "Writings & Documentaries",
    title: "Thirty Steps to the Sea",
    icon: "🌊",
    cover: "assets/books/thirty-steps-to-the-sea.jpg",
    description: "A coastal community records the changing distance between home and water.",
    rating: 4.5,
    readers: 667,
    story: "Grandmother remembered when the sea was thirty steps from the gate. Now it was twelve. Each family measured the distance differently—in lost trees, moved walls, and packed suitcases—while working together to protect what remained."
  },
  {
    category: "Writings & Documentaries",
    title: "The Language of Clay",
    icon: "🏺",
    cover: "assets/books/the-language-of-clay.jpg",
    description: "Four potters reveal how tradition survives through touch and repetition.",
    rating: 4.4,
    readers: 512,
    story: "Clay remembers pressure. Under four pairs of hands it became a cup, a lamp, a ceremonial bowl, and a child’s first uneven pot. The shapes differed, but each carried the same lesson: tradition survives by being remade."
  },
  {
    category: "Writings & Documentaries",
    title: "Midnight Radio Diaries",
    icon: "📻",
    cover: "assets/books/midnight-radio-diaries.jpg",
    description: "Stories from callers who found companionship across late-night airwaves.",
    rating: 4.8,
    readers: 1086,
    story: "After midnight, strangers called to dedicate songs, confess worries, and send greetings across sleeping towns. The host rarely gave advice. He simply listened, proving that sometimes a distant voice is enough to make the dark feel less lonely."
  },
  {
    category: "Writings & Documentaries",
    title: "Seeds Beneath Concrete",
    icon: "🌱",
    cover: "assets/books/seeds-beneath-concrete.jpg",
    description: "A hopeful documentary about community gardens reclaiming overlooked spaces.",
    rating: 4.7,
    readers: 941,
    story: "The first seed was planted through a crack in an abandoned lot. Within a year, tomatoes climbed old fencing and children learned the names of herbs. The neighborhood did not erase its concrete; it taught life to grow through it."
  },
  {
    category: "Writings & Documentaries",
    title: "Portraits of the Night Train",
    icon: "🚆",
    cover: "assets/books/portraits-of-the-night-train.jpg",
    description: "Twenty-one passengers share what they are leaving and what they hope to find.",
    rating: 4.2,
    readers: 300,
    story: "In every compartment, someone was between one life and another. A student guarded an acceptance letter; a father carried a tiny red sweater. By dawn, the passengers separated, each taking a fragment of the others’ courage."
  },
  {
    category: "Writings & Documentaries",
    title: "A Kitchen Full of History",
    icon: "🥣",
    cover: "assets/books/a-kitchen-full-of-history.jpg",
    description: "Recipes and recollections preserve the journeys of five families.",
    rating: 4.6,
    readers: 825,
    story: "Measurements changed across generations: a handful, a pinch, enough until it smells right. The recipes were never only instructions. They were maps of migration, resilience, and celebration, served warm at tables far from where they began."
  },
  {
    category: "Faith-Based Stories",
    title: "A Prayer Between Seasons",
    icon: "🙏",
    cover: "assets/books/a-prayer-between-seasons.jpg",
    description: "A gentle story of trusting the quiet space between loss and renewal.",
    rating: 4.9,
    readers: 1174,
    story: "Elena prayed for an answer, but winter remained silent. She kept tending the bare garden anyway. When the first green shoot appeared, she understood: the answer had not been a sudden sign, but the strength to keep showing up."
  },
  {
    category: "Faith-Based Stories",
    title: "The Chapel of Open Doors",
    icon: "🕊️",
    cover: "assets/books/the-chapel-of-open-doors.jpg",
    description: "A small chapel becomes a refuge through one caretaker’s steady welcome.",
    rating: 4.8,
    readers: 1032,
    story: "Jonas never asked visitors why they came. He lit a candle, opened the door, and made tea. Over time, people arrived carrying grief and left carrying one another’s names. The chapel’s truest sermon was its welcome."
  },
  {
    category: "Faith-Based Stories",
    title: "Grace in the Waiting Room",
    icon: "✨",
    cover: "assets/books/grace-in-the-waiting-room.jpg",
    description: "Strangers discover comfort and courage during an uncertain night.",
    rating: 4.7,
    readers: 906,
    story: "Nobody in the waiting room knew what morning would bring. Still, they shared chargers, coffee, and quiet prayers. When good news finally came for one family, everyone stood to celebrate. Hope had made neighbors of them."
  },
  {
    category: "Faith-Based Stories",
    title: "The Mustard Seed Promise",
    icon: "🌾",
    cover: "assets/books/the-mustard-seed-promise.jpg",
    description: "One small act of faith changes the course of an entire family.",
    rating: 4.6,
    readers: 758,
    story: "Ruth kept a mustard seed in her pocket through every difficult appointment. Years later, she planted it beside the family’s new home. Its yellow flowers were tiny, but they reminded everyone that the smallest faith can shelter a future."
  }
];

const BRITISH_FIRST_NAMES = [
  "Amelia", "Oliver", "Isla", "George", "Florence", "Arthur", "Poppy", "Harry", "Imogen", "Jack",
  "Beatrice", "Alfie", "Matilda", "Freddie", "Evie", "Henry", "Harriet", "Theo", "Alice", "Edward",
  "Rosie", "William", "Sophie", "Thomas", "Charlotte", "Oscar", "Elsie", "James", "Lucy", "Archie", "Eleanor"
];

const BRITISH_LAST_NAMES = [
  "Thompson", "Davies", "Clarke", "Bennett", "Hughes", "Fletcher", "Harrison", "Whitaker", "Collins", "Parker",
  "Reynolds", "Sutton", "Spencer", "Ellis", "Barker", "Chapman", "Turner", "Wallace", "Foster", "Mitchell",
  "Cooper", "Morgan", "Bailey", "Richardson", "Wood", "Dawson", "Booth", "Palmer", "Holmes", "Webb", "Carter"
];

const AMERICAN_FIRST_NAMES = [
  "Ava", "Liam", "Harper", "Mason", "Madison", "Ethan", "Brooklyn", "Noah", "Riley", "Jackson",
  "Abigail", "Logan", "Savannah", "Caleb", "Kennedy", "Wyatt", "Avery", "Owen", "Natalie", "Grayson",
  "Zoe", "Carter", "Addison", "Luke", "Hailey", "Hudson", "Piper", "Lincoln", "Sadie", "Miles", "Audrey"
];

const AMERICAN_LAST_NAMES = [
  "Anderson", "Miller", "Johnson", "Williams", "Brown", "Wilson", "Moore", "Taylor", "Martin", "Jackson",
  "White", "Harris", "Robinson", "Clark", "Lewis", "Walker", "Hall", "Allen", "Young", "Hernandez",
  "King", "Wright", "Scott", "Green", "Adams", "Baker", "Nelson", "Hill", "Campbell", "Rivera", "Brooks"
];

const REVIEW_OPENINGS = [
  "The wallpaper looks crisp on my screen and gives the whole setup a calmer feel.",
  "The colors are even richer in person, and the image fits my display beautifully.",
  "I love how the design adds character without making my desktop feel busy.",
  "The details are sharp, and the composition leaves plenty of room for my icons.",
  "The scene brings a peaceful atmosphere to my workspace every time I open my laptop.",
  "The download was easy to set up and looks great on my monitor.",
  "The colors feel balanced, and the image looks polished as my everyday background.",
  "I wanted something distinctive for my screen, and this collection was a lovely fit.",
  "The wallpaper looks beautiful on my phone and stays clear on the lock screen.",
  "A thoughtful design with lovely detail; it has quickly become my favorite background.",
  "The artwork feels immersive without distracting me while I work.",
  "The landscape gives my screen a fresh look and makes the space feel more personal.",
  "I appreciate the different device sizes; setting it up on my devices was simple.",
  "The image quality is excellent and the colors look natural on my display.",
  "A beautiful backdrop that makes my home screen feel clean and inviting."
];

const REVIEW_ENDINGS = [
  "It has become the first thing friends notice when they see my workspace.",
  "I’ve used it across my laptop and phone, and both versions look great.",
  "It makes my screen feel more personal without getting in the way.",
  "The colors still look lovely in different lighting throughout the day.",
  "I keep coming back to this design whenever I want a change of scene.",
  "It was easy to download and set as my background.",
  "The quality is lovely, even on my larger display.",
  "I’d happily explore more designs from this collection."
];

const REVIEW_TYPES = [
  "Desktop wallpaper", "Mac wallpaper", "iPhone wallpaper", "Home screen",
  "Workspace setup", "Nature wallpaper", "Landscape design", "Digital download"
];

const REVIEW_RATINGS = [
  ...Array(1).fill(3.8),
  ...Array(1).fill(3.9),
  ...Array(1).fill(4.0),
  ...Array(1).fill(4.1),
  ...Array(1).fill(4.2),
  ...Array(2).fill(4.3),
  ...Array(3).fill(4.4),
  ...Array(4).fill(4.5),
  ...Array(8).fill(4.6),
  ...Array(12).fill(4.7),
  ...Array(11).fill(4.8),
  ...Array(78).fill(4.9)
];

function reviewerName(index, firstNames, lastNames) {
  const nameIndex = index % firstNames.length;
  const cycle = Math.floor(index / firstNames.length);
  const lastNameIndex = (nameIndex + cycle * 11) % lastNames.length;
  return `${firstNames[nameIndex]} ${lastNames[lastNameIndex]}`;
}

function reviewText(index) {
  const opening = REVIEW_OPENINGS[index % REVIEW_OPENINGS.length];
  const ending = REVIEW_ENDINGS[Math.floor(index / REVIEW_OPENINGS.length)];
  return `${opening} ${ending}`;
}

const WESTERN_REVIEWS = Array.from({ length: 123 }, (_, index) => {
  const british = index % 2 === 0;
  const regionalIndex = Math.floor(index / 2);
  const name = british
    ? reviewerName(regionalIndex, BRITISH_FIRST_NAMES, BRITISH_LAST_NAMES)
    : reviewerName(regionalIndex, AMERICAN_FIRST_NAMES, AMERICAN_LAST_NAMES);

  return {
    name,
    country: british ? "United Kingdom" : "United States",
    type: REVIEW_TYPES[index % REVIEW_TYPES.length],
    rating: REVIEW_RATINGS[(index * 37) % REVIEW_RATINGS.length],
    text: reviewText(index)
  };
});

const CHINESE_REVIEWER_NAMES = [
  "Wei Chen", "Li Wang", "Mei Zhang", "Jun Liu", "Xinyi Yang", "Hao Huang", "Yuchen Zhao",
  "Lin Wu", "Ming Zhou", "Jia Xu", "Rui Sun", "Fang Ma", "Qiang Zhu", "Yue Hu",
  "Zihan Guo", "An He", "Tao Gao", "Jing Lin", "Bo Luo", "Lili Zheng", "Kai Liang"
];

const JAPANESE_REVIEWER_NAMES = [
  "Haruto Sato", "Yui Suzuki", "Ren Takahashi", "Aoi Tanaka", "Sota Watanabe", "Hana Ito",
  "Kaito Yamamoto", "Mei Nakamura", "Yuto Kobayashi", "Rin Kato", "Daiki Yoshida", "Sakura Yamada",
  "Takumi Sasaki", "Hina Yamaguchi", "Riku Matsumoto", "Akari Inoue", "Shota Kimura", "Nanami Hayashi",
  "Kenta Shimizu", "Mio Yamazaki", "Ryota Mori", "Ayaka Abe", "Kazuki Ikeda", "Nao Hashimoto",
  "Kota Ishikawa", "Emi Nakajima", "Tsubasa Maeda", "Rina Fujita", "Hayato Ogawa", "Misaki Goto",
  "Sho Okada", "Kaori Hasegawa", "Naoki Murakami", "Yuna Kondo", "Kenji Ishii", "Chihiro Saito",
  "Masato Sakamoto", "Riko Endo", "Hiroki Aoki", "Nozomi Fujii", "Yuki Nishimura"
];

const EAST_ASIAN_REVIEW_RATINGS = [
  ...Array(1).fill(3.8),
  ...Array(1).fill(3.9),
  ...Array(1).fill(4.0),
  ...Array(1).fill(4.1),
  ...Array(2).fill(4.2),
  ...Array(2).fill(4.3),
  ...Array(3).fill(4.4),
  ...Array(4).fill(4.5),
  ...Array(5).fill(4.6),
  ...Array(7).fill(4.7),
  ...Array(9).fill(4.8),
  ...Array(12).fill(4.9),
  ...Array(14).fill(5.0)
];

const EAST_ASIAN_REVIEWER_NAMES = [
  ...CHINESE_REVIEWER_NAMES.map((name) => ({ name, country: "China" })),
  ...JAPANESE_REVIEWER_NAMES.map((name) => ({ name, country: "Japan" }))
];

const EAST_ASIAN_REVIEWS = EAST_ASIAN_REVIEWER_NAMES.map((reviewer, index) => {
  const globalIndex = WESTERN_REVIEWS.length + index;
  return {
    ...reviewer,
    type: REVIEW_TYPES[globalIndex % REVIEW_TYPES.length],
    rating: EAST_ASIAN_REVIEW_RATINGS[(index * 17) % EAST_ASIAN_REVIEW_RATINGS.length],
    text: reviewText(globalIndex)
  };
});

const REVIEWS = [...WESTERN_REVIEWS, ...EAST_ASIAN_REVIEWS];
const SHUFFLED_REVIEWS = [...REVIEWS];
for (let index = SHUFFLED_REVIEWS.length - 1; index > 0; index -= 1) {
  const swapIndex = Math.floor(Math.random() * (index + 1));
  [SHUFFLED_REVIEWS[index], SHUFFLED_REVIEWS[swapIndex]] = [SHUFFLED_REVIEWS[swapIndex], SHUFFLED_REVIEWS[index]];
}

const state = {
  reviewsShown: 12
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderReviews() {
  const list = document.querySelector("#review-list");
  const overallRating = REVIEWS.reduce((total, review) => total + review.rating, 0) / REVIEWS.length;
  const average = overallRating.toFixed(2);
  const summary = document.querySelector(".rating-summary");

  document.querySelector("#review-average").textContent = average;
  document.querySelector("#review-count").textContent = `Customer feedback from ${REVIEWS.length} reviews`;
  summary.setAttribute("aria-label", `Average rating ${average} out of 5`);
  const visibleReviews = SHUFFLED_REVIEWS.slice(0, state.reviewsShown);
  list.innerHTML = visibleReviews.map((review, index) => {
    const initials = review.name.split(" ").map((part) => part[0]).join("");
    const maskedName = review.name.split(" ").map((part) => {
      const letters = Array.from(part);
      return letters.length > 2 ? `${letters[0]}${"*".repeat(letters.length - 2)}${letters.at(-1)}` : part;
    }).join(" ");
    return `
      <article class="review-card${index === 0 ? " active-review" : ""}">
        <div class="review-head">
          <div class="avatar" aria-hidden="true">${escapeHtml(initials)}</div>
          <div>
            <strong>${escapeHtml(maskedName)}</strong>
            <span>${escapeHtml(review.type)} • ${escapeHtml(review.country)}</span>
          </div>
          <span class="mini-stars" aria-label="${review.rating.toFixed(1)} out of 5 stars">★ ${review.rating.toFixed(1)}</span>
        </div>
        <p>“${escapeHtml(review.text)}”</p>
      </article>`;
  }).join("");

  const loadMore = document.querySelector("#review-load-more");
  const remaining = REVIEWS.length - visibleReviews.length;
  loadMore.hidden = remaining <= 0;
  loadMore.textContent = remaining > 0 ? `Show more reviews (${remaining} remaining)` : "All reviews shown";
}

function configureMobileNavigation() {
  const workspace = document.querySelector(".workspace");
  const buttons = [...document.querySelectorAll(".mobile-section-button")];
  const panels = buttons.map((button) => document.querySelector(`#${button.dataset.panel}`));
  let scrollFrame = null;

  function setActivePanel(panelId) {
    buttons.forEach((button) => {
      const active = button.dataset.panel === panelId;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function syncActivePanel() {
    scrollFrame = null;
    if (window.innerWidth > 900) return;
    const workspaceCenter = workspace.getBoundingClientRect().left + (workspace.clientWidth / 2);
    const closest = panels.reduce((best, panel) => {
      const rect = panel.getBoundingClientRect();
      const distance = Math.abs((rect.left + rect.width / 2) - workspaceCenter);
      return !best || distance < best.distance ? { panel, distance } : best;
    }, null);
    if (closest) setActivePanel(closest.panel.id);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.querySelector(`#${button.dataset.panel}`);
      setActivePanel(panel.id);
      workspace.scrollTo({ left: panel.offsetLeft - workspace.offsetLeft, behavior: "smooth" });
      panel.focus({ preventScroll: true });
    });
  });

  panels.forEach((panel) => panel.setAttribute("tabindex", "-1"));
  workspace.addEventListener("scroll", () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(syncActivePanel);
  }, { passive: true });
  window.addEventListener("resize", syncActivePanel, { passive: true });
}

function renderLibrary() {
  const catalog = document.querySelector("#library-catalog");
  const collections = [...WALLPAPER_COLLECTIONS];
  for (let index = collections.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [collections[index], collections[swapIndex]] = [collections[swapIndex], collections[index]];
  }
  catalog.innerHTML = `<section class="library-group" aria-labelledby="wallpaper-collections">
    <div class="library-group-title">
      <h3 id="wallpaper-collections">Explore the collections</h3>
      <span class="library-count">${collections.length} collections</span>
    </div>
    <div class="wallpaper-list">${collections.map((collection) => `
      <article class="wallpaper-item">
        <button class="wallpaper-open" type="button" aria-label="View ${escapeHtml(collection.title)} wallpaper">
          <img class="wallpaper-preview" src="${escapeHtml(collection.image)}" alt="${escapeHtml(collection.title)} wallpaper artwork" loading="lazy" decoding="async" />
        </button>
        <div class="wallpaper-meta">
          <h4>${escapeHtml(collection.title)}</h4>
          <p>${escapeHtml(collection.description)}</p>
          <div class="wallpaper-formats">${collection.variants.map((variant, index) => `<a href="${escapeHtml(collection.files[index])}" download>${escapeHtml(variant)}</a>`).join("")}</div>
        </div>
      </article>`).join("")}</div>
  </section>`;

  catalog.addEventListener("click", (event) => {
    const trigger = event.target.closest(".wallpaper-open");
    if (!trigger) return;
    const item = trigger.closest(".wallpaper-item");
    const title = item.querySelector(".wallpaper-meta h4").textContent;
    const image = trigger.querySelector("img");
    const dialog = document.querySelector("#wallpaper-dialog");
    dialog.dataset.collection = title;
    dialog.querySelector(".wallpaper-dialog-title").textContent = title;
    dialog.querySelector(".wallpaper-dialog-image").src = image.src;
    dialog.querySelector(".wallpaper-dialog-image").alt = image.alt;
    dialog.showModal();
  });
}

function setChoice(button, selector, input) {
  document.querySelectorAll(selector).forEach((choice) => {
    const selected = choice === button;
    choice.classList.toggle("active", selected);
    choice.setAttribute("aria-pressed", String(selected));
  });
  document.querySelector(input).value = button.dataset.value;
}

function configureOrderForm() {
  document.querySelectorAll(".type-choice").forEach((button) => {
    button.addEventListener("click", () => {
      setChoice(button, ".type-choice", "#story-type");
      const collectionItem = [...document.querySelectorAll(".wallpaper-item")]
        .find((item) => item.querySelector(".wallpaper-meta h4")?.textContent === button.dataset.value);
      if (collectionItem) {
        collectionItem.parentElement.prepend(collectionItem);
        document.querySelector("#writing").scrollTop = 0;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderReviews();
  document.querySelector("#review-load-more").addEventListener("click", () => {
    state.reviewsShown = Math.min(state.reviewsShown + 12, REVIEWS.length);
    renderReviews();
  });
  renderLibrary();
  configureMobileNavigation();
  configureOrderForm();
  const wallpaperDialog = document.querySelector("#wallpaper-dialog");
  wallpaperDialog.querySelector(".wallpaper-dialog-close").addEventListener("click", () => wallpaperDialog.close());
  wallpaperDialog.querySelector(".wallpaper-get-button").addEventListener("click", () => {
    const email = wallpaperDialog.querySelector("#wallpaper-email");
    if (!email.reportValidity()) return;
    window.alert("Your collection will be delivered via mail.");
    wallpaperDialog.close();
    email.value = "";
  });
  wallpaperDialog.addEventListener("click", (event) => {
    if (event.target === wallpaperDialog) wallpaperDialog.close();
  });
  document.querySelector("#year").textContent = new Date().getFullYear();
});
