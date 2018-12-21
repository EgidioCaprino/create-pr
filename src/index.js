import "@babel/polyfill";

import getCurrentGitBranch from './getCurrentGitBranch';
import getTrelloCard from './getTrelloCard';
import createPullRequest from './createPullRequest';
import postSlackMessage from './postSlackMessage';

(async () => {
  const branch = await getCurrentGitBranch();
  const [author, trelloBoard, trelloCardNumber] = branch.split('/');
  const card = await getTrelloCard(trelloBoard, parseInt(trelloCardNumber));
  const prUrl = await createPullRequest({
    title: card.name,
    description: [card.desc, card.shortUrl].join('\n\n'),
  });
  await postSlackMessage(card, prUrl);
})();
