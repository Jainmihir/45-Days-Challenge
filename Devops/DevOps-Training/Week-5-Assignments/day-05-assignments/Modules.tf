# Configure the remote backend in S3 to store the state file for your terraform module


provider "aws" {
    region = "us-east-2"
}

module "EC2" {
    source = ".//Module-EC2"
}
module "S3" {
    source = ".//Module-S3"
}

