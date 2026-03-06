function addRecommendation() {
  // 1. Get the message from the input element
  let recommendation = document.getElementById("new_recommendation");
  
  // 2. Check if the user actually entered text
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");

    // 3. Create a new 'recommendation' element and set its inner HTML
    // This template mimics the style of your existing cards
    var element = document.createElement("div");
    element.setAttribute("class", "rec-card");
    element.innerHTML = `<p>" ${recommendation.value} "</p>`;

    // 4. Add this element to the list of recommendations
    // Assumes your container div has the id 'all_recommendations'
    document.getElementById("all_recommendations").appendChild(element);

    // 5. Reset the value of the input box for the next entry
    recommendation.value = "";
  }
}
