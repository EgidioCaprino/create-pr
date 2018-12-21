import { CodeCommit } from 'aws-sdk';

import config from './config';
import getCurrentGitBranch from './getCurrentGitBranch';
import getCodeCommitRepositoryName from './getCodeCommitRepositoryName';

const codeCommit = new CodeCommit({ apiVersion: '2015-04-13', region: config.codeCommit.region });

export default async ({ title, description }) => {
  const params = {
    title,
    description,
    targets: [{
      repositoryName: await getCodeCommitRepositoryName(),
      sourceReference: await getCurrentGitBranch(),
      destinationReference: config.codeCommit.targetBranch,
    }],
  };
  const { pullRequest: { pullRequestId } } = await codeCommit.createPullRequest(params).promise();
  return `https://eu-west-1.console.aws.amazon.com/codesuite/codecommit/repositories/yeppik-react-native/pull-requests/${pullRequestId}/details?region=${config.codeCommit.region}`;
};
