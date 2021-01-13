import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';

export class IamStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create an IAM Role for ec2 instance
    const ec2Role = new iam.Role(this, "ec2Role", {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
    });

    // create an output object which defined value and exportName
    new cdk.CfnOutput(this, "ec2RoleArn", {
      value: ec2Role.roleArn,
      exportName: "ec2RoleArn",
    });
  }
}
