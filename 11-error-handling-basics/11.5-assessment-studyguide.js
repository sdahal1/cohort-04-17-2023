const locations = {
    40.35: {
        "-105.81": "ROCKY-MOUNTAINS",
        22.54: "KATERINI-GREECE",
    },
    28.66: {
        "-105.81": "CHIHUAHUA-MEXICO",
    }
};

function goToSecretLocation(lat, lon, passcode) {
    // console.log(lat);
    if (!lat || !lon || !passcode) {
        throw "latitude, longitude, and passcode are required!";
    }
    let result;
    try {
        // console.log(locations[lat]);
        if (locations[lat][lon] === passcode) {
            result = "Welcome.";
        } else {
            throw new Error("This is a new Error");
            // throw "Nothing to see here!";
        }
    } catch (error) {
        // console.log(typeof error)
        if (typeof error === "string") {
            result = error;
        } else {
            console.log("jserror", error);
            console.log(error.name);
            console.log(error.message);

            //result ="You look around and don't see a thing.";
            result = "Not found fam";
        }
    }

    return result;
}

// console.log(goToSecretLocation());
// console.log(goToSecretLocation("0", 22.54, "ROCKY-MOUNTAINS"));
// console.log(goToSecretLocation(28.66, "-105.81", "CHIHUAHUA-MEXICO"));
// console.log(goToSecretLocation(28.66, "-105.81", "Obie One Kanobie"));



