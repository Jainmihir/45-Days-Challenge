resource "aws_instance" "ec2_example" {
    ami = var.ami-id
    instance_type = var.instance_type
    
    tags = { 
        Name = "MJ-EC2"
    }
}