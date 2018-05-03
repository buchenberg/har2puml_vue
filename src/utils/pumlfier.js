
const resourceFromPath = pathString => {
  const pathSegments = pathString.split('/')
  const pathLength = pathSegments.length
  const suspect1 = pathSegments[pathLength - 1] // last path segment
  const suspect2 = pathSegments[pathLength - 2] // second to last path segment
  const regex = /v\d/g // looking for 'v' plus a single digit e.g. 'v1'
  if (regex.test(suspect1)) {
    return suspect2.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase())
  }
  return suspect1.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase())
}

export default (har, callback) => {
  // const selected = JSON.parse(localStorage.getItem('entries_selected')).sort()
  const log = JSON.parse(har).log
  let pumlText = '@startuml\n\n'

  // usual suspects
  pumlText += 'actor "User" as usr\n' +
    'participant "User Agent" as app\n\n'

  for (let index in log.entries) {
    const entry = log.entries[index]
    const requestUrlObj = require('url').parse(entry.request.url)
    const serviceName = requestUrlObj.host
    const resourceName = resourceFromPath(requestUrlObj.pathname)
    const method = entry.request.method.toLowerCase()
    const resStatus = entry.response.status

    let resStatusText
    switch (entry.response.status) {
      case 200:
        resStatusText = ''
        break
      default:
        resStatusText = ' ' + entry.response.statusText
        break
    }

    // Query params
    let queryParams = ''
    for (var qParam in entry.request.queryString) {
      queryParams += entry.request.queryString[qParam].name + ', '
    }

    pumlText +=
            'app -> ' + // request
            '"' + serviceName + '"' +
            ' : ' + method + resourceName.charAt(0).toUpperCase() + resourceName.slice(1) +
            '(' +
            queryParams.replace(/,\s*$/, '') +
            ') \n' +
            'note right : ' + // note
            entry.request.method + ' ' + requestUrlObj.pathname +
            '\n' + // response
            '"' + serviceName + '"' + // service
            ' -> app : ' + // client
            resStatus + // method (status?)
            '( ' +
            resourceName + resStatusText + // params (payload)
            ' ) \n\n'
  }
  pumlText += '@enduml'
  callback(pumlText)
}
