const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'WEB DEVELOPER',
      img: 'https://photoxp.co.uk/art/passports/mini-portrait.jpg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'WEB DESIGNER',
      img: 'https://images.squarespace-cdn.com/content/v1/55b029d3e4b022c52efdde18/1588602918207-ADILXX2TJF3LAK5MZZV3/toledo+professional+headshots-1.jpg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'INTERN',
      img: 'https://i.pinimg.com/736x/ce/d8/4a/ced84a67302c60bd1abaaf9314064433.jpg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'THE BOSS',
      img: 'https://www.providentphotos.com/wp-content/uploads/hfd-indiv-2-1.jpg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

  const img = document.getElementById("profile-img");
  const author = document.getElementById("name");
  const job = document.getElementById("work");
  const info = document.getElementById("para");

  const prevBtn = document.getElementById("btn-left");
  const nextBtn = document.getElementById("btn-right");
  const randomButton = document.getElementById("button");

  let currentItem = 0;

  window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  })

  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

  nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length -1) {
      currentItem = 0;
    }
    showPerson(currentItem)
  })

  prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0) {
      currentItem = reviews.length -1;
    }
    showPerson(currentItem)
  })

  randomButton.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem)
  })