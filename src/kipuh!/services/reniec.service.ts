import httpDni from '@/server/http.dni-service'

class ReniecService {
  private readonly serviceName = 'reniec'

  getDNI(dniNumber: number) {
    return httpDni.get(`/${this.serviceName}/dni?numero=${dniNumber}`);
  }
}

export default new ReniecService()
