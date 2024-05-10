## Import an existing resource from AWS in Terraform state file

provider "aws" {
    region = "us-east-2"
}

# terraform import aws_instance.ec2_example <instance id>
resource "aws_instance" "ec2_example" {
    ami = ""
    instance_type = ""
}