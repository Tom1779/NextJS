import SubmitButton from './components/submitButton'

export default function Home() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1 style={{display: 'block'}}>print your name</h1>
      <SubmitButton/>
    </div>
  )
}
