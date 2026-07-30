const inputField = document.querySelector(".search-input");


inputField.addEventListener("keydown" , (e) => {
    
 
    if(e.key === "Escape") {
        e.target.blur();    //This returns the search bar into the default state, as though exiting the input field. but the text doesnt disappear
        console.log("Exited search bar")
    } else if (e.key === "Enter") {
        let cleanText = e.target.value.trim()           //This removes spaces from the beginning or end of the string
        if (cleanText.length === 0) {
            return;
        } else if (e.target.validity.patternMismatch) { //Need this since it is not a real form. for a real form the validation will happen automatically.
            e.target.setCustomValidity("Only letters, numbers, and spaces are allowed. Please delete and try again") 
            e.target.reportValidity()
        }  else if (cleanText.length < 3) {
            e.target.setCustomValidity("Search must be at least 3 characters.") //This is the custom message being set
            e.target.reportValidity()       //This is instructing the browser to display the custom error message
        } else {
            e.target.setCustomValidity(""); //this is to remove the custom error message
            console.log("Form submitted: " + cleanText)
            e.target.value = "";
        }
    } else {
        e.target.setCustomValidity(""); 
    }

})