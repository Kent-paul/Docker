FROM node:8.11.1

WORKDIR /testered

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]
