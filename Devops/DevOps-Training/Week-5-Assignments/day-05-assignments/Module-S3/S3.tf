terraform {
    backend "s3" {
        bucket = "mjitt"
        key = "key/terraform.tfstate"
        region = "us-east-2"
    }
}