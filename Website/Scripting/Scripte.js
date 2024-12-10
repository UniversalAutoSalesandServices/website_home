// checkSyntax.js

document.addEventListener("DOMContentLoaded", () => {
    // Select the inventory box
    const inventoryBox = document.querySelector(".inventory_box");
  
    if (inventoryBox) {
      let errorFound = false; // Flag for tracking errors
  
      // Check for missing or empty <li> elements within the car-info class
      const listItems = inventoryBox.querySelectorAll(".car-info li");
      listItems.forEach((item, index) => {
        if (!item || !item.textContent.trim()) {
          console.warn(`Warning: Empty or missing content in <li> element #${index + 1} detected.`);
          errorFound = true;
        }
      });
  
      // Check for missing <img> elements or empty `src` attribute within image-wrapper class
      const images = inventoryBox.querySelectorAll(".image-wrapper img");
      images.forEach((img, index) => {
        if (!img || !img.src.trim()) {
          console.warn(`Warning: Missing <img> element or empty src attribute in image #${index + 1} detected.`);
          errorFound = true;
        }
      });
  
      // If any error is detected, hide and disable the entire inventoryBox container
      if (errorFound) {
        inventoryBox.style.display = "none"; // Hide the inventory box
        console.warn("Some content is missing or incomplete in the inventory section, so it has been hidden. Please check your HTML structure.");
      }
    } else {
      console.warn("Inventory box not found.");
    }
  });
  