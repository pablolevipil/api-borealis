-- Crear base de datos si no existe
SELECT 'CREATE DATABASE borealis'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'borealis')\gexec

