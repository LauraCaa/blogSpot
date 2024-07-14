FROM "node"
WORKDIR /opt/post
COPY . ./
EXPOSE "3000"
CMD ["sleep", "infinity"]