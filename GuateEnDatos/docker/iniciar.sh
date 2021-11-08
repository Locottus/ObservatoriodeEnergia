#!/bin/sh
gnome-terminal -e "sudo docker-compose start"
read -p "Presione enter para continuar"
gnome-terminal -e "docker exec -it NOMBRE_CONTENEDOR yarn startAdminServer"
read -p "Presione enter para continuar"
gnome-terminal -e "docker exec -it NOMBRE_CONTENEDOR yarn startWebpackServer"