import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_rLN94MOu0",
  ClientId: "5fhruc7d6tfo0o1kr41ltfass5",
};

const userPool = new CognitoUserPool(poolData);

export default userPool;
