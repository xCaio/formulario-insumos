'use client';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    insumo: '',
    quantidade: '',
    pa: '',
    pn: '',
    setor: '',
    centroCusto: '',
    observacao: ''
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/enviar-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert('Solicitação enviada!');
      setFormData({
        insumo: '',
        quantidade: '',
        pa: '',
        pn: '',
        setor: '',
        centroCusto: '',
        observacao: ''
      });
    } else {
      alert('Erro ao enviar solicitação');
    }
  };

  return (
    <main style={{ maxWidth: 500, margin: 'auto', padding: 20 }}>
      <h1>Formulário de Solicitação</h1>
      <form onSubmit={handleSubmit}>
        {[
          { name: 'insumo', type: 'text', placeholder: 'Tipo de Insumo (ex: Etiqueta)' },
          { name: 'quantidade', type: 'number', placeholder: 'Quantidade' },
          { name: 'pa', type: 'text', placeholder: 'PA (código do modelo)' },
          { name: 'pn', type: 'text', placeholder: 'PN (quem solicitou)' },
          { name: 'setor', type: 'text', placeholder: 'Setor de entrega' },
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
            style={{ width: '100%', padding: 8, margin: '8px 0' }}
          />
        ))}
        <textarea
          name="observacao"
          value={formData.observacao}
          onChange={handleChange}
          placeholder="Observações (opcional)"
          style={{ width: '100%', padding: 8, margin: '8px 0', minHeight: 80 }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Enviar Solicitação
        </button>
      </form>
    </main>
  );
}
