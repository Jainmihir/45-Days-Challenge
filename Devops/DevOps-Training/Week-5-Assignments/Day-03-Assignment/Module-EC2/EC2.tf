terraform {
  required_version = ">=0.12"
}


resource "aws_instance" "MJ-EC2" {
        ami = var.ami-id
        instance_type = var.instance_type
        count = var.count_of_ec2
        associate_public_ip_address = var.Public_ip
        subnet_id = var.subnet.id
        vpc_security_group_ids = [var.securitygroup]
        
        tags = {
                Name = "MJ-EC2"
        }
}
