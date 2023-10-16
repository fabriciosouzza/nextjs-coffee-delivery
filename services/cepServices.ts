export async function addressByCep(cep: string): Promise<any | undefined> {
  try {
    const addressReq = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    if (addressReq.ok) {
      const addressByData = await addressReq.json();
      return addressByData;
    }
  } catch (error) {
    throw error;
  }
}
