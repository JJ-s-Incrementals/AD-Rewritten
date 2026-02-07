// Define a main Game class to manage game state and logic
class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private lastTime: number = 0;

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
    }

    private draw() {
        // Rendering code goes here (e.g., draw player, background, etc.)
        console.log("Drawing game elements");
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(10, 10, 50, 50); // Example drawing

    }
}

// Entry point: set up canvas and start the game
const game = new Game('gameCanvas');
game.start();


