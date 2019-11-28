export const apiHostnames = {
    local: 'localhost:5000',
    dev: 'api.dev.identity.fusang.co',
    qa: 'api.qa.identity.fusang.co',
    uat: 'api.uat.identity.fusang.co'
  }
  
  export const deployment = getDeployment()
  
  export const apiUrl = getApiUrl(deployment)
  
  /**
   * get deployment according to domain name
   */
  export function getDeployment (hostname = window.location.hostname) {
    const hostnames = {
      dev: 'dev.identity.fusang.co',
      qa: 'qa.identity.fusang.co',
      uat: 'uat.identity.fusang.co'
    }
    const deployment = Object.keys(hostnames).find(key => {
      return hostname === hostnames[key]
    })
    return deployment || 'local'
  }
  
  /**
   * get api url according to deployment
   */
  export function getApiUrl (deployment = 'local') {
    return `//${apiHostnames[deployment]}/api/v1/`
  }
  