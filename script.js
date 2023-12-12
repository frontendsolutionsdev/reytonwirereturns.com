function updateDots() {
  const inputRows = document.querySelectorAll(".input-row");

  inputRows.forEach((row) => {
    const containerWidth = row.offsetWidth;
    const pWidth = row.querySelector(".form-item").offsetWidth;
    const iWidth = row.querySelector("input").offsetWidth;

    const dots = row.querySelector(".dots");
    const availableSpace = containerWidth - pWidth - iWidth - 10; // Adjusted value for more space

    const dotsCount = Math.max(0, Math.floor(availableSpace / 4)); // Adjust the value for desired space

    dots.textContent = ".".repeat(dotsCount);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateDots(); // Call the function once the DOM is fully loaded
});

window.addEventListener("resize", updateDots);






const section3 = document.getElementById('section-3');

// Initialize prices for each reel size
const reelSizes = ['D160', 'D200', 'D250', 'D355', 'D500', 'D630', "C250", "C315", "C400"];
const reelPrices = [25, 30, 35, 40, 45, 50, 60, 80, 100];

const boardsPrice = 20;
const palletPrice = 50;
const framePrice = 10;

// Function to calculate credit due
function calculateCreditDue() {
  // Get reel size quantities from input fields
  const d160Qty = parseInt(section3.querySelector('#qty_d160').value);
  const d200Qty = parseInt(section3.querySelector('#qty_d200').value);
  const d250Qty = parseInt(section3.querySelector('#qty_d250').value);
  const d355Qty = parseInt(section3.querySelector('#qty_d355').value);
  const d500Qty = parseInt(section3.querySelector('#qty_d500').value);
  const d630Qty = parseInt(section3.querySelector('#qty_d630').value);
  const c250Qty = parseInt(section3.querySelector('#qty_c250').value);
  const c315Qty = parseInt(section3.querySelector('#qty_c315').value);
  const c400Qty = parseInt(section3.querySelector('#qty_c400').value);


  // Get pallet and frame quantities from input fields
  const palletQty = parseInt(section3.querySelector('#pallet-quantity').value);
  const frameQty = parseInt(section3.querySelector('#frames').value);
  const boardQty = parseInt(section3.querySelector('#boards').value);

  // Calculate total reel size quantities
  const totalReelSizeQty = d160Qty + d200Qty + d250Qty + d355Qty + d500Qty + d630Qty + c250Qty + c315Qty + c400Qty  ;

  // Calculate credit due for each reel size
  let totalReelSizeCreditDue = 0;
  for (const reelSize of reelSizes) {
    const reelSizeQty = reelPrices[reelSizes.indexOf(reelSize)] * getReelSizeQuantity(reelSize);
    totalReelSizeCreditDue += reelSizeQty;
  }

  // Calculate credit due for boards
  const totalBoardsCreditDue = boardsPrice * boardQty;

  // Calculate credit due for pallet
  const totalPalletCreditDue = palletPrice * palletQty;

  // Calculate credit due for frames
  const totalFrameCreditDue = framePrice * frameQty;

  // Total credit due
  const totalCreditDue = totalReelSizeCreditDue + totalBoardsCreditDue + totalPalletCreditDue + totalFrameCreditDue;





  
  // Set credit due values in input fields
  section3.querySelector('#price_d160').value = d160Qty * reelPrices[0];
  section3.querySelector('#price_d200').value = d200Qty * reelPrices[1];
  section3.querySelector('#price_d250').value = d250Qty * reelPrices[2];
  section3.querySelector('#price_d355').value = d355Qty * reelPrices[3];
  section3.querySelector('#price_d500').value = d500Qty * reelPrices[4];
  section3.querySelector('#price_d630').value = d630Qty * reelPrices[5];
  section3.querySelector('#price_c250').value = c250Qty * reelPrices[6];
  section3.querySelector('#price_c315').value = c315Qty * reelPrices[7];
  section3.querySelector('#price_c400').value = c400Qty * reelPrices[8];
  section3.querySelector('#price_pallet').value = palletPrice * palletQty;
  section3.querySelector('#price_frames').value = framePrice * frameQty;
  section3.querySelector('#price_boards').value = boardsPrice * boardQty;
  section3.querySelector('#total-credit-due').value = totalCreditDue;
}

// Function to get reel size quantity
function getReelSizeQuantity(reelSize) {
  switch (reelSize) {
    case 'D160':
      return section3.querySelector('#qty_d160').value;
    case 'D200':
      return section3.querySelector('#qty_d200').value;
    case 'D250':
      return section3.querySelector('#qty_d250').value;
    case 'D355':
      return section3.querySelector('#qty_d355').value;
    case 'D500':
      return section3.querySelector('#qty_d500').value;
    case 'D630':
      return section3.querySelector('#qty_d630').value;
    case 'C250':
      return section3.querySelector('#qty_c250').value;
    case 'C315':
      return section3.querySelector('#qty_c315').value;
    case 'C400':
      return section3.querySelector('#qty_c400').value;
    default:
      return 0;
  }
}

// Bind event listener to handle input changes
section3.addEventListener('change', calculateCreditDue);

// Initialize credit due values
calculateCreditDue();