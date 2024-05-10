provider "aws" {
    region = "us-east-2"
}

module "My_Vpc" {
    source = ".//Module-VPC"
}

