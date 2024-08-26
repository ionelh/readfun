export const removeIndex = (arr, i) => {
    return arr.slice(0, i).concat(arr.slice(i + 1));
};

export const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

export const getMangledElements = (src) => {
    const result = [];
    let arr = [ ...src ];
    while (arr.length > 0) {
        let random = getRandom(0, arr.length);
        result.push(arr[random]);
        arr = removeIndex(arr, random);
    }
    return result;
};
