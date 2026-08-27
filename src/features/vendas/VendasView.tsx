import { useEffect, useState } from 'react';
import { fetchVendasMensal } from '../../lib/queries';
import type { VendaMensal } from '../../lib/types';

function formatBRL(v: number | null) {
    if (v == null) return '-';
    return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function VendasView() {
    const [rows, setRows] = useState<VendaMensal[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

  useEffect(() => {
        fetchVendasMensal()
          .then(setRows)
          .catch((e) => setError(e.message))
          .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando vendas...</p>p>;
    if (error) return <p className="error">Erro ao carregar vendas: {error}</p>p>;
  
    const atual = rows[rows.length - 1];
  
    return (
          <div>
                <h2>Vendas</h2>h2>
            {atual && (
                    <div className="grid">
                              <div className="stat">
                                          <div className="label">Vendas no mes (ate {new Date(atual.data_referencia).toLocaleDateString('pt-BR')})</div>div>
                                          <div className="value">{formatBRL(atual.valor_total)}</div>div>
                              </div>div>
                              <div className="stat">
                                          <div className="label">Pedidos</div>div>
                                          <div className="value">{atual.total_vendas ?? '-'}</div>div>
                              </div>div>
                              <div className="stat">
                                          <div className="label">Ticket medio</div>div>
                                          <div className="value">{formatBRL(atual.ticket_medio)}</div>div>
                              </div>div>
                              <div className="stat">
                                          <div className="label">Novos clientes</div>div>
                                          <div className="value">{atual.novos_clientes ?? '-'}</div>div>
                              </div>div>
                    </div>div>
                )}
          
                <h3>Historico mensal</h3>h3>
                <table>
                        <thead>
                                  <tr>
                                              <th>Data</th>th>
                                              <th>Pedidos</th>th>
                                              <th>Valor total</th>th>
                                              <th>Ticket medio</th>th>
                                  </tr>tr>
                        </thead>thead>
                        <tbody>
                          {[...rows].reverse().map((r) => (
                        <tr key={r.id}>
                                      <td>{new Date(r.data_referencia).toLocaleDateString('pt-BR')}</td>td>
                                      <td>{r.total_vendas ?? '-'}</td>td>
                                      <td>{formatBRL(r.valor_total)}</td>td>
                                      <td>{formatBRL(r.ticket_medio)}</td>td>
                        </tr>tr>
                      ))}
                        </tbody>tbody>
                </table>table>
          </div>div>
        );
}
</p>
