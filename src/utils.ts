export const removeIndex = <T extends string[] | number[]>(arr: T, i: number): T => {
    return arr.slice(0, i).concat(arr.slice(i + 1)) as T;
};

export const getRandom = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
};

export const getMangledElements = (src: string[]): string[] => {
    const result: string[] = [];
    let arr: string[] = [ ...src ];
    while (arr.length > 0) {
        let random: number = getRandom(0, arr.length);
        result.push(arr[random]);
        arr = removeIndex(arr, random);
    }
    return result;
};
