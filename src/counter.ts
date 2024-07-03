/**
 * Setup the tempo tap button.
 *
 * @export
 * @param {HTMLButtonElement} element - Button.
 */
export function setupTempoTap(element: HTMLButtonElement): void {
  // Initialize the tap count.
  let tapCount = 0;

  // Increment `tapCount` when tap button is pressed.
  element.addEventListener("click", () => setTapCount(element, tapCount + 1));

  // Initialize the tap count to zero.
  setTapCount(element, 0);
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
