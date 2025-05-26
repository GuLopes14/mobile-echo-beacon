type Moto = {
  id: string;
  modelo: string;
  placa: string;
  chassi: string;
  problema: string;
  status: 'recepcao' | 'patio';
};

export type { Moto };