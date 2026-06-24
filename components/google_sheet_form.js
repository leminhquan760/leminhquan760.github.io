const scriptURL =
  "https://script.google.com/macros/s/AKfycbxKGq0pd3iJGj9aZmW-NnAblxZd5tLrEmf1BHUfOhCCfG_2timYX-NUBleaJg-RMD2E3Q/exec";

document.addEventListener("submit", (e) => {
  const form = e.target;
  if (form.id !== "submit-to-google-sheet") return;

  e.preventDefault();

  const btn = form.querySelector("button[type=submit]");
  const originalText = btn ? btn.textContent : "";
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Đang gửi thông tin...";
  }

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        alert("Đăng ký thành công!");
        form.reset();
      } else {
        alert("Đăng ký thất bại!");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Có lỗi xảy ra. Vui lòng thử lại!");
    })
    .finally(() => {
      if (btn) {
        btn.disabled = false;
        btn.textContent = originalText;
      }
    });
});