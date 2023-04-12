import { UserCard } from './Profile/Profile';
import { Statistic } from '../components/Statistics/Statistic';
import { FriendsList } from '../components/FriendList/FriendsList';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';

import user from './Profile/user.json';
import data from '../components/Statistics/data.json';
import friends from '../components/FriendList/friends.json';
import transactions from '../components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
