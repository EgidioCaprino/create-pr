import Git from 'nodegit';

export default async () => {
  const repository = await Git.Repository.open('.');
  const branch = await repository.getCurrentBranch();
  const name = branch.name().replace(/^([^/]+\/){2}/, '');
  return name;
};
