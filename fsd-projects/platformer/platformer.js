$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100,0, 10,500,"white");
createPlatform(1350, 400, 50, 50, "purple");
createPlatform(200, 650, 100, 200,"white");
createPlatform(500, 550, 150, 300,"purple");
createPlatform(800,250,15,800,"white");
createPlatform(100,450,200,10,"purple");
createPlatform(400,325,200,10,"white");
createPlatform(1000,0, 10,500,"purple");
createPlatform(1200,625,200,10,"white");
createPlatform(1000,500,200,10,"purple");



    // TODO 3 - Create Collectables
  createCollectable("steve", 200, 170, 0.5, 0.7);
  createCollectable("steve", 800, 170, 0.5, 0.7);
  createCollectable("steve", 1350, 170, 0.5, 0.7);



    
    // TODO 4 - Create Cannons
 createCannon("top", 200, 1000);
createCannon("right", 300, 2000);
createCannon("bottom",700,1000);
createCannon("top",1200,1000);
createCannon("right",600,1500)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
