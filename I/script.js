// Константы для получения аватарки и имени пользователя
const discordId = "DISCORD_USER_ID"; // Вставьте Discord ID пользователя
const avatarHash = "AVATAR_HASH"; // Вставьте хэш аватарки пользователя
const authorName = "Имя Пользователя"; // Вставьте имя пользователя

// Обновляем аватарку и имя
const avatarUrl = `https://cdn.discordapp.com/avatars/${discordId}/${avatarHash}.png`;
document.getElementById("author-avatar").src = avatarUrl;
document.getElementById("author-name").textContent = authorName;

// Управление модальным окном
const modal = document.getElementById("info-modal");
const infoButton = document.getElementById("info-button");
const closeButton = document.getElementById("close-button");

infoButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закрытие модального окна при клике вне его
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});