'use client';

const SelectorPersonaje = ({personajes, value, onChange, label}) => {
  return (
    <div>
        <label htmlFor="" className="flex flex-col items-start text-gray-700"></label>
        <span className="mb-1 font-semibold">{label}</span>
        <select className="border rounded px-3 py-2" value={value} onChange={onChange}>
            <option value="">-- Elegir Personaje --</option>
            {
                personajes.map(personaje => (
                    <option key={personaje.id} value={personaje.id}>{ personaje.nombre }</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectorPersonaje