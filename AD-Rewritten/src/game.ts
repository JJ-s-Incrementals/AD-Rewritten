// Define a main Game class to manage game state and logic
class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private lastTime: number = 0;
    private antimatter: number = 10;

    private firstDimension: number = 1;
    private activatedFirstDim: number = 0;

    // const button = document.getElementById('firstDimButton') as HTMLButtonElement;


    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!; // '!' asserts non-null
    }


    // The main loop function that will be called recursively
    private loop(timestamp: number) {
        // Calculate delta time (time elapsed since last frame)
        // This helps make movement consistent across different hardware
        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        // 1. Update game state based on deltaTime
        this.update(deltaTime);

        // 2. Clear the canvas for the next frame
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 3. Draw all game elements
        this.draw();

        // 4. Request the next frame from the browser
        requestAnimationFrame(this.loop.bind(this));
    }

    // Method to start the game loop
    public start() {
        requestAnimationFrame(this.loop.bind(this));
    }

    private update(deltaTime: number) {
        // Game logic goes here (e.g., move player, check collisions)
        // Use deltaTime for smooth movement: entity.position += entity.speed * deltaTime;
        console.log("Updating game state. Delta time:", deltaTime);
        
        // calculate new antimatter
        this.antimatter += this.activatedFirstDim*this.firstDimension*deltaTime/1000;
    }

    private draw() {
        // Rendering code goes here (e.g., draw player, background, etc.)
        // console.log("Drawing game elements");
        // this.ctx.fillStyle = 'red';
        // this.ctx.fillRect(10, 10, 50, 50); // Example drawing

        // Set the font style and size
        this.ctx.font = "30px Arial";

        // Set the text color
        this.ctx.fillStyle = "#000000";

        // Draw the filled text at position (x, y)
        this.ctx.fillText(`Hello JJ, you have ${this.antimatter} antimatter`, 10, 50);



    }
}

// Entry point: set up canvas and start the game
const game = new Game('gameCanvas');
game.start();


