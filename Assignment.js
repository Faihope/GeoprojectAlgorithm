

function findArray(myArray) {

    occurence = {}; // An empty object to store occurence of the numbers in key value pairs

    for (const element of myArray) {//loops through the array and store the count
        if (occurence[element]) {
            occurence[element] += 1;
        }
        else {
            occurence[element] = 1
        }
    }

    let largestdominator= Math.max(...Object.values(occurence));

    if (largestdominator > (myArray.length / 2)) {
        return Object.keys(occurence).find(key=>occurence[key] ===largestdominator)
    }
    else {
        return -1
    }


}
console.log(findArray([3,4,3,2,3,-1,3,3]))