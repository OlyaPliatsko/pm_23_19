

document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(button => {
    // Додавання обробника для кнопки "Show More"
    button.addEventListener('click', () => {
      const description = button.previousElementSibling.querySelector('.job-description');
      if (description.classList.contains('hidden')) {
        description.classList.remove('hidden');
        button.textContent = 'Show Less';
      } else {
        description.classList.add('hidden');
        button.textContent = 'Show More';
      }
    });

    // Анімація при наведенні на кнопку
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = '#232323';
      button.style.color = '#ffcb2e';
    });

    // Відновлення стилів після відведення миші
    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = '#ffcb2e';
      button.style.color = '#232323';
    });

    // Відміна фокусу
    button.addEventListener('focus', () => {
      button.style.outline = 'none';
    });

    button.addEventListener('blur', () => {
      button.style.outline = 'none';
    });
  });
});

