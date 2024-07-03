import Taps from "./taps";

/**
 * Setup the tempo tap button.
 *
 * @export
 * @param {HTMLButtonElement} element - Button.
 */
export function setupTempoTap(element: HTMLButtonElement): void {
  // Increment `tapCount` when tap button is pressed.
  element.addEventListener("click", () => Taps.addTap());
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
