import Header from './Header';
import Messages from './Messages';
import SendMessage from './SendMessage';
import SelfMessage from './SelfMessage';
import OtherMessage from './OtherMessage';
import './App.css';

function App() {
  const userId = 5;

  const users = [
    {id: 3, name: "Ivan", image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/847.jpg"},
    {id: 5, name: "Andriy", image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1148.jpg"},
  ];

  const messages = [
    {id:1, name: "Ivan", text:"Hello!", userId: 3},
    {id:2, name: "Ivan", text:"Are you here?", userId: 3},
    {id:3, name: "Andriy", text:"NO!", userId: 5},
  ];

  const messagesWithImages = messages.map((message) => {
    for (const user of users) {
      if (user.id === message.userId) {
        message.image = user.image
        break
      }
    }

    return message;
  });

  return (
    <div className="App">
      <Header users={users} title="🦄 Team Unicorns" description="last seen 45 minutes ago">
      </Header>
      <Messages date="08/05/2022">
        {messagesWithImages.map((message) => {
          if (message.userId === userId) {
            return <SelfMessage key={message.id} message={message.text} date={message.id} />
          } else {
            return <OtherMessage key={message.id} userIcon={message.image} user={message.name} message={message.text} date={message.id} />
          }
        })}
      </Messages>
      <SendMessage/>
    </div>
  );
}

export default App;
