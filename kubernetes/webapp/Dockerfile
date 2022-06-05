FROM    alpine:latest
RUN     apk update && apk add --no-cache nodejs npm
WORKDIR /
ADD     ./package.json /
RUN     npm install                # package.json 파일에 명시되어 있는 의존 모듈을 설치
ADD     ./webapp.js /
CMD     node /webapp.js            # 애플리케이션을 기동 (3000번 포트로 대기하는 웹 애플리케이션을 실행)

