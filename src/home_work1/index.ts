import BitAccessor from './bit_accessor.js';

const bitAccessor = new BitAccessor(new Uint8Array([0b1110, 0b1101]));

bitAccessor.set(0, 1, 0);
console.log(bitAccessor.get(0, 1));

bitAccessor.set(1, 1, 1);
console.log(bitAccessor.get(1, 1));

bitAccessor.set(1, 3, 1);
console.log(bitAccessor.get(1, 3));
