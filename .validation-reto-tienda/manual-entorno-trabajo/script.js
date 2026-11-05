const checklist = document.querySelectorAll('#finalChecklist input');
const progressBar = document.querySelector('#progressBar');
const progressText = document.querySelector('#progressText');

function updateProgress() {
  const completed = [...checklist].filter((item) => item.checked).length;
  const total = checklist.length;
  progressBar.style.width = `${(completed / total) * 100}%`;
  progressText.textContent = `${completed} de ${total} completados`;
}

checklist.forEach((item) => item.addEventListener('change', updateProgress));
updateProgress();
