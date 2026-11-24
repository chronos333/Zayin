"use strict";

const elements = {
  chatArea: document.querySelector(".chat-area"),
  chatForm: document.getElementById("chat-form"),
  chatInput: document.getElementById("chat-input"),
  clearChatButton: document.getElementById("clear-chat-button"),
  messages: document.getElementById("messages"),
  mobileSettingsButton: document.getElementById("mobile-settings-button"),
  newChatButton: document.getElementById("new-chat-button"),
  openSettingsButton: document.getElementById("open-settings-button"),
  resetSettingsButton: document.getElementById("reset-settings-button"),
  settingsDialog: document.getElementById("settings-dialog"),
  settingsStatus: document.getElementById("settings-status"),
  sendButton: document.getElementById("send-button"),
  welcomeScreen: document.getElementById("welcome-screen")
};

const SETTINGS_KEY = "zayin.chat.preferences.v1";
const defaultPreferences = { theme: "zayin", textSize: "padrao", chatWidth: "conforto" };
const allowedPreferences = {
  theme: ["zayin", "noite"],
  textSize: ["compacto", "padrao", "ampliado"],
  chatWidth: ["conforto", "ampla"]
};
const hannaSetupMessage = "Entendi! A conversa já está pronta, mas ainda não consigo analisar mensagens porque a integração com o serviço de IA não foi configurada. Quando estiver conectada, vou poder ajudar com sua ideia e seus próximos passos.";

function readPreferences() {
  try {
    const saved = window.localStorage.getItem(SETTINGS_KEY);
    if (!saved) return { ...defaultPreferences };

    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new TypeError("As preferências salvas não estão em um formato válido.");
    }

    return Object.fromEntries(
      Object.entries(defaultPreferences).map(([key, defaultValue]) => [
        key,
        allowedPreferences[key].includes(parsed[key]) ? parsed[key] : defaultValue
      ])
    );
  } catch (error) {
    console.error("Não foi possível carregar as preferências da interface.", error);
    elements.settingsStatus.textContent = "Não foi possível carregar as preferências salvas. Os padrões estão ativos.";
    return { ...defaultPreferences };
  }
}

function applyPreferences(preferences) {
  document.documentElement.dataset.theme = preferences.theme;
  document.documentElement.dataset.textSize = preferences.textSize;
  document.documentElement.dataset.chatWidth = preferences.chatWidth;
  document.querySelector(`input[name="theme"][value="${preferences.theme}"]`).checked = true;
  document.querySelector(`input[name="text-size"][value="${preferences.textSize}"]`).checked = true;
  document.querySelector(`input[name="chat-width"][value="${preferences.chatWidth}"]`).checked = true;
  document.querySelector('meta[name="theme-color"]').content = preferences.theme === "noite" ? "#142942" : "#1E3A5F";
}

function updatePreferences() {
  const preferences = {
    theme: document.querySelector('input[name="theme"]:checked').value,
    textSize: document.querySelector('input[name="text-size"]:checked').value,
    chatWidth: document.querySelector('input[name="chat-width"]:checked').value
  };
  applyPreferences(preferences);

  try {
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(preferences));
    elements.settingsStatus.textContent = "Preferências salvas neste dispositivo.";
  } catch (error) {
    console.error("Não foi possível salvar as preferências da interface.", error);
    elements.settingsStatus.textContent = "A interface foi atualizada, mas o navegador não permitiu salvar as preferências.";
  }
}

function openSettings() {
  elements.settingsStatus.textContent = "";
  elements.settingsDialog.showModal();
}

function scrollToLatestMessage() {
  elements.chatArea.scrollTop = elements.chatArea.scrollHeight;
}

function addMessage(author, text) {
  const isUser = author === "Você";
  const message = document.createElement("article");
  message.className = `message${isUser ? " user" : " assistant"}`;

  if (!isUser) {
    const avatar = document.createElement("span");
    avatar.className = "message-avatar";
    avatar.setAttribute("aria-hidden", "true");
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-brain";
    avatar.append(icon);
    message.append(avatar);
  }

  const content = document.createElement("div");
  content.className = "message-content";

  if (!isUser) {
    const name = document.createElement("strong");
    name.className = "message-name";
    name.textContent = "Hanna";
    content.append(name);
  }

  const body = document.createElement("p");
  body.className = "message-text";
  body.textContent = text;
  content.append(body);
  message.append(content);
  elements.messages.append(message);
  scrollToLatestMessage();
}

function resetChat() {
  elements.messages.replaceChildren();
  elements.welcomeScreen.hidden = false;
  elements.chatInput.value = "";
  elements.chatInput.style.height = "";
  elements.sendButton.disabled = true;
  elements.chatInput.focus();
}

function sendMessage() {
  const text = elements.chatInput.value.trim();
  if (!text) return;

  elements.welcomeScreen.hidden = true;
  addMessage("Você", text);
  elements.chatInput.value = "";
  elements.chatInput.style.height = "";
  elements.sendButton.disabled = true;
  addMessage("Hanna", hannaSetupMessage);
  elements.chatInput.focus();
}

elements.chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage();
});

elements.chatInput.addEventListener("input", () => {
  elements.sendButton.disabled = elements.chatInput.value.trim().length === 0;
  elements.chatInput.style.height = "auto";
  elements.chatInput.style.height = `${Math.min(elements.chatInput.scrollHeight, 160)}px`;
});

elements.chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
    event.preventDefault();
    if (!elements.sendButton.disabled) elements.chatForm.requestSubmit();
  }
});

document.querySelectorAll(".prompt-suggestion").forEach((suggestion) => {
  suggestion.addEventListener("click", () => {
    elements.chatInput.value = suggestion.dataset.prompt || "";
    elements.chatInput.dispatchEvent(new Event("input", { bubbles: true }));
    elements.chatInput.focus();
  });
});

elements.newChatButton.addEventListener("click", resetChat);
elements.clearChatButton.addEventListener("click", resetChat);
elements.openSettingsButton.addEventListener("click", openSettings);
elements.mobileSettingsButton.addEventListener("click", openSettings);
elements.settingsDialog.querySelectorAll('input[type="radio"]').forEach((input) => {
  input.addEventListener("change", updatePreferences);
});
elements.resetSettingsButton.addEventListener("click", () => {
  applyPreferences(defaultPreferences);
  updatePreferences();
});

applyPreferences(readPreferences());
