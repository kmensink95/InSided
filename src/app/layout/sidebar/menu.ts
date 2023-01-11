export interface MenuItem {
  url: string;
  icon?: string;
  text: string;
  children?: MenuItem[];
}

export const MENU: MenuItem[] = [
  {
    url: '#',
    icon: 'chat',
    text: 'Forum',
  },
  {
    url: '#',
    icon: 'brush',
    text: 'Blog',
  },
  {
    url: '/',
    icon: 'flask',
    text: 'Research',
  },
  {
    url: '#',
    icon: 'inbox',
    text: 'Inbox',
  },
  {
    url: '#',
    icon: 'user',
    text: 'Users',
    children: [
      {
        url: '#',
        text: 'Overview',
      },
      {
        url: '#',
        text: 'Moderation',
      },
      {
        url: '#',
        text: 'Add user',
      },
    ],
  },
  {
    url: '#',
    icon: 'settings',
    text: 'Settings',
  },
];
