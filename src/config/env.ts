export const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // browser should use relative url
    return '';
  }

  if (process.env.VERCEL_URL) {
    // reference for vercel.com deployment
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    // reference for custom domain
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // assume localhost
  return `http://localhost:${process.env.PORT || 3000}`;
};

export const env = {
  baseUrl: getBaseUrl(),
  nodeEnv: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  email: {
    from: process.env.EMAIL_FROM || 'notifications@sdcyclops.ai',
    smtp: {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
    notifications: {
      to: process.env.NOTIFICATION_EMAIL,
    },
  },
  database: {
    url: process.env.DATABASE_URL,
  },
} as const;

// Validate environment variables
export function validateEnv() {
  const required = [
    'SMTP_USER',
    'SMTP_PASS',
    'NOTIFICATION_EMAIL',
  ];

  const missing = required.filter(
    (key) => !(process.env[key])
  );

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
} 