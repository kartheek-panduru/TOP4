const data = {
  mainTitle: "TOP 4",
  cardContents: [
    {
      name: "Chevy",
      imageLink:
        "https://images.unsplash.com/photo-1587750113469-d2ba02441e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    },
    {
      name: "Ford",
      imageLink:
        "https://images.unsplash.com/photo-1544896478-d5b709d413c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Pontiac",
      imageLink:
        "https://c.ndtvimg.com/2021-12/nd0lanqo_car_625x300_03_December_21.jpg",
    },
    {
      name: "Shelby GT350",
      imageLink:
        "https://bringatrailer.com/wp-content/uploads/2020/12/1966_shelby_gt350_16136767510cb064a6f7f52ae3fGT350_002_web-scaled.jpg?fit=940%2C626",
    },
  ],
  userData: { name: "Kartheek", tagLine: "All rights reserved©" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
