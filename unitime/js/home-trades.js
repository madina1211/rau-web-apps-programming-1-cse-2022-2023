// <div class="course-items-grid-child">
//    <a href="individual-item.html">
//      <img src="assets/iphone.jpg">
//    </a>
// </div> 

const TRADES_LIST = [{
        url: "https://www.coursera.org/learn/financial-markets-global",
        image: "assets/course1.jpg"
    },
    {
        url: "https://www.coursera.org/learn/the-science-of-well-being",
        image: "assets/course2.jpg"
    },
    {
        url: "https://www.coursera.org/learn/sciwrite",
        image: "assets/course3.jpg"
    },
    {
        url: "https://www.coursera.org/learn/stanford-statistics",
        image: "assets/course4.jpg"
    },
    {
        url: "https://www.coursera.org/learn/private-equity",
        image: "assets/course5.jpg"
    },
    {
        url: "https://www.coursera.org/courses?query=free",
        image: "assets/course6.jpg"
    }
];

function createTradeDiv(tradeURL = "", tradeImagePath = "") {
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
    lastImageIndex = lastImageIndex + 1;
    if (lastImageIndex < TRADES_LIST.length) {
        newTradeInfo = TRADES_LIST[lastImageIndex];
    } else {
        lastImageIndex = 0;
        newTradeInfo = TRADES_LIST[lastImageIndex];
    }
    const newTradeDiv = createCourseDiv(newTradeInfo.url, newTradeInfo.image);
    tradesListDiv.insertBefore(newTradeDiv, rightArrowDiv);

    if (firstImageIndex > TRADES_LIST.length - 1) {
        // TODO: reinit firstImageIndex
    } else {
        firstImageIndex = firstImageIndex + 1;
    }
}