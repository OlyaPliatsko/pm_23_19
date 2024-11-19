document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.sd-progress-bar');


  // Функція для зміни кольору прогрес-бару в залежності від ширини
  const setColorBasedOnProgress = (bar, width) => {
    if (width < 50) {
      bar.style.backgroundColor = '#ffcb2e'; // Якщо менше 40%
    } else if (width >= 50 && width < 70) {
      bar.style.backgroundColor = '#f1b427'; // Якщо між 40% і 70%
    } else {
      bar.style.backgroundColor = '#a73d08'; // Якщо більше 70%
    }
  };

  // Функція для запуску анімації прогрес-барів
  const animateProgressBars = () => {
    progressBars.forEach(bar => {
      const targetWidth = parseInt(bar.style.width); // Отримуємо значення ширини

      // Перевіряємо, чи є значення ширини
      if (!targetWidth) return;

      // Встановлюємо початкову ширину
      bar.style.width = '0';
      setColorBasedOnProgress(bar, 0); // Початковий колір

      // Додаємо затримку перед збільшенням ширини
      setTimeout(() => {
        bar.style.width = targetWidth + '%'; // Анімація до цільової ширини
        setColorBasedOnProgress(bar, targetWidth); // Оновлюємо колір після зміни ширини
      }, 300); // Затримка 300 мс
    });
  };

  // Викликаємо анімацію прогрес-барів після завантаження сторінки
  animateProgressBars();

  // Приклад для роботи з кнопками (показ/приховання блоків)
  const toggleButtons = document.querySelectorAll('.toggle-btn, .btn-ed-toggle, .btn-ref-toggle');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      let description;

      // Визначення блоку для показу/приховання
      if (button.classList.contains('btn-ed-toggle')) {
        description = document.querySelector('.open-info-box');
      } else if (button.classList.contains('toggle-btn')) {
        description = button.previousElementSibling.querySelector('.job-description');
      } else if (button.classList.contains('btn-ref-toggle')) {
        description = button.closest('section').querySelector('.open-ref-info-box');
      }

      if (!description) return;

      // Переключення класу для приховання/показу
      const isHidden = description.classList.toggle('hidden');
      description.classList.toggle('hidden-box', isHidden);

      // Якщо блок показується, запускаємо анімацію
      if (!isHidden) {
        const barsInDescription = description.querySelectorAll('.sd-progress-bar');
        barsInDescription.forEach(bar => {
          const targetWidth = bar.getAttribute('data-target');
          bar.style.width = '0'; // Початкова ширина
          setTimeout(() => {
            bar.style.width = targetWidth + '%'; // Анімація до цільової ширини
          }, 300);
        });
      }

      // Оновлення тексту кнопки
      if (button.classList.contains('btn-ed-toggle')) {
        button.textContent = isHidden ? 'Show education info' : 'Hide education info';
      } else if (button.classList.contains('btn-ref-toggle')) {
        button.textContent = isHidden ? 'Show references info' : 'Hide references info';
      } else {
        button.textContent = isHidden ? 'Show More' : 'Show Less';
      }
    });

    // Анімація кнопок при наведенні
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = '#232323';
      button.style.color = '#ffcb2e';
    });

    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = '#ffcb2e';
      button.style.color = '#232323';
    });

    // Відміна фокусу кнопок
    button.addEventListener('focus', () => {
      button.style.outline = 'none';
    });

    button.addEventListener('blur', () => {
      button.style.outline = 'none';
    });
  });
});
