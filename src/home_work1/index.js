// Написать функцию, которая принимает Uint8Array и позволяет обратиться к биту конкретного элемента

function createBitGetter(dataArr) {
    return {
        get(arrIndex, bitIndex) {
            return (dataArr[arrIndex] & (1 << bitIndex)) !== 0 ? 1 : 0;
        }
    }
}

function createBitAccessor(dataArr) {
    return {
        get(arrIndex, bitIndex) {
            return (dataArr[arrIndex] & (1 << bitIndex)) !== 0 ? 1 : 0;
        },
        
        set(arrIndex, bitIndex, bitValue) {
            if (bitValue === 1) {
                dataArr[arrIndex] = (dataArr[arrIndex] | (1 << bitIndex));
            } else {
                dataArr[arrIndex] = (dataArr[arrIndex] & ~(1 << bitIndex));
            }
        }
    }
}


const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
// console.log(bitGetter.get(0, 1)); // 1
// console.log(bitGetter.get(1, 1)); // 0


// Расширить функцию из прошлого задания возможностью изменять значение конкретного бита


const bitAccessor = createBitAccessor(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
bitAccessor.set(0, 1, 0); //
console.log(bitAccessor.get(0, 1));    // 0

bitAccessor.set(1, 1, 1);
console.log(bitAccessor.get(1, 1));
