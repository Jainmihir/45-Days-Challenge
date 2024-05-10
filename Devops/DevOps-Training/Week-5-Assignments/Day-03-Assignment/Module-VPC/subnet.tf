resource "aws_subnet" "Public-Subnet" {
  vpc_id     = aws_vpc.MJ-VPC.id
  cidr_block = var.Vpc-cidr_blocks[1]
  availability_zone = var.availability_zones[0]

  tags = {
    Name = "Public-Subnet"
  }
}
