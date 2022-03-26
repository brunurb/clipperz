export default {
  ui: {
    loading: "Загрузка",
    login: "Войти",
    tag: "Тег",
    or: "Или",
    failed: "Неудача",
    yes: "Да",
    no: "Нет",
    edit: "Изменить",
    toClone: "Клонировать",
    copied: "Скопировано",
    copy: "Копия",
    delete: "Удалить",
    archive: "В архив",
    restore: "Восстановить",
    save: "Сохранить",
    cancel: "Закрыть",
    all: "Все",
    notes: "Заметки",
    create: "Создать",
    turnOn: "Включить",
    turnOff: "Выключить",
    search: "Поиск"
  },

  menu: {
    join: "Создать.Аккаунт",
    login: "Вход",
    demo: "Демо",
    features: "Возможности",
    privacy: "Приватность",
    terms: "Условия пользования",
    issues: "Проблемы",
    status: "Статус",
    passphrase: "Пароль",
    export: "Экспорт",
    import: "Импорт",
    logout: "Выйти",
    preferences: "Настройки",
  },

  hello: {
    h2: "Бесплатный, анонимный менеджер паролей с e2e шифрованием и открытым кодом_"
  },

  join: {
    h1: "Аккаунт",
    title: "Регистрация",
    step1: "Генерация SRP ключей",
    step2: "Генерация мастер ключа",
    step3: "Генерация RSA ключей",
  },

  joinForm: {
    step0: "Введите учетные данные",
    step1: "Подтвердите пароль",
    step2: "Ознакомьтесь с правилами сервиса",
    check0: `Я понимаю, что <i>Wault</i> не может восстановить утраченный пароль`,
    check1: `Я прочитал и согласен с <a target="_blank" href="{url}">правилами сервиса</a>.`,
  },

  login: {
    h1: "Вход",
    title: "Вход",
    auth0: "SRP#0",
    auth1: "SRP#1"
  },

  spa: {
    title: "Wault Offline Copy"
  },

  space: {
    titleTemplate: "%s ✲ воркспейс",
  },

  spaceLeft: {
    workspaces: "Воркспейсы",
  },

  spaceForm: {
    title: "Название",
    label: "Лейбл",
    value: "Значение",
  },

  export: {
    h1: "Оффлайн копия",
    p1: "Скачайте офлайн копию вашего аккаунта Wault. Очень удобно, когда нет подключения к Интернету.",
    p2: "Оффлайн копия — это всего лишь один HTML-файл, который содержит как все веб-приложение Wault, так и все ваши зашифрованные данные.",
    p3: "Копия так же безопасна, как и облачный сервис Wault, поскольку он используют один и тот же код и архитектуру шифрования.",
    button: "Скачать",
  },

  termination: {
    h1: "Удалить аккаунт",
    p1: "Перед удалением учетной записи убедитесь, что вы скачали последнюю версию оффлайн копии вашего аккаунта.",
    check: "Все мои данные будут безвозвратно удалены. Я понимаю, что это действие нельзя отменить.",
    button: "Удалить навсегда"
  },

  mfa: {
    h1: "Двухэтапная аутентификация",
    p1: "Включите более надежную защиту аккаунта – злоумышленники не смогут получить к нему доступ, даже если узнают пароль. Если эта функция включена, для входа используются два компонента: пароль и одноразовый код.",
    p2: "В качестве второго этапа аутентификации мы рекомендуем использовать приложение Authy или Google Authenticator.",
  },

  mfaEnable: {
    p1Html: `Отсканируйте QR-код в приложении для многофакторной аутентификации, или добавитье секрет вручную: <span data-cy="secret" class="text-break text-white">{secret}</span>`,
    p2: "Сохраните секрет в надежном месте, при утрате телефона доступ к вашему аккаунту станет невозможным.",
    check: "Я понимаю, что потеряю доступ к аккаунту в случае утраты второго фактора",
  },

  workspaceList: {
    h1: "Воркспейс",
    p1: "Создайте свой первый воркспейс для управления паролями, учетными данными и заметками"
  },

  dialog: {
    deleteCard: "Удалить?",
    archiveCard: "Архивировать?",
    deleteWorkspaceHtml: "Чтобы удалить воркспейс,<br>введите его имя",
    renameWorkspace: "Переименовать воркспейс",
    createWorkspace: "Создать воркспейс",
    areYouSure: "Вы уверены?",
    disableMfa: "Отключить MFA?"
  },

  panelPassphrase: {
    h1: "Изменить пароль",
    p1: "Меняйте пароль время от времени, это основы безопасности.",
    check: "Я понимаю, что Wault не может восстановить утерянный пароль"
  },

  /**
   * domain
   */
  card: {
    tags: "Теги",
    archived: "Архив"
  },

  workspace: {
    title: "Название"
  },

  user: {
    oldUsername: "Старый логин",
    newUsername: "Новый логин",
    newPassword: "Новый пароль",
    username: "Логин",
    password: "Пароль",
    confirmPassword: "Подтвердите пароль",
    otpPasscode: "Одноразовый пароль",
    otpDigits: "6 цифр",
  }
}
