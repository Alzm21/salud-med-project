import Card01 from '../homepage/components/Card01'
import Card02 from '../homepage/components/Card02'
import Card03 from '../homepage/components/Card03'
import './styles/MedServices.css'

const MedServices = () => {
  const services = [
    {
      name: "Medicina General",
      description: "Proporciona atención médica primaria, diagnósticos básicos y tratamiento inicial para diversas enfermedades.",
      exams: ["Consulta general", "Control de adulto sano", "Control de diabetes", "Inyectables", "Examen físico"],
      image: "/images/r.jpeg"
    },
    {
      name: "Pediatría",
      description: "Atiende las necesidades médicas de niños y adolescentes, enfocándose en su desarrollo físico y emocional.",
      exams: ["Control de crecimiento", "Vacunación", "Exámenes de desarrollo"],
      image: "/images/w.jpeg"
    },
    {
      name: "Ginecología",
      description: "Centrada en la salud integral del sistema reproductivo femenino y en la prevención de enfermedades.",
      exams: ["Papanicolaou", "Control Ginecológico", "Prueba ETS"],
      image: "/images/d.jpeg"
    },
    {
      name: "Medicina Estética",
      description: "Ofrece tratamientos médicos no invasivos para mejorar la apariencia y la salud de la piel.",
      exams: ["Tratamientos de interés", "Peeling químico", "Tratamiento de cicatrices"],
      image: "/images/r.jpeg"
    },
    {
      name: "Laboratorio Clínico",
      description: "Realiza análisis de muestras biológicas para el diagnóstico y seguimiento de enfermedades.",
      exams: ["Hemograma completo", "Examenes general", "Preventivo Diabetes", "Pruebas hormonales"],
      image: "/images/u.jpeg"
    },
    {
      name: "Odontología",
      description: "Se ocupa del cuidado y tratamiento de los dientes, encías y salud bucal.",
      exams: ["Ortodoncia", "Rehabilitación oral", "Estética dental", "Endodoncia"],
      image: "/images/s.jpeg"
    },
  ]

  return (
    <div className="med-services">
      <div className="medser__content">
        <div className="medser__title">
          <h2>Servicios Médicos</h2>
        </div>
      </div>
      {services.map((service, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            <h2>{service.name}</h2>
          </div>
          <div className="card-body">
            <p>{service.description}</p>
            <ul>
              {service.exams.map((exam, idx) => (
                <li key={idx}>{exam}</li>
              ))}
            </ul>
            <img src={service.image} alt={service.image} className='card-image' />
          </div>
        </div>
      ))}
      <div className='offers'>
        <Card01/>
        <Card02/>
        <Card03/>
      </div>
    </div>
  )
}

export default MedServices