module.exports = {
  poweredByHeader: false,
  distDir: 'dist',
  webpack: (config, options) => {
    const { isServer } = options;
    const testPattern = /\.(woff|woff2|eot|ttf|otf)$/;

    config.module.rules.push({
      test: testPattern,
      issuer: {
        // Next.js already handles url() in css/sass/scss files
        test: /\.\w+(?<!(s?c|sa)ss)$/i,
      },
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: 8192,
            fallback: require.resolve('file-loader'),
            publicPath: '/_next/static/chunks/fonts/',
            outputPath: `${isServer ? '../' : ''}static/chunks/fonts/`,
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source:
          '/en/posts/monitoring-explained-differences-logging-tracing-profiling',
        destination:
          'https://greeeg.com/differences-between-logging-tracing-profiling',
        permanent: true,
      },
      {
        source:
          '/en/posts/distributed-architecture-microservices-communication',
        destination:
          'https://greeeg.com/microservices-patterns-synchronous-vs-asynchronous',
        permanent: true,
      },
    ];
  },
};
