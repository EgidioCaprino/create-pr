import Trello from 'trello';

import config from './config';

const trello = new Trello(config.trello.appKey, config.trello.userToken);

export default async (boardName, cardNumber) => {
  const boardId = config.trello.boards[boardName];
  if (!boardId) {
    throw new Error(`Cannot find a board in config with name "${boardName}"`);
  }
  const cards = await trello.getCardsOnBoard(boardId);
  const card = cards.find(({ idShort }) => idShort === cardNumber);
  if (!card) {
    throw new Error(`Card ${cardNumber} not found on board ${boardName}`);
  }
  return card;
};
