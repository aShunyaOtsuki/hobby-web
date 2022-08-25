import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class ServerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloWorldLambda = new lambda.Function(this, "helloWorldLambda", {
      functionName: "helloWorld",
      code: lambda.Code.fromAsset("lambda/helloWorld"),
      handler: "index.handler",
      runtime: lambda.Runtime.NODEJS_16_X,
    });
    helloWorldLambda.addFunctionUrl();
  }
}
