FROM golang:1.14
WORKDIR /myapp
COPY helloworld.go .
RUN  go build -o helloworld . 
ENTRYPOINT [ "./helloworld" ]

