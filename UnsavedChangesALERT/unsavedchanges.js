var unsavedChanges = false;

// Sayfa üzerindeki input elemanlarına event listener ekleyerek değişiklik kontrolü yapılır.
var inputs = document.querySelectorAll('.inputs');
inputs.forEach(function (input) {
    input.addEventListener('input', function () {
        unsavedChanges = true;
    });
});

// Sayfa kapatılmaya çalışıldığında kontrol yapılır.
window.addEventListener('beforeunload', function (event) {
    if (unsavedChanges) {
        event.returnValue = "Sayfa üzerindeki değişiklikleri kaydetmediniz. Emin misiniz?";
    }
});

// Submit butonuna tıklanıldığında değişiklikler kaydedildi olarak işaretlenir.
var submitButton = document.querySelector('.submitbtn');
submitButton.addEventListener('click', function () {
    unsavedChanges = false;
});


