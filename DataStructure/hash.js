class HashTable {
    table = new Array(100);

    setItem = (key, value) => {};
    getItem = (key) => {
        return '';
    };
}

const newTable = new HashTable();

newTable.setItem('firstName', 'Giyoun');
newTable.getItem('firstName');

setItem = (key, value) => {
    table['firstName'] = 'Giyoun';
};
// --------------------------------

function hashStringToInt(string) {
    return(3);
}

setItem = (key, value) => {
    const idx = hashStringToInt(key);
    this.table[idx] = value;
}

getItem = (key) => {
    const idx = hashStringToInt(key);
    return this.table[idx];
}

// --------------------------------

function hashStringToInt(string, tableSize) {
    let hash = 17;
    for (let i = 0; i < string.length; i++) {
        hash = (13 * hash * string.charCodeAt(i)) % tableSize
    }
    return hash;
}

class HashTable {
    table = new Array(100);

    setItem = (key, value) => {
        const idx = hashStringToInt(key, this.table.length);
        this.table[idx] = value;
    };
    
    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length);
        return this.table[idx];
    };
}