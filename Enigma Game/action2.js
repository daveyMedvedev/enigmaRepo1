var inventoryPlace = [];
	
	function nextPage4(curr) {
      var next, currPage, nextPage

      next = curr + 4;
      currPage = document.getElementById('page' + curr);
      nextPage = document.getElementById('page' + next);
      
      currPage.style.display = 'none';
      nextPage.style.display = 'block';
    }
	
	function prevPage4(curr) {
      var next, currPage, nextPage

      next = curr - 4;
      currPage = document.getElementById('page' + curr);
      nextPage = document.getElementById('page' + next);
      
      currPage.style.display = 'none';
      nextPage.style.display = 'block';
    }
	
	function prevPage(curr) {
      var next, currPage, prevPage

      next = curr - 1;
      currPage = document.getElementById('page' + curr);
      prevPage = document.getElementById('page' + next);
      
      currPage.style.display = 'none';
      prevPage.style.display = 'block';
    }
	
	function prevPage(curr) {
      var next, currPage, prevPage

      next = curr - 1;
      currPage = document.getElementById('page' + curr);
      prevPage = document.getElementById('page' + next);
      
      currPage.style.display = 'none';
      prevPage.style.display = 'block';
    }
	
	function nextPage(curr) {
      var next, currPage, nextPage

      next = curr + 1;
      currPage = document.getElementById('page' + curr);
      nextPage = document.getElementById('page' + next);
      
      currPage.style.display = 'none';
      nextPage.style.display = 'block';
    }
	
	function prevPage(curr) {
      var next, currPage, prevPage

      next = curr - 1;
      currPage = document.getElementById('page' + curr);
      prevPage = document.getElementById('page' + next);
      
      currPage.style.display = 'none';
      prevPage.style.display = 'block';
    }

    function start() {
	
	  var crashSite = {
		name: "Crash Site",
		description: "You are in a clearing in a forest. Behind you there is a plane wreckage and to your West, and East points there are paths that you can take.",
				};
				
	  document.getElementById('page0').style.display = 'block';		
      document.getElementById('areaName').innerHTML = crashSite.name;
	  document.getElementById('areaDesc').innerHTML = crashSite.description;
    }
	
	function noGo() {
	
		var playerName = document.getElementById('nameBox').value;
		
		alert('You can\'t go that way ' + playerName + '!')
		
		}


	function toEast1() {
	
	var abandonedHut = {
    name: "Abandoned Hut",
    description: "A small, broken down hut sits to your left. It looks like it can be searched."
						};
		document.getElementById('areaName').innerHTML = abandonedHut.name;
		document.getElementById('areaDesc').innerHTML = abandonedHut.description;
		}
		
	function toEast2() {
	
	var eerieLake = {
    name: "Eerie Lake",
    description: "There is a small raft docked in the lake. There might be something useful in there."
						};
		
		document.getElementById('areaName').innerHTML = eerieLake.name;
		document.getElementById('areaDesc').innerHTML = eerieLake.description;
		}
	function toWest1() {
	
	var shakyBridge = {
    name: "Shaky Bridge",
    description: "You find yourself on an old, shaky, rope bridge. You better get moving!"
						};
		
		document.getElementById('areaName').innerHTML = shakyBridge.name;
		document.getElementById('areaDesc').innerHTML = shakyBridge.description;
		}
		
	function toWest2() {
	
	var waterWell = {
    name: "Water Well",
    description: "You are in a heavily overgrown clearing. There is nothing here except an old well and small paths to the North and East. The smell of the sea tickles your nostrils."
						};
		
		document.getElementById('areaName').innerHTML = waterWell.name;
		document.getElementById('areaDesc').innerHTML = waterWell.description;
		}
		
	function toNorth1() {
			
	var ravineCliff = {
    name: "Ravine",
    description: "You break out of the thick forest and find yourself at the edge of a cliff. Several hundred feet below, you see the ocean. You could probably scale this cliff with the correct equipment..."
						};
	
	document.getElementById('areaName').innerHTML = ravineCliff.name;
	document.getElementById('areaDesc').innerHTML = ravineCliff.description;
		}
		
	function escapeIsland() {
	
	var words = ["harness", "rope", "climbing boots"];
	
	
		if (inventoryPlace.indexOf("harness","climbing boots","rope") > -1) {
	alert("YOU WIN!")
	}
	else {
	alert("You need to go and find more items")
	}
	}
	
		
	function crashSite() {
	
	var crashSite = {
		name: "Crash Site",
		description: "You are in a clearing in a forest. Behind you there is a plane wreckage and to your West, and East points there are paths that you can take.",
				};
					
      document.getElementById('areaName').innerHTML = crashSite.name;
	  document.getElementById('areaDesc').innerHTML = crashSite.description;
					}
					
					
	function showInv() {
	
		alert('Inventory: ' + inventoryPlace + '.');
		
		}
		
	function searchCrashArea() {
	
		var items = ["climbing boots"];
		inventoryPlace.push("climbing boots");
		alert('You now have ' + inventoryPlace + '!');
		
		}
		
	function searchWellArea() {
	
		var items = ["rope"];
		inventoryPlace.push("rope");
		alert('You now have ' + inventoryPlace + '!');
		
		}
		
	function searchRaftArea() {
		
		var items = ["harness"];
		inventoryPlace.push("harness");
		alert('You now have ' + inventoryPlace + '!');
		
		}
		
	function searchArea() {
	
		alert('You find nothing of use...');
		
		}
		
		
	function helpMe() {
		
		alert('Escape the island by finding all 3 items!\nUse the directional buttons to navigate the map.');
		
		}