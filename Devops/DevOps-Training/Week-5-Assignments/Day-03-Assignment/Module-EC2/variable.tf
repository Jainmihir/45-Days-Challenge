variable "subnet" {
  description = "Subnet Id for Public subnet"
}

variable "securitygroup" {
    description = "securitgroups in the vpc file "
}

variable "ami-id" {
    description = "OS FOR EC2 instance "
    type = string
    default = "ami-05fb0b8c1424f266b"
}

variable "instance_type" {
    description = "instance_type"
    type = string
    default = "t2.micro"
}

variable "Public_ip" {
    description = "associate_public_ip_address to ec2 instance"
    type = bool
    default = true
}

variable "count_of_ec2" {
    description = "count of the Ec2instance "
    type = number
    default = 1
}