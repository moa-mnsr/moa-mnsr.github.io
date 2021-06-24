// this is the data for holding which page we're on 
let pageNumberLeft = 0
let pageNumberRight = 0

// hold the content for these  pages 

const pagesLeft = [
     { text: "Fayetteville", background: "#050505", color: "#FAFAFA"},
     { text: "Hamburg", background: "#050505", color: "#FAFAFA" },
     { text: "Berlin", background: "#050505", color: "#FAFAFA" },
     { text: "Belgrade", background: "#050505", color: "#FAFAFA" },
     { text: "Atlanta", background: "#050505", color: "#FAFAFA" },
     { text: "Richmond", background: "#050505", color: "#FAFAFA" },
     { text: "New York", background: "#050505", color: "#FAFAFA" },
     { text: "Paris", background: "#050505", color: "#FAFAFA" },
     { text: "Poughkeepsie", background: "#050505", color: "#FAFAFA" }
]

const pagesRight = [
    { text: "Nashville", background: "#050505", color: "#FAFAFA"},
    { text: "Haifa", background: "#050505", color: "#FAFAFA"},
    { text: "Bogotà", background: "#050505", color: "#FAFAFA"},
]

//pick the relevant tags

const nextTag = document.querySelector("div.arrows svg.next")
const previousTag = document.querySelector("div.arrows svg.prev")
const outputTagLeft = document.querySelector("figcaption.homes")
const outputTagRight = document.querySelector("figcaption.origins")

//make a next function to increase the pageNumberLeft
const nextLeft = function () {
    pageNumberLeft = pageNumberLeft + 1

    if (pageNumberLeft > pagesLeft.length -1) {
        pageNumberLeft = 0
    }

    updateLeft()
}

//make a previous function to decrease the pageNumberLeft
const previousLeft = function () {
    pageNumberLeft = pageNumberLeft - 1

    if (pageNumberLeft < 0) {
        pageNumberLeft = pagesLeft.length -1
        }

        updateLeft() 
       
}

const nextRight = function() {
    pageNumberRight = pageNumberRight +1

    if (pageNumberRight > pagesRight.length -1) {
        pageNumberRight = 0
    }

        updateRight()
}

const previousRight = function() {
   pageNumberRight = pageNumberRight -1
   
    if (pageNumberRight < 0) {
        pageNumberRight = pagesRight.length -1
    }

    updateRight()

}

  

//this will update the content & style of the section
const updateLeft = function () {
    outputTagLeft.innerHTML = pagesLeft[pageNumberLeft].text
    outputTagLeft.style.backgroundColor = "#050505"
    outputTagLeft.style.color = "#FFBFA8"
    outputTagLeft.style.textTransform = "uppercase"
    outputTagLeft.style.fontWeight = "500"
    outputTagLeft.style.letterSpacing = ".2rem"
}

const updateRight = function () {
    outputTagRight.innerHTML = pagesRight[pageNumberRight].text
    outputTagRight.style.backgroundColor = "#050505"
    outputTagRight.style.color = "#FFBFA8"
    outputTagRight.style.textTransform = "uppercase"
    outputTagRight.style.fontWeight = "500"
    outputTagRight.style.letterSpacing = ".2rem"
    outputTagRight.style.fontStyle = "italic"
}

//on click of nextTag, run this
nextTag.addEventListener("click", function () {
    nextLeft()
    nextRight()
})

//on click of previousTag, run this
previousTag.addEventListener("click", function () {
    previousLeft()
    previousRight()
})
