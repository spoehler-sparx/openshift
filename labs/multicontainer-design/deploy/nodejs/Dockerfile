FROM	registry.redhat.io/rhel8/nodejs-12
ARG NEXUS_BASE_URL
# MAINTAINER username <username@example.com>
LABEL org.opencontainers.image.authors="Scott Poehler spoehler07@gmail.com" \
      description="Container based on nodejs8."

COPY run.sh build ${HOME}/
RUN scl enable rh-nodejs8 'npm install --registry=http://$NEXUS_BASE_URL/repository/nodejs/'
EXPOSE	30080

CMD	["scl","enable","rh-nodejs8","./run.sh"]
