export const showSidebar = () => ({
  type: 'SHOW_SIDEBAR',
});

export const hideSidebar = () => ({
  type: 'HIDE_SIDEBAR',
});

export const pickTeam = (id: number) => ({
  type: 'PICK_TEAM',
  payload: id,
});