import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 relative overflow-hidden text-gray-100">
      <h1 className="text-4xl font-bold text-gray-300 my-2">Validate Forms</h1>
      <ContactForm />
    </div>
  );
}

export default App;
