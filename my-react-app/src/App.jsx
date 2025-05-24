import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from "./Button"
import Button2 from "./Button/Button2"
import Button3 from "./Button3"
import Student from "./Student"
import UserGreeting from "./UserGreeting"

function App() {

  return (
    <>
      <Header />
      {/*<Food />*/}
      <Card />
      <Card />
      <Button />
      <Button2 />
      <Button3 />
      <Student name="Spongebob" age="{30}" isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student />
      <UserGreeting isLoggedIn = {true} username = "UmaKallepally"/>
      <UserGreeting />
      <Footer />
    </>
  )
}

export default App
