/**
 * Setup the tempo tap button.
 *
 * @export
 * @param {HTMLButtonElement} element - Button.
 */
export function setupTempoTap(element: HTMLButtonElement) {
  
  // Initialize the tap count.
  let tapCount = 0;

  // Setter for `tapCount`.
  const setTapCount = (count: number) => {
    tapCount = count;
    element.innerHTML = `Tap for tempo ${tapCount}`;
  };

  // Increment `tapCount` when tap button is pressed.
  element.addEventListener("click", () => setTapCount(tapCount + 1));

  // Initialize the tap count to zero.
  setTapCount(0);
}
