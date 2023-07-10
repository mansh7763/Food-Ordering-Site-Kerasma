// Select all elements with the class "vegdish"
const vegDishes = document.querySelectorAll(".vegdish");

// Iterate over each vegdish element
vegDishes.forEach((vegDish) => {
  const addButton = vegDish.querySelector(".add");
  const subButton = vegDish.querySelector(".sub");
  const mrp = vegDish.querySelector(".mrp");
  const qtyCount = vegDish.querySelector(".qtycnt");
  const mrporiginal = parseFloat(mrp.textContent);

  // Add event listener to the add button
  addButton.addEventListener("click", () => {
    qtyCount.textContent++;
    mrp.textContent = parseFloat(mrp.textContent) + mrporiginal;
  });

  // Add event listener to the sub button
  subButton.addEventListener("click", () => {
    if (qtyCount.textContent > 1) {
      qtyCount.textContent--;
      mrp.textContent = parseFloat(mrp.textContent) - mrporiginal;
    }
  });
});
// Select all elements with the class "vegdish"
const nonvegDishes = document.querySelectorAll(".nonvegdish");

// Iterate over each vegdish element
nonvegDishes.forEach((nonvegDish) => {
  const addButton = nonvegDish.querySelector(".add");
  const subButton = nonvegDish.querySelector(".sub");
  const mrp = nonvegDish.querySelector(".mrp");
  const qtyCount = nonvegDish.querySelector(".qtycnt");
  const mrporiginal = parseFloat(mrp.textContent);

  // Add event listener to the add button
  addButton.addEventListener("click", () => {
    qtyCount.textContent++;
    mrp.textContent = parseFloat(mrp.textContent) + mrporiginal;
  });

  // Add event listener to the sub button
  subButton.addEventListener("click", () => {
    if (qtyCount.textContent > 1) {
      qtyCount.textContent--;
      mrp.textContent = parseFloat(mrp.textContent) - mrporiginal;
    }
  });
});
// Select all elements with the class "vegdish"
const italian = document.querySelectorAll(".italiandish");

// Iterate over each vegdish element
italian.forEach((italianDish) => {
  const addButton = italianDish.querySelector(".add");
  const subButton = italianDish.querySelector(".sub");
  const mrp = italianDish.querySelector(".mrp");
  const qtyCount = italianDish.querySelector(".qtycnt");
  const mrporiginal = parseFloat(mrp.textContent);

  // Add event listener to the add button
  addButton.addEventListener("click", () => {
    qtyCount.textContent++;
    mrp.textContent = parseFloat(mrp.textContent) + mrporiginal;
  });

  // Add event listener to the sub button
  subButton.addEventListener("click", () => {
    if (qtyCount.textContent > 1) {
      qtyCount.textContent--;
      mrp.textContent = parseFloat(mrp.textContent) - mrporiginal;
    }
  });
});
// Select all elements with the class "vegdish"
const chinese = document.querySelectorAll(".chinesedish");

// Iterate over each vegdish element
chinese.forEach((chineseDish) => {
  const addButton = chineseDish.querySelector(".add");
  const subButton = chineseDish.querySelector(".sub");
  const mrp = chineseDish.querySelector(".mrp");
  const qtyCount = chineseDish.querySelector(".qtycnt");
  const mrporiginal = parseFloat(mrp.textContent);

  // Add event listener to the add button
  addButton.addEventListener("click", () => {
    qtyCount.textContent++;
    mrp.textContent = parseFloat(mrp.textContent) + mrporiginal;
  });

  // Add event listener to the sub button
  subButton.addEventListener("click", () => {
    if (qtyCount.textContent > 1) {
      qtyCount.textContent--;
      mrp.textContent = parseFloat(mrp.textContent) - mrporiginal;
    }
  });
});
// Select all elements with the class "vegdish"
const beer = document.querySelectorAll(".beerdish");

// Iterate over each vegdish element
beer.forEach((beerDish) => {
  const addButton = beerDish.querySelector(".add");
  const subButton = beerDish.querySelector(".sub");
  const mrp = beerDish.querySelector(".mrp");
  const qtyCount = beerDish.querySelector(".qtycnt");
  const mrporiginal = parseFloat(mrp.textContent);

  // Add event listener to the add button
  addButton.addEventListener("click", () => {
    qtyCount.textContent++;
    mrp.textContent = parseFloat(mrp.textContent) + mrporiginal;
  });

  // Add event listener to the sub button
  subButton.addEventListener("click", () => {
    if (qtyCount.textContent > 1) {
      qtyCount.textContent--;
      mrp.textContent = parseFloat(mrp.textContent) - mrporiginal;
    }
  });
});

// Get the order button element
const orderButton = document.querySelector(".order");

// Add click event listener to the order button
orderButton.addEventListener("click", () => {
  // Get all the checked checkboxes
  const checkboxes = document.querySelectorAll('input[name="dish[]"]:checked');

  // Create an array to store the selected dishes
  const selectedDishes = [];

  // Loop through the checked checkboxes
  checkboxes.forEach((checkbox) => {
    // Get the parent vegdish element
    const vegdish = checkbox.closest(".vegdish");

    // Get the dish name
    const dishName = vegdish.querySelector(".nameofdish").textContent;

    // Get the quantity count
    const qtyCnt = vegdish.querySelector(".qtycnt").textContent;

    // Get the MRP value
    const mrp = vegdish.querySelector(".mrp").textContent;

    // Create an object to store the dish details
    const dish = {
      name: dishName,
      qty: qtyCnt,
      mrp: mrp,
    };

    // Add the dish to the selected dishes array
    selectedDishes.push(dish);
  });

  // Log the selected dishes array
  console.log(selectedDishes);

  // Make an AJAX request to send the selected dishes to the PHP script
  // Uncomment and customize the code below according to your server setup

  /*
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "process_order.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Response from the PHP script
      const response = xhr.responseText;
      console.log(response); // Log the response
    }
  };

  // Convert the selectedDishes array to JSON string
  const jsonData = JSON.stringify(selectedDishes);

  // Send the JSON data in the request
  xhr.send(jsonData);
  */
});

// Get the login modal and overlay elements
const modallogin = document.querySelector("#login");
const overlay = document.querySelector(".overlay");

// Function to open the login modal
const openModallog = () => {
  modallogin.classList.remove("hidden");
  modallogin.classList.add("modal");
  overlay.classList.remove("hidden");
};

// Function to close the modal
const closemodal = () => {
  modallogin.classList.add("hidden");
  modallogin.classList.remove("modal");
  overlay.classList.add("hidden");
};

// Add event listeners for opening and closing the modal
orderButton.addEventListener("click", openModallog);
loginbackbtn.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);

// Function to calculate the total quantity and price
function calculateTotal() {
  let totalQty = 0;
  let totalPrice = 0;

  // Iterate over each selected dish
  for (let i = 0; i < selectedDishes.length; i++) {
    const dish = selectedDishes[i];
    totalQty += parseInt(dish.qty);
    totalPrice += parseFloat(dish.mrp);
  }

  console.log("Total Quantity:", totalQty);
  console.log("Total Price:", totalPrice);
}

// Add click event listener to the order button to calculate total
orderButton.addEventListener("click", calculateTotal);

// Function to generate the receipt table
function generateReceipt() {
  const table = document.getElementById("mytable");
  const tbody = document.createElement("tbody");

  // Iterate over each selected dish
  for (let i = 0; i < selectedDishes.length; i++) {
    const dish = selectedDishes[i];

    // Create a new row
    const newRow = document.createElement("tr");

    // Create <td> elements for each column and set their content
    const nameCell = document.createElement("td");
    nameCell.textContent = dish.name;

    const qtyCell = document.createElement("td");
    qtyCell.textContent = dish.qty;

    const mrpCell = document.createElement("td");
    mrpCell.textContent = dish.mrp;

    // Append the <td> elements to the new row
    newRow.appendChild(nameCell);
    newRow.appendChild(qtyCell);
    newRow.appendChild(mrpCell);

    // Append the new row to the table body
    tbody.appendChild(newRow);
  }

  // Remove any existing tbody element
  const existingTbody = table.getElementsByTagName("tbody")[0];
  if (existingTbody) {
    table.removeChild(existingTbody);
  }

  // Append the new tbody element to the table
  table.appendChild(tbody);
}

// Add click event listener to the order button to generate receipt
orderButton.addEventListener("click", generateReceipt);
