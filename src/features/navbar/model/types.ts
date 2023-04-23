export enum NavbarItemsNames {
  REPORTS = 'Отчеты',
  PURCHASES = 'Закупки',
  WAREHOUSE_DOCUMENTS = 'Складские документы',
  SALES = 'Продажи',
  FINANCES = 'Финансы',
  DICTIONARIES = 'Справочники',
  NOMENCATURES = 'Номенклатуры',
  COUNTERPARTIES = 'Контрагенты',
}

export enum NavbarItemsLinks {
  REPORTS = '/reports',
  PURCHASES = '/purchases',
  WAREHOUSE_DOCUMENTS = '/warehouse_documents',
  SALES = '/sales',
  FINANCES = '/finances',
  NOMENCATURES = '/nomenclatures',
  COUNTERPARTIES = '/counterparties',
}

export type INavbarItem = INavbarGroupItem | INavbarSubItem

interface INavbarGroupItem extends INavbarBaseItem {
  link?: NavbarItemsLinks
  iconName: string
  isExpanded: boolean
  subMenuItems: Array<INavbarSubItem>
}

interface INavbarSubItem extends INavbarBaseItem {
  link: NavbarItemsLinks
}

interface INavbarBaseItem {
  id: number
  name: NavbarItemsNames
}
