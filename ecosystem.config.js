module.exports = {
  apps : [{
    name: 'com.hotputt.club',
    script: 'npx',
    args: 'serve -s build -l 3000',
    instances: 1,
    autorestart: true,
    watch: false,
    interpreter   : 'none',
    max_memory_restart: '2G',
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
