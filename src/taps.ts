/**
 * Storage for tap timestamps.
 *
 * @class Taps
 */
class Taps {
  private static instance: Taps;
  private tapTimes_ms: number[] = [];
  private maxTaps: number = 20;

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

  /**
   * Record a time stamp in milliseconds.
   *
   * @memberof Taps
   */
  public addTap(): void {
    const time_ms = Date.now();

    // Only store `maxTaps` taps.
    if (this.tapTimes_ms.length >= this.maxTaps) {
      this.tapTimes_ms.shift();
    }

    this.tapTimes_ms.push(time_ms);
  }

  /**
   * Get the mean (average) BPM.
   *
   * @return {*}  {number} Average.
   * @memberof Taps
   */
  public getMeanBpm(): number {
    // Calculate average tap period (time between taps).
    const tapPeriods_ms = [];
    for (let i = 1; i < this.tapTimes_ms.length; i++) {
      tapPeriods_ms.push(this.tapTimes_ms[i] - this.tapTimes_ms[i - 1]);
    }
    const avgTapPeriod_ms =
      tapPeriods_ms.reduce((acc: number, curr: number) => acc + curr, 0) /
      this.tapTimes_ms.length;
    console.log("avgTapPeriod", avgTapPeriod_ms);

    // Calculate average bpm.
    const oneMinuet_ms = 60 * 1000;
    const avgBpm = Math.round(oneMinuet_ms / avgTapPeriod_ms);
    console.log("avgBpm: ", avgBpm);
    console.log("taps: ", this.tapTimes_ms);

    return avgBpm
  }

  // public static getMedianBpm(): number
  // public static getModeBpm(): number
  // public static getStddBpm(): number
}

export default Taps.getInstance();
