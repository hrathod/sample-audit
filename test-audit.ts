
export class Auditor {
  public audit(stacks: { [id: string]: any}): number {
    this.checkSecurityGroups(stacks);
    return 0;
  }

  private checkSecurityGroups(stacks: { [id: string]: any }) {
    for (const stack in stacks) {
      const resources = stacks[stack];
      for (const resourceKey in resources) {
        const resource = resources[resourceKey];
        if (resource.Type === 'AWS::EC2::SecurityGroup') {
          const ingresses = resource.Properties.SecurityGroupIngress;
          for (const ingress of ingresses) {
            if (ingress.CidrIp === '0.0.0.0/0') {
                console.log('Oh no! SecurityGroup ' + resource.Properties.GroupDescription + ' allows ingress from anywhere!');
                console.log(ingress);
            }
          }
        }
      }
    }
  }
}
