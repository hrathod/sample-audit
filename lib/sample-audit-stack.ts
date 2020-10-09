import * as cdk from '@aws-cdk/core';
import ec2 = require('@aws-cdk/aws-ec2');

export class SampleAuditStack extends cdk.Stack {

  public readonly vpc: ec2.Vpc;
  public readonly securityGroup: ec2.SecurityGroup;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.vpc = new ec2.Vpc(this, 'SampleVpc');
    this.securityGroup = new ec2.SecurityGroup(this, "SampleSecurityGroup", {
      vpc: this.vpc,
    });

    // this is bad
    this.securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.allTcp(), 'This would be bad');
  }
}
