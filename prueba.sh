#! /bin/bash

echo "Sincronizando Datos"
echo "Instalando dependencias"
sudo apt install sshpass
echo "Sincronizacion de datos con el servidor"
sshpass -p '822FCUnicauca' rsync -avzh public/ fcunicauca@13.82.209.77:FCUnicauca/server/fcserverunicauca/public



