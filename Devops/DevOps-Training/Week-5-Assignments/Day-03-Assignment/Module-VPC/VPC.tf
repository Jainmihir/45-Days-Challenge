terraform {
  required_version = ">=0.12"
}

resource "aws_vpc" "MJ-VPC" {
  cidr_block       = var.Vpc-cidr_blocks[0]
  instance_tenancy = "default"
  tags = {
    Name = "MJ-VPC"
  }
}


resource "aws_security_group" "Sg-MJ" {
  name        = "security_group"
  description = "Allow securitgroup inbound traffic"
  vpc_id = aws_vpc.MJ-VPC.id
  ingress {
        from_port = 22
        to_port  = 22
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    Name = "Sg-MJ"
  }
}



resource "aws_subnet" "Public-Subnet" {
  vpc_id     = aws_vpc.MJ-VPC.id
  cidr_block = var.Vpc-cidr_blocks[1]
  availability_zone = var.availability_zones[0]

  tags = {
    Name = "Public-Subnet"
  }
}



resource "aws_subnet" "Private-Subnet" {
  vpc_id     = aws_vpc.MJ-VPC.id
  cidr_block = var.Vpc-cidr_blocks[2]
  availability_zone = var.availability_zones[1]
  tags = {
    Name = "Private-Subnet"
  }
}


resource "aws_internet_gateway" "MJ-igw" {
  vpc_id = aws_vpc.MJ-VPC.id

  tags = {
    Name = "MJ-igw"
  }
}


resource "aws_route_table" "RT-PUBLIC" {
  vpc_id = aws_vpc.MJ-VPC.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.MJ-igw.id
  }

  tags = {
    Name = "RT-PUBLIC"
  }
}



resource "aws_route_table" "RT-PRIVATE" {
        vpc_id = aws_vpc.MJ-VPC.id

        tags = {
                Name = "RT-PRIVATE"
        }

}


resource "aws_route_table_association" "a" {
  subnet_id      = aws_subnet.Public-Subnet.id
  route_table_id = aws_route_table.RT-PUBLIC.id
}


resource "aws_route_table_association" "b" {
  subnet_id      = aws_subnet.Private-Subnet.id
  route_table_id = aws_route_table.RT-PRIVATE.id
}

