/**
 * The main game loop class to handle updates and rendering with delta time.
 */
class GameLoop {
    private lastTimestamp: number = 0;
    // Speed is defined in units per second (e.g., pixels/second)
    private objectSpeed: number = 100; 
    private objectPosition: number = 0;
    private animationId: number | null = null;

    start(): void {
        // Use performance.now() for the initial timestamp
        this.lastTimestamp = performance.now(); 
        this.animationId = requestAnimationFrame(this.update.bind(this));
    }

    stop(): void {
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    private update(timestamp: number): void {
        // Calculate delta time in milliseconds
        const deltaTimeMs = timestamp - this.lastTimestamp; 
        
        // Convert delta time to seconds, which is better for physics/movement calculations
        const deltaTimeSecs = deltaTimeMs / 1000.0; 

        // Update the last timestamp for the next frame
        this.lastTimestamp = timestamp; 

        // --- Apply Delta Time to Logic ---
        // Consistent movement: position change = speed * delta time
        this.objectPosition += this.objectSpeed * deltaTimeSecs;
        
        // Log the position and delta time (for demonstration)
        console.log(`Delta Time (ms): ${deltaTimeMs.toFixed(2)}, Position: ${this.objectPosition.toFixed(2)}`);

        // Call the next frame
        this.animationId = requestAnimationFrame(this.update.bind(this));
    }
}

// To run the loop:
const game = new GameLoop();
game.start();

// To stop the loop after some time (optional):
// setTimeout(() => {
//     game.stop();
//     console.log("Game loop stopped.");
// }, 5000); 
