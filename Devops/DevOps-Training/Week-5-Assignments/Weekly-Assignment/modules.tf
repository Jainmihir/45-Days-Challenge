provider "aws" {
  region = "us-east-2"
}

module "EC2" {
  source = ".//Module-EC2"
}
module "s3-backend" {
  source = ".//Module-S3-backend"
}

