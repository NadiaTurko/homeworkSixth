// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
function myFunction() {
  const fio = document.querySelector('[name = "fio"]');
  const phone = document.querySelector('[name = "phone"]');
  const birthday = document.querySelector('[name = "birthday"]');
  const email = document.querySelector('[name = "email"]');

  const button = document.querySelector(".btn");
  const out = document.querySelector(".out");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const fioValue = fio.value;
    const phoneValue = phone.value;
    const birthdayValue = birthday.value;
    const emailValue = email.value;

    out.textContent = `
  Full Name: ${fioValue}
  Phone: ${phoneValue}
  Birthday: ${birthdayValue}
  e-mail: ${emailValue}`;
  });
}
