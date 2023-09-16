import { useState } from 'react';
import { Footer, Header } from './components/common';
import { StudentCar } from './features/labs/Student';
import { Student } from './models';

function App() {
  const [count, setCount] = useState(0);

  const john: Student = {
    name: 'John',
    age: 3,
    isHero: true,
  };

  function handleStudentClick(student: Student) {
    console.log('student Click', student);
  }

  return (
    <>
      <Header></Header>
      <StudentCar student={john} onClick={handleStudentClick} />
      <Footer></Footer>
    </>
  );
}

export default App;
