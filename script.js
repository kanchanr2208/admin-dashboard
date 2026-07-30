const inputField = document.querySelector(".search-input");


inputField.addEventListener("keydown" , (e) => {
    let cleanText = e.target.value.trim()           //This removes spaces from the beginning or end of the string
 
    if (e.key === "Enter") {
        console.log("Enter Pressed")
        e.target.value = "";
    } else {
        console.log("Wrong Key Bro")
    }
})