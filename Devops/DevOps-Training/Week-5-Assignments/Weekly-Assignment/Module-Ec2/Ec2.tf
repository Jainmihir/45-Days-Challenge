terraform {
  required_version = ">=0.12"
}
locals {
  ingress_rules = [
    {
      port = 443
      description = "For Https " 
    },
    {
      port = 22
      description = "For the ssh "
    },
    {
      port = 80
      description = "For the Http"
    }
  ]
}


resource "aws_instance" "ec2_example" {

    ami = var.instance_ami
    instance_type = var.instance_type
    vpc_security_group_ids = [aws_security_group.main.id]
    tags = {
      Name = "Mihir-Webserver"
    }

  user_data = <<-EOF
      #!/bin/sh
      sudo apt-get update
      sudo apt install -y apache2
      sudo systemctl status apache2
      sudo systemctl start apache2
      sudo chown -R $USER:$USER /var/www/html
      sudo echo "<html><body><h1>Hello this is module-1 at instance id `curl http://169.254.169.254/latest/meta-data/instance-id` </h1></body></html>" > /var/www/html/index.html
      EOF
}

resource "aws_security_group" "main" {
   name        = "EC2-webserver-SG-1"
   description = "Webserver for EC2 Instances"

  dynamic "ingress" {
    for_each = local.ingress_rules
    
    content {
      description = ingress.value.description
      from_port = ingress.value.port
      to_port = ingress.value.port
      protocol = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
    }
    
  }

  egress {
    from_port   = 0
    protocol    = "-1"
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}


