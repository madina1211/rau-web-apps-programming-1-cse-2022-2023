// <div class="course-items-grid-child">
//    <a href="individual-item.html">
//      <img src="assets/iphone.jpg">
//    </a>
// </div> 

const TRADES_LIST = [
    {
        url: "https://www.coursera.org/learn/financial-markets-global",
        image: "D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course1.jpg"
    },
    {
        url: "https://www.coursera.org/learn/the-science-of-well-being",
        image: "D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course2.jpg"
    },
    {
        url: "https://www.coursera.org/learn/sciwrite",
        image: "D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course3.jpg"
    },
    {
        url: "https://www.coursera.org/learn/stanford-statistics",
        image: "D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course4.jpg"
    },
    {
        url: "https://www.coursera.org/learn/private-equity",
        image: "D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course5.jpg"
    },
    {
        url: "https://www.coursera.org/courses?query=free",
        image: "D:\\Luchici - Web Apps 1 - 2022 - 2023\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\assets\\course6.jpg"
    }
];

function createTradeDiv(tradeURL="", tradeImagePath="") {
    const tradeDiv = document.createElement("div");
    const tradeAnchor = document.createElement("a");
    const tradeImage = document.createElement("img");

    tradeDiv.className = "course-items-grid-child";
    tradeAnchor.href = tradeURL;
    tradeImage.src = tradeImagePath;

    tradeAnchor.appendChild(tradeImage);
    tradeDiv.appendChild(tradeAnchor);

    return tradeDiv;
}

const tradesListDiv = document.getElementById("trades-list");
const rightArrowDiv = tradesListDiv.children[tradesListDiv.children.length - 1];

const NUMBER_OF_TRADES = 3;
for (let i = 0; i < NUMBER_OF_TRADES; i++) {
    const tradeInfo = TRADES_LIST[i];
    const tradeDiv = createTradeDiv(tradeInfo.url, tradeInfo.image);
    tradesListDiv.insertBefore(tradeDiv, rightArrowDiv);
}

let firstImageIndex = 0;
let lastImageIndex = NUMBER_OF_TRADES - 1;

function moveRight() {
    const tradesListDiv = document.getElementById("trades-list");

    const lastChildIndex = tradesListDiv.children.length;
    tradesListDiv.children[lastChildIndex - 2].remove();

    const firstTradeDiv = tradesListDiv.children[1];

    let newTradeInfo; 
    if (firstImageIndex > 0) {
        newTradeInfo = TRADES_LIST[firstImageIndex - 1];
        firstImageIndex = firstImageIndex - 1;
    } else {
        newTradeInfo = TRADES_LIST[TRADES_LIST.length - 1];
        firstImageIndex = TRADES_LIST.length - 1;
    }
    
    const newTradeDiv = createCourseDiv(newTradeInfo.url, newTradeInfo.image);
    tradesListDiv.insertBefore(newTradeDiv, firstTradeDiv);

    if (lastImageIndex > 0) { 
        lastImageIndex = lastImageIndex - 1;
    } else {
        lastImageIndex = TRADES_LIST.length - 1;
    }
}

function moveLeft() {
    const tradesListDiv = document.getElementById("trades-list");

    const firstTradeDiv = tradesListDiv.children[1];
    firstTradeDiv.remove();

    const lastChildIndex = tradesListDiv.children.length - 1;
    const rightArrowDiv = tradesListDiv.children[lastChildIndex];

    let newTradeInfo; 
    if (lastImageIndex > lastChildIndex) {
        lastImageIndex = 0; 
    } else {
        lastImageIndex = lastImageIndex + 1;
        newTradeInfo = TRADES_LIST[lastImageIndex];
    }

    const newTradeDiv = createCourseDiv(newTradeInfo.url, newTradeInfo.image);
    tradesListDiv.insertBefore(newTradeDiv, rightArrowDiv);

    if (firstImageIndex > lastChildIndex) {
        // TODO: reinitialise the firstImageIndex 
    } else {
        firstImageIndex = firstImageIndex + 1;
    }
}