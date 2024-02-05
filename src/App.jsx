import './App.css'
import Title from './components/Title/Title'
import Button from './components/Button/Button'
import StudentCard from './components/StudentCard/StudentCard'
import NavBar from './components/NavBar/NavBar'
import ExampleWithChildren from './components/ExampleWithChildren/ExampleWithChildren'

const App = () => {

  console.log('POR DIOS SOY UNA FUNCION')

  return (
    <div class='App'>

      <NavBar />

      <Title text={'Sistema de alumnos/as'} />

      <Button link={'/destacados'} text={'Ver destacados'} />
      <Button link={'/otros'} text={'Ver otros cohortes'} />
      <Button link={'/morosos'} text={'Ver pendientes de pago'} />

      <Title text={'Listado de alumnos/as de enero'} />

      <StudentCard
        firstName={'John'}
        lastName={'Doe'}
        image={'https://multiapi-app.fly.dev/img/people/image-lorem-face-1723.jpg'}
        bootcampDetails={{ bootcamp: 'Web Dev', date: 'Jan 23', city: 'Madrid', fullTime: true }}
      />

      <StudentCard
        firstName={'Melissa'}
        lastName={'Lol'}
        image={'https://multiapi-app.fly.dev/img/people/image-lorem-face-1712.jpg'}
        bootcampDetails={{ bootcamp: 'Web Dev', date: 'Jan 22', city: 'Madrid', fullTime: false }}
      />

      <StudentCard
        firstName={'Sergio'}
        lastName={'Mawawa'}
        image={'https://multiapi-app.fly.dev/img/people/image-lorem-face-1708.jpg'}
        bootcampDetails={{ bootcamp: 'UX', date: 'Sep 23', city: 'Miami', fullTime: false }}
      />

      <StudentCard
        firstName={'Carlos'}
        lastName={'Hola'}
        image={'https://multiapi-app.fly.dev/img/people/image-lorem-face-1600.jpg'}
        bootcampDetails={{ bootcamp: 'Web Dev', date: 'Jan 23', city: 'Barcelona', fullTime: true }}
      />

      <ExampleWithChildren>
        {/* ESTOS CONTENIDOS ESTARÁN EN LA PROP children DEL PADRE */}
        <p>Yo soy un hijo del componente y estoy en props.children</p>
        <p>Yo soy otro hijo del componente y estoy en props.children</p>
        <p>Yo soy el tercer hijo del componente y estoy en props.children</p>
        <p>Y asi....</p>
      </ExampleWithChildren>

    </div>

  )
}

export default App