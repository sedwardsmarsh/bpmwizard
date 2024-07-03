/**
 * Storage for tap timestamps.
 *
 * @class Taps
 */
class Taps {
  private static instance: Taps;
  private tapTimes: number[] = [];
  private maxTaps: number = 3;

  /**
   * Creates an instance of Taps.
   * @memberof Taps
   */
  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  /**
   * Provides the Taps instance.
   *
   * @static
   * @return {*}  {Taps}
   * @memberof Taps
   */
  public static getInstance(): Taps {
    if (!Taps.instance) {
      Taps.instance = new Taps();
    }
    return Taps.instance;
  }

  public addTap(): void {
    const time_ms = Date.now();

    // Only store `maxTaps` taps.
    if (this.tapTimes.length >= this.maxTaps) {
        this.tapTimes.shift()
    }

    this.tapTimes.push(time_ms)

    console.log(this.tapTimes)
  }

  // public static getMeanBpm(): number {

  // }

  // public static getMedianBpm(): number
  // public static getModeBpm(): number
  // public static getStddBpm(): number
}

export default Taps.getInstance();
