@{
  Settings = @{
    RemoteHost = 'root@devcampus.es'
    RemoteWebRoot = '/var/www/devcampus/manuales-backend'
    RemoteBackupRoot = '/var/backups/devcampus-backend-manuals'
    RemoteLogRoot = '/var/log/devcampus-backend-manuals'
    HealthOrigin = 'https://devcampus.es'
  }
  Manuals = @{
    node = @{
      Id = 'node'
      Name = 'Fundamentos de Node.js'
      SourcePath = 'manuals/node'
      BuildPath = 'manuals/node/dist'
      PublicRoute = '/manuales/node-fundamentos'
      RemotePath = '/var/www/devcampus/manuales-backend/node'
      HealthPath = '/manuales-backend/node/'
      HealthMarker = 'name="devcampus-manual" content="node"'
      Status = 'pilot'
    }
  }
}
