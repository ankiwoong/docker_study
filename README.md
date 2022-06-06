# docker_study
|HOST|IP address  | arch | CPU | Memory | OS |
|--|--|--|--|--|--|
|master|192.168.111.100|X86_64|2core|4GiB |CentOS 7.6|
|node1|192.168.111.101|X86_64|2core|4GiB |CentOS 7.6|
|node2|192.168.111.102|X86_64|2core|4GiB |CentOS 7.6|

## 1. Docker Install
master, node1,node2, node3 시스템에 도커 설치

[docs.docker.com](https://docs.docker.com/engine/install/centos/)

    # yum install -y yum-utils
    # yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
    # yum install docker-ce docker-ce-cli containerd.io
    # systemctl start docker && systemctl enable docker
    # docker version
	    Client: Docker Engine - Community
		 Version:           19.03.8
		 API version:       1.40
		 Go version:        go1.12.17
		 Git commit:        afacb8b
		 Built:             Wed Mar 11 01:27:04 2020
		 OS/Arch:           linux/amd64
		 Experimental:      false

		Server: Docker Engine - Community
		 Engine:
		  Version:          19.03.8
		  API version:      1.40 (minimum version 1.12)
		  Go version:       go1.12.17
		  Git commit:       afacb8b
		  Built:            Wed Mar 11 01:25:42 2020
		  OS/Arch:          linux/amd64
		  Experimental:     false
		 containerd:
		  Version:          1.2.13
		  GitCommit:        7ad184331fa3e55e52b890ea95e65ba581ae3429
		 runc:
		  Version:          1.0.0-rc10
		  GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd
		 docker-init:
		  Version:          0.18.0
		  GitCommit:        fec3683

## kubespray : https://developer-ankiwoong.tistory.com/1673

[kubernetes.io](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/)
