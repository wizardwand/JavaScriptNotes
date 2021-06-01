const level = 4;

function printleftParimid() {
    /**
        #
       ##
      ###
     ####
     */
    for (let index = 1; index <= level; index++) {
        let hashes = "#";
        for (let j = 2; j <= index; j++) {
            hashes = hashes + "#";
        }
        console.log(hashes);
    }
}

function printRightParimid() {

    /**
     #
     ##
     ###
     ####
     */

    for (let i = 1; i <= level; i++) {
        let spaces = "", hashes = "";
        // add spaces 
        for (let j = level - i; j > 0; j--) {
            spaces = spaces + " ";
        }
        // add hashes 
        for (let j = level - i; j < level; j++) {
            hashes = hashes + "#";
        }
        // print spaces + hashes
        console.log(spaces + hashes);
    }
}

function printFullPyramid() {
    /**
       #
      ###
     #####
    #######
     */
    for (let i = 1; i <= level; i++) {
        let spaces = "", hashes = "";
        // add spaces 
        for (let j = level - i; j > 0; j--) {
            spaces = spaces + " ";
        }
        // add hashes 
        for (let j = level - i; j < level; j++) {
            hashes = hashes + "#";
        }
        const hashLength = hashes.length;
        if (hashLength > 1) {
            for (let j = 1; j <= hashLength - 1; j++) {
                hashes = hashes + "#";
            }
        }
        // print spaces + hashes
        console.log(spaces + hashes);
    }
}

printFullPyramid();