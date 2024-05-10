provider "aws" {
    region = "us-east-2"
}

module "My_Vpc" {
    source = ".//Module-VPC"
}
module "My_Ec2" {
    source = ".//Module-EC2"
    securitygroup = module.My_Vpc.result[0]
    subnet = module.My_Vpc.result[1]  
}
output my_public_ip {
    value = module.My_Ec2.publicIP
}

