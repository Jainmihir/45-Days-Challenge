# base image
FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y git


CMD [ "echo" , "hello this image for installing git " ]

##-> to push the image in aws ecr
## aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 975050349146.dkr.ecr.us-east-2.amazonaws.com
## docker build -t mj .
## docker tag mj:latest 975050349146.dkr.ecr.us-east-2.amazonaws.com/mj:latest
## docker push 975050349146.dkr.ecr.us-east-2.amazonaws.com/mj:latest
## for pulling 
## docker pull aws_account_id.dkr.ecr.us-west-2.amazonaws.com/amazonlinux:latest