class BitAccessor {
  #dataArr: Uint8Array;

  constructor(dataArr: Uint8Array) {
    this.#dataArr = dataArr;
  }

  private handlerValidation(byteIndex: number, bitIndex: number, bitValue?: number) {
    if (byteIndex > this.#dataArr.length - 1 || byteIndex < 0) {
      throw new Error('Byte index out of data');
    }
    if (bitIndex < 0 || bitIndex > 7) {
      throw new Error('Bit index outside byte');
    }
    if (bitValue !== undefined && bitValue !== 0 && bitValue !== 1) {
      throw new Error('Wrong bit value passed');
    }
  }
  
  get(byteIndex: number, bitIndex: number): number {
    this.handlerValidation(byteIndex, bitIndex);
    return (this.#dataArr[byteIndex] & (1 << bitIndex)) !== 0 ? 1 : 0;
  }
  
  set(byteIndex: number, bitIndex: number, bitValue: number): void {
    this.handlerValidation(byteIndex, bitIndex, bitValue);
    if (bitValue === 1) {
      this.#dataArr[byteIndex] = (this.#dataArr[byteIndex] | (1 << bitIndex));
    } else {
      this.#dataArr[byteIndex] = (this.#dataArr[byteIndex] & ~(1 << bitIndex));
    }
  }
}

export default BitAccessor;
