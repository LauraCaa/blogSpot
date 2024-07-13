FROM "node"
WORKDIR /opt/blog
COPY . ./
EXPOSE "3000"
CMD ["sleep", "infinity"]