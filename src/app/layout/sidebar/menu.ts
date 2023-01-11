export interface MenuItem {
  url: string;
  icon?: string;
  text: string;
  children: [MenuItem];
}
