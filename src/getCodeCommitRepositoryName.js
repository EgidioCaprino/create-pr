import Git from 'nodegit';

import config from './config';

export default async () => {
  const repository = await Git.Repository.open('.');
  const remote = await repository.getRemote(config.codeCommit.remote);
  const url = remote.url();
  const name = url.split('/').pop().replace(/\.git$/, '');
  return name;
};
