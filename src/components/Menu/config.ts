import { MenuEntry } from '@weedfarm-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.weedfarm.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.weedfarm.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://weedfarm.info',
      },
      {
        label: 'Tokens',
        href: 'https://weedfarm.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://weedfarm.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://weedfarm.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.weedfarm.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/weedfarm',
      },
      {
        label: 'Docs',
        href: 'https://docs.weedfarm.finance',
      },
      {
        label: 'Blog',
        href: 'https://weedfarm.medium.com',
      },
    ],
  },
]

export default config
