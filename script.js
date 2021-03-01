document.addEventListener('copy', (event) => {
  const pagelink = `\n\nVeröffentlicht von Nele unter CC BY 4.0. Quelle: ${document.location.href}`;
  event.clipboardData.setData('text', document.getSelection() + pagelink);
  event.preventDefault();
});
