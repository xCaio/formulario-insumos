'use client'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    insumo: '',
    quantidade: '',
    pa: '',
    pn: '',
    setor: '',
    centroCusto: '',
    observacao: '',
  })

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('/api/enviar-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    if (res.ok) {
      alert('Solicitação enviada!')
      setFormData({
        insumo: '',
        quantidade: '',
        pa: '',
        pn: '',
        setor: '',
        centroCusto: '',
        observacao: '',
      })
    } else {
      alert('Erro ao enviar solicitação')
    }
  }

  return (
    <main className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-lg mt-12">
      {/* Logo CABTEC no topo, centralizada */}
      <div className="flex justify-center mb-6">
        <img
          src="https://cabtec.com.br/wp-content/uploads/2024/05/Ativo-5.png"
          alt="Logo CABTEC"
          className="h-20 object-contain"
        />
      </div>

      <h1 className="text-3xl font-extrabold mb-6 text-black text-center">
        Solicitação de Insumos
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          { name: 'insumo', type: 'text', placeholder: 'Tipo de Insumo' },
          { name: 'quantidade', type: 'number', placeholder: 'Quantidade' },
          { name: 'pa', type: 'text', placeholder: 'Código PA' },
          { name: 'pn', type: 'text', placeholder: 'Código PN' },
          { name: 'setor', type: 'text', placeholder: 'Setor de Entrega' },
          { name: 'centroCusto', type: 'text', placeholder: 'Centro de Custo' },
        ].map(field => (
          <input
            key={field.name}
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cabtecOrange focus:border-cabtecOrange transition duration-200 ease-in-out appearance-none"
          />
        ))}
        <textarea
          name="observacao"
          value={formData.observacao}
          onChange={handleChange}
          placeholder="Observações (opcional)"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 resize-y focus:outline-none focus:ring-2 focus:ring-cabtecOrange focus:border-cabtecOrange transition duration-200 ease-in-out appearance-none"
        />
        <button
          type="submit"
          className="w-full bg-cabtecOrange text-white font-bold py-3 rounded-md hover:bg-orange-700 transition-colors duration-300"
        >
          Enviar Solicitação
        </button>
      </form>
    </main>
  )
}
