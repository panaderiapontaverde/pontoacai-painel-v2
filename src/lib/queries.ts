import { supabase } from './supabase';
import type { VendaMensal, Cliente, LancamentoFinanceiro, AvaliacaoIfood, LeadCliente, MarketingIfood, AdsSaldo } from './types';

export async function fetchVendasMensal(): Promise<VendaMensal[]> {
    const { data, error } = await supabase
      .from('gestao_vendas_ifood')
      .select('*')
      .eq('granularidade', 'mes')
      .order('data_referencia', { ascending: true });
    if (error) throw error;
    return data ?? [];
}

export async function fetchClientes(): Promise<Cliente[]> {
    const { data, error } = await supabase.from('gestao_clientes').select('*').order('criado_em', { ascending: false });
    if (error) throw error;
    return data ?? [];
}

export async function fetchFinanceiro(): Promise<LancamentoFinanceiro[]> {
    const { data, error } = await supabase.from('gestao_financeiro').select('*').order('data', { ascending: false });
    if (error) throw error;
    return data ?? [];
}

export async function fetchAvaliacoes(): Promise<AvaliacaoIfood[]> {
    const { data, error } = await supabase.from('gestao_avaliacoes_ifood').select('*').order('data_avaliacao', { ascending: false });
    if (error) throw error;
    return data ?? [];
}

export async function fetchLeads(): Promise<LeadCliente[]> {
    const { data, error } = await supabase.from('gestao_leads_clientes').select('*').order('numero_cliente', { ascending: false });
    if (error) throw error;
    return data ?? [];
}

export async function fetchMarketing(): Promise<MarketingIfood[]> {
    const { data, error } = await supabase.from('gestao_marketing_ifood').select('*').order('data_referencia', { ascending: false });
    if (error) throw error;
    return data ?? [];
}

export async function fetchSaldoAds(): Promise<AdsSaldo | null> {
    const { data, error } = await supabase.from('gestao_ads_saldo').select('*').order('data', { ascending: false }).limit(1).maybeSingle();
    if (error) throw error;
    return data;
}
