const NUMBER_OF_COURSES_DISPLAYED = 3;
let MIDDLE_COURSE_INDEX = (NUMBER_OF_COURSES_DISPLAYED-1) / 2;

// debug this
const url = "http://127.0.0.1:5000/api/v1/courses"

function success(response) {
    return response.json();
}

function afterSuccess(data) {
    console.log(data);
}

fetch(url,  {mode: 'no-cors'}).then(success).then(afterSuccess);


const courses = [
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

// <div class="course-items-grid-child">
//    <a href="https://www.coursera.org/learn/financial-markets-global">
//        <img src="assets/pic.jpg">
//    </a>
// </div>

function createCourseDiv(courseLinkUrl, courseImagePath) {
    // 1. generate a div (<div>)
    const courseDiv = document.createElement("div");

    // 2. attach class "course-items-grid-child" to the div
    courseDiv.className = "course-items-grid-child";

    // 3. generate an anchor (<a>)
    const courseLink = document.createElement("a");

    // 4. specify the href property of the anchor
    courseLink.href = courseLinkUrl;

    // 5. generate image (<img>)
    const courseImage = document.createElement("img");

    // 6. specify the src property of the image 
    courseImage.src = courseImagePath;

    // 7. attach the <img> to <a> as a child 
    courseLink.appendChild(courseImage);

    // 8. attach the <a> to <div> as a child 
    courseDiv.appendChild(courseLink);
        
    return courseDiv;
}

function insertOneCourseIntoCourseList(courseDiv) {
    // 9. extract the node with id "course-list"
    const courseListArea = document.getElementById("course-list");

    // 10. add / insert the div generated at 1-8 
    // as the second element inside the "course-list" children
    let numberOfChildren = courseListArea.children.length;
    courseListArea.insertBefore(courseDiv, courseListArea.children[numberOfChildren-1]);
}

for (let i = 0; i < NUMBER_OF_COURSES_DISPLAYED; i++) {
    const courseLinkUrl = courses[i].url;
    const courseImagePath = courses[i].image;
    const courseDiv = createCourseDiv(courseLinkUrl, courseImagePath);
    insertOneCourseIntoCourseList(courseDiv);
}

let courseJump = 2;
function moveLeftCourse() {
    let nextCourseIndex = MIDDLE_COURSE_INDEX + courseJump;
    if (nextCourseIndex >= courses.length) {
        nextCourseIndex = 0;
        courseJump = 1;
    } 
    MIDDLE_COURSE_INDEX = nextCourseIndex;

    // get the course list 
    const courseListArea = document.getElementById("course-list");

    // remove the first element after the left arrow
    const firstCourseAfterLeftArrow = courseListArea.children[1];
    courseListArea.removeChild(firstCourseAfterLeftArrow);

    // create a new course
    // TODO: figure out how to change the courses index based on number of clicks
    const courseLinkUrl = courses[MIDDLE_COURSE_INDEX].url;
    const courseImagePath = courses[MIDDLE_COURSE_INDEX].image;
    const courseDiv = createCourseDiv(courseLinkUrl, courseImagePath);

    // append it to the end of the list (before the right arrow)
    insertOneCourseIntoCourseList(courseDiv);
}

function moveRightCourse() {
    let nextCourseIndex = MIDDLE_COURSE_INDEX - courseJump;
    if (nextCourseIndex < 0) {
        nextCourseIndex = courses.length-1;
        courseJump = 1;
    } 
    MIDDLE_COURSE_INDEX = nextCourseIndex;
    
    // get the course list 
    const courseListArea = document.getElementById("course-list");

    // remove the last element before the right arrow
    const numberOfChildren = courseListArea.children.length;
    const lastCourseBeforeRightArrow = courseListArea.children[numberOfChildren-2];
    courseListArea.removeChild(lastCourseBeforeRightArrow);

    // create a new course
    const courseLinkUrl = courses[MIDDLE_COURSE_INDEX].url;
    const courseImagePath = courses[MIDDLE_COURSE_INDEX].image;
    const courseDiv = createCourseDiv(courseLinkUrl, courseImagePath);

    // append it to the end of the list (before the right arrow)
    courseListArea.insertBefore(courseDiv, courseListArea.children[1]);
}