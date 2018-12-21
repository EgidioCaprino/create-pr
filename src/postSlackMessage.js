import { WebClient } from '@slack/client';

import config from './config';

const slack = new WebClient(config.slack.token);

export default async (trelloCard, prUrl) => {
  const text = [
    trelloCard.name,
    trelloCard.shortUrl,
    prUrl,
  ].join('\n');
  await slack.chat.postMessage({
    channel: config.slack.channel,
    text,
    as_user: true,
  });
};
