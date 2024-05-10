output "result" {
    value = [aws_security_group.Sg-MJ.id,aws_subnet.Public-Subnet]
}