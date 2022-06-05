FROM    ubuntu:16.04
RUN     apt-get update && apt-get install -y git
COPY    ./content-cloner /content-cloner
RUN     chmod a+x /content-cloner
WORKDIR /
CMD     [ "/content-cloner" ]
