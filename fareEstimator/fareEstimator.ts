function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
   let fares: number[] = [];

   for (let i: number = 0; i < cost_per_mile.length; i++) {
      fares.push(Math.round((ride_time * cost_per_minute[i] + ride_distance * cost_per_mile[i]) * 100) / 100);
   }
   return fares;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
