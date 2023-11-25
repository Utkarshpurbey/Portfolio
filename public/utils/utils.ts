export default function generatePoissonDiskSampling(width:number, height:number, minDist:number, maxTries:number) {
    const radius = minDist / Math.sqrt(2);
    const cellSize = radius / Math.sqrt(2);
    const gridCols = Math.ceil(width / cellSize);
    const gridRows = Math.ceil(height / cellSize);
    const grid = new Array(gridCols * gridRows);
    const points:any = [];
    const activePoints:any = [];
  
    function getRandomPoint() {
      return { x: Math.random() * width, y: Math.random() * height };
    }
  
    function gridIndex(x:number, y:number) {
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      return col + row * gridCols;
    }
  
    function isValidPoint(x:number, y:number) {
      if (x < 0 || x >= width || y < 0 || y >= height) {
        return false;
      }
      const gridX = Math.floor(x / cellSize);
      const gridY = Math.floor(y / cellSize);
  
      for (let i = Math.max(gridX - 2, 0); i < Math.min(gridX + 2, gridCols); i++) {
        for (let j = Math.max(gridY - 2, 0); j < Math.min(gridY + 2, gridRows); j++) {
          const index = i + j * gridCols;
          const neighbor = grid[index];
          if (neighbor) {
            const dx = neighbor.x - x;
            const dy = neighbor.y - y;
            if (dx * dx + dy * dy < minDist * minDist) {
              return false;
            }
          }
        }
      }
  
      return true;
    }
  
    function addPoint(x:number, y:number) {
      const index = gridIndex(x, y);
      grid[index] = { x, y };
      activePoints.push({ x, y });
      points.push({ x, y });
    }
  
    function generateNextPoint() {
      if (activePoints.length === 0) {
        return null;
      }
      const randomIndex = Math.floor(Math.random() * activePoints.length);
      const currentPoint = activePoints[randomIndex];
      for (let i = 0; i < maxTries; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * (minDist + radius) + radius;
        const x = currentPoint.x + Math.cos(angle) * distance;
        const y = currentPoint.y + Math.sin(angle) * distance;
        if (isValidPoint(x, y)) {
          return { x, y };
        }
      }
      activePoints.splice(randomIndex, 1);
      return null;
    }
  
    // Initialize with a random point
    const initialPoint = getRandomPoint();
    addPoint(initialPoint.x, initialPoint.y);
  
    while (activePoints.length > 0) {
      const newPoint = generateNextPoint();
      if (newPoint) {
        addPoint(newPoint.x, newPoint.y);
      }
    }
  
    return points;
  }