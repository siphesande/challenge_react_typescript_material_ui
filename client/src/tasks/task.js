const data = require("./data.json");
const geo = require("./geo.json");
const p3Data = require("./p3Data.json");

// 1. Write a function that performs some validity checks on two JSON files,
// geo.json​ and ​ data.json​ . The page must display whether or not the given
// files/input are valid.

export const validityChecks = () => {

    if (!(data.length === geo.length)) {
        return false
    } else if (!(typeof data === 'object') || !(typeof geo === 'object')) {
        return false;
    } else if (!(geo.length > 0) || !(data.length > 0)) {
        return false;
    } else {
        return true;
    }
}
console.log(validityChecks());

// 2. Write a function that takes in ​ latitude​ and ​ longitude​ as parameters, and
// returns a sorted list of the 10 rows from data.json with the shortest distance
// from the latitude and longitude, in a nicely formatted table.

const combinedDataAndGeo = () => {
    let files_data = [];
    data.forEach(item => {
        geo.forEach(geolocation => {
            if (item.meta.includes(geolocation.ipv4)) {
                let data_object = { "geo": geolocation.geo, ...item }
                files_data.push(data_object);
            }
        });
    });

    return files_data;

}
//console.log( combinedDataAndGeo());


//I calculate the euclidean distance so that I can get 10 rows from data.json with the shortest distance.
const sortedByEuclideanDistance = (latitude1, longitude1) => {
    let combined_data = combinedDataAndGeo()
    let data_sorted_by_euclidean_distance = combined_data.map((data_from_data_json) => {
        let array = data_from_data_json.geo.split(",", 2);// separating latitude and longitude
        let latitude2 = array[0]
        let longitude2 = array[1]
        let R = 6371;                                      // Radius of the earth in km
        let dLat = degreesToRadians(latitude2 - latitude1); // degreesToRadians below
        let dLon = degreesToRadians(longitude2 - longitude1);
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(degreesToRadians(latitude1)) * Math.cos(degreesToRadians(latitude2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c; // Distance in km
        let data_object = { "euclidean_from_lat_long": d, ...data_from_data_json }
        //console.log(data_object);
        return data_object
    });

    data_sorted_by_euclidean_distance.sort((a, b) => {
        if (a.euclidean_from_lat_long > b.euclidean_from_lat_long) return 1;
        if (a.euclidean_from_lat_long < b.euclidean_from_lat_long) return -1;
        return 0;
    });
    //console.log(data_sorted_by_euclidean_distance);
    return data_sorted_by_euclidean_distance
}

const degreesToRadians = (deg) => {
    return deg * (Math.PI / 180)
}


export const rowsWithShortestDistance = (latitude, longitude) => {
    let row_with_shortest_distance = sortedByEuclideanDistance(latitude, longitude)
    const tenRows = row_with_shortest_distance.filter((month, idx) => idx < 10)
    //console.log(tenRows);

    return tenRows  // row with shortest distance is the first item in sortedByEuclideanDistance
}

// 3
export const unionOfTheTwoArrays = (testSet1, testSet2) => {
    const testSet1TestSet2Array = [...testSet1, ...testSet2]

    // 3 d.  
    //  Objects with name as the only field must be ignored, i.e {name: "obj1"} 
    // and all array item with one entry will not be accepted

    const arrayWithOutNameOnly = testSet1TestSet2Array.filter(hero => Object.keys(hero).length !== 1);

    
    //3  a. All objects must have unique names in the final array
    //3  b. All other fields must be merged, ex: the union of ​ {name: "t", a:1}​ a
    let final_array = [];
    arrayWithOutNameOnly.forEach(elem => {
        let match = final_array.find(r => r.name === elem.name);

        if (match) {

            if (match.a && elem.a) {
                Object.assign(match, elem, { a: match.a + elem.a });
            } else if (match.b && elem.b) {

                Object.assign(match, elem, { b: match.b + elem.b });

            } else if (match.c && elem.c) {

                Object.assign(match, elem, { c: match.c + elem.c });

            } else if (match.d && elem.d) {

                Object.assign(match, elem, { d: match.d + elem.d });

            } else if (match.e && elem.e) {

                Object.assign(match, elem, { e: match.e + elem.e });
            }
            else {
                Object.assign(match, elem)

            }
        } else {
            final_array.push(elem);
        }
    });
    //console.log(final_array)
    return final_array

}

unionOfTheTwoArrays(p3Data.testSet1, p3Data.testSet2)
combinedDataAndGeo()
sortedByEuclideanDistance(-34.270836, 18.459778);
rowsWithShortestDistance(-34.270836, 18.459778)


