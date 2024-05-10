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
