export const TODAY = new Date()
export const LAST_WEEK = new Date(
  TODAY.getFullYear(),
  TODAY.getMonth(),
  TODAY.getDate() - 7
)

export const TIMES_24_MODE = [
  '00:00',
  '00:30',
  '01:00',
  '01:30',
  '02:00',
  '02:30',
  '03:00',
  '03:30',
  '04:00',
  '04:30',
  '05:00',
  '05:30',
  '06:00',
  '06:30',
  '07:00',
  '07:30',
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:00',
  '23:30'
]

export const EVENT_CATEGORIES = [
  {
    value: 'Airdrop',
    name: 'Airdrop'
  },
  {
    value: 'Amaqa',
    name: 'AMA/Q&A'
  },
  {
    value: 'AnnouncementNews',
    name: 'Announcement/News'
  },

  {
    value: 'Burn',
    name: 'Burn'
  },
  {
    value: 'Conference',
    name: 'Conference'
  },
  {
    value: 'Exchange',
    name: 'Exchange'
  },
  {
    value: 'Halving',
    name: 'Halving'
  },
  {
    value: 'Other',
    name: 'Other'
  },
  {
    value: 'Partnership',
    name: 'Partnership'
  },
  {
    value: 'Rebranding',
    name: 'Rebranding'
  },
  {
    value: 'Release',
    name: 'Release'
  },
  {
    value: 'Roadmap',
    name: 'Roadmap'
  },
  {
    value: 'Whitepaper',
    name: 'Whitepaper'
  },
  {
    value: 'CommunityEvent',
    name: 'CommunityEvent'
  },
  {
    value: 'ForkSwap',
    name: 'Fork/Swap'
  }
]
