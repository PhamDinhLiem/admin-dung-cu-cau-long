git pull
rm -Rf node-modules
rm -Rf .next

yarn
yarn build

pm2 restart homeease-fe-landingpage

# pm2 stop homeease-be-strapi
# pm2 stop homeease-be-cms
# service mysql stop

# service mysql start
# pm2 start homeease-be-strapi
# pm2 start homeease-be-cms