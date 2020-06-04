module.exports = {
  apps : [{
    name: 'app',
    script: './bin/www',
    instances: 1,
    watch: true,
    ignore_watch: [ // 不⽤监听的⽂件
      "node_modules",
      "logs"
    ],
    autorestart: true,
    max_memory_restart: '1G',
    "error_file": "./logs/app-err.log", // 错误⽇志⽂件
    "out_file": "./logs/app-out.log",
    "log_date_format": "YYYY-MM-DD HH:mm:ss", // 给每⾏⽇志标记⼀个时间
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  //自动化部署到服务器
<<<<<<< HEAD
  deploy : {
    production : {
      user : 'Administrator',
      host : '115.28.130.168',
      ref  : 'origin/master',
      repo : 'git@github.com:OpenRedZhao/blog.git',
      path : '/item/blog',
      ssh_options: "StrictHostKeyChecking=no",
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      "env": {
        "NODE_ENV": "production"
        }
    }
  }
=======
  // deploy : {
  //   production : {
  //     user : 'Administrator',
  //     host : '115.28.130.168',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:OpenRedZhao/blog.git',
  //     path : '/item/blog',
  //     ssh_options: "StrictHostKeyChecking=no",
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     "env": {
  //       "NODE_ENV": "production"
  //       }
  //   }
  // }
>>>>>>> 97ba8397326001e133dd522746d4f7bb818c8105
};
