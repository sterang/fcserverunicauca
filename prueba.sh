#! /bin/bash

echo "Sincronizando Archivos"
echo "Instalando dependencias"
sudo apt install sshpass
echo "Sincronizacion de datos con el servidor"
sshpass -p '822FCUnicauca' rsync -avzh public/ fcunicauca@40.122.146.97:FCUni/fcserverunicauca/public

