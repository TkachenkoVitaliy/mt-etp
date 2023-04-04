# Описание системы

### Поля которые стоит включать в сущности для определения возможных действий на фронтенде

1. Rights (права на действия с сущностью)
2. CanEdit
3. CanDelete
4. CanCopy
5. CanCreate (скорее не сущности, а в модуле, мб даже не фронтенде)
6. isPermanent
7. Locked (блокирует все действия с сущностью)
8. Version (на случай если несколько пользователей пытаются редактировать одну и ту же сущность)

### Сущности системы

**Для аутентификации и разделения прав**

- Пользователь (сотрудник)
- Должность
- Права

**Номенклатура/Услуги**

- Номенклатура
- Номенклатурная группа
- Возможно, продажная группа или тэги
- Траспортные расходы
- Металлообработка (переработка? хз куда впихнуть когда из цинкового рулона нам делают цинковую ленту например)

**Документы**

- Заявка на завод
- Входящяя УПД (в том числе корректировочные)
- Счет для клиента
- Исходящая УПД (в том числе корретировочные)
- Доверенность
- Акт сверки (мб в акты, но хз)

**Акты**

- Акт переработки
- Акт инвентаризации
- Акт списания

**Филиалы/Склады**

- Дивизион
- Филиал
- Склад
- Сектор склада

**Прочее - на продумать!!!**

- Цены, прайсы (МЦ, Директорские цены)

### Отчеты

1. Отчеты по продажам
2. Отчеты по неликвидам
3. Отчеты по платежам

### Бизнес роуты

1. Составление заявки на металлопрокат внутри компании
2. Составление заявки на металлопрокат на завод
3. Подписание спецификации на металлопрокат (акцепт)
4. Отгрузка металлопроката
5. Приходование полученного металлопроката
6. Оформление счета (резерв)
7. Продажа металлопроката или снятие с резерва
   Опциональные шаги
   а) Перемещение металла между скаладами
   б) Возврат товара
   в) Оплата товара (обязательный, но может менятся порядок в зависимости от условий оплаты)
