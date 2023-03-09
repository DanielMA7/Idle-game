const mineCoalButton = document.getElementById("mine-coal-button");
const mineIronButton = document.getElementById("mine-iron-button");
const loadingCoalBar = document.getElementById("loadingCoalBar");
const loadingIronBar = document.getElementById("loadingIronBar");
const inventoryMainSpace = document.getElementById("inventory-space")

let isLoaded = false;
let loadingInterval;

/*       This is the inventory holder       */

let inventoryArray = [ ]


/*       This is the item array for all the items     */

const itemsList = [
    {
      name: "Dummy"
    },
    ai_Coal_Ore = {
        name: "Coal Ore",
        imageID: "assets/Coal.webp",
        quantity: 1,
    },
    ai_Iron_Ore = {
      name: "Iron Ore",
      imageID: "assets/Iron_Ore.webp",
      quantity: 0,
    }
]



/*         Appending the Inventory Items to the page and updating with correct values     */

function updateInventory() {
  for(let i = 0; i <= inventoryArray.length - 1; i++){
      let inventoryItemContainer = document.createElement("div")
      inventoryItemContainer.classList.add("inventory-item-container")
      
      let inventoryImageHolder = document.createElement("div")
      inventoryImageHolder.classList.add("image-holder")
      inventoryImageHolder.classList.add("inventory-image-holder")
      
      let inventoryImageRarity = document.createElement("div")
      inventoryImageRarity.classList.add("image-holder-2")
      
      let itemImage = document.createElement("img")
      itemImage.classList.add("resource-img")
      itemImage.src = inventoryArray[i]["imageID"]
      
      let inventoryItemName = document.createElement("div")
      inventoryItemName.classList.add("inventory-item-name")
      inventoryItemName.innerHTML = inventoryArray[i]["name"]
      
      let inventoryItemAmount = document.createElement("div")
      inventoryItemAmount.classList.add("inventory-item-amount")
      inventoryItemAmount.innerHTML = "x" + " " + inventoryArray[i]["quantity"]
      
      inventoryImageRarity.appendChild(itemImage)
      inventoryImageHolder.appendChild(inventoryImageRarity)
      inventoryItemContainer.appendChild(inventoryImageHolder)
      inventoryItemContainer.appendChild(inventoryItemName)
      inventoryItemContainer.appendChild(inventoryItemAmount)

      inventoryMainSpace.appendChild(inventoryItemContainer)
  }
}



/*        Checking if the Inventory has the Item we are looking for if it does the quantity is increased if not the item is then added    */


function lookUpInventory(itemValue, itemName){
  for (let i = 0; i <= inventoryArray.length; i++){
    let check1 = 0
    const itemIndex = inventoryArray.findIndex(item => item.name === itemsList[itemValue].name);
  if (itemIndex === -1) {
    inventoryArray.push(itemsList[itemValue]);
    updateInventory()
          check1++;
      }else if (JSON.stringify(inventoryArray[i]) === JSON.stringify(itemsList[itemValue])){
            inventoryArray[i]['quantity']++;
            inventoryMainSpace.innerHTML= " "
            updateInventory()
      }
      }
    }  




/*         Setting the inventory to match the array         */ 


const loadingBarGroup = [
  loadingIronBar,
  loadingCoalBar
]

/*    This is the loading bar function and adding items into the inventory      */

function loadCoal() {
  if (isLoaded) {
    clearInterval(loadingInterval);
    isLoaded = false;
    for(let i = 0; i < loadingBarGroup.length; i++){
        loadingBarGroup[i].style.width = "0%";
    }
  } else {
    let progress = 0;
    isLoaded = true;
    loadingInterval = setInterval(function() {
      progress++;
      if (progress >= 100) {
        lookUpInventory(1, 'name', 'Coal')
        progress = 0;
      }
      loadingCoalBar.style.width = `${progress}%`;
    }, 10);
    
  }
}

function loadIron() {
  if (isLoaded) {
    clearInterval(loadingInterval);
    isLoaded = false;
    for(let i = 0; i < loadingBarGroup.length; i++){
      loadingBarGroup[i].style.width = "0%";
  }
  } else {
    let progress = 0;
    isLoaded = true;
    loadingInterval = setInterval(function() {
      progress++;
      if (progress >= 100) {
        lookUpInventory(2, 'name', 'Iron Ore')
        progress = 0;
      }
      loadingIronBar.style.width = `${progress}%`;
    }, 10);
    
  }
}

mineCoalButton.addEventListener("click", loadCoal);
mineIronButton.addEventListener("click", loadIron);

function test1(element){
  itemsList.forEach()
}

