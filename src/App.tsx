import { useState } from 'react';
import VendasView from './features/vendas/VendasView';
import ClientesView from './features/clientes/ClientesView';
import FinanceiroView from './features/financeiro/FinanceiroView';
import MarketingView from './features/marketing/MarketingView';
import AvaliacoesView from './features/avaliacoes/AvaliacoesView';
import PotencializadorView from './features/potencializador/PotencializadorView';
import RedeSocialView from './features/redesocial/RedeSocialView';

const TABS = [
  { id: 'vendas', label: 'Vendas', Component: VendasView },
  { id: 'clientes', label: 'Clientes', Component: ClientesView },
  { id: 'financeiro', label: 'Financeiro', Component: FinanceiroView },
  { id: 'marketing', label: 'Marketing', Component: MarketingView },
  { id: 'avaliacoes', label: 'Avaliacoes', Component: AvaliacoesView },
  { id: 'potencializador', label: 'Potencializador de Clientes', Component: PotencializadorView },
  { id: 'redesocial', label: 'Rede Social', Component: RedeSocialView },
  ] as const;

function App() {
    const [active, setActive] = useState<string>('vendas');
    const ActiveComponent = TABS.find((t) => t.id === active)?.Component ?? VendasView;

  return (
        <>
              <header>
                      <div>
                                <h1>Ponto do Acai - Parte Alta</h1>h1>
                                <p>Painel de gestao</p>p>
                      </div>div>
              </header>header>
              <nav>
                {TABS.map((t) => (
                    <button key={t.id} className={active === t.id ? 'active' : ''} onClick={() => setActive(t.id)}>
                      {t.label}
                    </button>button>
                  ))}
              </nav>nav>
              <main>
                      <ActiveComponent />
              </main>main>
        </>>
      );
}

export default App;
</>
