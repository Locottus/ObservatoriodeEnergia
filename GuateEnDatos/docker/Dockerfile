FROM node:12

RUN apt-get install -y git wget curl 

COPY ./owid-grapher-master .

RUN yarn

RUN cp .env.example .env

CMD ["sh","-c","yarn startTscServer" ]

EXPOSE 3030