import { CodeCommit } from 'aws-sdk';

import config from './config';
import getCurrentGitBranch from './getCurrentGitBranch';
import getCodeCommitRepositoryName from './getCodeCommitRepositoryName';

const codeCommit = new CodeCommit({ apiVersion: '2015-04-13', region: config.codeCommit.region });

const { region } = config.codeCommit;

export default async ({ title, description }) => {
  const repositoryName = await getCodeCommitRepositoryName();
  const params = {
    title,
    description,
    targets: [{
      repositoryName,
      sourceReference: await getCurrentGitBranch(),
      destinationReference: config.codeCommit.targetBranch,
    }],
  };
  const { pullRequest: { pullRequestId } } = await codeCommit.createPullRequest(params).promise();
  return `https://${region}.console.aws.amazon.com/codesuite/codecommit/repositories/${repositoryName}/pull-requests/${pullRequestId}/details?region=${region}`;
};
