## setup

|HOST|IP address  | arch | CPU | Memory | OS |
|--|--|--|--|--|--|
|master|192.168.111.100|X86_64|2core|4GiB |CentOS 7.6|
|node1|192.168.111.101|X86_64|2core|4GiB |CentOS 7.6|
|node2|192.168.111.102|X86_64|2core|4GiB |CentOS 7.6|

---

## 1. Docker Install

[docs-docker](https://docs.docker.com/engine/install/centos/)

```shell
# yum install -y yum-utils
# yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
# yum install docker-ce docker-ce-cli containerd.io
# systemctl start docker && systemctl enable docker
# docker version
    Client: Docker Engine - Community
     Version:           20.10.16
     API version:       1.41
     Go version:        go1.17.10
     Git commit:        aa7e414
     Built:             Thu May 12 09:19:45 2022
     OS/Arch:           linux/amd64
     Context:           default
     Experimental:      true

    Server: Docker Engine - Community
     Engine:
      Version:          20.10.16
      API version:      1.41 (minimum version 1.12)
      Go version:       go1.17.10
      Git commit:       f756502
      Built:            Thu May 12 09:18:08 2022
      OS/Arch:          linux/amd64
      Experimental:     false
     containerd:
      Version:          v1.6.4
      GitCommit:        212e8b6fa2f44b9c21b2798135fc6fb7c53efc16
     runc:
      Version:          1.1.1
      GitCommit:        v1.1.0-20-g52de29d7
     docker-init:
      Version:          0.19.0
      GitCommit:        de40ad0
```

## 2. kubernetes

[docs-kubernetes](https://kubernetes.io/ko/docs/home/)

[kubespray-kubernetes](https://developer-ankiwoong.tistory.com/1673)


