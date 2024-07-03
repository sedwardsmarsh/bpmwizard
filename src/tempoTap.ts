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
export function setupTempoTap(tapBtn: HTMLButtonElement, meanP: HTMLParagraphElement): void {
  tapBtn.addEventListener("click", () => {
    // Record the tap timestamp.
    Taps.addTap();

    // Calculate Mean.
    meanP.innerText = `mean: ${Taps.getMeanBpm()}`;

    // Calculate Median.
    // Calculate Mode.
    // Calculate Stdd.
  });
}

/**
 * Update the tap count.
 *
 * @param {HTMLButtonElement} element
 * @param {number} tapCount
 */
function setTapCount(element: HTMLButtonElement, tapCount: number): void {
  element.innerHTML = `Tap for tempo ${tapCount}`;
}
