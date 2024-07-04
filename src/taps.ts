/**
 * Storage for tap timestamps.
 *
 * @class Taps
 */
class Taps {
  private static instance: Taps;
  private tapTimes_ms: number[] = [];
  private maxTaps: number = 20;
  private bpmHistory: number[] = [];
  private maxBpmHistory: number = 20;

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

  public addAvgBpm(avgBpm: number): void {
    // Only store `maxTaps` taps.
    if (this.bpmHistory.length >= this.maxBpmHistory) {
      this.bpmHistory.shift();
    }

    this.bpmHistory.push(avgBpm);
  }

  /**
   * Record a time stamp in milliseconds.
   *
   * @memberof Taps
   */
  public addTap(time_ms: number = Date.now()): void {
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

    // Save the calculated avg bpm.
    this.addAvgBpm(avgBpm);

    return avgBpm;
  }

  /**
   * Get the median (middle number) BPM.
   *
   * @return {*}  {number}
   * @memberof Taps
   */
  public getMedianBpm(): number {
    if (this.bpmHistory.length == 0) {
      return 0;
    }

    const mid = Math.round(this.bpmHistory.length / 2);
    return this.bpmHistory[mid];
  }

  /**
   * Get the mode (frequency of each number) BPM.
   *
   * @return {*}  {number}
   * @memberof Taps
   */
  public getModeBpm(): number {
    if (this.bpmHistory.length == 0) {
      return 0;
    }

    // Count bpm frequencies.
    let bpmFrequencies: Record<number, number> = {};
    for (const num of this.bpmHistory) {
      if (!isFinite(num)) {
        continue;
      }
      bpmFrequencies[num] = bpmFrequencies[num] ? bpmFrequencies[num] + 1 : 1;
    }

    // Find bpm with highest frequency.
    const entries = Object.entries(bpmFrequencies);
    let modeBpm: string = entries[0][0];
    entries.forEach(([bpm, freq]) => {
      if (freq > bpmFrequencies[Number(modeBpm)]) {
        modeBpm = bpm;
      }
    });

    return Number(modeBpm);
  }

  // public static getMedianBpm(): number
  // public static getModeBpm(): number
  // public static getStddBpm(): number
}

export default Taps.getInstance();
