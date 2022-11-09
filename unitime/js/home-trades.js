let TRADES_LIST = [];
const NUMBER_OF_TRADES = 3;
let firstImageIndex = 0;
let lastImageIndex = NUMBER_OF_TRADES - 1;
const TRADES_URL = "http://127.0.0.1:5000/api/v1/trades";
const TRADES_HEADERS = {
    "Content-Type": "application/json"
};

function responseReceived(response) {
    if (!response.ok) {
        throw "Failed to get data."
    }
    return response.json();
}

function initialize(data) {
    if (!data) {
        return;
    }
    TRADES_LIST = data;
    for (let i = 0; i < NUMBER_OF_TRADES; i++) {
        if (i >= TRADES_LIST.length) {
            break;
        }
        const tradeInfo = TRADES_LIST[i];
        const tradeDiv = createTradeDiv(tradeInfo.url, tradeInfo.image);
        tradesListDiv.insertBefore(tradeDiv, rightArrowDiv);
    }
}

fetch(TRADES_URL, TRADES_HEADERS).then(responseReceived).then(initialize);

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
        firstImageIndex = 0;
    } else {
        firstImageIndex = firstImageIndex + 1;
    }
}

const tradesListDiv = document.getElementById("trades-list");
const rightArrowDiv = tradesListDiv.children[tradesListDiv.children.length - 1];

