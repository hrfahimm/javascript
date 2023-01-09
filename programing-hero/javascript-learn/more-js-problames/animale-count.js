 function animalesCount(mailes){
    const animelDensityFast10Miles = 10;
    const animelDensitySecond10Miles = 50
    const animelDensitythird10Miles = 100
    if (mailes <= 10){
        const count = mailes * animelDensityFast10Miles;
        return count;
        
    }
    else if (mailes <= 20){
        const firstDenseAnimel = 10 * animelDensityFast10Miles;
        const restMiles = mailes - 10;
        const secondDenseAnimals = restMiles * animelDensitySecond10Miles;
        const totalAminels = firstDenseAnimel + secondDenseAnimals;
        return totalAminels;        
    }
    else{
        const firstDenseAnimel = 10 * animelDensityFast10Miles;
        const secondDenseAnimals = 10 * animelDensitySecond10Miles;
        const restMiles = mailes - 20;
        const thirdDenseAnimals = restMiles * animelDensitythird10Miles;
        const totalAminels = firstDenseAnimel + secondDenseAnimals + thirdDenseAnimals;
        return totalAminels;        
        
    }
}

const animals = animalesCount(35);
console.log(animals);