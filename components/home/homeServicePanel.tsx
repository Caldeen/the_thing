import { Box, Container, Link, Paper, Stack, Typography } from '@mui/material'
import { homelabServices } from './services'

type HomeServicePanelProps = {
  title: string
  labStatus: 'Online' | 'Offline'
}

const statusPalette = {
  Online: {
    dot: '#22c55e',
    glow: 'rgba(34, 197, 94, 0.28)',
    label: 'Online',
  },
  Offline: {
    dot: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.28)',
    label: 'Offline',
  },
} as const

type StatusValue = HomeServicePanelProps['labStatus']

const StatusBadge = ({ status }: { status: StatusValue }) => {
  const palette = statusPalette[status]

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        px: 1.25,
        py: 0.5,
        borderRadius: 999,
        border: '1px solid',
        borderColor: palette.glow,
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
      }}
    >
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: palette.dot,
          boxShadow: `0 0 0 4px ${palette.glow}`,
        }}
      />
      <Typography variant="caption" sx={{ letterSpacing: 0.6, textTransform: 'uppercase' }}>
        {palette.label}
      </Typography>
    </Box>
  )
}

const HomeServicePanel = ({ title, labStatus }: HomeServicePanelProps) => {
  return (
    <Container sx={{ py: 4 }}>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
            {title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are welcome to take a tour to my homelab if it is online. Look below.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', letterSpacing: 0.8, textTransform: 'uppercase' }}>
            Lab status
          </Typography>
          <StatusBadge status={labStatus} />
        </Box>

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.02)',
          }}
        >
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            If prompted use the following credentials:
          </Typography>
          <Stack spacing={0.5}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Username: <Box component="span" sx={{ color: 'text.primary' }}>guestuser</Box>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Password: <Box component="span" sx={{ color: 'text.primary' }}>guestpassword</Box>
            </Typography>
          </Stack>
        </Paper>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, minmax(0, 1fr))',
            },
            gap: 2,
          }}
        >
          {homelabServices.map((service) => (
            <Paper
              key={service.name}
              variant="outlined"
              sx={{
                p: 2,
                minHeight: 220,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 3,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                transition: 'transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  borderColor: 'rgba(255,255,255,0.18)',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.22)',
                },
              }}
            >
              <Stack spacing={2} sx={{ height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2 }}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: 112,
                      height: 56,
                      flexShrink: 0,
                    }}
                  >
                    {service.logoSrc ? (
                      <Box
                        component="img"
                        src={service.logoSrc}
                        alt={service.logoAlt ?? `${service.name} logo`}
                        loading={service.name === 'Zabbix' ? 'eager' : 'lazy'}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block',
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 2,
                          display: 'grid',
                          placeItems: 'center',
                          fontWeight: 700,
                          letterSpacing: 1,
                          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.16))',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        {service.initials ?? service.name.slice(0, 2).toUpperCase()}
                      </Box>
                    )}
                  </Box>
                  <StatusBadge status={labStatus} />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" component="h2" sx={{ mb: 0.75 }}>
                    {service.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {service.description}
                  </Typography>
                </Box>

                <Box>
                  {service.href ? (
                    <Link href={service.href} underline="hover" sx={{ fontWeight: 600 }}>
                      Open panel
                    </Link>
                  ) : (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Reserved slot
                    </Typography>
                  )}
                </Box>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Stack>
    </Container>
  )
}

export default HomeServicePanel

