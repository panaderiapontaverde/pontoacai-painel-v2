export interface VendaMensal {
    id: string;
    data_referencia: string;
    total_vendas: number | null;
    valor_total: number | null;
    ticket_medio: number | null;
    novos_clientes: number | null;
    melhor_horario: string | null;
    melhor_horario_vendas: number | null;
    pagamento_credito: number | null;
    pagamento_pix: number | null;
    pagamento_carteira_digital: number | null;
    pagamento_debito: number | null;
    pagamento_outros: number | null;
    granularidade: string;
    dias_considerados: number | null;
    criado_em: string;
}

export interface Cliente {
    id: string;
    nome: string;
    telefone: string | null;
    criado_em: string;
}

export interface LancamentoFinanceiro {
    id: string;
    tipo: string;
    descricao: string;
    valor: number;
    data: string;
    criado_em: string;
}

export interface AvaliacaoIfood {
    id: string;
    pedido_codigo: string;
    data_avaliacao: string;
    data_pedido: string;
    nota: number;
    comentario: string | null;
    visibilidade: string | null;
    status: string;
    criado_em: string;
}

export interface LeadCliente {
    id: string;
    numero_cliente: number;
    nome: string;
    telefone: string;
    telefone_raw: string | null;
    pedido_ifood: string | null;
    origem: string;
    observacoes: string | null;
    status: string;
    salvo_whatsapp: boolean;
    criado_em: string;
}

export interface MarketingIfood {
    id: string;
    data_referencia: string;
    janela: string;
    ads_investido: number | null;
    ads_vendas: number | null;
    ads_pedidos: number | null;
    ads_novos_clientes: number | null;
    ads_custo_aquisicao: number | null;
    ads_roas: number | null;
    ads_visibilidade: string | null;
    ci_pedidos: number | null;
    ci_vendas: number | null;
    ci_investido_loja: number | null;
    ci_investido_ifood: number | null;
    ci_retorno_por_real: number | null;
    promo_pedidos_total: number | null;
    promo_vendas_total: number | null;
    promo_investido_loja: number | null;
    promo_investido_ifood: number | null;
    promo_retorno_por_real: number | null;
    criado_em: string;
}

export interface AdsSaldo {
    data: string;
    saldo_disponivel: number;
    fundos_pendentes: number | null;
    limite_gasto_diario: number | null;
    coletado_em: string;
}
