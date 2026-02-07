
class Game {
    private lastTimestamp: number = 0;
    // Velocity is defined in units per second (e.g., 100 pixels/second)
    // private objectVelocity: number = 100; 
    // private objectPositionX: number = 0;

    private antimatter: number = 10;
    private tickspeed: number = 1;


    public start(): void {
        // Use performance.now() for better precision than Date.now()
        this.lastTimestamp = performance.now(); 
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private gameLoop(timestamp: number): void {
        // Calculate the time elapsed since the last frame in milliseconds
        const deltaTimeMs = timestamp - this.lastTimestamp; 
        // Convert delta time to seconds
        const deltaTimeSecs = deltaTimeMs / 1000; 

        // Update the last timestamp for the next frame
        this.lastTimestamp = timestamp; 

        // Call update logic with the delta time
        this.update(deltaTimeSecs);
        this.render();

        // Continue the loop
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private update(deltaTime: number): void {
        // Apply delta time to movement calculations for consistent speed
        // this.objectPositionX += this.objectVelocity * deltaTime; 
        // console.log(`Updated position to: ${this.objectPositionX.toFixed(2)} at delta time: ${deltaTime.toFixed(4)}s`);

        this.antimatter = 10;
    }

    private render(): void {
        // Rendering logic goes here
    }

    public getAntimatter(): number {
        return this.antimatter;
    }


}

const game = new Game();
game.start();