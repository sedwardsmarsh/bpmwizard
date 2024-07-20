import Taps from "./taps";

/**
 * Setup the tempo tap button.
 *
 * @export
 * @param {HTMLButtonElement} tapBtn - Button.
 * @param {HTMLParagraphElement} meanP - Paragraph.
 * @param {HTMLParagraphElement} medianP - Paragraph.
 * @param {HTMLParagraphElement} modeP - Paragraph.
 * @param {HTMLParagraphElement} stddP - Paragraph.
 */
export function setupTempoTap(
  tapBtn: HTMLButtonElement,
  meanP: HTMLParagraphElement,
  medianP: HTMLParagraphElement,
  modeP: HTMLParagraphElement,
  stddP: HTMLParagraphElement
): void {
  tapBtn.addEventListener("click", () => {
    // Record the tap timestamp.
    Taps.addTap();

    // Calculate Mean.
    meanP.innerText = `${Taps.getMeanBpm()}`;

    // Calculate Median.
    medianP.innerText = `${Taps.getMedianBpm()}`;

    // Calculate Mode.
    modeP.innerText = `${Taps.getModeBpm()}`;

    // Calculate Stdd.
    stddP.innerText = `${Taps.getStddBpm()}`;
  });
}

// /**
//  * Update the tap count.
//  *
//  * @param {HTMLButtonElement} element
//  * @param {number} tapCount
//  */
// function setTapCount(element: HTMLButtonElement, tapCount: number): void {
//   element.innerHTML = `Tap for tempo ${tapCount}`;
// }
