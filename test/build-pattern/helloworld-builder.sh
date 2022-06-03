docker image build -t helloworld-build -f Dockerfile.builder . 
docker container create --name build-container helloworld-build
docker container cp build-container:/myapp/helloworld .

docker image build -t helloworld-runtime -f Dockerfile.runtime .

docker container rm -f build-container
rm -f helloworld
