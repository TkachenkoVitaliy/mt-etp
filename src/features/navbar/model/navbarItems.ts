/* eslint-disable max-lines */
import { INavbarItem, NavbarItemsLinks, NavbarItemsNames } from './types'

export const navbarItems: Array<INavbarItem> = [
  {
    id: 1,
    name: NavbarItemsNames.REPORTS,
    link: NavbarItemsLinks.REPORTS,
    iconName: 'dashboard',
  },
  {
    id: 2,
    name: NavbarItemsNames.PURCHASES,
    link: NavbarItemsLinks.PURCHASES,
    iconName: 'dashboard',
  },
  {
    id: 3,
    name: NavbarItemsNames.WAREHOUSE_DOCUMENTS,
    link: NavbarItemsLinks.WAREHOUSE_DOCUMENTS,
    iconName: 'dashboard',
  },
  {
    id: 4,
    name: NavbarItemsNames.SALES,
    link: NavbarItemsLinks.SALES,
    iconName: 'dashboard',
  },
  {
    id: 5,
    name: NavbarItemsNames.FINANCES,
    link: NavbarItemsLinks.FINANCES,
    iconName: 'dashboard',
  },
  {
    id: 6,
    name: NavbarItemsNames.DICTIONARIES,
    iconName: 'dashboard',
    isExpanded: false,
    subMenuItems: [
      {
        id: 1,
        name: NavbarItemsNames.NOMENCATURES,
        link: NavbarItemsLinks.NOMENCATURES,
      },
      {
        id: 2,
        name: NavbarItemsNames.COUNTERPARTIES,
        link: NavbarItemsLinks.COUNTERPARTIES,
      },
    ],
  },
]
