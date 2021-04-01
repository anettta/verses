// local verses data
const reviews = [
  {
    id: 1,
    bookSource: "John 3:16",
    page: "@svpdm",
    img:
      "./yellow.jpg",
    verse:
      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
  },
  {
    id: 2,
    bookSource: "Romans 8:28",
    page: "@svpdm",
    img:
      "./white.jpg",
    verse:
      "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
  },
  {
    id: 3,
    bookSource: "Jeremiah 29:11",
    page: "@svpdm",
    img:
      "./blue.jpg",
    verse:
      "For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future.",
  },
  {
    id: 4,
    bookSource: "Philippians 4:13",
    page: "@svpdm",
    img:
      "./cherry.jpg",
    verse:
      "I can do everything through him who gives me strength.",
  },
   {
    id: 5,
    bookSource: "Proverbs 3:5",
    page: "@svpdm",
    img:
      "./green.jpg",
    verse:
      "Trust in the LORD with all your heart and lean not on your own understanding.",
  },
   {
    id: 6,
    bookSource: "Proverbs 3:6",
    page: "@svpdm",
    img:
      "./pink.jpg",
    verse:
      "In all your ways acknowledge him, and he will make your paths straight.",
  },
   {
    id: 7,
    bookSource: "Romans 12:2",
    page: "@svpdm",
    img:
      "./verba.jpg",
    verse:
      "Do not conform any longer to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.",
  },
  {
    id: 8,
    bookSource: "Philippians 4:6",
    page: "@svpdm",
    img:
      "./white.jpg",
    verse:
      "Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God.",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const page = document.getElementById("page");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

// show person based on item

function showPerson(person){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.bookSource;
    page.textContent = item.page;
    info.textContent = item.verse;
}

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});


// show prev person
prevBtn.addEventListener('click', function(){
    currentItem--;
     if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();

});