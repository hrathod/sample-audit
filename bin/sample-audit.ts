#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SampleAuditStack } from '../lib/sample-audit-stack';

const app = new cdk.App();
new SampleAuditStack(app, 'SampleAuditStack', {env: {region: 'us-west-2'}});
