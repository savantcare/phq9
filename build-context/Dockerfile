FROM registry.gitlab.com/grmtech-oss/docker-images/ubuntu-nginx-gulp

# needed to install bower components from supervisor
#RUN apt install -y git
#RUN npm install -g bower


# Docker container runs as long as the command you specify with CMD, ENTRTYPOINT or through the command line is running. 
# I am using CMD instead of entrypoing since CMD can be overridden on the command line easily
# ref: https://www.ctl.io/developers/blog/post/dockerfile-entrypoint-vs-cmd/
#CMD ["/usr/bin/supervisord", "-n","-c","/etc/supervisor/supervisord.conf"]
