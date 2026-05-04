export type LabServiceStatus = 'Online' | 'Offline'

export type LabService = {
  name: string
  description: string
  href?: string
  logoSrc?: string
  logoAlt?: string
  initials?: string
}

export const homelabServices: LabService[] = [
  {
    name: 'Zabbix',
    description: 'Infrastructure monitoring dashboard.',
    href: 'https://nextfrontend.fly.dev/zabbix/index.php',
    logoSrc: '/zabbix_logo.png',
    logoAlt: 'Zabbix logo',
  },
  {
    name: 'Jenkins',
    description: 'Automated CI/CD pipeline.',
    href: 'https://nextfrontend.fly.dev/jenkins',
    logoSrc: '/jenkins2.png',
    logoAlt: 'Jenkins logo',
  },
  {
    name: 'Reserved',
    description: '---',
    initials: 'RES',
  },
]
