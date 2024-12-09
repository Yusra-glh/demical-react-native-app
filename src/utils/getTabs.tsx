import {svg} from '../assets/svg';

function getTabs() {
  return [
    {
      id: 1,
      name: 'Dashboard',
      icon: svg.DashboardSvg,
    },
    {
      id: 2,
      name: 'Search',
      icon: svg.PeopleSearchSvg,
    },
    {
      id: 3,
      name: 'Notifications',
      icon: svg.BellSvg,
    },
    {
      id: 4,
      name: 'Inbox',
      icon: svg.ChatSvg,
    },
  ];
}

export default getTabs;
