#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkCrossStackStack } from '../lib/cdk-cross-stack-stack';

const app = new cdk.App();
new CdkCrossStackStack(app, 'CdkCrossStackStack');
