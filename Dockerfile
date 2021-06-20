FROM anapsix/alpine-java:8_server-jre_unlimited
VOLUME ["/tmp","/logs/lmfun-control-center"]
ADD *.jar myapp.jar
ENTRYPOINT [ "sh", "-c", "java -Dspring.profiles.active=102dev -Dspring.cloud.config.uri=http://configcenter.5jiaju.cn -Dspring.application.name=lmfun-control-center-102dev -Dspring.cloud.config.username=dkongjianconfig -Dspring.cloud.config.password=df300087-1c6d-474c-930c-0012e9b0d2df -jar myapp.jar" ]
EXPOSE 8015