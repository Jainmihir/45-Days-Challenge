output publicIP {
    value = aws_instance.MJ-EC2[0].public_ip
}