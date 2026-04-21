export function scrollToSection(element: HTMLElement): void {
  let trigger: HTMLElement | null = element.parentElement;
  while (trigger && !trigger.dataset.stickyTrigger) {
    trigger = trigger.parentElement;
  }

  const top = trigger
    ? trigger.getBoundingClientRect().top +
      window.scrollY +
      trigger.offsetHeight -
      window.innerHeight
    : null;

  const lenis = window.__lenis;
  if (lenis) {
    if (top !== null) {
      lenis.scrollTo(top, { duration: 1.4 });
    } else {
      lenis.scrollTo(element, { duration: 1.4 });
    }
    return;
  }

  if (top !== null) {
    window.scrollTo({ top, behavior: "smooth" });
  } else {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function scrollToId(id: string): void {
  const element = document.getElementById(id);
  if (element) scrollToSection(element);
}
