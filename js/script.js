$('input[name=phone]').mask("+7 (999) 999 99 99");

$('.contacts__form').validate({
  rules: {
      name: "required",
      phone: "required",
      email: {
          required: true,
          email: true
      }
  },
  messages: {
      name: "Пожалуйста, введите свое имя",
      phone: "Пожалуйста, введите свой номер телефона",
      email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
      }
  }
});

// import { Carousel } from '/js/carousel.esm.js';

const container = document.getElementById("myCarousel");
const options = { infinite: false };

new Carousel(container, options);

// import { Fancybox } from "/js/fancybox.esm.js";
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$('form').submit(function(e) {
  e.preventDefault(); // Остановка отправки формы по умолчанию

  if (!$(this).valid()) {
      return;
  }

  var $form = $(this); // Сохраняем ссылку на форму для использования внутри done-функции

  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $form.serialize()
  }).done(function() {
      $form.find("input").val(""); // Очищаем введенные данные

      $form.trigger('reset'); // Сбрасываем форму
  });

  return false; // Предотвращаем действие по умолчанию
});