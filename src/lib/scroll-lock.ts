export function lockBodyScroll(lockClass: string): void {
  document.documentElement.classList.add(lockClass);
  document.body.classList.add(lockClass);
}

export function unlockBodyScroll(lockClass: string): void {
  document.documentElement.classList.remove(lockClass);
  document.body.classList.remove(lockClass);
}
